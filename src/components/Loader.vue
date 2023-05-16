<template>
<div class="loader">
  <div class="loader__wrapper">
    <div class="lds-dual-ring"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped lang="scss">
.loader {
  width: 100%;
  height: 100vh;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #42b983;
  border-color: #42b983 transparent #42b983 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>