<template>
  <div class="container">
    <div class="info__user">
      <p class="info__user-name">{{ user.name }}</p>
      <div class="info__game">
        <p></p>
      </div>
      <div class="info__user-block">
        <p class="info__user-balance">Баланс: {{ user.balance }} $</p>
        <button class="info__user-btn" @click="addToBalance">Погрузить мешки ( +1$)</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    addToBalance() {
      this.$store.commit('CLICK', 1)
    }
  }
}
</script>
<style lang="scss">
.info {
  &__user {
    display: flex;
    justify-content: space-between;
    align-items: start;
    &-name {
      font-size: 1.3vw;
      background: green;
      padding: 1vw;
    }
    &-balance {
      font-size: 2vw;
    }
    &-btn {
      font-size: 1vw;
      width: 14vw;
      height: 3vw;
    }
  }
}
</style>
