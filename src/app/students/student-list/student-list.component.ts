
import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/defineClass';
import { StudentService } from '../../services/student.service';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: [StudentService]
})

export class StudentListComponent implements OnInit {

  students: Student[]
  selectedStudent: Student

  constructor(private StudentService: StudentService) { }

  ngOnInit() {
     this.StudentService
      .getStudents()
      .then((students: Student[]) => {
        this.students = students.map((student) => {
          return student;
        });
      });
  }

  private getIndexOfStudent = (studentId: String) => {
    return this.students.findIndex((student) => {
      return student._id === studentId;
    });
  }

  selectStudent(student: Student) {
    this.selectedStudent = student
  }

  createNewStudent() {
    var student: Student = {
      FirstName: '',
      LastName: '',
      School: '',
      StartDate: new Date()
    };

    // By default, a newly-created contact will have the selected state.
    this.selectStudent(student);
  }

  deleteStudent = (studentId: String) => {
    var idx = this.getIndexOfStudent(studentId);
    if (idx !== -1) {
      this.students.splice(idx, 1);
      this.selectStudent(null);
    }
    return this.students;
  }

  addStudent = (student: Student) => {
    this.students.push(student);
    this.selectStudent(student);
    return this.students;
  }

  updateStudent = (student: Student) => {
    var idx = this.getIndexOfStudent(student._id);
    if (idx !== -1) {
      this.students[idx] = student;
      this.selectStudent(student);
    }
    return this.students;
  }
}