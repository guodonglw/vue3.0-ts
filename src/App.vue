<template>
  <div id="app">
    <!-- <van-tabbar id="tabbar" v-model="active">
      <van-tabbar-item name="home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item name="shop" icon="cart-o" :info="info">购物车</van-tabbar-item>
      <van-tabbar-item name="user" icon="manager-o" dot>我</van-tabbar-item>
    </van-tabbar> -->
    <bottom-tab></bottom-tab>
    <router-view />
  </div>
</template> 

<script>
import { Tabbar, TabbarItem } from 'vant';
import { mapGetters, mapActions } from 'vuex';
import BottomTab from '@/components/BottomTab'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    BottomTab
  },

  data() {
    return {
      active: this.curPage
    }
  },

  computed: {
    ...mapGetters([
      'goods',
      'curPage'
    ]),
  },

  watch: {
    goods: {
      handler(val) {
        this.info = this.goods.length
      },
      immediate: true
    },
    curPage: function(val) {
      this.active = val
    },
    active: function(val) {
      this.ChangePage(val)
      this.$router.push(this.curPage)
    }
  },
  
  methods: {
    ...mapActions([
      'ChangePage'
    ])
  },

  created() {
    // this.info = this.goods.length;
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#tabbar {
  color: black;
  background-image:linear-gradient(to right, #EEE8AA, #E0FFFF);
}
</style>
