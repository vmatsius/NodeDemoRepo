import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseList:any[]=[]
  selectedId=0
  orderList:any[]=[]
  oList:any

  constructor(private _courseService:CourseService, private router:Router, private route:ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3400/api/getAllCustomers').subscribe((data: any) => {
      console.log({'inserted customer: ' : data});
      this.oList=data;

      this.courseList=this._courseService.getCourseList();
      this.route.paramMap.subscribe((params:ParamMap)=>{this.selectedId=parseInt(params.get('id')  ||'0')})
    })
  }

//   sendEmail(o:{name:any}){
//     const sgMail =require ('@sendgrid/mail')
// sgMail.setApiKey('SENDGRID_API_KEY')
// const msg = {
//   to: 'vmatsius@gmail.com', // Change to your recipient
//   //from: 'jazz7000@hotmail.com', // Change to your verified sender
//   from: {
//     email: 'jazz7000@hotmail.com',
//     name: 'Vadzim'
// },
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
  // .catch((error:<error>) => {
  //   console.error(error)
  // })
  //}
  // gotoDetails(course: { id: any }){
  //   this.router.navigate(['/courses', course.id])
  // }

  // onClick(course: { id: any }){
  //   this.router.navigate(['/courses', course.id])
  // }

}
