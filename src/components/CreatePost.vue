<template>
  <div class="create-post">
    <div class="create-post__container container">
      <button @click="toggleModal" class="create-post__button button">Create Post</button>
    </div>
    <CreatePostForm
      v-if="this.isModal"
      @createPostHandler="createPost"
      @closeModal="toggleModal"
    />
    <Loader v-if="isLoading"/>
  </div>
</template>

<script>
import CreatePostForm from '@/components/CreatePostForm'
import {mapMutations, mapActions} from 'vuex'
import Loader from '@/components/Loader'
export default {
  name: 'CreatePost',
  components: {
    Loader,
    CreatePostForm
  },
  data: () => ({
    isModal: false,
    isLoading: false
  }),
  methods: {
    ...mapMutations(['addPost']),
    ...mapActions(['setPost']),
    toggleModal() {
      this.isModal = !this.isModal
    },
    async createPost(postData) {
      this.isModal = false
      this.isLoading = true
      await this.setPost(postData)
      this.isLoading = false
    }
  }
}
</script>

<style scoped lang="scss">
.create-post {
  margin-bottom: 20px;
}
</style>