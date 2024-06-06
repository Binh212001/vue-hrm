<template lang="">
  <div id="message-item" class="shadow p-4">
    <div class="flex gap-4">
      <Avatar :src="th" />
      <div>
        <p class="font-bold text-gray-400">
          Note by Nguyễn Thị Lan Thơm - 22/12/2002
        </p>
        <div id="content">
          <li>Manager: Nguyễn Hồng Quang -> Đỗ Văn Tiến</li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { Avatar } from "ant-design-vue";
import th from "../../assets/img/th.jpg";

export default defineComponent({
  components: {
    Avatar,
  },
  data() {
    return {
      th: th,
    };
  },
});
</script>
<style lang=""></style>
