<template>
  <div class="post-list">
    <Loader v-if="isLoading"/>
    <div class="post-list__container container">
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
    <Pagination
        :maxPageSize="100"
        :pageSize="paginationParams.limit"
        @nextClick="nextClick"
        @prevClick="prevClick"
    />
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'
import { mapActions, mapGetters } from 'vuex'
import Pagination from '@/components/Pagination'
import Loader from '@/components/Loader'

export default {
  name: 'PostsList',
  components: {
    Loader,
    PostItem,
    Pagination
  },
  data: () => ({
    isLoading: false,
    posts: [],
    paginationParams: {
      limit: 10,
      page: 1
    },
  }),
  computed: {
    ...mapGetters(['getStatePosts'])
  },
  methods: {
    ...mapActions(['getPosts']),
    async nextClick(currentPage) {
      this.paginationParams.page = currentPage
      await this.getPosts(this.paginationParams)
      this.posts = this.getStatePosts
    },
    async prevClick(currentPage) {
      this.paginationParams.page = currentPage
      await this.getPosts(this.paginationParams)
      this.posts = this.getStatePosts
    }
  },
  async mounted() {
    this.isLoading = true
    await this.getPosts(this.paginationParams)
    this.posts = this.getStatePosts
    this.isLoading = false
  }
}
</script>

<style scoped>

</style>