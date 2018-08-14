<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>test list</h2>
    <ul>
      <router-link id="Home" to="/Home">Home</router-link>
      <router-link id="FirstPage" to="/FirstPage">FirstPage</router-link>
      <router-link id="SecondPage" to="/SecondPage">SecondPage</router-link>
      <router-link id="Rest" to="/Rest">Rest</router-link>
    </ul>
    <div class="block">
      <span class="demonstration">默认颜色</span>
      <span class="wrapper">
        <el-button type="success">成功按钮</el-button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到我的vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
