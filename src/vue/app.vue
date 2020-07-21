<template>
    <b-container fluid>
        <b-row>
            <b-col sm="2" cols="12" class="meta-app">
                <h1>App</h1>
                <router-link :to="path(component)" v-for="component in components" :key="component" @click="activeComponent = component">{{component}}</router-link>
            </b-col>
            <b-col sm="10" cols="12" class="p-0">
                <router-view class="app m-0"></router-view>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import Users from "./users.vue";

    export default {
        data() {
            return {
                components: ["Users"]
            };
        },

        methods: {
            path(component) {
                return "/" + component;
            }
        },

        components: {
            Users
        }
    }
</script>

<style lang="scss" src="../style/app.scss" scoped></style>