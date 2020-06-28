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

  put(url, param) {
    return this.request1(url, 'put', param);
  }

  post(url, param) {
    return this.request1(url, 'post', param);
  }

  get(url, param) {
    let url1 = url;
    if (param) { url1 = `${url}?${Qs.stringify(param)}`; }

    /*         if (/(qiniu.com|qbox.me)/g.test(url)) { // 七牛api
                    this.setAuthorization(_httpAuthorization(url));
                } */
    return this.request1(url1, 'get');
  }

  setBaseUrl(url) {
    this.config.baseURL = url;
  }

  setAuthorization(authorization) {
    this.config.headers.Authorization = authorization;
  }

  setContentType(type) {
    this.config.headers['Content-Type'] = type;
  }

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
