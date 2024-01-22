<script>
    export default{
        props: [
            'projectTitle',
            'aboutProject',
            'projectImage',
            'projectImageCaption',
            'generalAchievements',
            'projectLink',
            'minProjectNameWidth',
            'projectNameBarMarginLeft'
        ],

        methods: {
            getImageURL(){
                return new URL(`../assets/images/${this.$props.projectImage}`, import.meta.url);
            }
        },

        computed: {
            cssProps(){
                return {
                    '--project-name-min-width' : this.$props.minProjectNameWidth,
                    '--project-name-bar-margin-left' : this.$props.projectNameBarMarginLeft
                }
            }
        }
    }
</script>

<template>
    <div class="project-name" :style="cssProps">
        <h1 class="project-name-text">{{ this.$props.projectTitle }}</h1>
        <div class="project-name-bar"></div>
    </div>

    <p>{{ this.$props.aboutProject }}</p>
    <figure>
        <img class="project-image" :src="this.getImageURL()" alt="">    
        <figcaption>{{ this.$props.projectImageCaption }}</figcaption>
    </figure>

    <p class="general-achievements-text">{{ this.$props.generalAchievements }}</p>

    <h1 class="what-learned-title">O que eu conquistei com o {{ this.$props.projectTitle }}</h1>
    <section class="project-achievements">
        <slot/>
    </section>
    

    <p class="project-link">Esse projeto pode ser encontrado <a :href="this.$props.projectLink">neste</a> link</p>
</template>

<style>
    .project-name-text{
        min-width: var(--project-name-min-width);
    }

    .general-achievements-text{
        margin-top: 10%;
    }

    .project-link{
        margin-top: 10%;
        font-size: 120%;
        color: white;
    }

    .project-link > a{
        color: #CF00FF;
    }

    .project-achievements{
        margin-top: 10%;
    }

    .what-learned-title{
        margin-top: 10%;
        font-size: 200%;
    }

    .project-image{
        width: 100%;
        margin-top: 5%;
    }

    .project-name-bar{
        margin-left: var(--project-name-bar-margin-left);
        width: 100%;
        height: 5px;
        border-radius: 50px;
        background-color: #D9D9D9;
    }

    .project-name{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .project-name > h1{
        font-size: 230%;
        display: inline;
    }

    @media screen and (orientation: landscape) {
        .project-achievements, .what-learned-title, .project-link{
            margin-top: 4%;
        }
    }
</style>