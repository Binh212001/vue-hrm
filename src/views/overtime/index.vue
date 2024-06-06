<template>
  <div>
    <ViewHeader :dataType="dataType"></ViewHeader>
    <a-table :columns="columns" :dataSource="data" rowKey="id" />
  </div>
</template>

<script>
import ViewHeader from "../../common/ViewHeader.vue";
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      dataType: "list",
      columns: [
        {
          title: "id",
          dataIndex: "id",
          key: "id",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "Hours",
          dataIndex: "hoursWorked",
          key: "hoursWorked",
        },
        {
          title: "Reason",
          dataIndex: "reason",
          key: "reason",
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
        },
      ],
      data: [
        {
          id: 1,
          name: "Pham ngoc binh",
          date: "2024-05-26",
          hoursWorked: "08:00",
          reason: "17:00",
          status: "Ok",
        },
        // Add more entries as needed
      ],
    };
  },

  components: {
    ViewHeader,
  },
});
</script>
