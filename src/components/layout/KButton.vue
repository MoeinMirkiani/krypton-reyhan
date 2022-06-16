<template>
    <button
        class="btn-component"
        :class="[color, size]"
    >
        <slot />
    </button>
</template>

<script setup>
defineProps({
    color: {
        type: String,
        default: 'primary'
    },
    size: String
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

    // Colors
    &.primary {
        background-color: $navy-blue;
        color: $white;
    }

    &.secondary {
        background-color: $light-gray;
        color: $navy-blue;
    }

    // Sizes
    &.large {
        height: 100px;
        padding: 24px 48px;
        font-size: 40px;
        line-height: 52px;
    }
}
</style>
