<script>
    import ShortcutListVue from './ShortcutList.vue';
    import Overlay from './Overlay.vue';
    import HeaderIcon from './HeaderIcon.vue';

    export default{
        components: {
            ShortcutListVue,
            Overlay,
            HeaderIcon
        }
    }
</script>

<template>
        <Overlay color="black" :opacity="0.7" :zindex="1" height="100%"/>

        <div class="app-header">
            <div class="name">
                <p>Rômulo Peres de Moraes</p>
            </div>
            <div class="header-icons">
                <a href="https://github.com/Romulo-Moraes" target="_blank" title="Perfil Github">
                    <HeaderIcon icon="github-header.svg" color="white"/>
                </a>
                <a href="https://www.linkedin.com/in/r%C3%B4mulo-moraes-81a613231/" target="_blank" title="Perfil LinkedIn">
                    <HeaderIcon icon="linkedin.svg"/>
                </a>
            </div>
            <div class="options-place">
                <ShortcutListVue />
            </div>
        </div>
</template>

<style>
    .header-icons{
        grid-area: icons;
        justify-content: space-around;
        align-items: center;
        display: none;
    }

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

    @media screen and (orientation: landscape) and (min-width:620px){
        .header-icons{
            display: flex;
            padding-left: 30%;
        }

        .app-header{
            grid-template-columns: calc(100% - 300px) 180px 120px;
            grid-template-areas: "name icons options";
        }

        .options-place{
            align-items: center;
        }
    }

</style>