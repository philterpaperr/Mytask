import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBeFWC17CKomcIOTleDG9cqHJR9ofqSu6g",
  authDomain: "myproject-2b819.firebaseapp.com",
  databaseURL: "myproject-2b819",
  projectId: "myproject-2b819",
  storageBucket: "myproject-2b819.appspot.com",
  messagingSenderId: "57860211718",
  appId: "1:57860211718:web:ec9eee33efb48a8013ef87"
})

export const auth = app.auth()
export default app
