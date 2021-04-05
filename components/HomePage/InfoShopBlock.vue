<template>
  <div class="container">
    <h2 class="shop-block__title">Популярные товары:</h2>
    <div class="shop-block__block">
      <Item v-for="item of items" :item="item" :isBuy="true"/>
    </div>
  </div>
</template>
<script>
import Item from '@/components/Item'
export default {
  components: {
    Item
  },
  computed: {
    items() {
      return this.$store.state.items
    }
  }
}
</script>
<style lang="scss">
.shop-block {
  &__block {
    margin-top: 2vw;
    display: grid;
    grid-template-columns: repeat(5, 11vw);
    justify-content: space-between;
  }
}
</style>
