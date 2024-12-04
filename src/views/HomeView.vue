<script setup>
import bookApi from "@/ultis/books/bookApi.js";
import {onMounted} from "vue";
const listBooks = async () => {
  const {data} = await bookApi.getListBooks()
  console.log(data)
}
onMounted(async () =>{
  listBooks();
})
</script>

<template>
  <main class="text-center">This is Home Page</main>
</template>
