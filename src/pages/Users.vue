<template>
  <div class="users-page">
    <UsersList />
  </div>
</template>

<script>
import UsersList from '@/components/UsersList'
export default {
  name: 'Users',
  components: {
    UsersList
  }
}
</script>

