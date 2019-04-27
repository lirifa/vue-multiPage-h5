<template>
  <div>
    <section class="main">
      <h1 class="main-tit">新人注册享好礼</h1>
      <div class="unget-box">
        <input v-model="phoneInput" id="phone" class="phone-input" type="text" placeholder="请输入手机号码" oninput="value=value.replace(/[^\d]/g,'')"  maxlength="11" @blur.prevent="onBlur">
        <div class="get-btn" @click="getCoupon">免费领取</div>
      </div>
    </section>
    <div class="dia" id="dia" v-show="diaShow" style="display: none;">
      <div class="mask"></div>
      <div class="dia-con">
        <h3 class="dia-tit">温馨提示</h3>
        <div class="tip-content" v-html="tipMessage"></div>
        <a class="dia-btn" href="javascript:void (0)" title="关闭" @click="closeTip">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
import api from './api'
export default {
  name: 'Index',
  data() {
    return {
      AppId: '',
      inviterId: '', // 加密后邀请人Id
      activityId: '', // 邀请有礼活动Id
      registerActivityId: '', // 注册有礼活动Id
      baseUrl: '',
      local: window.location.href,
      openId: '',
      phoneInput: '',  // 手机号
      tipMessage: '', // 提示弹窗信息
      diaShow: false,
      message: ''
    }
  },
  methods: {
    getWXConfig() {
      api.getSign({ 'appId': this.AppId, 'url': this.local }).then(res => {
        console.log(res)
        window.wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: this.AppId, // 必填，公众号的唯一标识
          timestamp: res.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.data.noncestr, // 必填，生成签名的随机串
          signature: res.data.signature,// 必填，签名，见附录1
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
          ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
      })
    },
    getUrlParams() {
      const url = window.location.search; //获取url中"?"符后的字串
      const paramsObj = new Object();
      if (url.indexOf('?') != -1) {
        let str = url.substr(1);
        let strs = str.split('&');
        for(var i = 0; i < strs.length; i ++) {
          paramsObj[strs[i].split('=')[0]]=unescape(strs[i].split('=')[1]);
        }
      }
      return paramsObj;
    },
    getUrlCode() {
      const pageUrl = window.location.href
        .replace(/[/]/g, '%2f')
        .replace(/[:]/g, '%3a')
        .replace(/[#]/g, '%23')
        .replace(/[&]/g, '%26')
        .replace(/[=]/g, '%3d');
      const url =
        'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
        this.AppId +
        '&redirect_uri=' +
        pageUrl + //这里放当前页面的地址
        '&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect';
      // window.location.href = url;
      console.log(url)
    },
    fetchOpenId() {
      if (this.urlParams.code) {
        api.getOpenId({'appId': this.AppId, 'code': this.urlParams.code}).then(res => {
          console.log(res);
        })
      } else {
        this.getUrlCode()
      }
    }
  }
};
</script>
<style lang="scss">
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,
  details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}
  article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section { display:block; }
  table{border-collapse:collapse;border-spacing:0}
  audio,canvas,video { display: inline-block;*display: inline;*zoom: 1;}
  fieldset,img{border:0}
  address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}
  ol,ul{list-style:none}
  caption,th{text-align:left}
  h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
  q:before,q:after{content:''}
  abbr,acronym{border:0;font-variant:normal}
  sup{vertical-align:text-top}
  sub{vertical-align:text-bottom}
  input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit}
  input,textarea,select{*font-size:100%}

  html,body{font-size: 0.24rem;background-color: #e3d4bd}
  #app{width: 100%;min-height:100vh;margin: 0 auto;}
  .main{background: url("~@assets/a20190319zclx4wx/img/body_bg.jpg") no-repeat bottom center;-webkit-background-size: 100% auto;background-size: 100% auto;width: 100%;height: 100vh;min-height:12rem;position: relative;overflow: hidden;}
  .main-tit{text-indent: -9999px;font-size: 0;background: url("~@assets/a20190319zclx4wx/img/h1_bg.png") no-repeat;-webkit-background-size: 100% auto;background-size: 100% auto;width: 4.8rem;height: 3.2rem;position: absolute;top: 0.6rem;left: 0.6rem;}
  .phone-input{width: 6.3rem;height: 0.88rem;line-height: 1.6;font-size:.32rem;color:#666666;background:rgba(255,255,255,1);border-radius:6px;position: absolute;bottom: 2rem;left: 50%;margin-left: -3.15rem;text-indent: 0.2rem;border: none;}
  .get-btn{cursor:pointer;display: block;width: 6.3rem;height: 0.88rem;line-height: 0.88rem;background: rgba(212,78,77,1);border-radius: 6px;text-align: center;font-size: 0.32rem;color: #FFFFFF;text-decoration: none;position: absolute;
    bottom: .8rem;left: 50%;margin-left: -3.15rem;}
  .getted-box{width: 6.3rem;height: 2.88rem;position: absolute;bottom: 0.4rem;left: 50%;margin-left: -3.15rem;}
  .coupon{background: url('~@assets/a20190319zclx4wx/img/coupon.png') no-repeat;-webkit-background-size: 100% auto;background-size: 100% auto;width: 6.3rem;height: 1.74rem;position: absolute;top: 0;left: 0;overflow: hidden;}
  .coupon-num{width: 1.76rem;height: 1.76rem;line-height: 1.76rem;box-sizing: border-box;padding-left: 0.6rem;color: #D44E4D;font-size: 0.3rem;position: absolute;top: 0;left: 0;}
  .coupon-num:after{content: "";display: block;width: 2px;height: .8rem;background-color: #D44E4D;position: absolute;right: 0;top: 50%;margin-top: -.4rem;}
  .coupon-num span{font-size: 0.48rem;font-weight: bold;}
  .coupon-type{width: .5rem;height: 1.74rem;font-size: 0.24rem;color: #ffffff;position: absolute;top: 0;right: 0;box-sizing: border-box;padding: .32rem .12rem;}
  .coupon-rule{width: 4rem;height: 1.76rem;line-height: 1.76rem;text-align: center;color: #E94046;font-size: .32rem;position: absolute;top: 0;left: 1.76rem;}
  .go-btn{display: block;width: 6.3rem;height: 0.88rem;line-height: 0.88rem;background: rgba(212,78,77,1);border-radius: 6px;text-align: center;font-size: 0.32rem;color: #FFFFFF;text-decoration: none;position: absolute;bottom: 0;left: 0;}
  .dia{width: 100%;height: 100%;position: fixed;top: 0;left: 0;}
  .mask{width: 100%;height: 100%;position: absolute;top: 0;left: 0;background: rgba(0,0,0,0.5);}
  .dia-con{width: 6.3rem;height: 4.4rem;position: absolute;top: 50%;margin-top: -2.2rem;left: 50%;margin-left: -3.15rem;background-color: #fff;border-radius: 6px;}
  .dia-tit{font-size: .36rem;text-align: center;margin: .52rem auto 0.62rem;}
  .dia-con .tip-content{color: #333333;font-size: .36rem;text-align: center;box-sizing: border-box;padding: 0 .6rem;}
  .dia-btn{display: block;width: 100%;height: .88rem;line-height: .88rem;position: absolute;bottom: 0;left: 0;background-color: #D44E4D;text-align: center;font-size: .32rem;text-decoration: none;color: #ffffff;border-radius: 0 0 6px 6px;}
</style>
