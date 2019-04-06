<template>
  <q-page class="q-pa-sm fit flex flex-center">
    <q-btn push icon="mdi-github-circle" @click="github" label="Visit github" />
    <q-btn
      class="q-ml-sm"
      push
      icon="mdi-star-circle"
      @click="star"
      label="Leave a star"
    />
    <q-btn
      class="q-ml-sm"
      push
      icon="mdi-file-document-box-multiple"
      @click="wiki"
      label="Read documentation"
    />
  </q-page>
</template>

<script>
import { openURL } from "quasar";
export default {
  name: "Info",
  methods: {
    github() {
      openURL("https://github.com/neuronetio/gantt-elastic");
    },
    star() {
      openURL("https://github.com/neuronetio/gantt-elastic/stargazers");
    },
    wiki() {
      openURL("https://github.com/neuronetio/gantt-elastic/wiki");
    }
  }
};
</script>

<style>
</style>
