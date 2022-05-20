import { createStore } from "vuex";
import news from "./models/news.js";
const store = createStore({
  modules: {
	news
  }
});

export default store;