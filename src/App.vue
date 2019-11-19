<template>
  <div id="app">
    <div id="nav">
      <van-row type="flex" justify="space-around">
        <van-col span="8">
          <div class="routeItem"><router-link to="/">商品</router-link></div>
        </van-col>
        <van-col span="8">
          <div class="routeItem"><router-link to="/user">用户</router-link></div>
        </van-col>
        <van-col span="8">
          <div class="routeItem"><router-link to="/shop">购物车</router-link></div>
        </van-col>
      </van-row>
    </div>
    <router-view class="content"/>
  </div>
</template>

<script>
import { Row,Col,Button } from 'vant'
import { Watch } from 'vue-property-decorator'
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button
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

#nav {
  width: 100%;
  position: fixed;
  z-index: 1;

  a {
    padding: 5px 20px;
    background-image: linear-gradient(to right,#4bb0ff, #6149f6);
    border-radius: 10px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color:aqua
    }
  }

  .routeItem {
    margin: 10px 0;
  }
}

.content {
  margin-top: 40px;
  
}

</style>
