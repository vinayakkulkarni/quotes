<template>
  <div id="app">
    <router-view :list="list" :errors="errors"></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      list: [],
      errors: {},
    };
  },
  created() {
    const t = this;
    axios
      .get(
        'https://raw.githubusercontent.com/limhenry/earthview/master/earthview.json',
      )
      .then((response) => {
        t.list = response.data;
      })
      .catch((errors) => {
        t.errors = errors;
      });
  },
};
</script>

<style>
body {
  margin: 0px;
}
</style>
