<template>
    <div class="item">
        <header>
            <span class="user">User ID: {{userId}}</span>
        </header>

        <article class="body">
            <h5 class="title"><router-link :to="'/user/' + userId" class="router-link">{{username}}</router-link></h5>
            <span>Name: {{name}}</span><br>
            <span>E-mail {{email}}</span><br>
            <span>Phone: {{phone}}</span><br>
            <span>Website: <a :href="fullWebsite">{{website}}</a></span><br>
            <span>Company name: {{company.name}}</span><br>
            <span>Company catch-phrase: {{company.catchPhrase}}</span><br>
        </article>
    </div>
</template>

<script>
    export default {
        computed: {
            fullWebsite() {
                return "https://" + this.website;
            }
        },

        props: {
            userId: Number,
            username: String,
            name: String,
            email: String,
            phone: String,
            website: String,
            company: Object
        },
    }
</script>

<style src="../style/item.scss" lang="scss" scoped></style>