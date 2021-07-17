<template>
  <div id="app">
      <todo-list/>
    <div v-if="name.length > 20">
      <img alt="Vue logo" src="./assets/logo.png" />
      <input v-model="name" />
      <input v-model="surname" />
      <p :title="fullName">{{ fullName }}</p>
      <button @click="aaaName">aaaa</button>
      <button @click="nullName">null</button>
      <HelloWorld :nullName="nullName" :msg="name" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TodoList from './components/TodoList/TodoList.vue';

export default {
  components: { HelloWorld, TodoList },
  data() {
    return {
      name: "Empty",
      surname: "Emptyevich",
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    nullName(value) {
      console.log(value);
      this.name = "";
      this.surname = "";
    },
    aaaName() {
      this.name = "aaaa";
    },
  },
  computed: {
    fullName() {
      return this.name + " " + this.surname;
    },
  },
  created() {},
  mounted() {
    this.name = "loh";
  },
  beforeDestroy() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
