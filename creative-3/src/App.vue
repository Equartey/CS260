<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-nav flex-row">
        <router-link class="nav-link mr-4" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
      </div>
    </nav>
    <router-view />
    <a
      href="https://github.com/Equartey/CS260/tree/master/creative-3"
      class="repo text-muted"
      target="_blank"
      >GitHub</a
    >
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  height: 100%;
  position: relative;
  padding-bottom: 40px;
}

#nav {
  padding: 30px;
  padding-bottom: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.repo:visited,
.repo {
  text-align: center;
  font-size: 16px;
  position: absolute;
  bottom: 5px;
  margin: auto;
  word-break: break-all;
  left: 20px;
  right: 20px;
}

h1 {
  font-size: 2.25rem;
}
</style>
