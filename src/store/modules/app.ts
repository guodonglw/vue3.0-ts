const app = {
  // namespaced: true, /* 开启module模式 */
  state: {
    goods: [],
    curPage: 'home'
  },

  mutations: {
    UPDATE_SHOP: (state: any, goods: Object) => {
      state.goods = goods
    },
    CHANGE_PAGE: (state: any, newPage: string) => {
      state.curPage = newPage
    }
  },

  actions: {
    UpdateShop: (ctx: any, goods: Object) => {
      ctx.commit('UPDATE_SHOP', goods)
    },
    ChangePage: (ctx: any, newPage: string) => {
      ctx.commit('CHANGE_PAGE', newPage)
    }
  }
}

export default app;