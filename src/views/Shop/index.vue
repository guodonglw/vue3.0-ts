<template>
  <div>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.product"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
      style="margin-bottom: 50px"
    />
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: [],
    };
  },
  computed: {
    ...mapGetters([
      'goods'
    ]),
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price*item.num : 0), 0);
    }
  },

  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      Toast('点击结算');
    }
  },
  created() {
    this.checkedGoods = this.goods.map((item) => item.id);
  }
};
</script>

<style lang="less">
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>