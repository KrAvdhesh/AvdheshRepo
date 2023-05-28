import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'track-by performace avdhesh';
  students:any[];
  constructor()
  {
this.students=[
  {
StudentId:1,
Name:'Amit',
Gender:'Male',
Age:27,
Course:'MCA'
  },
  {
    StudentId:2,
    Name:'Anuj',
    Gender:'Male',
    Age:25,
    Course:'BSC'
      },
      {
        StudentId:3,
        Name:'Sachin',
        Gender:'Male',
        Age:21,
        Course:'BBA'
          },
          {
            StudentId:4,
            Name:'Sheetal',
            Gender:'Female',
            Age:22,
            Course:'BCA'
              }

];

  }

  getMoreStudent():void
  {
    this.students=[
      {
    StudentId:1,
    Name:'Amit',
    Gender:'Male',
    Age:27,
    Course:'MCA'
      },
      {
        StudentId:2,
        Name:'Anuj',
        Gender:'Male',
        Age:25,
        Course:'BSC'
          },
          {
            StudentId:3,
            Name:'Sachin',
            Gender:'Male',
            Age:21,
            Course:'BBA'
              },
              {
                StudentId:4,
                Name:'Sheetal',
                Gender:'Female',
                Age:22,
                Course:'BCA'
                  },
                  {
                    StudentId:5,
                    Name:'AArav',
                    Gender:'male',
                    Age:11,
                    Course:'6th'
                      }
    
    ];
    

  }

  trackbystudentId(index:Number, student:any):string
  {
    return student.StudentId;
  }
}
