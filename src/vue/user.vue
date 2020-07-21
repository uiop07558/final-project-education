<template>
    <div class="container">
        <userItem
                   :userId="user.id" 
                   :username="user.username"
                   :name="user.name"
                   :email="user.email"
                   :phone="user.phone"
                   :website="user.website"
                   :company="user.company"
        ></userItem>
        <postItem v-for="post in posts"
                  :post="post"
                  :key="post.id"
                  :id="post.id"
                  :user-id="post.userId"
                  :username="user.username"
                  :title="post.title"
                  :body="post.body"
        ></postItem>
    </div>
</template>

<script>
    import userItem from "./user-item.vue";
    import postItem from "./post-item.vue";

    export default {
        data() {
            return {
                id: this.$route.params.id,
                user: {},
                posts: [],
                albums: [],
                todos: []
            }
        },

        created() {
            let self = this;
            fetch(`https://jsonplaceholder.typicode.com/users/${self.id}`)
                .then(response => response.json())
                .then(data => self.user = data);

            fetch(`https://jsonplaceholder.typicode.com/users/${self.id}/posts`)
                .then(response => response.json())
                .then(data => self.posts = data);
        },

        components: {
            userItem,
            postItem
        }
    }
</script>