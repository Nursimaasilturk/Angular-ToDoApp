export class Model {
  user;
  item;
  constructor() {
    this.user = 'Sima';
    this.item = [
      new ToDoItem('Spor Yapmak', true),
      new ToDoItem('Kahvaltı Yapmak', false),
      new ToDoItem('Kitap Okumak', true),
      new ToDoItem('2 Saat Çalışma', true),
      new ToDoItem('Alışveriş', false),
    ];
  }
}
export class ToDoItem {
  description: string;
  action: boolean;

  constructor(description: string, action: boolean) {
    this.description = description;
    this.action = action;
  }
}
