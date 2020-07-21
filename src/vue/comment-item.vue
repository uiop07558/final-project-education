<template>
    <div class="item">
        <header>
            <span class="email">Email: {{email}}</span>
        </header>

        <article class="body">
            <h3 class="name">{{name}}</h3>
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
            email: String,
            id: Number,
            name: String,
            body: String
        },
    }
</script>

<style src="../style/item.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
    .item {
        width: 50%;
    }
</style>