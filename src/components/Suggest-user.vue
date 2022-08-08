<template>
  <div id="container">
    <figure>
      <img
        src="https://i.pinimg.com/originals/a9/1e/61/a91e61ab555934cad4fd8af95ca57315.jpg"
        alt=""
      />
    </figure>
    <div>username Followed by...</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  margin-bottom: 0.01vw;

  background: green;
  border-width: 0.07vw;
  border-color: red;
}

figure {
  padding: 0.4vw 0.6vw;
}

img {
  width: 2.4vw;
  height: 2.4vw;
}
</style>
