import request from '@utils/request'
export default {
  // 获取微信分享相关配置参数
  getSign(data) {
    return request({
      url: '/user/getSign',
      method: 'post',
      data
    })
  },

  // 获取OpenId
  getOpenId(data) {
    return request({
      url: '/user/getOpenId',
      method: 'post',
      data
    })
  },
}
