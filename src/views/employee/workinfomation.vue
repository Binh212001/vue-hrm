<template lang="">
  <div>
    <TypographyTitle :level="3">Contract infomation</TypographyTitle>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Skye ID</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="Pham Ngoc Binh"
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Work Email</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="i-binhpn@nissho-vn.com"
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Work Phone</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="0987272867"
          required
          readonly
        />
      </Col>
    </Row>
    <TypographyTitle :level="3">Position</TypographyTitle>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Department</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="Innovation Partners Department / Account Line 1 Dept."
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Job Position</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="Intern Developer"
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Working Hours</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="Standard 40 Hours/Week"
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Manager</TypographyText>
      </Col>
      <Col :span="16">
        <Select class="block" disabled>
          <SelectOption value="jack">Jack</SelectOption>
          <SelectOption value="lucy">Lucy</SelectOption>
          <SelectOption value="Yiminghe">yiminghe</SelectOption>
        </Select>
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
    Select,
    SelectOption,
    DatePicker,
  },
  data() {
    return {};
  },
});
</script>
<style lang=""></style>
