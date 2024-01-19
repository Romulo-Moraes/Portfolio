<script>
    import ShortcutListVue from './ShortcutList.vue';

    export default{
        components: {
            ShortcutListVue
        }
    }
</script>

<template>
    <header class="app-header">
        <div class="name align-center">
            <p>Rômulo Peres de Moraes</p>
        </div>
        <div class="options-place">
            <ShortcutListVue />
        </div>
    </header>
</template>

<style>
    .app-header{
        width: 100%;
        height: 95px;
        display: grid;
        grid-template-columns: 80% calc(20% - 80px) 80px;
        grid-template-rows: 100%;
        grid-template-areas: "name . options";
    }

    .name{
        grid-area: name;
        color: white;
        font-size: 180%;
        letter-spacing: 1pt;
    }

    .align-center{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .options-place{
        padding-top: 25px;
        grid-area: options;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width:531px){
        .app-header{
            grid-template-columns: 75% calc(25% - 80px) 80px;
        }
    }

    @media screen and (min-width:620px){
        .app-header{
            grid-template-columns: 60% calc(40% - 80px) 80px;
        }
    }

    @media screen and (min-width:900px){
        .app-header{
            grid-template-columns: 45% calc(55% - 80px) 80px;
        }
    }

    @media screen and (min-width:1220px){
        .app-header{
            grid-template-columns: 35% calc(65% - 80px) 80px;
        }
    }
</style>