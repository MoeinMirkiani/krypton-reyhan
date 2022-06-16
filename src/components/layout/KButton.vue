<template>
    <button
        class="btn-component"
        :class="color"
    >
        <slot />
    </button>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
    color: {
        type: String,
        default: 'primary'
    }
})
</script>

<style lang="scss" scoped>
.btn-component {
    height: 50px;
    padding: 12px 24px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;

    &.primary {
        background-color: $black;
        color: $white;
    }

    &.secondary {
        background-color: $green;
        color: $black;
    }
}
</style>
