<template>
  <div id="app">
    <div id="nav">
      <van-row type="flex" justify="space-around">
        <van-col span="6">
          <van-button round size="small" class="routeItem" @click="item = ''">主页</van-button>
        </van-col>
        <van-col span="6">
          <van-button round size="small" class="routeItem" @click="item = 'product'">商品</van-button>
        </van-col>
        <van-col span="6">
          <van-button round size="small" class="routeItem" @click="item = 'shop'">购物车</van-button>
        </van-col>
        <van-col span="6">
          <van-button round size="small" class="routeItem" icon="manager-o" @click="item = 'user'">我</van-button>
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
  },

  data() {
    return {
      item: 'main'
    }
  },

  watch: {
    item: function(val) {
      this.$router.push('/' + val)
    }
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

  button:focus {
    color: yellow
  }

  .routeItem {
    margin: 10px;
    color: white;
    background-image: linear-gradient(to right, #4bb0ff, #6149f6)
  }
}

.content {
  margin-top: 50px;
  
}

</style>
