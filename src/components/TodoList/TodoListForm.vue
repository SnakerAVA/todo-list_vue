<template>
<form @submit.prevent="addItem">
    <input v-model='addedTask.task' placeholder="Task">
    <p class="error">Это поле не должно быть пустым</p>
    <input v-model='addedTask.difficult' placeholder="Difficult (0-1000)">
    <p class="error">Должно быть число от 0 до 1000</p>
    <button>+</button>
</form>
</template>

<script>

export default {
    data() {
        return {
            addedTask: {
                task: "",
                difficult: "",
                isTaskOk: true,
                isDifficultOk: true,
            } 
        }
    },
    methods: {
        addItem() {
            /*
            в вотчи
            if (!this.addedTask.task || !this.addedTask.difficult) {
                alert("Fields is empty!")
            */
            if (this.isTaskOk && this.isDifficultOk) {
                this.$emit("createNewTodo", this.addedTask);
                this.addedTask.task = "";
                this.addedTask.difficult = "";
            }            
        }
    },
    watch: {
        ["addedTask.difficult"](newValue) {
            console.log(newValue);
            if (isNaN(newValue)) {
                return alert("Должно быть число");
            } else if (newValue < 0 || newValue > 1000) {
                return alert("Должно быть число от 0 до 1000");
            }
        }
        // Watch на таск
    }
}
</script>

<style>
p.error {
    color: red;
}
</style>