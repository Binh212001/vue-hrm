<template lang="">
  <div>
    <TypographyTitle :level="3"
      >Citizenship & Other Information</TypographyTitle
    >
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">ID No.</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="0986561234"
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Date of Issue</TypographyText>
      </Col>
      <Col :span="16">
        <DatePicker disabled />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Place of issue</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="Cục Cảnh Sát"
          required
          readonly
        />
      </Col>
    </Row>
    <TypographyTitle :level="3">Bank information</TypographyTitle>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Account No.</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="1017027655"
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Bank Name</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="VIETCOMBANK"
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Bank Branch</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="Phạm Hùng"
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Account Holder</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="Phạm Ngọc Binh"
          required
          readonly
        />
      </Col>
    </Row>

    <TypographyTitle :level="3">Other Information</TypographyTitle>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Vehicle Plate No.</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="35m1-2724"
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Vehicle Type</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="Honda wave apha"
          required
          readonly
        />
      </Col>
    </Row>
  </div>
</template>
<script>
import {
  Tabs,
  TabPane,
  Button,
  Row,
  Col,
  TypographyTitle,
  TypographyText,
  DatePicker,
  Select,
  SelectOption,
  Input,
} from "ant-design-vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "workinfomation",
  components: {
    TypographyTitle,
    TypographyText,
    Row,
    Col,
    Input,
    DatePicker,
  },
  data() {
    return {};
  },
});
</script>
<style lang=""></style>
