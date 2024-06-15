<template>
  <div>jhsjsda</div>
</template>

<script lang="ts">
import { useTabStore } from "@/stores/TabStore";
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  created() {
    const tabStore = useTabStore();
    tabStore.getChildTab("home");
  },
  props: {
    name: String,
    msg: { type: String },
  },
  data() {
    return {};
  },
});
</script>
<style></style>
