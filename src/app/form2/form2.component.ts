import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-form2',
  imports: [CommonModule,RouterOutlet,FormsModule],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.scss'
})
export class Form2Component {
  listname:string=""


  nameList:any[]=[
    {
      name:"mohsen",
      lastname:"mostafavi"
    },
    {
      name:"ali",
      lastname:"faraji"
    },
    {
      name:"mohammad",
      lastname:"abbasi"
    },
    {
      name:"alireza",
      lastname:"asgari"
    },
    {
      name:"hossein",
      lastname:"sharifi"
    },
    {
      name:"aydin",
      lastname:"doosti"
    },
    {
      name:"mahdi",
      lastname:"khederloo"
    },
  ]
  
  searchList(){
    if(!this.listname.trim()){
      return this.nameList;
    }else{
    return this.nameList.filter((item)=>
      item.name.toLowerCase().startsWith(this.listname.toLowerCase()) ||
      item.lastname.toLocaleLowerCase().startsWith(this.listname.toLowerCase())
    )}
    }
  
}


