<template>
    <SiteHeader />
    <router-view/>
</template>

<script setup>
import SiteHeader from '@/components/SiteHeader'
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: Saira, sans-serif;
}
</style>
