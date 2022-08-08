<template>
  <div id="container">
    <div id="post-head">
      <span id="pfp-span"
        ><img
          id="pfp"
          src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=640&height=640&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FYy_LOvgfRdYUXGjZpVlvTQ%2Flarge.jpg"
          alt="pfp"
        />
        username</span
      >

      <span><img id="options" src="../static/more.png" alt="post" /></span>
    </div>
    <div>
      <img
        id="post-img"
        src="https://templates.mediamodifier.com/5f23e6a0a4f28b43dbb10208/love-quote-instagram-post-template.jpg"
        alt=""
      />
    </div>

    <section>
      <div id="post-actions">
        <img src="../static/favorite.png" alt="" />
        <img src="../static/messenger.png" alt="" />
        <img src="../static/share.png" alt="" />
      </div>

      <div>title</div>

      <div id="comments">
        <p><span>username</span> this is the comments</p>
        <p><span>username</span> this is the comments</p>
        <p><span>username</span> this is the comments</p>
        <p><span>username</span> this is the comments</p>
        <p><span>username</span> this is the comments</p>
      </div>
    </section>

    <form><textarea type="text" placeholder="Add a comment..." /></form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#container {
  margin-bottom: 1vw;
  background: rgb(216, 209, 209);
  border-radius: 1vw;
}

section {
  margin: 0 2vw;
}

#pfp {
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 100%;
  margin-right: 0.8vw;
}

#pfp-span {
  display: flex;
  align-items: center;
}

#post-head {
  padding: 0.5vw 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2vw;
  margin-right: 2vw;
}

#post-img {
  width: 100%;
  max-height: 38.8vw;
}

#options {
  width: 1.5vw;
}

#post-actions {
  display: flex;
  padding: 0.2vw;
  justify-content: space-between;
  width: 7.5vw;
}

#post-actions img {
  height: 1.6vw;
}

#comments span {
  font-weight: bold;
}

form {
  flex-direction: row;
  width: 100%;
}

textarea {
  display: block;
  margin: 0 auto;
  width: 28vw;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
}
</style>
