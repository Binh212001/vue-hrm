<template lang="">
  <div id="infomation">
    <div class="header mb-2">
      <Button class="rounded-sm text-white bg-green-600 hover:text-white"
        >Edit</Button
      >
    </div>
    <Row :gutter="[16, 16]">
      <Col :span="16">
        <Row>
          <Col :span="16">
            <div class="flex gap-3 cursor-pointer mb-3">
              <img :src="avatar" alt="avatar" />
              <div>
                <Input
                  class="outline-none font-bold"
                  style="font-size: 20px"
                  value="Pham Ngoc Binh"
                  required
                  readonly
                />
                <br />
                <TypographyText>IN_OSD230622PNB </TypographyText>
              </div>
            </div>
            <div>
              <Row class="mb-3">
                <Col :span="8">
                  <TypographyText class="font-bold"
                    >Date of Birth</TypographyText
                  >
                </Col>
                <Col :span="16">
                  <Select disabled>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col :span="8">
                  <TypographyText class="font-bold">Gender</TypographyText>
                </Col>
                <Col :span="16">
                  <DatePicker disabled />
                </Col>
              </Row>
            </div>
            <Tabs v-model:activeKey="activeKey">
              <TabPane key="1" tab="Work infomation">
                <WorkInfomation />
              </TabPane>
              <TabPane key="2" tab="Private infomation">
                <PrivateInfomation />
              </TabPane>
              <TabPane key="3" tab="Education">
                <Education />
              </TabPane>
            </Tabs>
          </Col>
          <Col :span="8" class="shadow p-4">
            <TypographyTitle :level="5"> Organization Chart</TypographyTitle>
          </Col>
        </Row>
      </Col>
      <Col :span="8">
        <Message />
      </Col>
    </Row>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import WorkInfomation from "./workinfomation.vue";
import PrivateInfomation from "./privateInfomation.vue";
import Education from "./eduinfomation.vue";
import Message from "./message.vue";
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
} from "ant-design-vue";
import avatar from "../../assets/img/avatar.jpg";
import { ref } from "vue";
const activeKey = ref("1");
export default defineComponent({
  components: {
    Button,
    Row,
    Col,
    TypographyTitle,
    TypographyText,
    avatar,
    Tabs,
    TabPane,
    DatePicker,
    Select,
    SelectOption,
    WorkInfomation,
    PrivateInfomation,
    Education,
    Message,
  },

  props: {
    name: String,
    msg: { type: String },
  },
  data() {
    return {
      avatar,
    };
  },
});
</script>
<style lang=""></style>
