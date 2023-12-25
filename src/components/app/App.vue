
<template>
  <div class='app font-monospace'>

    <div class='content'>
      <AppInfo v-bind:allMoviesCount="movies.length" v-bind:favoriteMoviesCount="movies.filter(e => e.favorite).length" />

      <div class='search_panel'>
        <SearchPanel  v-bind:updateTermHendler="updateTermHendler"  />
        <AppFilter v-bind:updateFilterHendler="updateFilterHendler"  />
      </div>
      <MovieList v-bind:movies="onFilterHandler(onSearchHendler(movies ,term), filter)" @onRemove="hendleDelete"   />

      <MovieAddForm @createMovie="createMovie" />
    </div>
  </div>
</template>

<script>
import SearchPanel from "../search-panel/SearchPanel.vue"
import AppFilter from "../app-filter/AppFilter.vue"
import MovieList from "../movie-list/MovieList.vue"
import MovieAddForm from "../movie-add-form/MovieAddForm.vue"
import AppInfo from "../app-info/AppInfo.vue"

export default {
  components: {
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm,
    AppInfo
  },
  data() {
    return {
      movies: [
        {
          id: 1,
          name: "Uyga qaytish",
          viwers: 200,
          favorite: false,
          like: false,
        },
        {
          id: 2,
          name: "Osmondagi bolalar",
          viwers: 2110,
          favorite: false,
          like: false,

        },
        {
          id: 3,
          name: " Muhabbat oyatlari ",
          viwers: 2500,
          favorite: true,
          like: true,

        },
      ],
      message: '',
      term: '',
      filter:"all",
    }
  },
  methods: {
    createMovie(item) {
      this.movies.push(item)
    },
    hendleDelete(id) {
      this.movies = this.movies.filter(item => item.id !== id)
    },
    onSearchHendler(arr , term){
if(term.length == 0){
return arr
}

return arr.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
    },
    updateTermHendler(term){
this.term = term
    },
    onFilterHandler(arr , filter){
switch (filter) {
  case 'popular':
    return arr.filter(item=>item.like)
  case "mostViwers":
    return arr.filter(item=>item.viwers > 500)

  default:
  return arr 
  
}
    },
    updateFilterHendler(filter){
      this.filter =filter

    }
    
  },

}
</script>

<style>
.app {
  height: 100vh;
  color: teal;
}

.content {
  width: 1000px;
  min-height: 700px;
  background-color: white;
  margin: 0 auto;
  padding: 5rem 0;
}

.search_panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fcfaf5;
  border-radius: 4px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
}
</style>