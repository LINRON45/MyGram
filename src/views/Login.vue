<template>
  <div id="container">
    <form action="">
      <h2>MyGram</h2>
      <input type="email" placeholder="Email" v-model="userEmail" />
      <input type="password" placeholder="Password" v-model="userPassword" />
      <button>Log In</button>
      <p>forgot password?</p>
      <router-link to="/signup">Sign Up</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEmail: null,
      userPassword: null,
    };
  },
};
</script>

<style scoped>
#container {
  display: flex;
  align-items: center;
  height: 100vh;
}

form {
  padding: 3vw;

  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: auto;
  background: rgb(171, 171, 255);
}

input {
  margin-bottom: 1vw;
}
</style>
