<script>
    import Overlay from './Overlay.vue';
    import ArrowDown from './ArrowDown.vue';

    export default{
        components: {
            Overlay,
            ArrowDown
        }
    }
</script>

<template>
    <section class="apresentation">
        <Overlay color="black" :opacity="0.6" :zindex="1" height="100%"/>
        <section class="introduction">
            <h1 class="role">SOFTWARE<br/>DEVELOPER</h1>
            <div class="introduction-text">
                <p>Programador e entusiasta da computação que ama estar sempre aprendendo novas coisas sobre programação e tecnologia</p>
            </div>
        </section>
        <section class="arrow-placeholder">
            <ArrowDown />
        </section>
    </section>
</template>

<style>
    .arrow-placeholder{
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: end;
      padding-bottom: 2%;
      z-index: 2;
    }

    .introduction{
        position: relative;
        width: 70%;
        height: auto;
        z-index: 2;
    }

    .introduction > h1{
        font-size: 330%;
        
    }

    .introduction-text{
        max-width: 500px;
    }

    .introduction-text > p{
        margin-top: 5%;
        font-size: 130%;
        letter-spacing: 1pt;
    }

    .apresentation{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (min-width: 900px){
        .introduction{
            width: 80%;
        }
    }
</style>