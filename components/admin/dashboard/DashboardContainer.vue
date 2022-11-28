<template>
  <div class="pa-16">
    <div align="start" class="text-h4">Reports</div>
    <div>
      <div class="pa-5">
        <VueApexCharts
          :series="series"
          :data="data"
          :options="chartOptions"
          height="300"
          width="1050"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  components: {
    VueApexCharts,
  },
  data() {
    return {
      series: [
        {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
      ],
      chartOptions: {
        chart: {
          height: 250,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },
    };
  },
};
</script>

<style>
</style>