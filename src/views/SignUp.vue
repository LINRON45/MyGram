<template>
  <div id="container">
    <figure>
      <img id="img1" src="../static/girl2.png" alt="" />
      <img id="img2" src="../static/boy.png" alt="" />
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
        <button @click.prevent="register()">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
import { assertExpressionStatement } from "@babel/types";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
      resData: {},
      message: null,
      emailValid: null,
    };
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
          this.emailValid = false;
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
    async register() {
      const emailValid = this.verifyEmail();
      
      if (this.password !== this.confirmPass) {
        return;
      }

      if (
        this.fullName &&
        this.username &&
        this.email &&
        this.password &&
        this.confirmPass
      ) {
        

        if (emailValid === true) {
          await createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              this.message = errorMessage;
              return;
            });
        } else {
          console.log("Invalid Email!")
          return;
        }

        this.$router.push({ path: "/" });
      } else {
        this.message = "Fill out all the fields!";
        return;
      }
    },

    async verifyEmail() {
      await axios
        .get(
          `https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_FPCHUZJpM1IbKvu4AUphNc1zqs6i7&emailAddress= ${this.email}`
        )
        .then((response) => {
          this.resData = response.data;
          console.log(this.resData);
          console.log("Loading");
        })
        .then((result) => {
          console.log("Finish Checking");
          if (
            this.resData.formatCheck &&
            this.resData.freeCheck &&
            this.resData.dnsCheck &&
            this.resData.smtpCheck
          ) {
            return true;
          }
          return false;
        })

        .catch((err) => {
          console.log(err);
        });
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
