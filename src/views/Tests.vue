<script >
    import Technology from '@/components/Technology.vue';

    export default{
        name : 'tests',

        components: {
            Technology
        }
    }
</script>

<template>
    <div class="padding">
        <Technology image="html.png" techName="Express framework" dotTranslate="-70%"/>
    </div>
</template>

<style> 
    .padding{
        padding: 100px;
    }
</style>