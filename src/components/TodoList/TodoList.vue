<template>
<section>
    <h1>todolist</h1>
    <table>    
        <TodoListItem v-for="(item, index) in toDoList" :key="index" :task="item.task" :difficult="item.difficult" :isDone="item.isDone" :deleteItem="deleteItem"/>
    </table>
    
</section>


</template>

<script>
import TodoListItem from "./TodoListItem.vue";
import {getTodoList} from "../../service/todo";
import Todo from '../../models/Todo';
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
        this.toDoList = getTodoList();
        this.toDoList.push(new Todo({difficult: 5, task: 'benis'}))
        console.log(this.toDoList)
    }
}
</script>

<style>

</style>