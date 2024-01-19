<script lang="ts">
  import AppHeader from '@/components/AppHeader.vue';
  import Apresentation from '@/components/Apresentation.vue';
  import ArrowDown from '@/components/ArrowDown.vue';
  import Overlay from '@/components/Overlay.vue';

  export default{
    components: {
      AppHeader,
      Apresentation,
      ArrowDown,
      Overlay
    }
  }
</script>

<template>
  <div id="view-wrapper">
    <Overlay color="black" :opacity="0.7" :zindex="1"/>
    <header id="view-header">
      <AppHeader />
    </header>
    <main id="page-content">
      <section id="first-page">
        <Apresentation />
      </section>
   </main>
   <section class="arrow-placeholder">
    <ArrowDown />
   </section>
  </div>
  
</template>

<style>
    *{
      margin: 0;
      padding: 0;
    }

    #page-content{
      z-index: 2;
    }

    .arrow-placeholder{
      position: absolute;
      left: calc(100vw / 2 - 30px);
      top: calc(100vh - 55px);
      z-index: 2;
    }

    #view-wrapper{
      display: flex;
      flex-direction: column;
      background-image: url(./../assets/images/background.png);
      background-size: cover;
    }

    #view-header{
      grid-area: view-header;
      z-index: 2;
    }

    main{
      z-index: 2;
      width: 100%;
      height: auto;
      display: grid;
      grid-template-rows: calc(100vh - 75px);
      grid-template-columns: 100%;
      grid-template-areas: "first";
    }

    #first-page{
      position: relative;
      grid-area: first;
    }

    .background-image{
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
</style>