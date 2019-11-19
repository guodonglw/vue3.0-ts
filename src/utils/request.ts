import * as axios from 'axios';
import store from '@/store';

// 这里可根据具体使用的ui组件库进行替换
import { Toast } from 'vant';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

export interface AjaxResponse {
  code: number;
  data: any;
  message: string
}

// baseURL根据实际进行定义
const baseURL = process.env.VUE_APP_URL;
// 创建axios实例
const service = axios.default.create({
  baseURL,
  timeout: 5000,  // 请求超时时间
  maxContentLength: 4000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, (err: any) => {
  Promise.reject(err)
});

service.interceptors.response.use((response: AxiosResponse) => {
  if (response.status !== 200) {
    Toast.fail('请求错误！')
  } else{
    return response.data
  }
}, (err: any) => {
  return Promise.reject(err)
})

export default service;