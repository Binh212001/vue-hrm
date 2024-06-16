<template lang="">
  <div>
    <a-row :gutter="[12, 12]">
      <a-col :span="12">
        <div>Customer</div>
        <a-input />
      </a-col>
      <a-col :span="12">
        <div>Phone</div>
        <a-input />
      </a-col>
    </a-row>
    <table class="table w-full mt-3">
      <thead>
        <tr>
          <th class="shadow p-3">Name</th>
          <th class="shadow p-3">Price</th>
          <th class="shadow p-3">Quantity</th>
          <th class="shadow p-3">Sum</th>
          <th class="shadow p-3">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in productData.product" :key="index">
          <td class="shadow p-3">{{ item.name }}</td>
          <td class="shadow p-3">{{ item.price }}</td>
          <td class="shadow p-3">{{ item.quantity }}</td>
          <td class="shadow p-3">{{ item.price * item.quantity }}</td>
          <td class="shadow p-3">
            <a-button @click="removeData(item)">Delete</a-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <a-button type="primary" @click="showModal">Open Modal</a-button>
      <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
        <a-dropdown>
          <a-input v-model="keyword" @change="handleChange" />
          <template #overlay>
            <a-menu>
              <a-menu-item v-for="(item, index) in state.product" :key="index">
                <div @click="clickProduct(item)">{{ item.name }}</div>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <div>ID: {{ selectProduct.id }}</div>
        <div>Name: {{ selectProduct.name }}</div>
        <div>Price: {{ selectProduct.price }}</div>
        <div>
          Quantity:
          <a-input v-model="count" class="inline" />
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

const open = ref<boolean>(false);
const keyword = ref<string>("");
const count = ref<string>("");
const state = reactive({
  product: [],
});
const selectProduct = reactive({
  id: "",
  name: "",
  price: 0,
});

const productData = reactive({
  product: [],
});

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  if (selectProduct.id == "") {
    open.value = false;
    return;
  }
  console.log(e);
  productData.product.push({
    quantity: count.value,
    ...selectProduct,
  });

  selectProduct.name = "";
  selectProduct.price = 0;
  selectProduct.id = "";
  open.value = false;
};

function removeData(item) {
  const dataFilter = productData.product.filter((x) => x.id != item.id);
  productData.product = dataFilter;
}
function clickProduct(item) {
  const data = { ...item };
  selectProduct.name = data.name;
  selectProduct.price = data.price;
  selectProduct.id = data.id;
}

const handleChange = (e: Event) => {
  let key = (e.target as HTMLInputElement).value;
  if (key.length === 0) {
    state.product = [];
  } else {
    state.product = [
      {
        name: "Iphone",
        price: 1000,
        id: "111",
      },
    ];
  }
};
</script>

<style lang=""></style>
