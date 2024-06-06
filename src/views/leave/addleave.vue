<template lang="">
  <div>
    <TypographyTitle :level="3">LEAVE REQUESTED</TypographyTitle>

    <div class="mb-3">
      <Button class="rounded-sm">SAVE</Button>
    </div>
    <div class="grid grid-cols-2">
      <div class="grid grid-cols-2 gap-6">
        <div class="input-box">
          <span> EMPLOYEE </span>
          <Select class="block">
            <SelectOption value="jack">Male</SelectOption>
            <SelectOption value="lucy">Female</SelectOption>
          </Select>
        </div>
        <div class="input-box">
          <span> LEAVE TYPE </span>
          <Select class="block">
            <SelectOption value="jack">Jack</SelectOption>
            <SelectOption value="lucy">Lucy</SelectOption>
            <SelectOption value="disabled" disabled> Disabled </SelectOption>
            <SelectOption value="Yiminghe">yiminghe</SelectOption>
          </Select>
        </div>

        <div class="input-box">
          <span> START DATE</span>
          <DatePicker class="block" v-model="dateOfBirth" />
        </div>
        <div class="input-box">
          <span> END DATE</span>
          <DatePicker class="block" v-model="dateOfBirth" />
        </div>

        <div class="input-box">
          <span> DESCRIPTION </span>
          <Input></Input>
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
  Button,
  TypographyTitle,
} from "ant-design-vue";

export default defineComponent({
  components: {
    Input,
    DatePicker,
    Select,
    SelectOption,
    TypographyTitle,
    Button,
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
