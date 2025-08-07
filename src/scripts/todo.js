import { importantTodos } from "./todo-lists/important.js";
import { todayTodos } from "./todo-lists/today.js";
import { upcomingTodos } from "./todo-lists/upcoming.js";
import { allProjects } from "./todo-lists/projects.js";

class Todo {
    constructor (title, description, date, priority) {
        this.title = title,
        this.description = description,
        this.date = date,
        this.priority = priority,
        this.todo;
    }

    createTodo () {
        this.todo = {
            title: this.title,
            description: this.description,
            date: this.date,
            priority: this.priority
        }

        allProjects.push(this.todo);
        Todo.assignTodoList(this.todo);

        return this.todo;
    }

    static assignTodoList (todo) {
        todo.priority == 'high' ? importantTodos.push(todo) : 0;
        todo.date == 'today' ? todayTodos.push(todo) : upcomingTodos.push(todo);
    }
}