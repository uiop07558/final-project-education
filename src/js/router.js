import VueRouter from "vue-router";
import users from "../vue/users.vue";
import user from "../vue/user.vue";
import post from "../vue/post.vue";

export const router = new VueRouter({
    routes: [
        {
            path: "/users",
            component: users
        },

        {
            path: "/user/:id",
            component: user
        },

        {
            path: "/post/:id",
            component: post
        }
    ]
});
