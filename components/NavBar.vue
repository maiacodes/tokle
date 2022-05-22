<template>
  <!-- Top navigation -->
  <div class="topnav">

    <!-- Centered link -->
    <div class="topnav-centered">
      <a><img src="/wordmark.png"></a>
    </div>

    <!-- Left-aligned links (default) -->
    <a href="#" class="nav-button" v-on:click="$store.commit('setModal', 'donate')"><Icon name="mug-hot-solid" /></a>

    <!-- Right-aligned links -->
    <div class="topnav-right">
      <a href="#" class="nav-button" v-on:click="$store.commit('setModal', 'info')"><Icon name="info-solid" /></a>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  position: relative;
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.topnav-centered img {
  max-height: 50px;
}

.topnav-right {
  float: right;
}

.nav-button {
  background-color: #413f3f;
}
</style>
