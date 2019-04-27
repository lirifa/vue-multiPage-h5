<template>
  <div>
    <div class="main">
      <h1 class="main-tit">邀请好友得大礼</h1>
      <div class="rule-btn" @click="showRule">活动规则</div>
      <div class="btn">邀请好友</div>
      <div class="btn2">已邀请 {{ inviteeCount }} 位好友，共获得 {{ totalAmount }} 元</div>
    </div>
    <div class="dia-tip" id="diaTip" style="display: none;">
      <div class="dia-con">
        <h3 class="dia-tit">温馨提示</h3>
        <p class="tip-content"></p>
        <div class="dia-btn" onclick="hideTip()">确定</div>
      </div>
      <a class="dia-close" href="javascript:showDialog.hide()" title="关闭">×</a>
    </div>
    <div class="dia-rule" id="diaRule" v-show="ruleShow">
      <div class="dia-con">
        <h3 class="dia-tit">活动规则</h3>
        <div class="rule-con">
          <p class="rule-tit">活动说明：</p>
          <p>老用户邀请新用户注册，新用户注册后完成第一笔订单，老用户可获得一张5-10元随机代金券的奖励，使用可以随机减免5元至10元的费用；</p>
          <p class="rule-tit">邀请方式：</p>
          <p>老用户通过分享渠道将邀请链接发送给好友，好友点击链接进入完成注册即视为邀请成功；</p>
          <p class="rule-tit">发起邀请活动规则：</p>
          <p>1、用户分享链接邀请好友在固定渠道注册成为抢鲜到新用户；</p>
          <p>2、新注册用户需通过抢鲜到APP、抢鲜到小程序进行下单，当第一笔订单完成且无退款后，邀请者可获得奖励；</p>
          <p>3、好友完成订单后，代金券将在24小时内发放到账号中，可在APP—我的—我的卡券中查看，券有效期14天，请及时使用；</p>
          <p>4、新用户指同一登录账号，同一手机号，同一终端设备号，同一支付账户，同一IP或其他合理显示为同一用户的情形，均视为同一用户。同一用户仅可参与一次新注册活动和领取一次奖励； 固定渠道指抢鲜到APP、抢鲜到小程序；</p>
          <p>5、如发现用户存在任何违规套取代金券的行为，抢鲜到将视情节严重程度按照相关规则对用户进行处罚。包括但不限于不予发放奖励金，封停推荐有奖功能,冻结所有通过推荐有奖渠道获得的奖励金，依法追究其法律责任等。</p>
        </div>
      </div>
      <a class="dia-close" href="javascript:void (0);" @click="closeRule" title="关闭">×</a>
    </div>
  </div>
</template>
<script>
import api from './api'
export default {
  name: 'index',
  data() {
    return {
      activityId: '', // 当前邀请活动id
      shareUser: '', // 分享人用户id
      registerActivityId: '', // 分享的微信H5注册活动绑定的活动id
      inviteeCount: '0', // 已邀请好友
      totalAmount: '0', // 共获得金额
      ruleShow: false // 规则弹窗显示开关
    }
  },
  created() {
    this.init()
  },
  methods: {
    showRule() {
      this.ruleShow = !this.ruleShow
    },
    closeRule() {
      this.ruleShow = false
    },
    init() {
      api.validateActivity({'activityId': '12345678'}).then(res => {
        console.log(res)
      })
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
  html,body{background-color: #5a6e83;font-size: 0.24rem;}
  .main{
    background: url("~@assets/a20190401yqyj4app/img/body_bg1.jpg") no-repeat;
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
    height: 100vh;
    position: relative;}
  .main-tit{
    background: url("~@assets/a20190401yqyj4app/img/h1_bg.png") no-repeat;
    -webkit-background-size: 100% auto;
    background-size: 100% auto;
    width: 5.08rem;
    height: 3.2rem;
    font-size: 0;
    text-indent: -9999px;
    position: absolute;
    top: .48rem;
    left: .6rem;
  }
  .btn{width: 6.3rem;height: .88rem;line-height: .88rem;background: rgba(212,78,77,1);border-radius:6px;font-size: .32rem;text-align: center;color: #fff;position: absolute;top: 8.84rem;left: 50%;margin-left: -3.15rem;}
  .btn2{width: 6.3rem;height: .88rem;line-height: .88rem;background: rgba(102,102,102,1);border-radius:6px;opacity:0.8;text-align: center;font-size: .32rem;color: #fff;position: absolute;top: 10.16rem;left: 50%;margin-left: -3.15rem;}
  .rule-btn{width: 1.28rem;height:.5rem;line-height: .5rem;text-align: center;background:rgba(51,51,51,1);border-radius:100px 0px 0px 100px;opacity:0.4;color: #fff;position: absolute;top: .8rem;right: 0;}

  .dia-close{width: .28rem;height: .28rem;line-height: .28rem;text-align:center;color: #666666;font-size: .48rem;position: absolute;top: .3rem;right: .32rem;text-decoration: none;}
  .dia-tit{font-size: .36rem;text-align: center; font-weight:bold;color:#333;margin-top: .4rem;}
  .dia-unget-tip{width: 5.9rem;height: 4.4rem;background:rgba(255,255,255,1);border-radius:6px;}
  .unget-tip-con{font-size: .32rem;color: #333;margin-top: .3rem;text-align: center;}
  .dia-geted-tip{width: 5.9rem;height: 4.4rem;background:rgba(255,255,255,1);border-radius:6px;}
  .geted-tip-con{font-size: .32rem;color: #333;margin-top: .3rem;box-sizing: border-box;padding: .24rem;text-align: center;}
  .dia-tip{width: 5.9rem;height: 4.4rem;background:rgba(255,255,255,1);border-radius:6px;}
  .tip-content{color: #333333;font-size: .32rem;text-align: center;line-height: 2rem;text-align: center;}
  .dia-rule{
    position: fixed;
    top: 15vh;
    left: 50%;
    margin-left: -3.25rem;
    width:6.5rem;height: 7.36rem;background:rgba(255,255,255,1);border-radius:6px;
  }
  .rule-con{height: 6.1rem;overflow-y: scroll;color: #666666;font-size: .24rem;box-sizing: border-box;padding: .2rem;}
  .rule-tit{color:#333333;font-weight: bold;}
  .dia-btn{display: block;width: 100%;height: .88rem;line-height: .88rem;position: absolute;bottom: 0;left: 0;background-color: #D44E4D;text-align: center;font-size: .32rem;text-decoration: none;color: #ffffff;border-radius: 0 0 6px 6px;}

</style>
