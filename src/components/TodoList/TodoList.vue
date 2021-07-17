<template>
<section>
    <h1>todolist</h1>
    <table>    
        <TodoListItem v-for="(item, index) in toDoList" :key="index" :task="item.task" :difficult="item.difficult" :isDone="item.isDone" :deleteItem="deleteItem"/>
    </table>
    
</section>


</template>

<script>
import array from "./index.js";
import TodoListItem from "./TodoListItem.vue";
export default {
    components: { TodoListItem},
    methods: {
        deleteItem(task) {
            let index =  this.toDoList.findIndex((value) => 
                value.task === task 
            )
            this.toDoList.splice(index, 1);
        }
    },
    

    data() {
        return{
            toDoList: []
        }
    },
    computed: {

    },
    created(){
        this.toDoList = array;
    }
}
</script>

<style>

</style>