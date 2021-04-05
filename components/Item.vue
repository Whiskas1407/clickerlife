<template>
  <div class="item">
    <div class="item__block-image">
      <img :src="item.img" class="item__image" alt="image">
    </div>
    <p class="item__name">{{ item.name }}</p>
    <p class="item__price">{{ isBuy ? item.price : item.price /100 * 75 }} $</p>
    <button :class="isBuy ? 'item__buy' : 'item__sell'" @click="buyItem">{{ isBuy ? 'Купить' : 'Продать' }}</button>
  </div>
</template>
<script>
export default {
  props: ['item', 'isBuy'],
  methods: {
    buyItem() {
     if (this.isBuy) {
       this.$store.commit('BUY_ITEM', this.item)
     } else {
       this.$store.commit('SELL_ITEM', this.item)
     }
    }
  }
}
</script>
<style lang="scss">
.item {
  width: 10vw;
  height: 13vw;
  display: flex;
  padding: 1vw;
  flex-direction: column;
  justify-content: space-between;
  &__block-image {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__image {
    width: 100%;
    max-height: 7vw;
  }
  &__name {
    text-align: center;
    font-size: 1vw;
    font-weight: 600;
  }
  &__price {
    text-align: center;
    font-weight: 600;
    color: green;
  }
  &__buy {
    margin-top: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2vw;
  }
  &__sell {
    margin-top: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2vw;
    background: red;
  }
}
</style>
