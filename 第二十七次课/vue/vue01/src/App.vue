<template>
  <div id="app">
    <img src="./assets/logo.png" />

     <!-- <My /> -->
    <student />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
// import My from "./components/My";
// import My from "./components/My";
import Student from "./components/Student";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // My
    Student,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color:aqua;
}
</style>
