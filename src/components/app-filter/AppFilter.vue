<template>
    <div class='btn-group'>

        <Button v-for="btn in filterButtons"  :key="btn.name"  @click="filterHandler(btn.name)" :class="[btn.name
         ==filter ? 'btn-dark':'btn-outline-dark']"    >{{ btn.title }} </Button>
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
            filterButtons:[

            {
                title:"Barcha kinolar",
                name:"all",
            },
            {
                title:"Sevimli kinolar",
                name:"popular",
            },
            {
                title:"Eng ko'p ko'rilgan kinolar",
                name:"mostViwers",
            },
            ],
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