<template>
    <Box class=' list-group '>
        <MovieListItem v-for="movie in movies" :test="movie" :key="movie.id" @onRemove="$emit('onRemove' ,$event)" />
    </Box>
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

</style>