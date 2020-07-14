<template>
    <div>
        <button @click="show = !show">click</button>
        <transition>
            <div v-if="show" class="text">
                i is div
            </div>
        </transition>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            show:true
        }
    },
    mounted(){
        console.log(this);
    }
}
</script>

<style scoped>
    .text{
        background-color: red;
        color: yellow;
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        margin-top: 20px;
    }
    .v-enter{
        position: absolute;
        right: 0;
        opacity: 0;
    }
    .v-enter-active{
        transition: all 3s;
    }
    .v-enter-to{
        position: absolute;
        right:calc(100% - 100px) ;
         opacity: 1;
    }
    .v-leave{
        transform: translateY(0);
         opacity: 1;
    }
    .v-leave-active{
        transition: all 3s;
    }
    .v-leave-to{
         transform: translateY(100%);
         opacity: 0;
    }
</style>
