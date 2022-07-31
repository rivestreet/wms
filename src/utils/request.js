import axios from "axios";
// import store from "@/store";
// import { Message } from "element-ui";
const request = axios.create({
  baseURL: "http://www-wms-java.itheima.net/api/",
});

// 请求拦截器
request.interceptors.request.use((config) => {
  // if (store.getters.token) {
  config.headers.Authorization =
    "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiNTJlYWUxMS0yYWZiLTQwYjUtODg3NC01OTEwOGU0YjI0NjUiLCJzdWIiOiJ7XCJyb2xlXCI6XCJST0xFX0FETUlOXCIsXCJ0eXBlXCI6XCIyXCIsXCJ1c2VybmFtZVwiOlwiYWRtaW5cIn0iLCJpc3MiOiJhZG1pbiIsImlhdCI6MTYwNjM3MTA3NiwiZXhwIjoxNjA2OTc1ODc2fQ.pCl45pY_v2w8rZU8l60UI4cQx-Ufl7DRw0rZqhY8zeE";

  // console.log(store.getters.token);
  return config;
});

export default request;
