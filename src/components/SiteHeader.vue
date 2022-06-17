<template>
    <header class="header font-dm">
        <div class="header__container">
            <div class="header__item header__item-navigation">
                <ul>
                    <li
                        class="nav-item"
                        v-for="(item, i) in navItems"
                        :key="i">
                        {{ item }}
                    </li>
                </ul>
            </div>

            <div class="header__item header__item-logo">
                <router-link :to="{ name: 'home' }">
                    <img :src="require('@/assets/svg/logo.svg')" width="80" height="80" alt="krypton-logo" />
                </router-link>
            </div>

            <div class="header__item header__item-actions">
                <KButton class="login" color="secondary">
                    {{ $t('header.login') }}
                </KButton>

                <KButton class="register">
                    {{ $t('header.register') }}
                </KButton>
            </div>
        </div>
    </header>
</template>

<script setup>
import KButton from '@/components/layout/KButton'

const navItems = ['Market', 'Plans', 'Blog']
</script>

<style lang="scss">
.header {
    height: 140px;

    &__container {
        height: 140px;
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        @include flex-box(row, space-between, center, no-wrap);
    }

    &__item {
        width: 33.33%;
        @include flex-box();

        &-navigation {
            justify-content: flex-start;

            ul {
                @include flex-box(row, flex-start, center, no-wrap);

                li {
                    list-style: none;
                    color: $navy-blue;
                    font-size: 24px;
                    line-height: 32px;
                    margin-right: 32px;
                    cursor: pointer;
                }
            }
        }

        &-actions {
            justify-content: flex-end;

            .register {
                margin-left: 20px;
            }
        }
    }
}
</style>
