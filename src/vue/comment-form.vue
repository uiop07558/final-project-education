<template>
    <div class="item">
        <h5>Post a comment</h5>
        <b-form @submit.stop="submit">
            <b-container fluid>
                <b-row class="justify-content-between">
                    <b-form-input
                            v-model="form.name"
                            placeholder="Title"
                            required
                            class="col-5"
                    ></b-form-input>

                    <b-form-input
                            v-model="form.email"
                            type="email"
                            placeholder="Email"
                            class="col-5"
                    ></b-form-input>
                </b-row>
            </b-container>

            <b-form-textarea
                    v-model="form.body"
                    placeholder="Comment"
                    required
                    rows="6"
                    class="mt-3"
            ></b-form-textarea>
            <b-button type="submit">Send</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    body: ''
                }

            }
        },

        methods: {
            submit() {
                this.$emit("submit", this.form);
            },
        },
    }
</script>

<style scoped>
    .item {
        border: 1px #dddddd solid;
        border-radius: 1rem;
        box-shadow: 0 0 50px -50px;

        padding: 1%;
        margin-bottom: 5vh;
    }

    @media (max-width: 576px) {
        .item {
            padding: 5%;
            width: 100% !important;
        }
    }
</style>