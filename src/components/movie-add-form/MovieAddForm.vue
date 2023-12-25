<template>
    <div class="movie_add_form ">
<h3> Yangi kino qoshish</h3>
<form class="add_form d-flex "  @submit.prevent="addMovie" >
<input type='text' placeholder="Qanday kino? " class="form-control new_movie_label" v-bind:value="name" @input="name =$event.target.value" >
<input type='number' placeholder="Nechi marotaba korilgan? " class="form-control new_movie_label" v-bind:value="viewers" @input="viewers  = $event.target.value" >
<button class="btn btn-outline-dark">Qoshish</button>
</form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
              name:"",
              viewers:"",  
            }
        },
    methods: {
        addMovie(){
           if(!this.name || !this.viewers )return alert("Iltimos kino va korishlar sonini kiriting!")
            const newMovie ={
                        id:Date.now(),
                        name:this.name,
                        viwers:this.viewers,
                        favorite:false,
                        like:false,
            }

           this.$emit("createMovie",newMovie  )
           this.name =""
           this.viewers =""
        }
    },
    }
</script>

<style  scoped>
.movie_add_form{
    margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3) ;

}
</style>