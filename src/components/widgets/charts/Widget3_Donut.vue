<template>
  <!--begin::Chart Widget 1-->
  <div :class="widgetClasses" class="card">
    <!--begin::Body-->
    <div class="card-body p-0 d-flex justify-content-between flex-column">
      <div class="d-flex flex-stack card-p flex-grow-1">
        <!--begin::Icon-->
        <div class="symbol symbol-45px symbol-circle">
          <div class="symbol-label">
            <span class="svg-icon svg-icon-2x">
              <inline-svg src="media/icons/duotune/ecommerce/ecm002.svg" />
            </span>
          </div>
        </div>
        <!--end::Icon-->

        <!--begin::Text-->
        <div class="d-flex flex-column text-end">
          <a href="#" class="fw-boldest text-gray-800 text-hover-primary fs-2"
            >Testing</a
          >
          <span class="text-gray-400 fw-bold fs-6">Sep 1 - Sep 16 2020</span>
        </div>
        <!--end::Text-->
      </div>

      <!--begin::Chart-->
      <div class="pt-1">
        <!--begin::Chart-->
        <apexchart
          class="card-rounded-bottom h-125px"
          type="donut"
          height="300"
          :options="chartOptions"
          :series="series"
        ></apexchart>
        <!--end::Chart-->
      </div>
      <!--end::Chart-->
    </div>
  </div>
  <!--end::Chart Widget 1-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "kt-widget-1",
  props: {
    widgetClasses: String,
  },
  components: {},
  setup() {
    const chartOptions = {};

    const series = [44, 55, 41, 17, 15];

    return {
      chartOptions,
      series,
    };
  },
});
</script>
