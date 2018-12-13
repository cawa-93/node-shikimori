import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import * as types from "../types/types"
// import querystring from "querystring"

export class Shikimori {

  axios: AxiosInstance

  constructor () {
    this.axios = axios.create({
      baseURL: 'https://shikimori.org/api/',
      headers: {
        'User-Agent': 'node-shikimori-v2'
      }
    })
  }

  request<T = any>(config: AxiosRequestConfig) {
    return this.axios.request<T>(config)
  }
  get<T = types.ResponseAnime>(url: string, config?: AxiosRequestConfig | undefined) {
    return this.axios.get<T>(url, config)
  }
  delete(url: string, config?: AxiosRequestConfig | undefined) {
    return this.axios.delete(url, config)
  }
  head(url: string, config?: AxiosRequestConfig | undefined) {
    return this.axios.head(url, config)
  }
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this.axios.post<T>(url, data, config)
  }
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this.axios.put<T>(url, data, config)
  }
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this.axios.patch<T>(url, data, config)
  }

  // TODO: Write Auth mathod
  auth() : boolean {
    return false;
  }
}