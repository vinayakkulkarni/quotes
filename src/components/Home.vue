<template>
  <div class="parent-flex fullviewport" :style="{ 'background-image' : 'url(\'' + list[16].image + '\')' }">
    <div class="translucent">
      <div class="quote">
        The Earth is what we all have in common.
        <div class="author">-Wendell Berry</div>
      </div>
    </div>
    <div class="credits">
      Image from Earth View; Country: <a :href="list[16].map" target="_blank">{{ list[16].country }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    list: {
      type: Array,
      required: true,
    },
    errors: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Satisfy');
@import url('https://fonts.googleapis.com/css?family=Roboto');

.fullviewport {
  height: 100vh !important;
  width: 100vw !important;
  font-family: 'Satisfy', cursive;
}
.parent-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.translucent {
  margin: 0em 3em;
  border-radius: 2em;
  background: rgba(255, 255, 255, 0.45);
}
.quote {
  padding: 1em;
  /* border: 1px solid black; */
  font-size: 3em;
  text-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
.author {
  font-size: 0.75em;
  text-align: right;
}
.credits {
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 10px;
  background: rgba(255, 255, 255, 0.45);
}
</style>
