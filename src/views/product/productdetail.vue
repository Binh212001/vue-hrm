<template lang="">
  <div>
    <div class="mb-3">
      <Button>Edit</Button>
    </div>
    <div>
      <img :src="avatar" alt="product" />
      <input type="file" class="inline my-3" disabled />
      <Row :gutter="[12, 12]">
        <Col :span="12">
          <div>Name</div>
          <Input disabled />
        </Col>
        <Col :span="12">
          <div>Price</div>
          <Input type="number" disabled />
        </Col>
        <Col :span="12">
          <div>Quantity</div>
          <Input type="number" disabled />
        </Col>
        <Col :span="12">
          <div>Category</div>
          <Select disabled class="block">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Col>
        <Col :span="12">
          <div>Category</div>
          <Select disabled class="block">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Col>
        <Col :span="24">
          <div>Category</div>
          <Textarea disabled></Textarea>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  Button,
  Row,
  Col,
  Input,
  Select,
  SelectOption,
  Textarea,
} from "ant-design-vue";
import avatar from "../../assets/img/avatar.jpg";

export default defineComponent({
  name: "product-detail",
  created() {},
  components: {
    Button,
    Row,
    Col,
    Input,
    Select,
    SelectOption,
    Textarea,
  },
  data() {
    return {
      avatar,
    };
  },
  methods() {},
  computed: {},
});
</script>
<style lang=""></style>
