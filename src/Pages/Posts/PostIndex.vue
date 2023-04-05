<template>
    <div>
        <div>
            <router-link class="btn btn-dark " to="/posts/create">Create Post</router-link>
        </div>
        <div v-if="Loader" class="spinner-border  text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else class="col-md-6" v-for="post in posts" :key="post.id">
            <PostCard :post='post' />
        </div>
    </div>
    <RouterView></RouterView>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
import PostCard from '@/components/PostCard.vue'

export default {
    name: 'PostIndex',
    components: {
        PostCard
    },
    setup() {
        const Loader = ref(true);
        const posts = ref([]);
        function getPosts() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    // handle success response data
                    posts.value = response.data;
                    Loader.value = false;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
        getPosts()

        return { posts, Loader }
    }

}
</script>
<style></style>