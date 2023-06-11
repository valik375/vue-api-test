<template>
  <div class="list-item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ListItem'
}
</script>

<style scoped lang="scss">
  .list-item {
    padding: 20px;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 2px solid #000000;
  }
</style>