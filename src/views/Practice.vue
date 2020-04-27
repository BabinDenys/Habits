<template>
    <div class="page">

      <div class="practice1">
        <span v-for="option in options">
          <input type="checkbox" :value="option.value" :id="option.value" v-model="checklist" >
          <label :for="option.value"> {{ option.value }}</label>
        </span>

        <p>
          {{ checklist }}
        </p>
      </div>

    </div>
</template>

<script>
  export default {
    name: 'Practice.vue',
    data () {
      return {
        checklist: [],
        options: [
          {value: 'Denys'},
          {value: 'Mike'},
          {value: 'Dima'},
          {value: 'Vlad'},
          {value: 'Ulik'},
        ]
      }
    },
  }
</script>

<style scoped>

</style>
