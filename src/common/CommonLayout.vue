<script>
import { Layout, Menu, Avatar } from "ant-design-vue";
import logo from "../assets/img/logo.png";
import { Icon } from "@iconify/vue";
export default {
  name: "App",
  components: {
    "a-layout": Layout,
    "a-sider": Layout.Sider,
    "a-layout-header": Layout.Header,
    "a-layout-content": Layout.Content,
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-icon": Icon,
    "a-avatar": Avatar,
  },
  data() {
    return {
      collapsed: false,
      logo: logo,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<template>
  <div>
    <div id="nav">
      <a-layout style="min-height: 100vh">
        <a-sider collapsible v-model:collapsed="collapsed" theme="light">
          <div class="logo">
            <img :src="logo" alt="logo" />
          </div>

          <a-menu mode="inline" :defaultSelectedKeys="['1']" theme="light">
            <a-menu-item key="1">
              <RouterLink to="/" class="flex items-center gap-2">
                <span><a-icon icon="iconamoon:home" /></span>
                <span v-show="!collapsed"> Home</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="1">
              <RouterLink to="/employee" class="flex items-center gap-2">
                <span><a-icon icon="raphael:employee" /></span>
                <span v-show="!collapsed">Employee</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="2">
              <RouterLink to="/" class="flex items-center gap-2">
                <span><a-icon icon="icon-park-twotone:plan" /></span>
                <span v-show="!collapsed">WorkPlan</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="3">
              <RouterLink to="/" class="flex items-center gap-2">
                <span><a-icon icon="openmoji:two-oclock" /></span>
                <span v-show="!collapsed">Over Time</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="3">
              <RouterLink to="/" class="flex items-center gap-2">
                <span
                  ><a-icon icon="pepicons-pencil:rewind-time-circle-off"
                /></span>
                <span v-show="!collapsed"> Leave</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="3">
              <RouterLink to="/" class="flex items-center gap-2">
                <span><a-icon icon="mage:message-round" /></span>
                <span v-show="!collapsed">Message</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="3">
              <RouterLink to="/" class="flex items-center gap-2">
                <span><a-icon icon="icon-park-solid:plan" /></span>
                <span v-show="!collapsed">Plan</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="3">
              <RouterLink to="/" class="flex items-center gap-2">
                <span><a-icon icon="ri:product-hunt-fill" /></span>
                <span v-show="!collapsed">Product</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="3">
              <RouterLink to="/" class="flex items-center gap-2">
                <span><a-icon icon="uil:bill" /></span>
                <span v-show="!collapsed">Bill</span>
              </RouterLink>
            </a-menu-item>
          </a-menu>
        </a-sider>
        <a-layout>
          <a-layout-header style="background: #fff">
            <div
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
            >
              <div class="text-red-300">SubMenu</div>
              <div style="display: flex; gap: 10px">
                <a-icon icon="mage:message-round" class="size-8" />
                <a-avatar></a-avatar>
              </div>
            </div>
          </a-layout-header>
          <a-layout-content
            style="margin: 24px 16px; padding: 24px; background: #fff"
          >
            <slot></slot>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </div>
  </div>
</template>

<style></style>
