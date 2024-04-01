<template>
    <div>
        <div class="container-search">
            <label>Pesquise pelo nome desejado: </label>
            <input type="text" name="" v-model="nameSearch">
            <button  @click="search">Pesquisar</button>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th title="Ordernar" class="ordernar" @click="ordernar">price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in filtredItem" :key="index">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>R$ {{item.price}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script src="./index.js"></script>
<style src="./index.css" scoped></style>