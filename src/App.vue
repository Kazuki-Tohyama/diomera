<template>
  <div id="app">
    <HelloWorld msg="diomera" />
    <form
      id="form"
      @submit.prevent="checkError"
      :action="formUrl"
      method="post"
    >
      <div v-if="errors.length">
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
      <p><label for="name">名前</label></p>
      <input id="name" type="text" v-model="name" />
      <p><label for="title">タイトル</label></p>
      <input id="title" type="text" v-model="title" />
      <p><input type="submit" value="送信" /></p>
    </form>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: () => {
    return {
      errors: [],
      formUrl: process.env.VUE_APP_API_ENDPOINT,
      name: "",
      title: "",
    };
  },
  computed: {},
  methods: {
    checkError(e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("名前を入力してください。");
      } else if (this.name.length > 20) {
        this.errors.push("名前は20文字以内で入力してください。");
      }
      if (!this.title) {
        this.errors.push("タイトルを入力してください。");
      } else if (this.title.length > 20) {
        this.errors.push("タイトルは20文字以内で入力してください。");
      }

      if (!this.errors.length) {
        // TODO: POST処理を実装
        return true;
      }

      e.preventDefault();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
