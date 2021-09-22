import { makeAutoObservable } from "mobx";
import { observable } from "mobx";
interface data {
  username: string;
  email: string;
}
interface postInfo {
  username: string;
  email: string;
}

class Store {
  data?: {};
  postInfo?: {};
  username = "";
  email = "";
  tagList = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUser(data: data) {
    this.username = data.username;
    this.email = data.email;
  }
  getUser(postInfo: postInfo) {
    this.username = postInfo.username;
    this.email = postInfo.email;
  }
}
export default new Store();
