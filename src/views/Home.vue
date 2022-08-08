<template>
  <div id="container">
    <Main />
  </div>
</template>

<script>
import Main from "../components/Main.vue";

export default {
  components: { Main },
};
</script>

<style scoped>
#container {
  margin-top: 1.48vw;
  margin-left: 10vw;
  display: grid;
  grid-template-columns: 32vw 20vw ;
  column-gap: 3vw;
}



</style>
