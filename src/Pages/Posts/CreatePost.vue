<template>
  <div>
    <h2 class="my-3">Create Post :</h2>
    <FormView @formData="createPost" :btn-loader="loader"  button-text="Create Post"/>
  </div>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';
import Swal from 'sweetalert2'
import FormView from '../../components/FormView.vue'
export default {
  components: {
    FormView
  },
  setup() {

    const loader = ref(false);

    function createPost(formData) {
      loader.value = true;
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: formData.title,
        body: formData.body,
        userId: 1,
      }).then(function (response) {
        console.log(response.data);
        loader.value = false;
        Swal.fire({
          title: 'post Created !',
          text: 'You did a Great job Today :) ',
          icon: 'success',
          confirmButtonText: 'Done'
        });
      })
        .catch(function (error) {
          console.log(error);
        });
    }

    return { createPost, loader}
  }
}
</script>
<style></style>