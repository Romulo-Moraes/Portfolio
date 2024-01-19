<script >
    import Overlay from '@/components/Overlay.vue';

    export default{
        name : 'tests',

        components: {
            Overlay
        }
    }
</script>

<template>
    <div>
        <Overlay color="black" :opacity="1"/>
    </div>
</template>

<style> 
</style>