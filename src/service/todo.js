import todoList from "../../public/todoList"
import Todo from "../models/Todo"

export const getTodoList = () => {
    return todoList.map(item => new Todo(item))
}