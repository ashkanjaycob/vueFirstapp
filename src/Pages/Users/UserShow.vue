<template>
    <div>
        <div v-if="Loader" class="spinner-border  text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else class="col-md-4">
            <CradView :user='user' />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
import CradView from '@/components/CradView.vue'
import { useRoute } from 'vue-router'

export default {
    name: 'UserIndex',
    components: {
        CradView
    },
    setup() {
        const Loader = ref(true);
        const user = ref({});
        const route = useRoute();
        function getUsers() {
            axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
                .then(function (response) {
                    // handle success response data
                    user.value = response.data;
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
        getUsers()

        return { user, Loader }
    }

}
</script>
<style></style>