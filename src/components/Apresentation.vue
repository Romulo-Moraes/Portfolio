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
        <Overlay color="black" :opacity="0.7" :zindex="1" height="100%"/>
        <section class="introduction">
            <h1 class="role">SOFTWARE<span class="possible-breakline"></span> DEVELOPER</h1>
            <div class="introduction-text">
                <p>Programador e entusiasta da computação que ama estar sempre aprendendo novas coisas sobre programação e tecnologia</p>
            </div>
        </section>
        <section class="arrow-placeholder">
            <ArrowDown dimensions="30px"/>
        </section>
    </section>
</template>

<style>
    .possible-breakline::after{
        content: '\a';
        white-space: pre;
    }

    .arrow-placeholder{
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: end;
      padding-bottom: 5%;
      z-index: 2;
    }

    .introduction{
        position: relative;
        width: 70%;
        height: auto;
        z-index: 2;
    }

    .introduction > h1{
        font-size: 255%;
        font-weight: 500;
    }

    .introduction-text > p{
        margin-top: 10%;
        font-size: 120%;
    }

    .introduction-text{
        max-width: 500px;
    }

    .apresentation{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (orientation: landscape){
        .possible-breakline::after{
            content: ' ';
        }
        
        .introduction{
            width: 75%;
            padding-top: 1%;
        }   
        
        .introduction > h1{
            font-size: 200%;
            line-height: 125%;
        }

        .introduction-text{
            max-width: 380px;
        }

        .introduction-text > p{
            margin-top: 4%;
            font-size: 110%;
            letter-spacing: 1pt;
            line-height: 180%;
        }

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
    }

    @media screen and (orientation: landscape) and (min-width: 800px){
        .introduction > h1{
            margin-top: 3%;
            font-size: 270%;
            line-height: 125%;
        }

        .introduction-text > p{
            font-size: 130%;
        }

        .introduction-text{
            max-width: 600px;
        }
    }

    @media screen and (orientation: landscape) and (min-width: 1200px){
        .introduction > h1{
            margin-top: 1%;
        }
    }
</style>