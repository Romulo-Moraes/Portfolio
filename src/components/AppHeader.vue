<script>
    import ShortcutListVue from './ShortcutList.vue';
    import Overlay from './Overlay.vue';

    export default{
        components: {
            ShortcutListVue,
            Overlay
        }
    }
</script>

<template>
        <Overlay color="black" :opacity="0.7" :zindex="1" height="100%"/>

        <div class="app-header">
            <div class="name">
                <p>Rômulo Peres de Moraes</p>
            </div>
            <div class="options-place">
                <ShortcutListVue />
            </div>
        </div>
</template>

<style>
    .app-header{
        position: relative;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 100%;
        z-index: 10;
        grid-template-areas: "name options";
    }

    .name{
        grid-area: name;
        color: white;
        font-size: 160%;
        display: flex;
        flex-direction: row;
        justify-content: right;
        align-items: center;
        max-width: 340px;
        min-width: 288px;
    }

    .align-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .options-place{
        grid-area: options;
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    @media screen and (orientation: landscape){
        .app-header{
            grid-template-columns: 40% 60%;
        }

        .name{
            font-size: 155%;
            justify-content: right;
        }
    }
</style>