<template>
  <!--begin::Card-->
  <a href="#" class="card border border-2 border-gray-300 border-hover">

    <!--begin:: Card body-->
    <div class="card-body p-9">
      <div class="row">
        <div class="col-md-4 col-sm-4">
          <span class="svg-icon svg-icon-2tx svg-icon-primary">
                <inline-svg src="media/icons/duotune/ecommerce/ecm_sales.svg"
                height="70" width="70" />
              </span>
        </div>
        <div class="col-md-6 col-sm-6">
             <!--begin::Name-->
      <div class="fs-3 fw-bolder text-dark">
        {{ title }}
      </div>
      <!--end::Name-->

      <!--begin::Description-->
      <p class="text-blue fw-bold fs-5 mt-1 mb-7 font-size-xxl">
        {{ getCount }}
      </p>
      <!--end::Description-->
        </div>
      </div>
   

    </div>
    <!--end:: Card body-->
  </a>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "card-basic",
  components: {},
  props: {
    count: String,

    status: String,

    title: String,

    description: String,
  },
  setup(props) {
    const getDescription = computed(() => {
      return props.description 
        ? props.description
        : "";
    });

    const getStatus = computed(() => {
      return props.status ? props.status : "In Progress";
    });

    const getCount = computed(() => {
      return props.count ? props.count: "0";
    })


    return {
      getDescription,
      getStatus,
      getCount,
    };
  },
});
</script>
