<template>
  <div id="app">
    <h1>My Todolist</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Todo text="My Todo" v-bind:date="date" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Todo from "@/components/Todo/Todo";

export default {
  name: "App",
  components: {
    HelloWorld,
    Todo
  },
  data: function() {
    return {
      date: new Date()
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
