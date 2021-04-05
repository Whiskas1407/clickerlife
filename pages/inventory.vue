<template>
  <div class="inventory">
    <h1 class="inventory__title">Ваше имущество:</h1>
    <InventoryBlock />
  </div>
</template>
<script>
import InventoryBlock from '@/components/InventoryPage/InventoryBlock'
export default {
  components: {
    InventoryBlock
  }
}
</script>
<style lang="scss">
.inventory {
  padding-top: 2vw;
  &__title {
    font-size: 1.4vw;
  }
}
</style>
