<template>
    <form @submit.prevent="addItem">
        <div class="field">
            <input v-model='addedTask.task' placeholder="Task">
            <p :class="{'error':!isTaskOk}">Это поле не должно быть пустым</p>
        </div>
        <div class="field">
            <input v-model='addedTask.difficult' placeholder="Difficult (0-1000)">
            <p :class="{'error':!isDifficultOk}">Должно быть число от 0 до 1000</p>
        </div>
        <button>+</button>
    </form>
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
            if (this.isTaskOk && this.isDifficultOk) {
                this.$emit("createNewTodo", this.addedTask);
                this.addedTask.task = "";
                this.addedTask.difficult = "";
            }     
        }
    },

    computed: {
        isTaskOk() {
            if (this.addedTask.task) return true;
            return false;
        },

        isDifficultOk() {
            const value = this.addedTask.difficult;
            if (!(value === "") && value >=0 && value <= 1000) return true;
            return false;
        }
    }
}
</script>

<style scoped>
    .error {
       display: block; 
    }
    form {
        display: flex;
        width: 400px;
        margin: 0 auto;
        margin-bottom: 20px;
        position: relative;
    }
    .field {
        display: flex;
        flex-direction: column;
    }

    p {
        font-size: 10px;
        position: absolute;
        top: 13px;
        display: none;
        color: red;
    }
    button {
        width: 22px;
        height: 22px;
    }
</style>