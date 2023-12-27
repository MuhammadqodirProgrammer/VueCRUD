<template>
    <Box class="movie_add_form ">
<h3> Yangi kino qoshish</h3>
<form class="add_form d-flex gap-2 "  @submit.prevent="addMovie" >
<input type='text' placeholder="Qanday kino? " class="form-control new_movie_label" v-bind:value="name" @input="name =$event.target.value" >
<input type='number' placeholder="Nechi marotaba korilgan? " class="form-control new_movie_label" v-bind:value="viewers" @input="viewers  = $event.target.value" >
<Button class="btn-outline-dark">Qoshish</Button>
</form>
</Box>
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
@media (max-width:800px){
    .add_form{
        flex-wrap: wrap !important;
    }
}
</style>