import Vue from "vue";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import app from "../vue/app.vue";
import "../style/style.scss";
import { router } from "./router.js";
import VueRouter from "vue-router";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const root = new Vue({
	el: "#app",
	router,
	data: {
		vh: window.innerHeight,
		vw: window.innerWidth
	},
	components: {
		app: app
	},
	template: "<app v-bind:vh='vh' v-bind:vw='vw'></app>"
});

window.onresize = function () {
	root.vh = window.innerHeight;
	root.vw = window.innerWidth
}



import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

let firebaseConfig = {
	apiKey: "AIzaSyAQO4R5i0ZzoZUcwfIBiv_femjF9BKRxGw",
	authDomain: "final-education-project.firebaseapp.com",
	databaseURL: "https://final-education-project.firebaseio.com",
	projectId: "final-education-project",
	storageBucket: "final-education-project.appspot.com",
	messagingSenderId: "388635685675",
	appId: "1:388635685675:web:7503b89b90204cb1010b6e",
	measurementId: "G-1FTMTE24E5"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();