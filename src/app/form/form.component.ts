import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  cards=[
    {
      title:"card1",
      Image:"Enemy.jpg",
      Text:"فیلم انمی",
      link:"#"
    },
    {
      title:"card2",
      Image:"hostiless.jpg",
      Text:"فیلم دشمنان",
      link:"#"
    },
      {
      title:"card3",
      Image:"fight club.jfif",
      Text:"فیلم باشگاه مشتزنی",
      link:"#"
    },
   ]
  
   currentNumber=1
   plusIndex(){
    if(this.currentNumber<this.cards.length){
      this.currentNumber++
    }
   }
  
   cardDisplay(index:number){
    if(index<this.currentNumber){
      return "flex"
    }else{
      return "none"
    }
   }
   ///////////////////////////////////////////
   ///////////////////////////////////////////
   nameOfList=""
   table:string[]=[]
 
   addInfo(){
     if(this.nameOfList!==""){
     this.table.push(this.nameOfList)
   }   
 
 }
 DeleteData(){
   this.table.pop()
 }
}
