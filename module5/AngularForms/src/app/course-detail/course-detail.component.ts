import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  id:any=0
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.id=parseInt(this.route.snapshot.paramMap.get('id') ||'0')
  }

  goBack(){
    let selectedId=this.id ? this.id:null;
    this.router.navigate(['/courses', {id:this.id}])
  }

}
