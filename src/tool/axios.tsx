/**
 * axios请求二次封装
 * 设置了baseURL
 * 设置了token
 * 避免重复点击
 * 改ts
 */
 
import {address} from 'config/config'
import axios, { CancelToken, AxiosInstance } from 'axios'

class Http {
    private http:AxiosInstance
    private cancel:Function
    private cancelToken:CancelToken
    constructor() {
        this.http = axios.create({baseURL: address})
        this.cancelToken = new axios.CancelToken((cancel:Function) => {this.cancel = cancel})
    }
    private setToken = () => {
        let token = sessionStorage.getItem('token')
        if(token) this.http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
        
    public get = (url:string, params = {}) => {
        this.setToken()
        return  this.http({
            method: 'get',
            params: params,
            url: url,
            cancelToken: this.cancelToken
        })  
    }
    public post = (url:string, data = {}) => {
        this.setToken()
        return this.http({
            method: 'post',
            data: data,
            url: url,
            cancelToken: this.cancelToken
        })
    }
    public delete = (url:string, params = {}) => {
        this.setToken()
        return this.http({
                method: 'delete',
                params: params,
                url: url,
                cancelToken: this.cancelToken
            })
    }
    public put = (url:string, data = {}) => {
        this.setToken()
        return this.http({
                method: 'put',
                data: data,
                url: url,
                cancelToken: this.cancelToken
            })
    }
}

const instance = new Http()

export default instance