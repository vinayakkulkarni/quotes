<template>
  <div class="parent-flex fullviewport">
    <div class="translucent">
      <div class="quote">amazing stuff eh!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>
<style>
.parent-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fullviewport {
  height: 100vh !important;
  width: 100vw !important;
}
.quote {
  padding: 5em;
  border: 1px solid black;
}
</style>
