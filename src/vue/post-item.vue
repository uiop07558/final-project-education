<template>
    <div class="item">
        <header>
            <span class="user">Username: <router-link :to="'/user/' + userId" class="router-link">{{username}}</router-link></span>
            <span class="id">Post ID:{{id}}</span>
        </header>

        <article class="body">
            <h3 class="title"><router-link :to="'/post/' + id" class="router-link">{{title}}</router-link></h3>
            <p>{{body}}</p>
        </article>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },

        props: {
            username: String,
            id: Number,
            userId: Number,
            title: String,
            body: String
        },
    }
</script>

<style src="../style/item.scss" lang="scss" scoped></style>