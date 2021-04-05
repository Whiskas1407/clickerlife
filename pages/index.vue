<template>
  <div class="info">
      <InfoUser />
      <InfoShopBlock />
  </div>
</template>
<script>
import InfoUser from '@/components/HomePage/InfoUser'
import InfoShopBlock from '@/components/HomePage/InfoShopBlock'
export default {
  components: {
    InfoUser,
    InfoShopBlock
  },
}
</script>
