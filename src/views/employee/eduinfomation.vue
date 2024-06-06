<template lang="">
  <div>
    <TypographyTitle :level="3">Education</TypographyTitle>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Certificate Level</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="Bachelor"
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Field of Study</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="Công nghệ thông tin"
          required
          readonly
        />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">Graduted time</TypographyText>
      </Col>
      <Col :span="16">
        <Input class="outline-none border-b-2" value="2024" required readonly />
      </Col>
    </Row>
    <Row class="mb-2">
      <Col :span="8">
        <TypographyText class="font-bold">School</TypographyText>
      </Col>
      <Col :span="16">
        <Input
          class="outline-none border-b-2"
          value="Đại Học Xây Dựng Hà"
          required
          readonly
        />
      </Col>
    </Row>
  </div>
</template>
<script>
import {
  Col,
  DatePicker,
  Input,
  Row,
  TypographyText,
  TypographyTitle,
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
