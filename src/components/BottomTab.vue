<template>
  <van-tabbar id="tabbar" v-model="active">
    <van-tabbar-item name="home" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item name="shop" icon="cart-o" :info="info">购物车</van-tabbar-item>
    <van-tabbar-item name="user" icon="manager-o" dot>我</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { State, Getter, Action, namespace } from 'vuex-class';
import { Tabbar, TabbarItem } from 'vant';

@Component({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
})
export default class BottomTab extends Vue {
  info: number = 0
  active: string = 'home'

  // watch
  @Watch('goods') 
  onGoodsChange(val: Array<any>, oldVal: Array<any>): any {
    this.info = this.goods.length
  }
  @Watch('curPage')
  onCurPage(val: string, oldVal: string): void {
    this.active = val
  }
  @Watch('active')
  onActiveChange(val: string, oldVal: string): void {
    this.ChangePage(val)
    this.$router.push(this.curPage)
  }

  // vuex数据
  @State(state => state.app.goods) goods: any
  @State(state => state.app.curPage) curPage: any
  @Action('UpdateShop') UpdateShop!: Function
  @Action('ChangePage') ChangePage!: Function
  
  private created() {
    this.info = this.goods.length
  }

  private mounted() {

  }
}

</script>