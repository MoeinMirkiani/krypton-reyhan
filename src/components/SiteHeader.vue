<template>
    <header class="header">
        <div class="header__container">
            <KButton>
                {{ $t('message.hello') }}
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
