<template>
  <div class="work">
    <div class="container">
      <div class="work__block">
        <img src="/work1.png" alt="work">
        <p class="work__info">Работа "Погрузка мешков". Прибыль за 1 клик = <span>1$</span></p>
        <button class="work__btn" @click="work(1)">Работать</button>
      </div>
    </div>
    <div class="container">
      <div class="work__block">
        <img src="/work2.png" alt="work">
        <p class="work__info" v-if="user.car">Работа "Такси". Прибыль за 1 клик = <span>2$</span></p>
        <p class="work__info" v-else>Для работы в такси нужна машина!</p>
        <button class="work__btn" @click="work(2)" v-if="user.car">Работать</button>
        <button class="work__btn work__error" v-else>Недоступно</button>
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
    work(param) {
      this.$store.commit('CLICK', param)
    }
  }
}
</script>
<style lang="scss">
.work {
  &__block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5vw;
    img {
      width: 5vw;
    }
  }
  &__info {
    font-size: 1.2vw;
    font-weight: 600;
    span {
      color: green;
    }
  }
  &__btn {
    width: 10vw;
    height: 3vw;
    font-size: 1vw;
  }
  &__error {
    background: red;
  }
}
</style>
