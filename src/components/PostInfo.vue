<template>
  <div class="post-info">
    <Loader v-if="isLoading"/>
    <div class="post-info__container container" v-if="post || isLoading">
      <div class="post-info__title">{{post.title}}</div>
      <div class="post-info__body">{{post.body}}</div>
    </div>
  </div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex'
import Loader from '@/components/Loader'

export default {
  name: 'PostInfo',
  components: {Loader},
  data: () => ({
    post: [],
    isLoading: true
  }),
  computed: {
    ...mapGetters(['getStatePostDetails'])
  },
  methods: {
    ...mapActions(['getPostDetails'])
  },
  async mounted() {
    await this.getPostDetails(this.$route.params.id)
    this.post = this.getStatePostDetails
    this.isLoading = false
  }
}
</script>

<style scoped lang="scss">
.post-info__title {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
}
.post-info__body {
  font-size: 14px;
  font-weight: 500;
  opacity: .6;
}
</style>