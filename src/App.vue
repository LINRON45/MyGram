<template>
  <nav
    v-if="this.$route.path !== '/login'"
    v-show="this.$route.path !== '/signup'"
  >
    <!-- after setting conditions, remove v-show -->
    <h1>MyGram</h1>

    <form><input type="search" placeholder="Search..." /></form>

    <div>
      <router-link to="/"
        ><img class="nav-buttons" src="./static/home.png" alt=""
      /></router-link>

      <router-link to="/Chat"
        ><img class="nav-buttons" src="./static/chat.png" alt=""
      /></router-link>

      <router-link to="/Feed"
        ><img class="nav-buttons" src="./static/default2.png" alt=""
      /></router-link>

      <router-link to="/Feed"
        ><img class="nav-buttons" src="./static/direction.png" alt=""
      /></router-link>

      <span
        ><img class="nav-buttons" src="./static/notification.png" alt=""
      /></span>

      <span
        ><img
          id="pfp-img"
          class="nav-buttons"
          src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=640&height=640&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FYy_LOvgfRdYUXGjZpVlvTQ%2Flarge.jpg"
          alt=""
      /></span>
    </div>
  </nav>
  <router-view />
</template>

<script>
// set condition of viewing header based on routing
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  background-color: rgb(183, 183, 183);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

nav {
  position: fixed;
  width: 100%;
  padding: 0.5vw;
  top: 0%;
  align-items: center;
  background: #fff;
  display: flex;
  justify-content: space-around;
}

nav > div {
  display: flex;
  justify-content: space-around;
  width: 20vw;
}

/*nav a.router-link-exact-active {
} */

.nav-buttons {
  height: 1.7vw;
}

#pfp-img {
  border-radius: 100%;
  height: 1.8vw;
}
</style>
