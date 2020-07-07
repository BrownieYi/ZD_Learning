/**
 * @author 潘卓然
 * @date 2019/06/05
 */
import axios from 'axios';
import Qs from 'qs';
import config from './config';

// import {_httpAuthorization} from '../cos/qiniu';
// eslint-disable-next-line import/no-unresolved
const clone = require('clone');

class API {
  constructor(view) {
    this.view = view;
    this.config = clone(config);
  }

  /**
   * @description 根据网络地址和蚕食执行axios的put命令
   * @param {String} url 请求的网络地址，设置了BaseUrl后可以不包含基地址BaseUrl，否则必须传入完整的请求Url
   * @param {Object} param 请求的参数 Param Payload
   * @example
   * const api = new API();
   * api.setBaseUrl('www.mapgis.com');
   * api.put('', {})
   */
  put(url, param) {
    return this.request1(url, 'put', param);
  }

  /**
   * @description
   * @param {String} url 根据网络地址和蚕食执行axios的post命令
   * @param {Obeject} param 请求的参数 Param Payload
   * @example
   * const api = new API();
   * api.setBaseUrl('www.mapgis.com');
   * api.put('', {})
   */
  post(url, param) {
    return this.request1(url, 'post', param);
  }

  /**
   * @description 根据网络地址和参数执行axios的get命令
   * @param {String} url 请求的网络地址，设置了BaseUrl后可以不包含基地址BaseUrl，否则必须传入完整的请求Url
   * @param {Object} param 请求的参数  Query String Parameters
   * @example
   * const api = new API();
   * api.setBaseUrl('www.mapgis.com');
   * api.get('', {}).then(res => {});
   */
  get(url, param) {
    let url1 = url;
    if (param) { url1 = `${url}?${Qs.stringify(param)}`; }

    /*         if (/(qiniu.com|qbox.me)/g.test(url)) { // 七牛api
                    this.setAuthorization(_httpAuthorization(url));
                } */
    return this.request1(url1, 'get');
  }

  /**
   * @description 将收到的网络地址设置为基地址
   * @param {String} url 准备设置为基地址的网络地址
   * @example
   * const api = new API();
   * setBaseUrl('www.mapgis.com');
   */
  setBaseUrl(url) {
    this.config.baseURL = url;
  }

  setAuthorization(authorization) {
    this.config.headers.Authorization = authorization;
  }

  /**
   * @description 将收到的type设置为Content-type
   * @param {String} type Content-Type,可为'application/x-www-form-urlencoded'或'application/json'
   */
  setContentType(type) {
    this.config.headers['Content-Type'] = type;
  }

  /**
   * @description 根据收到的不同type执行不同的axios请求命令
   * @param {String} url 请求的网络地址，设置了BaseUrl后可以不包含基地址BaseUrl，否则必须传入完整的请求Url
   * @param {string} type 将要执行的请求命令种类，可为get，post，put
   * @param {object} param 请求的参数  若type为get，Query String Parameters，若type为post或put，为Param Payload
   * @example
   * request1('www.mapgis.com','',{})
   */
  request1(url, type, param) {
    this.config.method = type;

    let request;
    if (type === 'get') {
      request = axios.get(url, this.config);
    } else {
      request = axios[type](url, param, this.config);
    }

    /* request.then((response) => {
            this.view && this.view.$Loading.finish();
        }).catch((error) => {
            this.view && this.view.$Loading.error();
        }); */
    return request;
  }
}

export default API;
