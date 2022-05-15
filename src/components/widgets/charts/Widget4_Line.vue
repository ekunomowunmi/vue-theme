<template>
  <!--begin::Chart widget 2-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body pb-0 px-0">
      <!--begin::Header-->
      <div class="d-flex flex-stack px-9">
        <!--begin::Info-->
        <div class="d-flex flex-column">
          <h2 class="text-dark mb-1 fs-2 fw-boldest">Sales Summary</h2>
          <span class="text-gray-400 fw-bold fs-6">27 New Deals</span>
        </div>
        <!--end::Info-->

        <!--begin::Tabs-->
        <ul class="nav nav-pills nav-line-pills border rounded p-1">
          <li class="nav-item me-2">
            <a
              class="
                nav-link
                btn
                btn-active-light
                btn-active-color-gray-700
                btn-color-gray-400
                py-2
                px-5
                fs-6
                fw-bold
                active
              "
              data-bs-toggle="tab"
              href="#kt_charts_widget_3_tab_pane_1"
              id="kt_charts_widget_3_tab_1"
              >Day</a
            >
          </li>

          <li class="nav-item">
            <a
              class="
                nav-link
                btn
                btn-active-light
                btn-active-color-gray-700
                btn-color-gray-400
                py-2
                px-5
                fs-6
                fw-bold
              "
              data-bs-toggle="tab"
              href="#kt_charts_widget_3_tab_pane_2"
              id="kt_charts_widget_3_tab_2"
              >Month</a
            >
          </li>
        </ul>
        <!--end::Tabs-->
      </div>
      <!--end::Header-->

      <!--begin::Tab content-->
      <div class="tab-content pt-8">
        <!--begin::Tab pane-->
        <div
          class="tab-pane fade active show"
          id="kt_charts_widget_3_tab_pane_1"
        >
          <!--begin::Chart-->
          <apexchart
            type="area"
            width="500"
            height="350"
            :options="chartOptions"
            :series="series1"
          ></apexchart>
          <!--end::Chart-->
        </div>
        <!--end::Tab pane-->

        <!--begin::Tab pane-->
        <div class="tab-pane fade" id="kt_charts_widget_3_tab_pane_2">
          <!--begin::Chart-->
          <apexchart
            type="area"
            width="500"
            height="350"
            :options="chartOptions"
            :series="series2"
          ></apexchart>
          <!--end::Chart-->
        </div>
        <!--end::Tab pane-->
      </div>
      <!--end::Tab content-->
    </div>
    <!--end::Body-->
  </div>
  <!--end::Chart widget 2-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "kt-widget-4-line",
  props: {
    widgetClasses: String,
  },
  components: {},
  setup() {
      const chartOption= {
        chart: {
          id: 'vuechart-example',
          fontFamily: "inherit",
          type:"line",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          labels: {
          style: {
            colors: getCSSVariableValue("--bs-gray-400"),
            fontSize: "12px",
          },
        },
        },
      };

      const labelColor = getCSSVariableValue('--bs-active-info');
      const borderColor = getCSSVariableValue('--bs-border-dashed-color');
      const baseColor = getCSSVariableValue('--bs-primary');
      const lightColor = getCSSVariableValue('--bs-primary');

     const series1= [{
                name: 'Sales',
                data: [34.5, 34.5, 35, 35, 35.5, 35.5, 35, 35, 35.5, 35.5, 35, 35, 34.5, 34.5, 35, 35, 35.5, 35.5, 35]
            }];
     const series2 = [
      {
        name: "Profit",
        data: [30, 40, 30, 25, 40, 45, 30, 20, 40, 25, 20, 30],
      },
    ];

    const chartOptions = {
      chart: {
        fontFamily: "inherit",
        type: "area",
        height:"350px",
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0,
            stops: [0, 80, 100]
          }
      },
      stroke: {
        curve: 'smooth',
        show: true,
        width: 2,
        colors: [baseColor],
      },
      xaxis: {
        categories: [
          "",
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
          ""
        ],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tickAmount:6, 
        labels: {
          rotate:0,
          rotateAlways: true,
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
        },
        crosshairs: {
            position: 'front',
              stroke: {
                  color: baseColor,
                  width: 1,
                  dashArray: 3
              }
        },
        tooltip: {
              enabled: true,
              formatter: undefined,
              offsetY: 0,
              style: {
                  fontSize: '12px'
              }
          }
      },
      yaxis: {
        max: 24,
        min: 20,
        tickAmount: 4,
        crosshairs: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: "12px",
          },
           formatter: function (val) {
              return '$' + val + "K"
          }
        },
      },
      states: {
        normal: {
          filter: {
            type: "none",
            value: 0,
          },
        },
        hover: {
          filter: {
            type: "none",
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: "none",
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: "12px",
        },
        y: {
          formatter: function (val) {
            return "$" + val + "k";
          },
        },
      },
      colors: [lightColor],
      grid: {
        borderColor:borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        strokeColor: baseColor,
        strokeWidth: 3
      }
    };


    return {
      chartOptions,
      series1,
      series2,
    };
  },
});
</script>
