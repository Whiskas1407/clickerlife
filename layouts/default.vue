<template>
  <div class="app">
    <Header />
    <div class="page__content">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit('GET_USER')
  },
}
</script>
<style>
body {
  margin: 0;
  width: 100%;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
  background-image: radial-gradient(#2b2b2b 0%, #191818 81%, #1d1b1b 100%);
  background-attachment: fixed;
  font-family: Arial, sans-serif;
}
h1,h2,h3,h4,h5,h6,p,a {
  margin: 0;
  text-decoration: none;
  color: white;
}
li {
  list-style: none;
}
ul {
  margin: 0;
  padding-left: 0;
}
.page__content {
  width: 85vw;
  margin: 0 auto;
}
.container {
  background: #151515;
  margin-top: 2vw;
  padding: 2vw;
}
button {
  border: none;
  color: white;
  background: green;
  cursor: pointer;
  outline: none;
}
</style>
