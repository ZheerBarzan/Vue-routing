 <script setup>
import {useRoute, RouterView , useRouter} from "vue-router"
import cars from "../data/cars.json"
import router from "../router";



const route = useRoute()

const carID= parseInt(route.params.id)

const car = cars.find(c => c.id === carID)


</script>




<template>

    <div v-if="car">
        <h1>car view</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.price }}</p>
        <p>{{ car.year }}</p>
        <button @click="router.push(`/cars/${carID}/contact`)">click for contact</button>
        <RouterView />
    </div>
    <div v-else>
        <center>
            car not found
        </center>
    </div>
</template>