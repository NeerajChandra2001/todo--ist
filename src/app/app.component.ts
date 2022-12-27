import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'TODO_LIST';
  task:any;
  id:any;
  list:any=[];
  ngOnInit():void{}

  addTask(task:string){
    this.list.push({id:this.list.length,name:task})
  }
  remove(id:any){
    console.log(id);

    this.list=this.list.filter((item:any)=>item.id !==id)
    
  }
 
}
