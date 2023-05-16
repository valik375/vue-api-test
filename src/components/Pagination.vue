<template>
  <div class="pagination">
    <div @click="prevClick" class="pagination__prev-button pagination__button"> &#x3c; </div>
    <div class="pagination__current-page">{{currentPage}}</div>
    <div @click="nextClick" class="pagination__next-button pagination__button"> &#x3e; </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['maxPageSize', 'pageSize'],
  data: () => ({
    currentPage: 1,
  }),
  methods: {
    prevClick() {
      if (this.currentPage > 1) {
        this.currentPage -= 1
        this.$emit('prevClick', this.currentPage)
      }
    },
    nextClick() {
      if (this.currentPage  * this.pageSize < this.maxPageSize) {
        this.currentPage += 1
        this.$emit('nextClick', this.currentPage)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 200px;
  margin: 20px auto;
}
.pagination__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: #42b983 solid 2px;
  color: #42b983;
  font-size: 20px;
  font-weight: 700;
}
.pagination__current-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: #42b983 solid 2px;
  color: #42b983;
  font-size: 18px;
  font-weight: 500;
}
</style>