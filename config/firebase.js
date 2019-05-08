import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDAu0YDFYm7IkHUlCyb_jCecKqjlQqRROk",
  authDomain: "mobile-dev-minder.firebaseapp.com",
  databaseURL: "https://mobile-dev-minder.firebaseio.com",
  projectId: "mobile-dev-minder",
  storageBucket: "mobile-dev-minder.appspot.com",
  messagingSenderId: "881116704957",
  appId: "1:881116704957:web:966faf05bf596144"
};

firebase.initializeApp(firebaseConfig);

export default firebase