<template>
    <li class="  list-group-item d-flex justify-content-between  " :class="[{ like: test.like }, { favorite: test.favorite }]">
        <span class="list-group-item-label " @click="onLike" title="bosing va sevimlilarga qoshing" >
            {{ test.name }}
        </span>
        <input type="number" class="list-group-item-input" :value="test.viwers" />
        <div class=" d-flex   justify-content-center gap-2 align-items-center  ">

            <button class="btn-cookie btn-sm " @click="onFavorite" title="korilganlarga qoshish uchun bosing" >
                <i class="fa fa-cookie "></i>
            </button>

            <button class="btn-trash btn-sm " @click="$emit('onRemove' ,test.id)" >
                <i class="fa fa-trash "></i>
            </button>
           
            <i class="fa-solid fa-star"></i>


        </div>
    </li>
</template>

<script>
export default {
    props: {
        test: {
            type: Object,
            required: true,
        }
    },
    methods: {
        onLike() {
            this.test.like = !(this.test.like)
        },
        onFavorite() {
            this.test.favorite = !(this.test.favorite)
        }
    },
}
</script>

<style  scoped>
.list-group-item {
    padding: 15px;
    border-bottom: 1px solid #3d5a80;

}

.list-group-item:last-child {
    border-bottom: none !important;
}

.list-group-item span {
    line-height: 35px;
    font-size: 20px;
    cursor: pointer;
    width: 550px;
}

.list-group-item input {
    line-height: 35px;
    font-size: 20px;
    text-align: center;
    border: none;
    outline: none;
}

.list-group-item button {
    width: 35px;
    height: 35px;
    font-size: 17px;
    border: none;
    cursor: pointer;
    background: transparent !important;
}

.list-group-item .btn-cookie {
    color: #e09f03;
}

.list-group-item .btn-trash {
    color: red;
}

.list-group-item .fa-star {
    color: #e09f03;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    transition: all 0.3s;
    transform: translateX(30px);
    opacity: 0;

}

.list-group-item.like .fa-star {
    opacity: 1;
    transform: translateX(0px);

}

.list-group-item.favorite .list-group-item-label,
.list-group-item.favorite .list-group-item-input {
    color: #e09f03;
}
</style>