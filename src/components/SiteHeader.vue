<template>
    <header class="header font-dm">
        <div class="header__container">
            <KButton color="secondary">
                {{ $t('header.login') }}
            </KButton>

            <KButton>
                {{ $t('header.register') }}
            </KButton>
        </div>
    </header>
</template>

<script setup>
import KButton from '@/components/layout/KButton'
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
