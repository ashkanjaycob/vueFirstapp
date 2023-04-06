<template>
    <div>
        <div v-if="EditLoader" class="spinner-border  text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else>
            <h2>Edit Post :</h2>
            <FormView @formData="UpdatePost" :btn-loader="loader" button-text="Edit Post" :post="post" />
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router';
import FormView from '@/components/FormView.vue'
export default {
    components: {
        FormView
    },
    setup() {
        const EditLoader = ref(true);
        const loader = ref(false);
        const route = useRoute();
        const post = ref({});
        function getPost(formData) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                .then(function (response) {
                    // handle success response data
                    post.value = response.data;
                    EditLoader.value = false;
                    console.log(formData);
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

        function UpdatePost(formData) {
            loader.value = true;
            axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
                id: 1,
                title: formData.title,
                body: formData.body,
                userId: 1,
            }).then(function (response) {
                console.log(response.data);
                loader.value = false;
                Swal.fire({
                    title: 'post Updated succesfully !',
                    icon: 'success',
                    confirmButtonText: 'Done'
                });
            })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {

                });
        }

        return { UpdatePost, loader, post , EditLoader}
    }
}
</script>
<style></style>