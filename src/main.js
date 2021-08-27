import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import Amplify from 'aws-amplify';

Amplify.configure({
  // Auth: {
  //   identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab', //REQUIRED - Amazon Cognito Identity Pool ID
  //   region: 'XX-XXXX-X', // REQUIRED - Amazon Cognito Region
  //   userPoolId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito User Pool ID
  //   userPoolWebClientId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito Web Client ID
  // },
  Storage: {
    AWSS3: {
      bucket: process.env.VUE_APP_DIOMERA_BUCKET_NAME,
      region: 'ap-northeast-1',
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
