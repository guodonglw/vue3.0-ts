<template>
  <div class="pics">
    <van-swipe class="pics-swipe" :autoplay="3000">
      <van-swipe-item v-for="item in thumbs" :key="item.id">
        <img :src="item.thumb" >
      </van-swipe-item>
    </van-swipe>

    <van-cell>   
      <van-col span="12" v-for="item in data" :key="item.id" :id="item.id" class="pics-item" @click="toProduct($event)">
        <img :src="item.product"/>
        <p>单价：{{item.price}}</p>
      </van-col>     
    </van-cell>
  </div>
</template>

<script>
import {
  Row,
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
} from "vant";

import { getThumbs,getProducts } from '@/serves/index'
export default {
  components: {
    [Row.name]: Row,
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },

  data() {
    return {
      thumbs: [],
      data: []
    };
  },

  methods: {
    getThumb: function() {
      getThumbs().then(res => {
        this.thumbs = res
      }).catch(err => {
        Toast(err)
      })
    },
    getData: function() {
      getProducts().then(res => {
        this.data = res
      }).catch(err => {
        Toast(err)
      })
    },
    toProduct: function(e) {
      let targetId = e.currentTarget.getAttribute('id')
      let param = this.data.filter((item) => item.id == targetId)  
      this.$router.push({path: '/product', query: { param: param[0] }})
    }
  },

  created() {
    this.getThumb()
    this.getData()
  }
};
</script>

<style lang="less">
.pics {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  };

  &-item {
    text-align: center
  }
}
</style>