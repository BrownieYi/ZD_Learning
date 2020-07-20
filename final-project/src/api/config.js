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
  baseURL: 'https://api.cesium.com/v1/geocode/autocomplete',
  // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  headers: { 'Content-Type': 'application/json' },
  /**
   * @description 将输入的 application/json 转化为 application/x-www-form-urlencoded
   * @param {object} data 将被转化的application/json
   */
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
  /**
   * @description 将输入的字符串转换为js object
   * @param {string} 将被转换的字符串
   */
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
