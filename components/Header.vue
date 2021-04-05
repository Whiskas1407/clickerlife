<template>
  <header>
    <div class="header__content">
      <div class="header__logo" @click="goToHome">
        <h2>CLICKER<span>LIFE</span></h2>
      </div>
      <div class="header__menu">
        <ul>
          <li>
            <a href="#">Магазин</a>
          </li>
          <li>
            <a href="#">Статистика</a>
          </li>
          <li>
            <a href="#">Работа</a>
          </li>
          <li>
            <nuxt-link to="/inventory">Имущество</nuxt-link>
          </li>
          <li>
            <a href="#">Казино</a>
          </li>
        </ul>
      </div>
      <div class="header__profile">
        <p class="header__profile-name">{{ user.name }}</p>
        <p class="header__profile-balance">{{ user.balance }}<span>$</span></p>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
header {
  background: #151515;
}

.header {
  &__content {
    padding: 1vw 0;
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.4fr 1.5fr 0.3fr;
    align-items: center;
  }

  &__logo {
    cursor: pointer;
    color: #fff;
    font-size: 1.2vw;
    span {
      color: green;
    }
  }
  &__menu {
    ul > li > a {
      color: #ccc;
      font-size: 1vw;
      &:hover {
        color: green;
      }
    }
    ul {
      display: flex;
    }
    li {
      padding-right: 3vw;
    }
  }
  &__profile {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    &-name {
      color: #ccc;
    }
    &-balance {
      color: #ccc;
      span {
        color: green;
      }
    }
  }
}
</style>
