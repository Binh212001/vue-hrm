import { defineStore } from "pinia";

interface TabChild {
  name: string;
  to: string;
}
interface Tab {
  name: string;
  children: TabChild[];
}

interface State {
  tab: Tab;
}

const TabList = [
  {
    name: "Home",
    children: [],
  },
  {
    name: "Employee",
    children: [],
  },
  {
    name: "Shift",
    children: [],
  },
  {
    name: "Leave",
    children: [
      {
        name: "My Leave",
        to: "/leave",
      },
      {
        name: "All Leave",
        to: "/leave/all",
      },
    ],
  },
  {
    name: "Overtime",
    children: [
      {
        name: "My Overtime",
        to: "/overtime",
      },
      {
        name: "All Overtime",
        to: "/overtime/all",
      },
    ],
  },
  {
    name: "Message",
    children: [],
  },
  {
    name: "Plan",
    children: [],
  },
  {
    name: "Product",
    children: [],
  },
  {
    name: "Bill",
    children: [],
  },
];

export const useTabStore = defineStore("tab", {
  state: (): State => ({
    tab: {
      name: "Home",
      children: [],
    },
  }),

  actions: {
    getChildTab(tabName: string) {
      const tabFilter = TabList.find(
        (x) => x.name.toLowerCase() === tabName.toLocaleLowerCase()
      );
      if (tabFilter === undefined) {
        return;
      }
      this.tab = tabFilter;
    },
  },
});
