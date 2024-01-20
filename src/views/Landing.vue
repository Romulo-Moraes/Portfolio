<script lang="ts">
  import AppHeader from '@/components/AppHeader.vue';
  import Apresentation from '@/components/Apresentation.vue';
  import ArrowDown from '@/components/ArrowDown.vue';
  import Overlay from '@/components/Overlay.vue';
  import AboutMe from '@/components/AboutMe.vue';
import { ref } from 'vue';

  export default{
    components: {
      AppHeader,
      Apresentation,
      ArrowDown,
      Overlay,
      AboutMe
    },
    
    data(){
      return {
        headerElementReference : ref(null),
        firstPageElementReference : ref(null),
        backgroundImageElementReference : ref(null)
      }
    },
    
    mounted(){
      this.setBackgroundImageHeight();
      window.addEventListener('resize', this.setBackgroundImageHeight);
    },

    methods: {
      setBackgroundImageHeight(){
        const headerComputedStyle = window.getComputedStyle(this.$refs.headerElementReference);
        const firstPageComputedStyle = window.getComputedStyle(this.$refs.firstPageElementReference);
        let heightSum = 0;
        
        heightSum = (Number(headerComputedStyle.height.substring(0, headerComputedStyle.height.length - 2))) + 
                    (Number(firstPageComputedStyle.height.substring(0, firstPageComputedStyle.height.length - 2)));
        
        this.$refs.backgroundImageElementReference.style.height = `${heightSum}px`;
      }
    }
  }
</script>

<template>
  <div class="the-background-image" ref="backgroundImageElementReference"></div>
  <div id="view-wrapper">
    <header id="view-header" ref="headerElementReference">
      <AppHeader />
    </header>
    <main id="page-content">
      <section id="first-page" ref="firstPageElementReference">
        <Apresentation />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
   </main>
  </div>
  
</template>

<style>
    .the-background-image{
      position: absolute;
      width: 100%;
      height: 10px;
      z-index: 1;
      background-image: url(./../assets/images/background.png);
      background-size: cover;
      background-repeat: no-repeat;
    }

    *{
      margin: 0;
      padding: 0;
    }

    #about-me{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
    }

    #page-content{
      z-index: 2;
      display: flex;
      flex-direction: column;
    }

    #view-wrapper{
      display: flex;
      flex-direction: column;
    }

    #view-header{
      z-index: 3;
      height: 95px;
    }

    main{
      z-index: 2;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
    }

    #first-page{
      position: relative;
      grid-area: first;
      height: calc(100vh - 95px);
      min-height: 367px;
    }

    .background-image{
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
</style>