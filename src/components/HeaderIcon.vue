<script>
    export default{
        props : [
            'icon',
            'color'
        ],

        methods: {
            getImageURL(){
                return new URL(`../assets/images/${this.$props.icon}`, import.meta.url).href;
            }
        },

        computed: {
            cssProps(){
                return {
                    '--color' : this.$props.color
                }
            }
        }
    }
</script>

<template>
    <section class="header-icon-component" :style="cssProps">
        <img class="header-icon" :src="getImageURL()" alt="">
    </section>
</template>

<style>
    .header-icon{
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background: var(--color);
        cursor: pointer;
    }
</style>