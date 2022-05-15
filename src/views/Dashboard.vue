<template>
  <!--begin::Row-->
  <div class="row g-xl-8">
    <!--begin:::Col-->
    <div class="col-xxl-12">
      <!--begin::Row-->
      <div class="row g-xl-8 my-4">
        <!--begin:::Col-->
        <div class="col-xl-4">
          <!-- <Card1 statusDataBadgeColor="blue"
          title="Orders"
          description ="1234"
          ></Card1> -->
          <CardBasic
          title="Total Orders"
          count="300"
          description="A good card"
          >

          </CardBasic>
        </div>
        <!--end:::Col-->

        <!--begin:::Col-->
        <div class="col-xl-4">
          <CardBasic
          title="Total Shipment"
          count="400"
          description="A good card"
          >
          </CardBasic>
        </div>
        <!--end:::Col-->
           <!--begin:::Col-->
        <div class="col-xl-4">
          <CardBasic
          title="New Orders"
          count="23"
          description="A good card"
          >
          </CardBasic>
        </div>
        <!--end:::Col-->

      </div>
      <!--end::Row-->

      <!--begin::Row-->
      <div class="row g-xl-8 my-4">
        <!--begin:::Col-->
        <div class="col-xl-6">
          <KTChartWidget2
            widget-classes="card-xl-stretch mb-5 mb-xl-8"
          ></KTChartWidget2>
        </div>
        <!--end:::Col-->

        <!--begin:::Col-->
        <div class="col-xl-6">
          <KTChartWidget3
            widget-classes="card-xl-stretch mb-5 mb-xl-8"
          ></KTChartWidget3>
        </div>
        <!--end:::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Row-->
      <div class="row g-xl-8 my-4">
        <!--begin:::Col-->
        <div class="col">
          <KTTablesWidget1
            widget-classes="card-xxl-stretch mb-5 mb-xl-3"
          ></KTTablesWidget1>
        </div>
            <!--end:::Col-->
        <!--begin:::Col-->
        <div class="col">
            <KTEngageWidget1
            widget-classes="card-xl-stretch mb-5 mb-xl-8"
          ></KTEngageWidget1>
         
        </div>

        <!--end:::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Row-->
      <div class="row g-xl-8 my-4">
        <!--begin:::Col-->
        <div class="col-xl-6">
          <KTListWidget1
            widget-classes="card-xl-stretch mb-5 mb-xl-8"
          ></KTListWidget1>
        </div>
        <!--end:::Col-->

        <!--begin:::Col-->
        <div class="col-xl-6">
          <KTListWidget2
            widget-classes="card-xl-stretch mb-5 mb-xl-8"
          ></KTListWidget2>
        </div>
        <!--end:::Col-->
      </div>
      <!--end::Row-->
<!--begin::Row-->
        <!--begin:::Col-->
        <div class="col-xl-6">
          <KTChartWidget4
            widget-classes="card-xl-stretch mb-5 mb-xl-8"
          ></KTChartWidget4>
        </div>
        <!--end:::Col-->
      <!--end::Row-->
    </div>
    <!--end:::Col-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
import KTChartWidget2 from "@/components/widgets/charts/Widget2.vue";
import KTChartWidget3 from "@/components/widgets/charts/Widget3_Donut.vue";
import KTChartWidget4 from "@/components/widgets/charts/Widget4_Line.vue";
import KTEngageWidget1 from "@/components/widgets/engage/Widget1.vue";
import KTListWidget1 from "@/components/widgets/lists/Widget1.vue";
import KTListWidget2 from "@/components/widgets/lists/Widget2.vue";
import KTListWidget3 from "@/components/widgets/lists/Widget3.vue";
import KTListWidget4 from "@/components/widgets/lists/Widget4.vue";
import KTSliderWidget1 from "@/components/widgets/sliders/Widget1.vue";
import Card1 from "@/components/cards/Card1.vue";
import CardBasic from "@/components/cards/CardBasic.vue";
import Card2 from "@/components/cards/Card2.vue";
import Card3 from "@/components/cards/Card3.vue";
import Card4 from "@/components/cards/Card4.vue";

import KTTablesWidget1 from "@/components/widgets/tables/Widget1.vue";

export default defineComponent({
  name: "dashboard",
  components: {
    // KTChartWidget1,
    KTChartWidget2,
    KTChartWidget3,
    KTChartWidget4,
    KTEngageWidget1,
    KTListWidget1,
    KTListWidget2,
    KTTablesWidget1,
    // Card1,
    CardBasic
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Dashboard", ["Dashboards"]);
    });
  },
});
</script>
