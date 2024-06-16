<template lang="">
  <div>
    <TypographyTitle :level="3"
      >Pham Ngoc Binh working shift in 5 month</TypographyTitle
    >
    <div class="mb-3">
      <Button danger class="rounded-sm mr-3">Export</Button>
      <Button class="rounded-sm">Send mail confirm</Button>
    </div>
    <table style="width: 100%">
      <thead class="bg-[#fdffd5]">
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Date</th>
          <th>Day of weeks</th>
          <th>In (Actual)</th>
          <th>Out (Actual)</th>
          <th>General coming</th>
          <th>Intern working hours</th>
          <th>Log effort</th>
          <th>OT Plan</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody class="bg-[#6fb6ff]">
        <tr>
          <td class="text-center">
            <input type="checkbox" />
          </td>
          <td>1/1/2023</td>
          <td>Mon</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8</td>
          <td>OT Plan</td>
          <td>4</td>
          <td>Nghi om</td>
        </tr>
        <tr>
          <td class="text-center">
            <input type="checkbox" />
          </td>
          <td>1/1/2023</td>
          <td>Mon</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8</td>
          <td>OT Plan</td>
          <td>4</td>
          <td>Nghi om</td>
        </tr>
        <tr>
          <td class="text-center">
            <input type="checkbox" />
          </td>
          <td>1/1/2023</td>
          <td>Mon</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8</td>
          <td>OT Plan</td>
          <td>4</td>
          <td>Nghi om</td>
        </tr>
        <tr>
          <td class="text-center">
            <input type="checkbox" />
          </td>
          <td>1/1/2023</td>
          <td>Mon</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8</td>
          <td>OT Plan</td>
          <td>4</td>
          <td>Nghi om</td>
        </tr>
        <tr>
          <td class="text-center">
            <input type="checkbox" />
          </td>
          <td>1/1/2023</td>
          <td>Mon</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8</td>
          <td>OT Plan</td>
          <td>4</td>
          <td>Nghi om</td>
        </tr>
        <tr>
          <td class="text-center">
            <input type="checkbox" />
          </td>
          <td>1/1/2023</td>
          <td>Mon</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8:00</td>
          <td>8</td>
          <td>OT Plan</td>
          <td>4</td>
          <td>Nghi om</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { Button, TypographyTitle } from "ant-design-vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TypographyTitle,
    Button,
  },
  data() {
    return {};
  },
});
</script>
<style>
tr th,
tr td {
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem;
  border-top-color: transparent;
  vertical-align: top;
}
</style>
