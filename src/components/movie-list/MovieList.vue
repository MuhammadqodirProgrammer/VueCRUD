<template>
    <Box class=' list-group '>
        <MovieListItem v-for="movie in movies" :test="movie" :key="movie.id" @onRemove="$emit('onRemove' ,$event)" />
    </Box>
</template>

<script>
import MovieListItem from "../movie-list-item/MovieListItem.vue"
import Box from "../ui-componets/Box.vue";
export default {
    components: {
    MovieListItem,
    Box
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