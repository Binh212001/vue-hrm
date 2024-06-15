<template>
  <div>
    <div class="flex justify-between items-center mb-3">
      <div>
        <Button type="primary" :disabled="!hasSelected" :loading="loading">
          Reload
        </Button>
        <span style="margin-left: 8px">
          <template v-if="hasSelected">
            {{ `Selected ${selectedRowKeys.length} items` }}
          </template>
        </span>
      </div>
      <div>
        <Icon icon="clarity:import-line"></Icon>
      </div>
    </div>
    <Table
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :columns="columns"
      :data-source="data"
    ></Table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { Button, Table } from "ant-design-vue";
import { Icon } from "@iconify/vue";

type Key = string | number;

export default defineComponent({
  components: { Button, Table },
  created() {},
  computed: {},
  methods: {
    onSelectChange: (selectedRowKeys: Key[]) => {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      selectedRowKeys = selectedRowKeys;
    },
  },

  data() {
    return {
      loading: false,
      selectedRowKeys: [],
      columns: [
        {
          title: "Name",
          dataIndex: "name",
        },
        {
          title: "Price",
          dataIndex: "price",
        },
        {
          title: "Quantity",
          dataIndex: "quantity",
        },
        {
          title: "Category",
          dataIndex: "category",
        },
      ],
      data: [],
    };
  },
});
</script>
