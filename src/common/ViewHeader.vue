<script lang="ts">
import { Button, Input } from "ant-design-vue";
import { Icon } from "@iconify/vue";

export default {
  components: {
    Button,
    Input,
    Icon,
  },
  data() {
    return {};
  },
  props: ["updateListType"],
};
</script>
<template>
  <div class="shadow flex justify-between items-center p-3 mb-5">
    <div>
      <Button>New</Button>
    </div>
    <div class="flex">
      <Input type="text" required />
      <button class="px-3">
        <Icon icon="ic:round-search" class="size-8" />
      </button>
      <span @click="updateListType('list')"
        ><Icon icon="material-symbols:list" class="size-8"
      /></span>
      <span @click="updateListType('kaban')"
        ><Icon icon="material-symbols-light:view-kanban-outline" class="size-8"
      /></span>
    </div>
  </div>
</template>

<style></style>
