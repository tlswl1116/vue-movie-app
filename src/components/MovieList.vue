<template>
    <div class="container">
        <div :class="{'no-result': !movies.length}" class="inner">
            <Loader v-if="loading"></Loader>
            <div v-if="message" class="message">
                {{ message }}
            </div>
            <div v-else class="movies">
                <MovieItem v-for="myMovie in movies" :key="myMovie.imdbDB" :movie="myMovie"></MovieItem>
            </div>
        </div>
    </div>
</template>

<script>
import MovieItem from './MovieItem.vue'
import Loader from './Loader.vue'
import { mapState } from 'vuex'

export default {
    components: {
        MovieItem,
        Loader
    },
    computed: {
        ...mapState('movie', ['movies', 'loading', 'message'])
    }
}
</script>

<style lang="scss" scoped>
.container {
    margin-top: 30px;
    .inner {
        background-color: $gray-200;
        padding: 10px;
        border-radius: 4px;
        text-align: center;

        &.no-result {
            padding: 70px 0;
        }
    }
    .message {
        color: $gray-400;
        font-size: 20px;
    }
    .movies {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>