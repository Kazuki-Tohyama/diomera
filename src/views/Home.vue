<template>
  <form id="form" @submit.prevent="postData" :action="formUrl" method="post">
    <div v-if="errors.length">
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
    <p><label for="title">タイトル</label></p>
    <input id="title" type="text" v-model="title" />
    <p><label for="file">ファイル</label></p>
    <input type="file" name="audiofile" @change="selectFile" />
    <p><input type="submit" value="送信" /></p>
  </form>
</template>

<script>
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFirestore, addDoc, collection } from 'firebase/firestore'; 

const db = getFirestore();

export default {
  name: 'Home',
  data: () => {
    return {
      errors: [],
      formUrl: process.env.VUE_APP_API_ENDPOINT,
      title: '',
      file: null,
    };
  },
  computed: {},
  methods: {
    selectFile(e) {
      this.file = e.target.files[0];
    },
    async postData(e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push('名前を入力してください。');
      } else if (this.name.length > 20) {
        this.errors.push('名前は20文字以内で入力してください。');
      }
      if (!this.title) {
        this.errors.push('タイトルを入力してください。');
      } else if (this.title.length > 20) {
        this.errors.push('タイトルは20文字以内で入力してください。');
      }
      if (!this.file) {
        this.errors.push('ファイルを指定して下さい。');
      }

      if (!this.errors.length) {
        const path = this.$store.state.uid + '/' + this.file.name;

        const storage = getStorage();
        const storageRef = ref(storage, path);
        uploadBytes(storageRef, this.file).then((snapshot) => {
          console.log(snapshot);
          console.log('Uploaded a blob or file!');
        });

        const fileDocRef = await addDoc(collection(db, 'users', this.$store.state.uid, 'filedata'), {
          title: this.title,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        console.log('Document written with ID: ', fileDocRef.id);
      }

      e.preventDefault();
    },
  },
};
</script>