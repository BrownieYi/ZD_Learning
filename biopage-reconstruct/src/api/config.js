/**
 * @author 潘卓然ParnDeedlit
 */
import Qs from 'qs';

/**
 * post 指定了该格式 application/json
 * chunk post 对应 multipart/form-data
 * post 请求没有标明 头类型的默认是 application/x-www-form-urlencoded
 */

// process.env.NODE_ENV
export default {
  url: '',
  method: 'get',
  baseURL: 'https://www.omdbapi.com',
  // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  headers: { 'Content-Type': 'application/json' },
  // 如果data存在的话stringify 'data'
  transformRequest: [function (data) {
    if (data) {
      data = Qs.stringify(data);
      return data;
    }
    return data;
  }],
  /* transformResponse: [function (data) {
    if (typeof data === 'string') {
      data = JSON.parse(data)
      return data
    } else {
      return data
    }
    // return data
  }], */
  // 将data变成js object并去掉左右的空格
  transformResponse: [function (data) {
    // console.error('transformResponse', data)
    /* eslint no-param-reassign:0 */
    if (typeof data === 'string') {
      try {
        if (!String.prototype.trim) {
          // eslint-disable-next-line no-extend-native
          String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
          };
        }
        data = JSON.parse(data.trim(''));
      } catch (e) {
        /* Ignore */
        console.log('can not JSON.parse the response', e);
      }
    }
    return data;
  }],
  /* paramsSerializer: function (params) {
    return Qs.stringify(params, { arrayFormat: 'brackets' })
  }, */
  timeout: 30000,
  withCredentials: false, // default
  responseType: 'json', // default
  onUploadProgress() {
    // Do whatever you want with the native progress event
  },
  onDownloadProgress() {
    // Do whatever you want with the native progress event
  },
  maxContentLength: 5000,
  validateStatus(status) {
    return status >= 200 && status < 300; // default
  },
  maxRedirects: 5, // default
  handleError: true, // 自增参数,是否在interceptors处理错误状态.
};
