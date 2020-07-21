<template>
    <div class="container">
        <postItem :key="post.id"
                  :id="post.id"
                  :user-id="post.userId"
                  :username="user.username"
                  :title="post.title"
                  :body="post.body"
        ></postItem>

        <commentForm @submit="postComment"></commentForm>

        <commentItem v-for="comment in comments"
                  :comment="comment"
                  :key="comment.id"
                  :id="comment.id"
                  :email="comment.email"
                  :name="comment.name"
                  :body="comment.body"
        ></commentItem>
    </div>
</template>

<script>
    import commentItem from "./comment-item.vue";
    import postItem from "./post-item.vue";
    import commentForm from "./comment-form.vue"

    export default {
        data() {
            return {
                id: this.$route.params.id,
                post: {},
                comments: [],
                user: {},
            }
        },

        created: function () {
            let self = this;
            fetch(`https://jsonplaceholder.typicode.com/posts/${self.id}`)
                .then(response => response.json())
                .then(data => self.post = data)
                .then(post => self.getUser(post));

            fetch(`https://jsonplaceholder.typicode.com/posts/${self.id}/comments`)
                .then(response => response.json())
                .then(data => self.comments = data);

        },

        methods: {
            getUser(post) {
                let self = this;
                fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}/`)
                    .then(response => response.json())
                    .then(data => self.user = data);
            },

            postComment(event) {
                fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`, {
                    method: "POST",
                    body: JSON.stringify(event),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(response => response.text())
                    .then(text => alert(text))
            }
        },

        components: {
            postItem,
            commentItem,
            commentForm
        }
    }
</script>