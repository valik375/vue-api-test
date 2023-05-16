<template>
  <div class="users-list">
    <Loader v-if="isLoading" />
    <div class="users-list__container container">
      <UserItem
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
    </div>
    <Pagination
      :maxPageSize="10"
      :pageSize="paginationParams.limit"
      @nextClick="nextClick"
      @prevClick="prevClick"
    />
  </div>
</template>

<script>
import UserItem from '@/components/UserItem'
import { mapActions, mapGetters } from 'vuex'
import Pagination from '@/components/Pagination'
import Loader from '@/components/Loader'

export default {
  name: 'UsersList',
  components: {
    Loader,
    Pagination,
    UserItem
  },
  data: () => ({
    isLoading: false,
    users: [],
    paginationParams: {
      limit: 5,
      page: 1
    }
  }),
  computed: {
    ...mapGetters(['getStateUsers'])
  },
  methods: {
    ...mapActions(['getUsers']),
    async prevClick(currentPage) {
      this.paginationParams.page = currentPage
      await this.getUsers(this.paginationParams)
      this.users = this.getStateUsers
    },
    async nextClick(currentPage) {
      this.paginationParams.page = currentPage
      await this.getUsers(this.paginationParams)
      this.users = this.getStateUsers
    }
  },
  async mounted() {
    this.isLoading = true
    await this.getUsers(this.paginationParams)
    this.users = this.getStateUsers
    this.isLoading = false
  }
}
</script>

<style scoped lang="scss">

</style>