<template>
  <!--begin::Row-->
  <div class="row g-xl-8">
    <!--begin::Row-->
    <div class="row g-xl-8">
      <!--begin:::Col-->
      <div class="col">
        <KTTablesWidget1 
          description="Orders"
          widget-classes="card-xxl-stretch mb-5 mb-xl-3"
          addComponent="Order"
        ></KTTablesWidget1>
      </div>
      <!--end:::Col-->
    </div>
    <!--end::Row-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import KTTablesWidget1 from "@/components/widgets/tables/Widget1.vue";

export default defineComponent({
  name: "orders",
  components: {
    KTTablesWidget1,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Orders", ["Orders"]);
    });
  },
});
</script>
