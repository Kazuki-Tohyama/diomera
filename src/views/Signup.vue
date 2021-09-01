<template>
  <div>
    <h1>アカウント作成</h1>
    <form id="form" @submit.prevent="signup" method="post">
      <p><label for="email">メールアドレス</label></p>
      <input id="email" type="text" v-model="email" />
      <p><label for="password">パスワード</label></p>
      <input id="password" type="password" v-model="password" />
      <p><input type="submit" value="作成" /></p>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'signup',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential);
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
      })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
      });
    }
  }
}
</script>
