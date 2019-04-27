import request from '@utils/request'
export default {
  // 检查用户是否登陆,获取用户在活动中相应的信息
  validateActivity(data) {
    return request({
      url: '/activity/validateActivity',
      method: 'post',
      data
    })
  }
}
