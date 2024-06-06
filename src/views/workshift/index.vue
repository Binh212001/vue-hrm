<template>
  <div>
    <ViewHeader :dataType="dataType"></ViewHeader>
    <table style="width: 100%" class="shadow">
      <thead>
        <tr>
          <th class="text-center">
            <input type="checkbox" />
          </th>
          <th>EMPLOYEE</th>
          <th>MONTH</th>
          <th>YEAR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="text-center">
            <input type="checkbox" />
          </th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th class="text-center">
            <input type="checkbox" />
          </th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th class="text-center">
            <input type="checkbox" />
          </th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th class="text-center">
            <input type="checkbox" />
          </th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th class="text-center">
            <input type="checkbox" />
          </th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <th class="text-center">
            <input type="checkbox" />
          </th>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ViewHeader from "../../common/ViewHeader.vue";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  components: {
    ViewHeader,
  },
});
</script>

<style>
th,
tr,
td {
  border: 1px solid #f7f4f4;
  padding: 5px;
  text-align: center;
}
</style>
