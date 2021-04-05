<template>
  <div class="container">
    <div class="inventory__block-items" v-if="inventory.length">
        <Item  v-for="item of inventory" :item="item" :isBuy="false"/>
    </div>
    <p v-else class="inventory__block-empty">У вас нету имущества!</p>
  </div>
</template>
<script>
import Item from '@/components/Item'
export default {
  components: {
    Item
  },
  computed: {
    inventory() {
      return this.$store.state.inventory
    }
  }
}
</script>
<style lang="scss">
.inventory {
  &__block {
    &-items {
      margin-top: 2vw;
      display: grid;
      grid-template-columns: repeat(5, 11vw);
      justify-content: space-between;
    }
  }
}
</style>
