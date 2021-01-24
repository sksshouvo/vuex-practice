<template>
  <div id="app">
    <img v-bind:src="logoPath">
    <p>Full Application</p>
    <newNavbar/>
    <newBody/>
    <newFooter/>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import Body from './components/body'
import Footer from './components/footer'
export default {
  name: 'App',
  data(){
    return {
      logoPath: "./assets/logo.png"
    }
  },
  components: {
    newNavbar: Navbar,
    newBody: Body,
    newFooter: Footer
  }
}

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
