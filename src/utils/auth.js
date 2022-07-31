// 下载第三库 cookie 并引用
import Cookies from "js-cookie";

// 声明一个token的k值
const TonKey = "wmsTokeny";

// 封装一个获取token的函数 并导出
export function getToken() {
  return Cookies.get(TonKey);
}

// 封装一个设置token的函数 并导出
export function setToken(token) {
  return Cookies.set(TonKey, token);
}

// 移除token
export function removeToken() {
  return Cookies.remove(TonKey);
}
