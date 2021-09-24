<template>
  <div id="app">
    <h1>Home</h1>
    <a href="About.html">About</a>
    <vuetiful-board
      :theme="theme"
      :dark-mode="darkmode"
      :col-num="colNum"
      :row-height="rowHeight"
      :layout-editable="layoutEditable"
      :datasets="datasets"
    />
  </div>
</template>
<script>
import Vue from 'vue'
import VuetifulBoard from "vuetiful-board";

Vue.use(VuetifulBoard);

export default {
  name: "Home",
  data() {
    return {
      theme: 'classic',
      darkmode: true,
      colNum: 2,
      rowHeight: 30,
      layoutEditable: true,
      datasets: [
      {
          chartInfo: {
            series: [200, 12, 40, 25, 34, 6, 23],
            options: {
              chart: {
                type: 'pie',
              },
              title: {
                text: 'The recent inflow route',
                align: 'center',
                style: {
                  fontSize: '18px',
                  fontWeight: 'bold',
                },
              },
              labels: [
                'SNS',
                'Recommend',
                'Homepage',
                'Blog',
                'Kakaotalk Channel',
                'Rumor',
                'ETC',
              ],
              fill: {
                opacity: 1,
              },
              legend: {
                position: 'bottom',
              }
            }
          },
          gridInfo: {
            x: 0, y: 0, w: 12, h: 12, i: '0', static: false
          },
        },
    ]
    }
  }
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>>