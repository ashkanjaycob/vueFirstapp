<template>
    <div>
        <div>
            <form @submit.prevent="validation">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Post title :</label>
                    <input v-model.trim="form.title" type="text" class="form-control" id="exampleFormControlInput1">
                    <div class="form-text text-danger">{{ form.titleError }}</div>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">textarea</label>
                    <textarea v-model.trim="form.body" class="form-control" id="exampleFormControlTextarea1"
                        rows="6"></textarea>
                    <div class="form-text text-danger">{{ form.BodyError }}</div>
                </div>
                <button type="submit" class="btn btn-dark" :disabled="btnLoader">
                    <div v-if="btnLoader" class="spinner-border text-info spinner-border-sm mx-2" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>{{ buttonText }}
                </button>
            </form>
            <br><br>
            <!-- <pre>{{ form }}</pre> -->
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
export default {
    name: "FormView",
    props: {
        btnLoader: Boolean,
        buttonText: String,
        post: Object
    },
    setup(props, { emit }) {
        const form = reactive({
            title: "",
            body: "",
            titleError: "",
            BodyError: ""
        });

        function SetInput() {

            if ( props.post !== undefined) {
                form.title = props.post.title;
                form.body = props.post.body;
            }
        }
        SetInput();
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
                emit('formData', form)
            }
        }
        return { form, validation }
    }
}
</script>
<style></style>