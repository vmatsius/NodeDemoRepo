import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseList=[
    {id:1, name:'Angular'},
    {id:2, name:'Node'},
    {id:3, name:'React'},
    {id:4, name:'Java'},
    {id:5, name:'Spring'},
    {id:6, name:'MongoDB'}
  ]
  constructor() { }

  getCourseList(){
    return this.courseList
  }
}

