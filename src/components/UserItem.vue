<template>
  <div class="user-item">
    <ListItem>
      <router-link class="user-item__link" :to="`/${user.id}`">
        <div class="user-item__name">Full name: {{ user.name }}</div>
        <div class="user-item__email">Email: {{ user.email }}</div>
        <div class="user-item__website">Website: {{ user.website }}</div>
      </router-link>
    </ListItem>
  </div>
</template>

<script>
import ListItem from '@/UI/ListItem'
import routeHelper from '@/helpers/routeHelper'

export default {
  name: 'UserItem',
  props: ['user'],
  components: {
    ListItem
  },
  data: () => ({
    routeHelper: routeHelper
  })
}
</script>

<style scoped lang="scss">
.user-item {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

.user-item__name {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  margin-bottom: 10px;
}

.user-item__email {
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin-bottom: 10px;
}

.user-item__link {
  display: flex;
  flex-direction: column;
}
</style>