<template>
    <Box >
        <p class="fs-3 text-uppercase">
            Barcha kinolar soni {{ allMoviesCount }}
        </p>
        <p class="fs-4 text-uppercaseА">Korilgan kinolar soni {{ favoriteMoviesCount }}</p>


    </Box>
</template>

<script>
import Box from '../ui-componets/Box.vue'
export default {
    components:{
        Box
    },
    props: {
        allMoviesCount: {
            type: Number,
            required: true,
        },
        favoriteMoviesCount: {
            type: Number,
            required: true,
        }
    }
}
</script>

<style scoped >

</style>