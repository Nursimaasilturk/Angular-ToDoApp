import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  model = new Model();
  isDisplay = false;
  getName() {
    return this.model.user;
  }
  getItems() {
    if (this.isDisplay) {
      return this.model.item;
    }
    return this.model.item.filter((item) => !item.action);
  }
  addItem(value: string) {
    if (value != '') {
      this.model.item.push(new ToDoItem(value, false));
    }
  }
}
