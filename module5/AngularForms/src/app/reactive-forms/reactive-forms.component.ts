import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  isHidden:boolean=true;
  formModel!: FormGroup;

  constructor(private fb:FormBuilder, private http: HttpClient) { 
    this.formModel=this.fb.group({
      name:'',
      address:'',
      email:'',
      order:''
    })

  }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log(this.formModel.value)
    this.isHidden=false
    let data=this.formModel.value;
    this.http.post('http://localhost:3400/api/createCustomer', data).subscribe(data => {
      console.log({'inserted customer: ' : data});
  })
  }

  
}
