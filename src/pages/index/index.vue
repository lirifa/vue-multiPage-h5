<template>
  <div class='index'>
    <h1>所有H5页面</h1>
    <div>
      <a href="./a20190419zcyl">注册有礼</a>
    </div>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'index',
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions([
      'addCount'
    ]),
    add(){
      this.addCount({num: 10});
    }
  }

};
</script>
<style lang="scss">
.index {
  position: relative;
  font-size: 24px;
  color: $titleColor;
  .count{
    text-align: center;
  }
  img {
    position: relative;
    margin-top: 60px;
    left: 50%;
    transform: translateX(-50%)
  }

}
</style>
