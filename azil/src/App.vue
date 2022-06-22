<template>
  <div id="app">
    <MyHeader></MyHeader>

    <router-view/>
    <MyFooter></MyFooter>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  padding: 0;
  margin: 0;
  /*background-color: #2480dd;*/
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@font-face {
  font-family: "cirilica";
  src: local("cirilica"),
  url(fonts/BRUSHSC.ttf) format("truetype");
}

</style>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default{
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
