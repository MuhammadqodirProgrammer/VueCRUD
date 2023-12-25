<template>
    <div class="app_info">
        <p class="fs-3 text-uppercase">
            Barcha kinolar soni {{ allMoviesCount }}
        </p>
        <p class="fs-4 text-uppercaseА">Korilgan kinolar soni {{ favoriteMoviesCount }}</p>


    </div>
</template>

<script>
export default {
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
.app_info {
    padding: 1.5rem;
    background-color: #fcfaf5;
    border-radius: 4px;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
}
</style>