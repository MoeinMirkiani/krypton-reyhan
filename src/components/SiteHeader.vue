<template>
    <header class="header">
        <div class="header__container"></div>
    </header>
</template>

<script>
export default {
    name: "SiteHeader"
}
</script>

<style lang="scss">
.header {
    height: 140px;

    &__container {
        height: 140px;
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
    }
}
</style>
