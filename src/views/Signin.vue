<template>
  <div>
    <h1>ログイン</h1>
    <form id="form" @submit.prevent="signin" method="post">
      <p><label for="email">メールアドレス</label></p>
      <input id="email" type="text" v-model="email" />
      <p><label for="password">パスワード</label></p>
      <input id="password" type="password" v-model="password" />
      <p><input type="submit" value="ログイン" /></p>
    </form>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword  } from 'firebase/auth';

export default {
  name: 'signin',
  data: () => {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    signin() {
      const auth = getAuth();
      auth.languageCode = 'ja';

      // メールログイン
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          this.$store.commit('login', user.uid);
          this.$router.push({ name: 'home'}).catch((err) => { console.log(err) });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });

      // twitterログイン
      // const provider = new TwitterAuthProvider();
    }
  }
}



</script>
