<template>
  <tr>
      <td>{{task}}</td>
      <td>{{difficult}}</td>
      <td>{{isDone}}</td>
      <td><button @click="deleteItem(task)">Delete</button></td>
  </tr>
</template>

<script>
export default {
    props: {
        task: String,
        difficult: Number,
        isDone: Boolean,
        deleteItem: Function
    }

}
</script>

<style>

</style>