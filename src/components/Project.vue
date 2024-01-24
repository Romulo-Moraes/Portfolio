<script>
import { ref } from 'vue';

export default {
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
        getImageURL() {
            return new URL(`../assets/images/${this.$props.projectImage}`, import.meta.url);
        }
    },

    computed: {
        cssProps() {
            return {
                '--project-name-min-width': this.$props.minProjectNameWidth,
                '--project-name-bar-margin-left': this.$props.projectNameBarMarginLeft
            }
        }
    },

    data() {
        return {
            aboutProjectReference: ref(null)
        }
    },

    mounted() {
        this.$refs.aboutProjectReference.innerHTML = this.$props.aboutProject;
    }
}
</script>

<template>
    <section class="project-component">
        <div class="project-name" :style="cssProps">
            <h1 class="project-name-text">{{ this.$props.projectTitle }}</h1>
            <div class="project-name-bar"></div>
        </div>

        <p ref="aboutProjectReference"></p>
        <figure>
            <img class="project-image" :src="this.getImageURL()" alt="">
            <figcaption>{{ this.$props.projectImageCaption }}</figcaption>
        </figure>

        <p class="general-achievements-text">{{ this.$props.generalAchievements }}</p>

        <h1 class="what-learned-title">O que eu conquistei com o {{ this.$props.projectTitle }}</h1>
        <section class="project-achievements">
            <slot />
        </section>


        <p class="project-link">Esse projeto pode ser encontrado <a :href="this.$props.projectLink">neste</a> link.</p>
    </section>
</template>

<style>
.project-name-text {
    min-width: var(--project-name-min-width);
}

.general-achievements-text {
    margin-top: 7%;
}

.project-link {
    margin-top: 10%;
    font-size: 120%;
    color: white;
}

.project-link>a {
    color: #CF00FF;
}

.project-achievements {
    margin-top: 7%;
}

.what-learned-title {
    margin-top: 10%;
    font-size: 200%;
}

.project-image {
    width: 100%;
    margin-top: 5%;
}

.project-name-bar {
    margin-left: 1%;
    width: 100%;
    height: 5px;
    border-radius: 50px;
    background-color: #D9D9D9;
}

.project-name {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.project-name-text {
    font-size: 230%;
    display: inline;
}

@media screen and (orientation: landscape) {

    .what-learned-title,
    .project-link {
        margin-top: 4%;
    }

    .project-achievements {
        font-size: 115%;
        margin-top: 2%;
    }
}

@media screen and (orientation: landscape) and (min-width: 726px) {
    .skills-titles {
        font-size: 220%;
    }

    .project-component  p {
        font-size: 140%;
    }

    .project-name-text {
        font-size: 240%;
        min-width: calc(var(--project-name-min-width) + 10px);
    }

    .project-image {
        margin-top: 3%;
    }

    .general-achievements-text {
        margin-top: 4%;
    }

    .what-learned-title {
        margin-top: 2%;
    }

    .project-image {
        width: 85%;
    }

    .project-link {
        margin-top: 5%;
    }
}

@media screen and (orientation: landscape) and (min-width: 1000px) {

    .project-achievements {
        font-size: 130%;
    }

    .project-name-text {
        font-size: 260%;
        min-width: calc(var(--project-name-min-width) + 35px);
    }

    .project-component p {
        font-size: 160%;
    }

    .project-image {
        width: 80%;
    }

    .project-link {
        margin-top: 3%;
    }
}
</style>