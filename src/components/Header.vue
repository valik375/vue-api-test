<template>
  <div class="header">
    <nav class="header__nav container">
      <div class="header__logo">TestApp</div>
      <div class="header__route-wrapper" v-for="route in navRoutes">
        <router-link class="header__route button" :to="route.path">{{ route.name }}</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import routeHelper from '@/helpers/routeHelper'

export default {
  name: 'Header',
  data: () => ({
    routeHelper: routeHelper,
    navRoutes: [
      {
        name: routeHelper.usersPageName,
        path: routeHelper.usersPagePath
      },
      {
        name: routeHelper.postsPageName,
        path: routeHelper.postsPagePath
      }
    ]
  }),
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}

.header__nav {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.header__logo {
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin-right: 30px;
}

.header__route {
  margin-right: 10px;
}
</style>