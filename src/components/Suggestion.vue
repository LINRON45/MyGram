<template>
  <div>
    <suggest-user />
    <suggest-user />
    <suggest-user />
    <suggest-user />
    <suggest-user />
  </div>
</template>

<script>
import SuggestUser from "./Suggest-user.vue";
export default {
  components: { SuggestUser },
};
</script>

<style scoped>
div {
  margin-top: 0.8vw;
  background: blue;
  display: flex;
  flex-direction: column;
}
</style>
