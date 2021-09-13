import { makeAutoObservable } from "mobx";
import { observable } from "mobx";
interface data {
  username: string;
  email: string;
}

class Store {
  data?: {};
  username = "";
  email = "";

  constructor() {
    makeAutoObservable(this);
  }

  setUser(data: data) {
    this.username = data.username;
    this.email = data.email;
  }
}
export default new Store();
