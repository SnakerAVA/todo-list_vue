<template>
<section>
    <h1>todolist</h1>
    <TodoListForm @createNewTodo="createNewTodo"/>
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
import TodoListForm from './TodoListForm.vue';
export default {
    components: {TodoListItem, TodoListForm},
    data() {
        return{
            toDoList: []
        }
    },
    methods: {
        doneUndone(id) {
            const todo = this.findTodo(id).todo;
            todo.isDone = !todo.isDone;
        },
        deleteItem(id) {
            this.toDoList.splice(this.findTodo(id).todoIndex, 1);
        },
        findTodo(id) {
            let todo = this.toDoList.find((value) => 
                value.id === id 
            )
            let todoIndex = this.toDoList.indexOf(todo);
            return {
                todo,
                todoIndex
            };
        },
        createNewTodo(addedTask) {
            this.toDoList.push(new Todo(addedTask));
        }
    },
    
    created(){
        // todo list в глобальный стор с помощью vuex
        this.toDoList = getTodoList();
        this.toDoList.push(new Todo({difficult: 5, task: 'benis'}));
    }
}
</script>

<style>
    table {
        max-width: 1000px;
        margin: 0 auto;
    }
</style>