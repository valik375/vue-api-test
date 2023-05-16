<template>
  <div class="post-form">
    <div class="post-form__container container">
      <div @click="closeModal" class="post-form__close">X</div>
      <h1 class="post-form__title">Create Post</h1>
      <form @submit.prevent="createPost" class="post-form__form">
        <input v-model="title" type="text" class="post-form__input input" placeholder="Title" required>
        <input v-model="body" type="text" class="post-form__input input" placeholder="Body" required>
        <button class="post-form__button button" type="submit">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatePostForm',
  data: () => ({
    title: '',
    body: '',
  }),
  methods: {
    createPost() {
      const postData = {
        title: this.title,
        body: this.body,
        id: Date.now()
      }
      this.$emit('createPostHandler', postData)
      this.title = ''
      this.body = ''
    },
    closeModal() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped lang="scss">
.post-form__input {
  margin-bottom: 10px;
}
.post-form {
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  width: 100%;
  height: 100vh;
  padding: 30px 0;
}
.post-form__close {
  position: absolute;
  right: 30px;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  color: #fff;
  background: #42b983;
  border-radius: 4px;
}
.post-form__title {
  margin-bottom: 20px;
}
</style>