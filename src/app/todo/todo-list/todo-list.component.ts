import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  //  taskAdder?:number;
  // addNewTask(){
  //    this.taskAdder = 1
  // }

  // value = 0
  // resetTaskAdder():any{
  //   return this.taskAdder=0;
  // }
  noteList:string[] = [];
  taskAdder?:number;
  noteparameter?:string;

  constructor() {
    this.loadTasks();

  }
  
  addNewTask(){
    this.taskAdder=1
  }

  resetTaskCounter(){
    if(this.noteparameter){

      this.noteList.push(this.noteparameter);
      this.saveTasks();


    }
    console.log(this.noteList)
    this.taskAdder = 0
    this.noteparameter= ""
  }

  removeTask(note:string){

    // this.noteList.forEach((value)=>{
    //   value.replaceAll(note,"")
    // })
    // console.log(this.noteList)

    // this.noteList.forEach((value)=>{
    //   if(note==value){
    //     this.noteList[].replaceAll(note,)
    //   }

    //   console.log(this.noteList)
    //   // console.log(value)
    // })
    // for( let i in this.noteList){
    //   console.log(i)

    //   if( this.noteList[i] == note){
    //      this.noteList.filter(this.noteList[i])

    //     return true
    //   }
    // }

    this.noteList = this.noteList.filter(value => value!==note)
    this.saveTasks();

    // return false


    // console.log(this.noteList)


}

resetAllTask(){
  this.noteList = []
  this.saveTasks();

}

private saveTasks(): void {
  localStorage.setItem('noteList', JSON.stringify(this.noteList));
}

private loadTasks(): void {
  const savedTasks = localStorage.getItem('noteList');
  if (savedTasks) {
    this.noteList = JSON.parse(savedTasks);
  }
}


}
