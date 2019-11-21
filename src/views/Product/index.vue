<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item>
        <img :src="good.product" >
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(good.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ good.express }}</van-col>
        <van-col span="14">剩余：{{ good.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">哈哈小店</span>
          <van-tag class="goods-tag" type="danger">虚构</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

    <van-goods-action class="goods-foot">
      <van-goods-action-icon icon="chat-o" @click="sorry">
        客服
      </van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">
        购物车
      </van-goods-action-icon>
      <van-goods-action-button type="warning" @click="addShop">
        加入购物车
      </van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">
        立即购买
      </van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },

  data() {
    return {
      good: {}
    };
  },

  computed: {
    ...mapGetters([
      'goods',
      'curPage'
    ])
  },

  methods: {
    ...mapActions([
      'UpdateShop',
      'ChangePage'
    ]),
    addShop() {
      this.res = [];
      let flag = false;
      this.goods.forEach(element => {
        if (element.id === this.good.id) {
          element['num']++;
          flag = true;
        };
        this.res.push(element)
      });
      if (!flag) {
        this.good['num'] = 1
        this.res.push(this.good)
      }
      this.UpdateShop(this.res)
    },
    formatPrice() {
      return "¥ " + (this.good.price / 100).toFixed(2);
    },
    onClickCart() {
      this.ChangePage('shop')
      this.$router.push(this.curPage);
    },
    sorry() {
      Toast("暂无后续逻辑~");
    }
  },

  created() {
    if (this.$route.query.param) {
      this.good = this.$route.query.param
    }
  }
};
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
  &-foot {
    margin-bottom: 50px;
  }
}
</style>