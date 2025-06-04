import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodo = '';

  addTodo() {
    const title = this.newTodo.trim();
    if (title) {
      this.todos.push({ title, completed: false });
      this.newTodo = '';
    }
  }

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  remove(index: number) {
    this.todos.splice(index, 1);
  }
}
