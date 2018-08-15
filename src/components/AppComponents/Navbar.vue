// components/AppComponents/Navbar.vue
<template>
  <el-menu theme="dark" :default-active="activeIndex"
  class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="7">
      <router-link id="Home" to="/" index="/1" >
        <img src="../../assets/logo.png">
      </router-link>
    </el-menu-item>
    <el-menu-item id="Home" >
      <router-link id="Home" to="/" index="/Home">Home</router-link>
    </el-menu-item>
    <el-menu-item index="/FirstPart">
      <router-link id="Home" to="/FirstPage" index="/7">FirstPage</router-link>
    </el-menu-item>
    <el-submenu index="3">
      <template slot="title">Projects</template>
      <el-menu-item index="3-1">Shiny</el-menu-item>
      <el-menu-item index="3-2">LearnVue</el-menu-item>
      <el-menu-item index="3-3">OtherProject</el-menu-item>
    </el-submenu>
    <el-menu-item index="4">Login</el-menu-item>
    <el-menu-item index="5">Resume</el-menu-item>
    <el-menu-item index="6">About</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
  }
}
</script>
<style>
a:any-link {
  color: -webkit-link;
  text-decoration: none;
}
img{
  width:40px;
}
</style>
