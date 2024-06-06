<template>
  <div>
    <ViewHeader :dataType="dataType"></ViewHeader>
    <table style="width: 100%">
      <thead class="bg-[#fdffd5]">
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>EMPLOYEE</th>
          <th>LEAVE TYPE</th>
          <th>DESCRIPTION</th>
          <th>START DATE</th>
          <th>END DATE</th>
          <th>REQUESTED (DAYS/HOURS)</th>
          <th>STATUS</th>
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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ViewHeader from "../../common/ViewHeader.vue";
import { Table } from "ant-design-vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Table,
  },
  data() {
    return {};
  },

  components: {
    ViewHeader,
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
