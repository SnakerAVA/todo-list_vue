<template>
<div class="form">
    <input v-model='addedTask.task' placeholder="Task">
    <input v-model='addedTask.difficult' placeholder="Difficult (0-1000)">
    <button @click="addItem()">Add</button>
</div>
</template>

<script>

export default {
    data() {
        return {
            addedTask: {
                task: "",
                difficult: ""
            } 
        }
    },
    methods: {
        addItem() {
            this.$emit("createNewTodo", this.addedTask);
            this.addedTask.task = "";
            this.addedTask.difficult = "";
        }
    }
// Нужен Watch, должен вывести ошибку (должно быть число от 0 до 1000), 
    // (делать с помощью флагов)
}
</script>

<style>

</style>