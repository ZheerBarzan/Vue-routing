<script setup>
import { RouterLink } from 'vue-router';


</script>



<template>
<div>
    <RouterLink active-class="active" to="/">home</RouterLink>
    <br>
    <RouterLink active-class="active" to="/about">about</RouterLink>
</div>

</template>


<style scoped>
.active{
font-weight: 700;
color: red;
font-style: normal;
text-decoration: none;

}
RouterLink{
    text-decoration: none;
    color: black;
}
</style>