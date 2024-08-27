import { createApp } from 'vue'
import App from './App.vue'
import Icon from "@wheatrush/components/icon";
import Tree from "@wheatrush/components/tree";
import Button from "@wheatrush/components/button";
import Input from "@wheatrush/components/input";
import "@wheatrush/theme-chalk/src/index.scss";

const app = createApp(App);
const plugins = [Icon, Tree, Button, Input];
plugins.forEach((plugin) => {
    app.use(plugin);
});
app.mount('#app')
