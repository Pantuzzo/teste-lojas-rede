<template>
    <div class="toDo-main">
        <div class="container-todo">
            <h1>Lista de Tarefas</h1>
            <input v-model="newTask" @keyup.enter="addTask" placeholder="Adicionar nova tarefa">
            <ul>
                <li v-for="(task, index) in tasks" :key="index">
                    <input type="checkbox" v-model="task.completed">
                    <span :class="{ completed: task.completed }">{{ task.name }}</span>
                    <button @click="removeTask(index)" class="remover">Remover</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="./index.js"></script>
<style src="./index.css" scoped></style>