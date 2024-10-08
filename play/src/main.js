import { createApp } from 'vue'
import App from './App.vue'
import Icon from "@wheatrush/components/icon";
import Tree from "@wheatrush/components/tree";
import Button from "@wheatrush/components/button";
import Input from "@wheatrush/components/input";
import { FormItem, Form } from "@wheatrush/components/form"
import { Radio, RadioGroup } from "@wheatrush/components/radio"
import Switch from "@wheatrush/components/switch"
import "@wheatrush/theme-chalk/src/index.scss";

const app = createApp(App);
const plugins = [Icon, Tree, Button, Input, FormItem, Form, Radio, RadioGroup, Switch];
plugins.forEach((plugin) => {
    app.use(plugin);
});
app.mount('#app')
