import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Paper, Exam } from '../models/student';
import { Person } from '../models/base';
import { Technology } from '../models/developer';

@Injectable()
export class StudentService implements OnInit {
    baseUrl:string='http://nomokoiw.beget.tech/back/';
    //baseUrl = 'http://localhost:80/myblog/';
    constructor(private http: HttpClient ) {


    }
    GetPapers() {
        return this.http.get<Paper[]>(this.baseUrl + 'student.php?Key=get-papers');
    }
    GetExams() {
        return this.http.get<Exam[]>(this.baseUrl + 'student.php?Key=get-exams');
    }
    GetUser(id) {
        return this.http.get<Person>(this.baseUrl + 'student.php?Key=get-user&Id=' + id);
    }
    GetTech(id) {
        return this.http.get<Technology>(this.baseUrl + 'student.php?Key=get-tech&Id=' + id);
    }
    GetPaper(id) {
        return this.http.get<Paper>(this.baseUrl + 'student.php?Key=get-paper&Id=' + id);
    }
    GetAuthLink() {
        return this.http.get<string>(this.baseUrl + 'student.php?Key=get-auth-link');
    }
    
    // GetCarPhotos(id: number) {
    //     return this.http.get<string[]>(this.baseUrl + 'CarsController.php?Key=get-photos&Id=' + id);
    // }
   
    AddPaper(NewPaper) {

        return this.http.post(this.baseUrl + 'student.php?Key=add-paper', NewPaper);
    }
    AddLink(NewLink) {

        return this.http.post(this.baseUrl + 'student.php?Key=add-link', NewLink);
    }
    AddTopic(NewTopic) {

        return this.http.post(this.baseUrl + 'student.php?Key=add-topic', NewTopic);
    }
    AddExam(NewExam) {

        return this.http.post(this.baseUrl + 'student.php?Key=add-exam', NewExam);
    }
    SaveTopic(NewTopic) {
        return this.http.post(this.baseUrl + 'student.php?Key=save-topic', NewTopic);
    }

    ngOnInit() {

    }
    checkStr(str: string, type?: string) {
        if (!type) {
            // tslint:disable-next-line:max-line-length
            const reg = /(\s??хер|[а-я]*ху[ей]+|пид[оа]р[а-я]*|суч?ка|[пзд]?[оа]?[ел]б[ауеоё][еёлчнтмш][а-я]*|бл[яе]а?[тдь]{0,2}|[расзпо]*пизд[ецаитьуняй]*)/gi;
            str = str.replace(reg, '***');

        }
        if (type = 'phone') {
            const reg = /\D/g;

            str = str.replace(reg, '');
        }
        if (type = 'phone-check') {
            // tslint:disable-next-line:max-line-length
            const reg = /(^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$|^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$)/g;

            str = str.replace(/\D/g, '');
            return str.match(reg) ? str.match(reg)[0] : null;
        }
        return str;
    }
    checkEmail(str: string) {
        return !str.match(/[a-z]+@[a-z]+\.[a-z]+/ig);
    }
}


