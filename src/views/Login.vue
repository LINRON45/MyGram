<template>
  <div id="container">
    <!-- <loading active="true" loader="bars" opacity="0.5" /> -->

    <form action="">
      <h2>MyGram</h2>
      <input type="email" placeholder="Email" v-model="userEmail" />
      <input type="password" placeholder="Password" v-model="userPassword" />
      <button @click.prevent="signIn()">Log In</button>
      <router-link to="">forgot password?</router-link>
      <router-link to="/signup">Sign Up</router-link>
    </form>
  </div>
</template>

<script>
import { addDoc, setDoc, Timestamp, collection } from "firebase/firestore";
import db from "../firebaseConfig";
import Loading from "vue-loading-overlay";

export default {
  data() {
    return {
      userEmail: null,
      userPassword: null,
    };
  },
  components: {
    Loading,
  },
  methods: {
    //use signin boolean var and uid var (local storage)

    signIn() {
      //go off when login and everthing is checked
      if (this.userEmail && this.userPassword) {
        console.log("run");
        this.checkCredentials();
      } else {
        console.log("fill out fields");
      }
    },

    checkCredentials() {
      //check email
      //check password
    },
  },

  async beforeMount() {
    // // save users credential before login screen appears

    // const email = window.localStorage.getItem("loginEmail");
    // // const firstName = window.localStorage.getItem("firstName");
    // // const lastName = window.localStorage.getItem("lastName");

    // const userInfo = {
    //   // First: firstName,
    //   // Last: lastName,
    //   userID: uid, //uid cookie
    //   Email: email,
    //   Status: " ",
    //  dateCreated: Timestamp
    // };

    // if (email) {
    //   try {
    //     await addDoc(collection(db, "users", userInfo.userID), userInfo);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    //check if signed in already
    console.log("before mount");
  },
};
</script>

<style scoped>
#container {
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0.623),
      rgba(128, 0, 128, 0.514)
    ),
    url("https://www.transparenttextures.com/patterns/shattered-dark.png");
  background-size: cover;
}

form {
  padding: 2.5vw;
  font-size: 1vw;
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin: auto;
  background: rgba(255, 255, 255, 0.478);

  border: 0.1rem solid rgba(110, 110, 110, 0.533);
}

input {
  margin: 0.5vw 0;
  font-size: 1vw;
}

button {
  width: 10vw;
  font-size: 1vw;
  align-self: center;
  margin: 0.5vw 0;
}

a {
  margin-top: 0.5vw;
}
</style>
