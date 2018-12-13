import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import * as types from "../types/types"
// import querystring from "querystring"

export class Shikimori {

  public axios: AxiosInstance

  constructor() {
    this.axios = axios.create({
      baseURL: 'https://shikimori.org/api/',
      headers: {
        'User-Agent': 'node-shikimori-v2',
      },
    })
  }

  public request<T = any>(config: AxiosRequestConfig) {
    return this.axios.request<T>(config)
  }
  public get<T = types.ResponseAnime>(url: string, config?: AxiosRequestConfig | undefined) {
    return this.axios.get<T>(url, config)
  }
  public delete(url: string, config?: AxiosRequestConfig | undefined) {
    return this.axios.delete(url, config)
  }
  public head(url: string, config?: AxiosRequestConfig | undefined) {
    return this.axios.head(url, config)
  }
  public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this.axios.post<T>(url, data, config)
  }
  public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this.axios.put<T>(url, data, config)
  }
  public patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig | undefined) {
    return this.axios.patch<T>(url, data, config)
  }

  // TODO: Write Auth mathod
  public auth(): boolean {
    return false
  }
}