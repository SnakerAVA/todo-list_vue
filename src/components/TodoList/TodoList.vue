<template>
<section>
    <h1>todolist</h1>
    <table>    
        <TodoListItem v-for="(todo, index) in toDoList" 
        :key="index"
        :todo="todo"
        :doneUndone="doneUndone"
        :deleteItem="deleteItem"/>
    </table>
    
</section>


</template>

<script>
import TodoListItem from "./TodoListItem.vue";
import {getTodoList} from "../../service/todo";
import Todo from '../../models/Todo';
export default {
    components: {TodoListItem},
    data() {
        return{
            toDoList: []
        }
    },
    methods: {
        doneUndone(id) {
            const todo = this.findTodo(id);
            todo.isDone = !todo.isDone;
        },
        deleteItem(id) {
            this.toDoList.splice(this.findTodo(id), 1);
        },
        findTodo(id) {
            let todo = this.toDoList.find((value) => 
                value.id === id 
            )
            return todo;
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
    table {
        max-width: 1000px;
        margin: 0 auto;
    }
</style>