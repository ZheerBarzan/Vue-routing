
<script setup>
import cars from "../data/cars.json"
import { RouterLink } from "vue-router";

</script>

<template>
    <div>
        <h1>home view</h1>
        <div class="cars">
            <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id" href="">
            
                {{ car.name }}
            </RouterLink>
        </div>
    </div>
</template>


<style scoped>
.cars{
    display: flex;
}
.cars a{
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: black;
    width: 100%;
    box-shadow: 1px 1px 10px rgba(1, 1, 1, 0.3);
    margin: 10px;
    border-radius: 7px;
}
</style>