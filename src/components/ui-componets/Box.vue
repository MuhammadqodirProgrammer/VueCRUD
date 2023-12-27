<template>
    <div class="my_box">
<slot></slot>
    </div>
</template>

<script>
export default {
name:"Box",
}
</script>

<style  scoped>
.my_box {
    margin-top:1.5rem;
    padding: 1.5rem;
    background-color: #fcfaf5;
    border-radius: 4px;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.3);
}

</style>