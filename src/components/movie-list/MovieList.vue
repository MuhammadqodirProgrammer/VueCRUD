<template>
    <ul class='movie_list list-group '>
        <MovieListItem v-for="movie in movies" :test="movie" :key="movie.id" @onRemove="$emit('onRemove' ,$event)" />
    </ul>
</template>

<script>
import MovieListItem from "../movie-list-item/MovieListItem.vue"
export default {
    components: {
        MovieListItem,
    },
    props: {
        movies: {
            type: Array,
            required: false,
        }
    }

}
</script>

<style scoped>
.movie_list {
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #fcfaf5;
    border-radius: 4px;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
}
</style>