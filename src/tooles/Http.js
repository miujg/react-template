/**
 * axios请求二次封装
 * 设置了baseURL
 * 设置了token
 * 避免重复点击
 */
 
import {address} from 'config'
import axios from 'axios'
import qs from 'qs'

class Http {
    constructor(){
        let token = sessionStorage.getItem('token')
        this.http = axios.create({baseURL: address})
        this.cancel = f => f
        this.cancelToken = new axios.CancelToken(cancel => {this.cancel = cancel})
        if(token) this.http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        this.http.interceptors.request.use(
            config => {
                if (config.method === 'put') {
                    config.data = qs.stringify(config.data)
                }
                return config
            },
            error => {
                console.log(error)
                Promise.reject(error)
            }
        )
    }

    getHttp = () => {
        return this.http
    }
    get = (url, params = {}) => (
        this.http({
            method: 'get',
            params: params,
            url: url,
            cancelToken: this.cancelToken
        })
    )
    post = (url, data = {}) => (
        this.http({
            method: 'post',
            data: data,
            url: url,
            cancelToken: this.cancelToken
        })
    )
    delete = (url, params = {}) => (
        this.http({
            method: 'delete',
            params: params,
            url: url,
            cancelToken: this.cancelToken
        })
    )
    put = (url, data = {}) => (
        this.http({
            method: 'put',
            data: data,
            url: url,
            cancelToken: this.cancelToken
        })
    )

}

let instance = new Http()

// export default instance.getHttp()
export default instance