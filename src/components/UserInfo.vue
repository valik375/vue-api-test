<template>
  <div class="user-info">
    <Loader v-if="isLoading" />
    <div class="user-info__container container" v-if="userData !== []">
      <div class="user-info__name">{{userData.name}}</div>
      <div class="user-info__email">{{userData.email}}</div>
      <a
        class="user-info__website"
        target="_blank"
        :href="userData.website"
      >Website: {{userData.website}}</a>
      <div class="user-info__title">Address</div>
      <div class="user-info__address" v-if="userData.address">
        <div class="user-info__city">{{userData.address.city}}</div>
        <div class="user-info__street">{{userData.address.street}}</div>
        <div class="user-info__zipcode">{{userData.address.zipcode}}</div>
      </div>
      <div class="user-info__title">Company</div>
      <div class="user-info__company-name" v-if="userData.company">{{userData.company.name}}</div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Loader from '@/components/Loader'

export default {
  name: 'UserInfo',
  components: {
    Loader
  },
  data: () => ({
    userData: [],
    isLoading: true,
  }),
  computed: {
    ...mapGetters(['getStateUserDetails'])
  },
  methods: {
    ...mapActions(['getUserDetails'])
  },
  async mounted() {
    await this.getUserDetails(this.$route.params.id)
    this.userData = this.getStateUserDetails
    this.isLoading = false

  }
}
</script>
<style scoped lang="scss">
.user-info__name {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}
.user-info__email {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
}
.user-info__website {
  font-size: 16px;
  font-weight: 500;
  color: blue;
  margin-bottom: 20px;
  display: block;
}
.user-info__title {
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 2px solid #000;
  margin-bottom: 20px;
}
.user-info__city {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
}
.user-info__street {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
}
.user-info__zipcode {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
}
.user-info__company-name {
  font-size: 18px;
  font-weight: 600;
}
</style>
