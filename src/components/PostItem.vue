<template>
  <div class="post-item">
    <ListItem>
      <router-link :to="`${routeHelper.postDetailsPagePath}${post.id}`">
        <div class="post-item__title">{{ post.title }}</div>
        <div class="post-item__body">{{ post.body }}</div>
      </router-link>
    </ListItem>
  </div>
</template>

<script>
import ListItem from '@/UI/ListItem'
import routeHelper from '@/helpers/routeHelper'
export default {
  name: 'PostItem',
  components: {
    ListItem
  },
  props: ['post'],
  data: () => ({
    routeHelper: routeHelper
  })
}
</script>

<style scoped lang="scss">
.post-item {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}
.post-item__title {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
  color: #000;
}
.post-item__body {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}
</style>