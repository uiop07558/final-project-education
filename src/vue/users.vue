<template>
    <div class="container">
        <userItem 
                   v-for="user in users" 
                   :user="user" 
                   :key="user.id" 
                   :userId="user.id" 
                   :username="user.username"
                   :name="user.name"
                   :email="user.email"
                   :phone="user.phone"
                   :website="user.website"
                   :company="user.company"
        ></userItem>
    </div>
</template>

<script>
    import userItem from "./user-item.vue";

    export default {
        data() {
            return {
                users: []
            }
        },

        created() {
            let self = this;
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(function (response) {
                    return response.json();

                })
                .then(data => self.users = data);
        },

        components: {
            userItem
        }
    }
</script>