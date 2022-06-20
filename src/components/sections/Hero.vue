<template>
    <div class="section section__hero">
        <div class="section__hero-info">
        </div>

        <div class="section__hero-illustration">
            <img :src="require('@/assets/images/img---hero-person.png')" alt="krypton-hero-person" class="person" />

            <img :src="require('@/assets/svg/hero-person-bg-red.svg')" alt="krypton-hero-bg-red" class="capsule capsule__red" />
            <img :src="require('@/assets/svg/hero-person-bg-blue.svg')" alt="krypton-hero-bg-blue" class="capsule capsule__blue" />

            <img :src="require('@/assets/svg/bitcoin.svg')" alt="krypton-hero-bitcoin" class="crypto crypto__bitcoin" />
            <img :src="require('@/assets/svg/ethereum.svg')" alt="krypton-hero-ethereum" class="crypto crypto__ethereum" />
            <img :src="require('@/assets/svg/tether.svg')" alt="krypton-hero-tether" class="crypto crypto__tether" />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.section {
    @include flex-box(row, center, flex-start, no-wrap);

    &__hero {
        &-info {
            width: 60%;
        }

        &-illustration {
            width: 40%;
            background: url('@/assets/svg/hero-person-bg.svg') no-repeat center center/contain;
            position: relative;

            .person {
                width: 100%;
                object-fit: contain;
                z-index: 2;
                position: relative;
            }

            .capsule {
                width: 92px;
                position: absolute;

                &__red {
                    top: 120px;
                    right: 0;
                    z-index: 1;
                }

                &__blue {
                    bottom: 60px;
                    left: 0;
                    z-index: 3;
                }
            }

            .crypto {
                position: absolute;
                width: 88px;
                border-radius: 50%;
                box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.14);

                &__bitcoin {
                    bottom: 100px;
                    left: 140px;
                    z-index: 5;
                }

                &__ethereum {
                    bottom: 40%;
                    left: 55%;
                    z-index: 5;
                }

                &__tether {
                    bottom: 55%;
                    left: 0;
                }
            }
        }
    }
}
</style>
