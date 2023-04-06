<template>
    <div class="row">
        <div class="col-md-8">
            <h2>This is post Number : {{ post.id}}</h2>
            <br><br>
            <div class="card border-success">
                <div class="card-header">
                    <h4>
                        <router-link :to="{ name: 'PostShow', params: { id: post.id } }">{{ post.title }}</router-link>
                    </h4>
                </div>
                <ul class="list-group list-group-flush p-3">
                    <li class="list-group-item">{{ post.body }}</li>
                </ul>
                <div class="card-footer">
                    <button class="btn btn-danger ">delete</button>
                    <router-link :to="{name:'EditPost' , params:{id:post.id}}" class="btn btn-dark ms-4">edit</router-link>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
import { useRoute } from 'vue-router'

export default {
    name: 'UserIndex',
    setup() {
        const Loader = ref(true);
        const post = ref({});
        const route = useRoute();
        function getPost() {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                .then(function (response) {
                    // handle success response data
                    post.value = response.data;
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
        getPost()

        return { post, Loader, route }
    }

}
</script>
<style></style>