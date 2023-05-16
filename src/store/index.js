import { createStore } from 'vuex'
import users_store from '@/store/users_store'
import posts_store from '@/store/posts_store'

export default createStore({
  modules: {
    users_store,
    posts_store
  }
})
