import { createApp } from 'vue'
import App from './App.vue'

//Adição do bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import './assets/main.css'

const app = createApp(App)

// Meus componentes
import HelloWorld from './components/HelloWorld/index.vue'
app.component('hello-world', HelloWorld)

import ToDoList from './components/ToDoList/index.vue'
app.component('to-do-list', ToDoList)

import ListaRede from './components/ListaRede/index.vue'
app.component('lista-rede', ListaRede)

app.mount('#app')