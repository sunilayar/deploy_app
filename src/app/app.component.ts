import { Component,OnInit} from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quizapp';
  date = new Date()
  name:any;
  name1:any;
  player:any;
  color:any;
  inputName = true;
  // cricketer = false;
  // flag = false;
  // sum = false;
  // hist= false;
  // displayNameSingle:any;
  displayName:any=[]
  // selectedCricketer:string = '';
  // selectedFlagColor:string = '';
  // cricketerList:any = ["Sachin","Virat","Dhoni","KL Rahul"]
  // displayCricketer:any;
   displayCricketersList:any = [];
  // flagColorList:any = ["red","orange","white","green"];
  // displayFlagColor:any;
   flagList:any = []
  angForm: FormGroup;
  angRadio:FormGroup;
  angCheckbox:FormGroup;
  isSubmitted = false;
  radio = false;
  checkbox = false;
  summary = false;
  History = false;
  constructor(private fb:FormBuilder){
    this.createForm();
    this.createRadio();
    this.createCheckBox();
  }

  ngOnInit(){
  }


createForm() {
  this.angForm = this.fb.group({
       name: ['', [Validators.required,Validators.minLength(5)]]
  });
}
 /*------------------------------------*/
        createRadio(){
          this.angRadio = this.fb.group({
            gender: ["",[Validators.required]]
          })
        }
            /*---------------------------------*/ 
                createCheckBox(){
                  this.angCheckbox = this.fb.group({
                       gender:["",[Validators.required]]
                  })
                }

  // Getter method to access form control Radio
  get myForm() {
    return this.angRadio.get('gender');
  }
         
          // Submit Radio Form
    onSubmit() {
    this.isSubmitted = true;
    this.radio = false;
     this.checkbox = true;
    if(!this.angRadio.valid) {
      return false;
    } else {
      console.log(JSON.stringify(this.angRadio.value))
      localStorage.setItem("player", JSON.stringify(this.angRadio.value))
        this.player = JSON.parse(localStorage.getItem("player"))
        this.displayCricketersList.push(this.player)
    }
  }  
             
    
            // Getter method to access form control CheckBox
            get myForm1(){
              return this.angCheckbox.get('gender')
            
          }
              //submit for checkbox values
                 onSubmit1(){
                    this.summary = true;
                    this.checkbox  = false;
                    if(!this.angCheckbox.valid){
                      return false;
                    }else{
                       console.log(JSON.stringify(this.angCheckbox.value))
                       localStorage.setItem("color",JSON.stringify(this.angCheckbox.value));
                        this.color = JSON.parse(localStorage.getItem("color"));
                          this.flagList.push(this.color);
                    }
                 }






                nextName(){
                  this.inputName = false;
                  this.radio = true;
                  localStorage.setItem("name",JSON.stringify(this.angForm.value))
                  this.name1 = JSON.parse(localStorage.getItem('name'));
                    this.displayName.push(this.name1);
                    
                }


                   finish(){
                     this.inputName = true;
                     this.summary = false;
                   }
               
                     history(){

                      this.summary = false;
                      this.History = true;
                     }

















                
                  // this.cricketer = true;
                  //  localStorage.setItem("fname",(this.name));
                  //  this.displayNameSingle = localStorage.getItem("fname");

                  //  this.displayName.push(localStorage.getItem("fname"));
                

                
                  // event handler for the radio button change event
                  // radioChangeHandler(event:any){
                  // update the UI
                  //   this.selectedCricketer = event.target.value;
                    

                  

                  // event handler for the checkbox button change event
                  //       checkboxHandler(event:any){
                  //         update in UI
                  //         this.selectedFlagColor = event.target.value;
                  //       }
                  //  select radio button for your fav cricketer
                  //  nextFlag(){
                  //    this.cricketer = false;
                  //    this.flag = true;
                  //    localStorage.setItem("cricket",(this.selectedCricketer));
                  //    this.displayCricketer = localStorage.getItem("cricket");

                  //    this.displayCricketersList.push(localStorage.getItem("cricket"))

                  //  }
                  //    summary(){
                  //      this.flag = false;
                  //      this.sum = true;
                  //      localStorage.setItem("flag",this.selectedFlagColor);
                  //      this.displayFlagColor = localStorage.getItem("flag");
                  //      this.flagList.push(localStorage.getItem("flag"))
                  //    }
                  //    finish(){
                  //      this.inputName = true;
                  //      this.sum = false;
                       
                      
                       
                  //    }
                  //       history(){
                  //         this.sum = false;
                  //         this.hist = true;
                  //       }

                    
                    

}
