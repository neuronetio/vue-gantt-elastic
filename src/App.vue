<template>
  <div id="app" style="width:100%;height:100%">
    <gantt-elastic :tasks="tasks" :options="options">
      <gantt-header slot="header"></gantt-header>
    </gantt-elastic>
    <div>Tasks: {{ tasks.length }}</div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import dayjs from "dayjs";
import GanttElastic from "gantt-elastic";
import GanttHeader from "gantt-elastic/src/components/Header.vue";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        label: "Make some noise",
        user:
          '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
        start: new Date().getTime(),
        duration: 15 * 24 * 60 * 60,
        progress: 85,
        type: "project",
        collapsed: false
      },
      {
        id: 2,
        label: "With great power comes great responsibility",
        user:
          '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
        parentId: 1,
        start: new Date().getTime(),
        duration: 4 * 24 * 60 * 60,
        progress: 50,
        type: "milestone",
        collapsed: true,
        dependentOn: [1],
        style: {
          base: {
            fill: "#1EBC61",
            stroke: "#0EAC51"
          }
          /*'tree-row-bar': {
            fill: '#1EBC61',
            stroke: '#0EAC51'
          },
          'tree-row-bar-polygon': {
            stroke: '#0EAC51'
          }*/
        }
      }
    ],
    options: {
      maxRows: 100,
      maxHeight: 300,
      row: {
        height: 24
      },
      calendar: {
        hour: {
          display: true
        }
      },
      taskList: {
        expander: {
          straight: false
        },
        columns: [
          {
            id: 1,
            label: "ID",
            value: "id",
            width: 40
          },
          {
            id: 2,
            label: "Description",
            value: "label",
            width: 200,
            expander: true,
            html: true
          },
          {
            id: 3,
            label: "Assigned to",
            value: "user",
            width: 130,
            html: true
          },
          {
            id: 3,
            label: "Start",
            value: task => dayjs(task.start).format("YYYY-MM-DD"),
            width: 78
          },
          {
            id: 4,
            label: "Type",
            value: "type",
            width: 68
          },
          {
            id: 5,
            label: "%",
            value: "progress",
            width: 35,
            style: {
              "task-list-header-label": {
                "text-align": "center",
                width: "100%"
              },
              "task-list-item-value-container": {
                "text-align": "center",
                width: "100%"
              }
            }
          }
        ]
      }
      /*locale: {
        name: "fr",
        Now: "Aujourd'hui",
        "X-Scale": "Zoom",
        "Y-Scale": "Interligne",
        "Task list width": "Liste",
        "Before/After": "Période",
        "Display task list": "Liste",
        weekStart: 1,
        weekdays: "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split(
          "_"
        ),
        months: "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre".split(
          "_"
        ),
        monthsShort: "janv_févr_mars_avril_mai_juin_juil_août_sept_oct_nov_déc".split(
          "_"
        ),
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        ordinal: n => {
          const o = n === 1 ? "er" : "";
          return `${n}${o}`;
        }
      }*/
    }
  }
});

export default {
  name: "app",
  components: {
    GanttElastic,
    GanttHeader,
    GanttFooter: { name: "gantt-footer", template: `<div>footer</div>` }
  },
  store,
  data() {
    return {};
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    options() {
      return this.$store.state.options;
    }
  }
};
</script>

<style>
</style>
