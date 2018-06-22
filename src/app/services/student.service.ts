

/****************
 * 
 *  By \routes\student.js (Nebulas.js lib functions to access NAS wallet/account info )
 *  
 *  Used at wallet-list and wallet-details components
 * 
 ***************/

import { Injectable } from '@angular/core';
import { Student, Card, CardBalance, signedTransaction } from '../models/defineClass';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import 'rxjs/add/operator/toPromise';

@Injectable()
export class StudentService {

    //private studentsUrl = '/api/students';                              // For internet  !!!!!!!!!!!!!!!!!!!!!!!!!!!
    private studentsUrl = 'http://127.0.0.1:3000/api/students';       // For local debug, need open CORS on Chrome 

    constructor(private http: HttpClient) { }

    // get("/api/students")
    getStudents(): Promise<Student[] | void> {
        return this.http.get(this.studentsUrl)
            .toPromise()
            .then(response => response as Student[])
            .catch(this.handleError);
    }

    // get("/api/student/id")
    getStudent(student: string): Promise<Student[] | void> {

        return this.http.get(this.studentsUrl)
            .toPromise()
            .then(response => response as Student[])
            .catch(this.handleError);
    }


    getAccountState(cardAddress: String): Promise<CardBalance | void> {

        console.log("In card service : refreashCard ..." + cardAddress);

        // private cardsBalanceUrl = '/api/cardsBalance';   -- get API service by cards.js in routes folder
        return this.http.get(this.studentsUrl + '/' + cardAddress)
            .toPromise()
            .then(response => response as CardBalance)
            .catch(this.handleError);
    }


    // 1. 账户解锁
    postAccount(data: any): Promise<Student | any> {

        //var obj = JSON.parse(data);
        console.log(data.file);
        console.log(data.pw);

        return this.http.post(this.studentsUrl, data)
            .toPromise()
            .then(response => response as Student)
            .catch(this.handleError);
    }

    // 2. 生成签名
    putTransaction(file: any, data: any): Promise<Student | any> {

        var info = data.toAddress + ' ' + data.nonce.toString() + ' ' + data.value;

        var putUrl = this.studentsUrl + '/' + info;
        //var putUrl = this.studentsUrl + '/' + "n1RaCeVeLxzJG2yLwE155y2S6EqjWeVboqJ";

        console.log(file);
        console.log(info);

        return this.http.put(putUrl, file)
            .toPromise()
            .then(response => response as Student)
            .catch(this.handleError);
    }

    // 3. 发送交易
    deleteStudent(delStudentId: String): Promise<Student | any> {

        return this.http.delete(this.studentsUrl + '/' + delStudentId)
            .toPromise()
            .then(response => response as Student)
            .catch(this.handleError);
    }


    // put("/api/students/:id")
    updateStudent(putStudent: Student): Promise<Student | void> {

        var putUrl = this.studentsUrl + '/' + putStudent._id;

        return this.http.put(putUrl, putStudent)
            .toPromise()
            .then(response => response as Student)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }


    // post("/api/students")
    createStudent(newStudent: Student): Promise<Student | void> {
        return this.http.post(this.studentsUrl, newStudent)
            .toPromise()
            .then(response => response as Student)
            .catch(this.handleError);
    }
}