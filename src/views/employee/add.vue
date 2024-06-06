<template lang="">
  <div>
    <TypographyTitle :level="3">New employee</TypographyTitle>
    <div class="grid grid-cols-2">
      <div class="grid grid-cols-2 gap-6">
        <div></div>
        <div></div>
        <div class="input-box">
          <span> Full Name </span>
          <Input v-model="name" />
        </div>
        <div class="input-box">
          <span> Email </span>
          <Input v-model="email" />
        </div>
        <div class="input-box">
          <span> Phone</span>
          <Input v-model="name" />
        </div>
        <div class="input-box">
          <span>Address </span>
          <Input v-model="address" />
        </div>
        <div class="input-box">
          <span> Gender </span>
          <Select class="block">
            <SelectOption value="jack">Male</SelectOption>
            <SelectOption value="lucy">Female</SelectOption>
          </Select>
        </div>
        <div class="input-box">
          <span> Position </span>
          <Select class="block">
            <SelectOption value="jack">Jack</SelectOption>
            <SelectOption value="lucy">Lucy</SelectOption>
            <SelectOption value="disabled" disabled> Disabled </SelectOption>
            <SelectOption value="Yiminghe">yiminghe</SelectOption>
          </Select>
        </div>
        <div class="input-box">
          <span> Department </span>
          <Select class="block">
            <SelectOption value="jack">Jack</SelectOption>
            <SelectOption value="lucy">Lucy</SelectOption>
            <SelectOption value="Yiminghe">yiminghe</SelectOption>
          </Select>
        </div>

        <div class="input-box">
          <span> Date of birth </span>
          <DatePicker class="block" v-model="dateOfBirth" />
        </div>
        <div class="input-box">
          <span> Manager </span>
          <Select class="block">
            <SelectOption value="jack">Jack</SelectOption>
            <SelectOption value="lucy">Lucy</SelectOption>
            <SelectOption value="Yiminghe">yiminghe</SelectOption>
          </Select>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  Input,
  DatePicker,
  Select,
  SelectOption,
  TypographyTitle,
} from "ant-design-vue";

export default defineComponent({
  components: {
    Input,
    DatePicker,
    Select,
    SelectOption,
    TypographyTitle,
  },
  props: {
    name: String,
    msg: { type: String },
  },
  data(): any {
    return {};
  },
});
</script>
<style lang=""></style>
