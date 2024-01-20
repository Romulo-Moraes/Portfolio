<script>
    export default{
        props: [
            'fontSize'
        ],

        computed: {
            cssProps(){
                return {
                    '--button-font-size' : this.$props.fontSize
                }
            }
        },

        data(){
            return {
                buttonText : 'Ver imagem'
            }
        },

        methods: {
            toggleButtonTextState(){
                if(this.buttonText === 'Ver imagem'){
                    this.buttonText = 'Esconder imagem';
                }else{
                    this.buttonText = 'Ver imagem';
                }
            }
        }
    }
</script>

<template>
    <div class="show-image-button-placeholder">
        <button class="show-image-button" :style="cssProps">
            {{ this.buttonText }}
        </button>
    </div>
</template>

<style>
    button.show-image-button{
        border: 2px solid #FFD645;
        background-color: #111111;
        color: #E1E1E1;
        padding: 1.5%;
        border-radius: 7px;
        font-weight: bold;
        font-size: var(--button-font-size);
        cursor: pointer;
    }

    @media screen and (min-width:950px){
        button.show-image-button{
            display: none;
        }
    }
</style>