<template>
  <div>
    <ViewHeader
      :dataType="dataType"
      :updateListType="updateListType"
    ></ViewHeader>
    <Table
      v-if="dataType === 'list'"
      :columns="columns"
      :data-source="employee"
      bordered
    >
    </Table>
    <div id="kanban" class="p-[10px]" v-if="dataType === 'kaban'">
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="(e, index) in employee"
          :key="index"
          class="gutter-row shadow mb-3 cursor-pointer hover:scale-95"
          :span="6"
        >
          <div class="flex">
            <div style="width: 25%">
              <img :src="th" />
            </div>
            <div style="width: 75%" class="pl-2">
              <h3 class="font-bold">{{ e.name }}</h3>
              <p>{{ e.email }}</p>
              <p>{{ e.contactNumber }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import ViewHeader from "../../common/ViewHeader.vue";
import { Table } from "ant-design-vue";
import th from "../../assets/img/th.jpg";
import { mapState } from "pinia";
import { useEmployeeStore } from "../../stores/EmployeeStore";
import { defineComponent } from "vue";
const store = useEmployeeStore();
store.fetchAllEmployee();
export default defineComponent({
  components: {
    Table,
    ViewHeader,
  },
  methods: {
    updateListType(type) {
      this.dataType = type;
    },
  },

  computed: {
    ...mapState(useEmployeeStore, ["employee"]),
  },
  data() {
    return {
      th: th,
      dataType: "list",
      columns: [
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Email",
          dataIndex: "email",
        },
        {
          title: "Phone",
          dataIndex: "contactNumber",
        },
        {
          title: "Department",
          dataIndex: "departmentName",
        },
        {
          title: "Position",
          dataIndex: "positionName",
        },
      ],
    };
  },
});
</script>
