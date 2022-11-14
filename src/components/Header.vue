<template>
    <header>
        <Logo></Logo>
        <div class="nav nav-pills">
            <div v-for="nav in navigations" :key="nav.name" class="nav-item">
                <RouterLink :to="nav.href" active-class="active" :class="{active: isMatch(nav.path)}" class="nav-link">{{ nav.name }}</RouterLink>
            </div>
        </div>
        <div class="user" @click="toAbout">
            <img :src="image" :alt="name">
        </div>
    </header>
</template>

<script>
import Logo from './Logo.vue'
import { mapState } from 'vuex'

export default {
    components: {
        Logo
    },
    data() {
        return {
            navigations: [
                {
                    name: 'Search',
                    href: '/'
                },
                {
                    name: 'Movie',
                    href: '/movie/tt2294629',
                    path: /^\/movie/
                },
                {
                    name: 'About',
                    href: '/about'
                }
            ]
        }
    },
    computed: {
        ...mapState('about', ['image', 'name'])
    },
    methods: {
        isMatch(path) {
            if (!path) return false
            return path.test(this.$route.fullPath)
        },
        toAbout() {
            console.log('!!!');
            this.$router.push('/about')
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    height: 70px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    .logo {
        margin-right: 40px;
    }
    .user {
        margin: 0 40px 0 auto;
        width: 40px;
        height: 40px;
        padding: 6px;
        border-radius: 40px;
        background-color: $gray-200;
        overflow: hidden;
        transition: .4s;
        cursor: pointer;

        &:hover {
            background-color: darken($gray-200, 10%);
        }

        img {
            width: 100%;
            border-radius: 100%;
        }
    }
    @include media-breakpoint-down(sm) {
        .nav {
            display: none;
        }
    }
}
</style>