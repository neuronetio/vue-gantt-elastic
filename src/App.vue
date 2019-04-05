<template>
  <q-layout>
    <q-header class="bg-grey-2 text-black">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="mdi-menu"
        />

        <q-toolbar-title>
          Gantt Elastic demo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://github.com/neuronetio/gantt-elastic"
        >
          <q-item-section avatar>
            <q-icon name="mdi-code-tags" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption
              >github.com/neuronetio/gantt-elastic</q-item-label
            >
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://github.com/neuronetio/gantt-elastic/wiki"
        >
          <q-item-section avatar>
            <q-icon name="mdi-file-document-box-multiple" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Documentation</q-item-label>
            <q-item-label caption>WIKI</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <Gantt />
    </q-page-container>
  </q-layout>
</template>

<script>
import Gantt from "./components/Gantt.vue";

export default {
  name: "LayoutDefault",

  components: {
    Gantt
  },

  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>

<style>
</style>
