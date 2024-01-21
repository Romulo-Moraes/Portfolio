<script>
    export default{
        props: [
            'image',
            'techName',
            'dotTranslate'
        ],
        
        methods: {
            getImageURL(){
                return new URL(`../assets/images/${this.$props.image}`, import.meta.url);
            }
        },

        computed: {
            cssProps(){
                return {
                    '--tech-dot-translate' : this.$props.dotTranslate
                }
            }
        }
    }
</script>

<template>
    <div class="technology-component">      
        <div class="tech-dot" :style="cssProps"></div>
        <div class="tech-image-placeholder">
            <img class="tech-image" :src="this.getImageURL()"/>
            <p class="tech-name">{{ this.$props.techName }}</p>
        </div>
    </div>
</template>

<style>
    .tech-name{
        font-size: 120%;
        text-align: center;
        line-height: 120%;
        padding-top: 6.5%;
    }

    .tech-image{
        width: 45px;
    }

    .tech-image-placeholder{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 98px;
    }

    .technology-component{
        margin-left: 1%;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 110px;
        height: 100px;
    }

    .tech-dot{
        position: relative;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background-color: #D9D9D9;
        transform: translateY(var(--tech-dot-translate));
    }
</style>