<template >
  <input type='text' placeholder="Kinolarni qilish.." class="form-control search_input" 
 v-model="term"

  @input="updateTermHendler(term)" >
</template>

<script>
export default {
    props:{
      updateTermHendler:{
        type: Function,
       required: true,
      }
    },
    data() {
      return {
        term:"",
      }
    },
}
</script>
<style scoped >
    .search_input{
        margin-top: 2rem;
        margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3) ;
    }
</style>