<template>
  <div id="container">
    <loading :active="loading" loader="bars" opacity="0.5" />
    <figure>
      <img id="img1" src="../static/girl2.png" alt="" draggable="false" />
      <img id="img2" src="../static/boy.png" alt="" draggable="false" />
    </figure>

    <div id="signUp">
      <form action="">
        <h2>MyGram</h2>

        <div class="inp-fields">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            v-model="fullName"
          />
          <p>{{ fullNameMessage }}</p>
        </div>
        <div class="inp-fields">
          <input
            type="text"
            name="username"
            placeholder="Username"
            v-model="username"
          />
          <p>{{ usernameMessage }}</p>
        </div>
        <div class="inp-fields">
          <input
            type="email"
            name="email"
            placeholder="Email"
            v-model="email"
          />
          <p>{{ emailMessage }}</p>
        </div>
        <div class="inp-fields">
          <input
            type="password"
            name="password"
            placeholder="Password"
            v-model="password"
          />
          <p>{{ passwordMessage }}</p>
        </div>
        <div class="inp-fields">
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            v-model="confirmPass"
          />
          <p>{{ confirmPassMessage }}</p>
        </div>
        <p>{{ message }}</p>
        <button @click.prevent="register()" :disabled="disableBtn">
          {{ btnLabel }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import VueCookies from "vue-cookies";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  getAuth,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import axios from "axios";

export default {
  data() {
    return {
      fullName: null,
      username: null,
      email: null,
      password: null,
      confirmPass: null,
      message: null,
      disableBtn: false,
      btnLabel: "Sign Up",
      loading: false,
    };
  },

  components: {
    Loading,
  },
  computed: {
    fullNameMessage() {
      if (this.fullName && this.fullName.length == 1) {
        return "Full name is invalid!";
      }

      if (this.fullName && parseInt(this.fullName)) {
        return "Full name is invalid!Name should not start with a number or only be numbers!";
      }
    },
    usernameMessage() {
      if (
        this.username &&
        this.username.length == 1 &&
        parseInt(this.username)
      ) {
        return "Username is invalid!";
      }

      if (this.username && parseInt(this.username)) {
        return "Username is invalid!Name should not start with a number or only be numbers!";
      }
    },
    emailMessage() {
      if (this.email) {
        const check =
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!check.test(this.email)) {
          return "Email is Invalid!";
        }
      }
    },

    passwordMessage() {
      if (this.password) {
        if (this.password.length < 6) {
          return "Password is too short!";
        }
      }
    },

    confirmPassMessage() {
      if (!this.confirmPass || !this.password) {
        return;
      } else if (this.password !== this.confirmPass) {
        return "Password do not match!";
      }
    },
  },

  methods: {
    login() {},

    async register() {
      this.loading = true

      if (this.password !== this.confirmPass) {
        return this.loading = false;
      }
      if (
        !this.fullName ||
        !this.username ||
        !this.email ||
        !this.password ||
        !this.confirmPass
      ) {
        return this.loading = false;
      }
      const verify = await this.verifyEmail();
      console.log(verify);

      if (!verify) {
        this.loading = false
        return ;
      }

      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          window.localStorage.setItem("loginEmail", this.email);
          // Signed in

          const user = userCredential;
          console.log(user);

          //get user uid

        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          this.message = errorMessage;
          console.log(this.message);
          return this.loading = false;
        });

      // try {
      //   const firebaseAuth = auth;
      //   await sendEmailVerification(firebaseAuth.currentUser);
      // } catch (error) {
      //   console.log(`Error Occurred:\n ${error}`);
      // }

      return this.$router.push({ path: "/login" });
    },

    async verifyEmail() {
      let verify = false;

      try {
        const res = await axios.get(
          `https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_FPCHUZJpM1IbKvu4AUphNc1zqs6i7&emailAddress= ${this.email}`
        );

        const data = res.data;
        console.log(data);

        if (
          data.formatCheck == "true" &&
          data.freeCheck == "true" &&
          data.dnsCheck == "true" &&
          data.smtpCheck == "true"
        ) {
          console.log("valid email");
          verify = true;
        }

        return verify;
      } catch (error) {
        console.log(`Error Occurred: ${error}`);
      }
    },
  },
};
</script>

<style scoped>
#container {
  display: grid;
  grid-template-columns: 50vh 50vh;
  justify-content: space-around;
  column-gap: 12vw;
  background: linear-gradient(
    rgba(255, 166, 0, 0.403),
    rgba(255, 0, 0, 0.403),
    rgba(128, 0, 128, 0.43)
  );
}

#signUp {
  display: flex;
  align-items: center;
  height: 100vh;
}

form {
  background: #fff;
  padding: 2vw;
  width: 30vw;
  margin: auto;
  box-shadow: 0.38vw 0.39vw rgba(0, 0, 0, 0.225);

  display: flex;
  flex-direction: column;
}

.inp-fields > input {
  width: 100%;
  margin-top: 1vw;
  padding: 0.5vw;
  border-radius: 0.5vw;
}

figure {
  display: flex;
}

img {
  height: 100vh;
  filter: drop-shadow(2vw 0.5vw #51557e);
}

#img2 {
  transform: scaleX(-1);
  margin-left: -4.5vw;
}

button {
  display: flex;
  margin-top: 1vw;
  background: rgb(101, 101, 214);
  padding: 0.3vw;
  width: 10vw;
  align-self: center;
  justify-content: center;
  border-radius: 3vw;
}

button:hover {
  cursor: pointer;
  background: rgb(78, 78, 255);
}
</style>
