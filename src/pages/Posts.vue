<template>
  <div class="posts">
    <CreatePost />
    <PostsList />
  </div>
</template>
<script>
import PostsList from '@/components/PostsList'
import CreatePost from '@/components/CreatePost'
export default {
  name: 'Posts',
  components: {
    CreatePost,
    PostsList
  }
}
</script>
