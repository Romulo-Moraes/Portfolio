<script>
    export default{
        props: [
            'fontSize',
            'dataIsPlainText',
            'data',
            'icon',
            'componentWidth',
            'clickable',
            'borderRadius',
            'iconDimensions'
        ],

        methods: {
            getImageURL(){
                return new URL(`../assets/images/${this.$props.icon}`, import.meta.url);
            }
        },

        computed: {
            cssProps(){
                return {
                    '--data-font-size' : this.$props.fontSize,
                    '--component-width' : this.$props.componentWidth,
                    '--cursor-style' : this.$props.clickable ? 'pointer' : 'text',
                    '--border-radius' : this.$props.borderRadius,
                    '--icon-width' : this.$props.iconDimensions,
                    '--icon-height' : this.$props.iconDimensions
                }
            }
        }
    }
</script>

<template>
    <div class="datahighlight-component" :style="cssProps">
        <div v-if="this.$props.dataIsPlainText">
            <p class="highlighted-data">{{ this.$props.data }}</p>
        </div>
        <div class="data-alongside-image" v-else>
            <img class="data-icon" :src="this.getImageURL()" alt="">
            <p class="highlighted-data">{{ this.$props.data }}</p>
        </div>
    </div>
</template>

<style>
    .highlighted-data{
        margin-left: 8px;
    }

    .data-icon{
        width: var(--icon-width);
        height: var(--icon-height);
        border-radius: var(--border-radius);
    }

    .data-alongside-image{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

    .datahighlight-component{
        width: var(--component-width);
        position: relative;
        background-color: #282A36;
        border: 2px solid #FFD645;
        font-size: var(--data-font-size);
        border-radius: 5px;
        padding: 6px 10px 6px 10px;
        margin-top: 5%;
        cursor: var(--cursor-style);
    }

    .datahighlight-component ~ .datahighlight-component{
        margin-left: 5%;
    }

    @media screen and (orientation: landscape) and (min-width: 610px) {
        .datahighlight-component{
            margin-top: 3%;
        }
    }

    @media screen and (orientation: landscape) and (min-width: 1000px) {
        .datahighlight-component{
            margin-top: 1%;
        }

        .datahighlight-component{
            font-size: calc(var(--data-font-size) + 4px);
            width: calc(var(--component-width) + 8px);
        }
    }
</style>