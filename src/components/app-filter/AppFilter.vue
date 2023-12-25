<template>
    <div class='btn-group'>
        <button class="btn  " type="button" @click="filterHandler('all')"   :class="['all' ==filter ? 'btn-dark':'btn-outline-dark']" >Barchasi</button>
        <button class="btn " type="button" @click="filterHandler('popular')"   
        :class="['popular' ==filter ? 'btn-dark':'btn-outline-dark']" 
        >Sevimli kinolar</button>
        <button class="btn  " type="button" @click="filterHandler('mostViwers')"
        :class="['mostViwers'
         ==filter ? 'btn-dark':'btn-outline-dark']" 
        >Eng kop korilgan
            kinolar</button>
    </div>

</template>

<script>
export default {
    props: {
        updateFilterHendler: {
            type: Function,
            required: true
        },
       
    },
    data() {
        return {
            filter: "all"
        }
    },
    methods: {
        filterHandler(filter) {
            this.filter = filter
            this.updateFilterHendler(filter)
        }
    },
  
}
</script>

<style lang="scss" scoped></style>