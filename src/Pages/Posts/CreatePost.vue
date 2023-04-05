<template>
  <div>
    <form @submit.prevent="validation">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Post title :</label>
        <input v-model.trim="form.title" type="text" class="form-control" id="exampleFormControlInput1">
        <div class="form-text text-danger">{{ form.titleError }}</div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">textarea</label>
        <textarea v-model.trim="form.body" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <div class="form-text text-danger">{{ form.BodyError }}</div>
      </div>
      <button type="submit" class="btn btn-dark" :disabled="loader">
        <div v-if="loader" class="spinner-border text-info spinner-border-sm mx-2" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>Create Post
      </button>
    </form>
    <br><br>
    <!-- <pre>{{ form }}</pre> -->
  </div>
</template>
<script>
import axios from 'axios';
import { reactive, ref } from 'vue';
import Swal from 'sweetalert2'
export default {
  setup() {
    const form = reactive({
      title: "",
      body: "",
      titleError: "",
      BodyError: ""
    });
    const loader = ref(false);

    function validation() {
      if (form.body === "") {
        form.BodyError = "This is a required body input."
      } else {
        form.BodyError = ""
      }
      if (form.title === "") {
        form.titleError = "This is a required title input."
      } else {
        form.titleError = ""
      }
      if (form.title !== "" && form.body !== "") {
        createPost(), loader.value = true;
      }
    }

    function createPost() {
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: form.title,
        body: form.body,
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
        })
        .finally(function () {

        });
    }

    return { form, validation, createPost, loader }
  }
}
</script>
<style></style>