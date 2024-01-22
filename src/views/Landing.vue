<script>
  import AppHeader from '@/components/AppHeader.vue';
  import Apresentation from '@/components/Apresentation.vue';
  import ArrowDown from '@/components/ArrowDown.vue';
  import Overlay from '@/components/Overlay.vue';
  import AboutMe from '@/components/AboutMe.vue';
  import Skills from '@/components/Skills.vue';
  import Projects from '@/components/Projects.vue';
  import Contacts from '@/components/Contacts.vue';
  import { ref } from 'vue';


  export default{
    components: {
    AppHeader,
    Apresentation,
    ArrowDown,
    Overlay,
    AboutMe,
    Skills,
    Projects,
    Contacts    
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
    <main>
      <section id="first-page" ref="firstPageElementReference">
        <Apresentation />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contacts">
        <Contacts/>
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
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-area: about-me;
    }

    #page-content{
      z-index: 2;
      display: flex;
      flex-direction: column;
    }

    #view-wrapper{
      width: 100vw;
      display: flex;
      flex-direction: column;
      z-index: 20;
    }

    #view-header{
      z-index: 3;
      position: relative;
      height: 13dvh;
    }

    main{
      z-index: 2;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
    }

    #first-page{
      display: flex;
      flex-direction: column;
      position: relative;
      height: 87dvh;
    }

    .background-image{
        position: absolute;
        width: 100vw;
        height: 100vh;
    }

    @media screen and (orientation: landscape) {
      #view-header{
        height: 25dvh;
      } 
      #first-page{
        display: flex;
        flex-direction: column;
        position: relative;
        height: 80dvh;
      }
    }
</style>