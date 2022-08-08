<template>
  <div id="container">
    <div id="stories" ref="stories">
      <div id="test">
        <img src="https://pbs.twimg.com/media/DtHLGZOXcAA85oY.jpg" alt="" />
      </div>

      <img
        src="https://preview.redd.it/pfkawdrfrbm41.jpg?auto=webp&s=44d37a87a839e897596f424dfad1cb1a774e58da"
        alt=""
      />

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnvtz_WdJoOkoDPfQ_-YprfxJV0we65lJR8Lkz_1Cq0O9e6VWR5d0jBILLYeX36o0MGo&usqp=CAU"
        alt=""
      />

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKsLwOPCkklgHHwL036gFZMqsPVr1_haS7PXvtMlH4xS5TOXVIf5Ovh_EhY6XBbbNSXU&usqp=CAU"
        alt=""
      />

      <img
        src="https://i.pinimg.com/474x/53/78/5a/53785a4de97729d4c385e9c3edf9217b.jpg"
        alt=""
      />

      <img src="https://pbs.twimg.com/media/DtHLGZOXcAA85oY.jpg" alt="" />

      <img
        src="https://preview.redd.it/pfkawdrfrbm41.jpg?auto=webp&s=44d37a87a839e897596f424dfad1cb1a774e58da"
        alt=""
      />

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpnvtz_WdJoOkoDPfQ_-YprfxJV0we65lJR8Lkz_1Cq0O9e6VWR5d0jBILLYeX36o0MGo&usqp=CAU"
        alt=""
      />

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKsLwOPCkklgHHwL036gFZMqsPVr1_haS7PXvtMlH4xS5TOXVIf5Ovh_EhY6XBbbNSXU&usqp=CAU"
        alt=""
      />

      <img
        src="https://i.pinimg.com/474x/53/78/5a/53785a4de97729d4c385e9c3edf9217b.jpg"
        alt=""
      />
      <img
        src="https://i.pinimg.com/474x/53/78/5a/53785a4de97729d4c385e9c3edf9217b.jpg"
        alt=""
      />
      <button id="left" @click="scrollLeft">
        <img src="../static/arrow-left.png" alt="" />
      </button>

      <button id="right" @click="scrollRight">
        <img src="../static/arrow-right.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { scrollAmount: 0 };
  },
  methods: {
    scrollLeft() {
      const container = document.querySelector("#stories");

      const stories = this.$refs.stories;

      if (this.scrollAmount == 0) {
        return;
      } else {
        stories.scrollTo({
          left: (this.scrollAmount -= 460),
          behavior: "smooth",
        });

        return (this.scrollAmount = container.scrollLeft);
      }
    },

    scrollRight() {
      const container = document.querySelector("#stories");

      if (
        this.scrollAmount == container.scrollWidth &&
        this.scrollAmount < 465
      ) {
        return;
      } else {
        const stories = this.$refs.stories;
        stories.scrollTo({
          left: (this.scrollAmount += 460),
          behavior: "smooth",
        });

        console.log(container.scrollLeft);
        return (this.scrollAmount = container.scrollLeft);
      }
    },
  },
};
</script>

<style scoped>
#container {
  background: rgb(216, 209, 209);
  width: 100%;
  height: 6vw;
  margin: 0.8vw 0;
  border-radius: 1vw;
}

#stories {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  overflow-x: scroll;
  overflow: hidden;
  justify-content: space-between;
}

img {
  height: 4vw;
  width: 4vw;
  border-radius: 100%;
  border-style: solid;
  border-color: transparent;
  background: linear-gradient(0deg, rgb(89, 89, 232), purple, red, orange);
  background-clip: padding-box;
  padding: 0.25vw;
  margin: 0 0.63vw;
}

#test {
  display: border;
}

button {
  position: absolute;
  background: gray;
  border: none;
  border-radius: 100%;
  border-width: 0;
  padding: 0;
}

button > img {
  background: none;
  padding: 0;
  border-width: 0;
  border: none;

  margin: 0;
  width:2vw;
  height: 2vw;
}

#right {
  right: 47vw;
}
</style>
