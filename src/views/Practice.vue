<template>
    <div class="page">

<!--      <div class="practice1">-->
<!--        <span v-for="option in options">-->
<!--          <input type="checkbox" :value="option.value" :id="option.value" v-model="checklist" >-->
<!--          <label :for="option.value"> {{ option.value }}</label>-->
<!--          -->
<!--          -->
<!--        </span>-->

<!--        <p>-->
<!--          {{ checklist }}-->
<!--        </p>-->
<!--      </div>-->

      <input type="text" v-model="text">
      <p>
        {{ text }}
      </p>

      <el-button type="success" round @click="addItem">Жмакни меня</el-button>

     <ol v-for="elem in list">
       <input type="checkbox" class="checkbox" :value="elem" :id="elem" @click="edit">
       <div class="lixt__text">
         <label :for="elem">
           {{ elem }}
         </label>
       </div>

     </ol>

    </div>
</template>

<script>
  export default {
    name: 'Practice.vue',
    data () {
      return {
        checklist: [],
        text: '',
        options: [
          {value: 'Denys'},
          {value: 'Mike'},
          {value: 'Dima'},
          {value: 'Vlad'},
          {value: 'Ulik'},
        ],
        list: []
      }
    },
    methods: {
      addItem () {
        this.list.push(this.text)
        console.log(this.list)
        this.text = ''
      },
      edit () {

      }
    }
  }
</script>

<style scoped>
  .lixt__text {
    width: min-content;
    height: 20px;
    border-radius: 20px;
    background-color: orange;
    font-size: 24px;
    margin: 20px;
    color: azure;
    padding: 5px;

  }

  .checkbox {
    float: left;
  }
</style>
