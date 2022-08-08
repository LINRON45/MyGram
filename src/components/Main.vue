<template>
  <div id="container">
    <div>
      <Stories />
      <div><Posts /> <Posts /></div>
    </div>
    <div><Suggestion /></div>
  </div>
</template>

<script>
import Posts from "./Posts.vue";
import Suggestion from "./Suggestion.vue";
import Stories from "./Stories.vue";
export default { components: { Posts, Suggestion, Stories } };
</script>

<style scoped></style>
