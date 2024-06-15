import { defineStore } from "pinia";
import httpRequest from "../config/AxiosConfig";

interface Employee {
  name: string;
  email: string;
  contractNumber: string;
  departmentName: string;
  positionName: string;
}

interface State {
  employee: Employee[];
}
export const useEmployeeStore = defineStore("employees", {
  state: (): State => ({
    employee: [],
  }),

  getters: {
    getEmployee: (state): Employee[] => state.employee,
  },
  actions: {
    async fetchAllEmployee() {
      try {
        const data = await httpRequest.get("/employee");
        this.employee = data.data;
      } catch (error) {
        console.log("🚀 ~ fetchUserPreferences ~ error:", error);
      }
    },
  },
});
