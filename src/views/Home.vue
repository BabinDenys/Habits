<template>
  <div class="home">
    <el-button type="success" round @click="changeName">Success</el-button>
    <button> Я кнопка </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    changeName () {
      console.log('ээээээ')
    }
  }
}
</script>

<style scoped>
button {
  width: ;
}
</style>
