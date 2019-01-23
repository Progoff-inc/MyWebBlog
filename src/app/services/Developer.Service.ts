import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Paper } from '../models/student';
import { Project, Technology, ProjectPerson, Requirement, Task } from '../models/developer';
import { Person } from '../models/base';

@Injectable()
export class DeveloperService implements OnInit {
    // baseUrl:string='http://nomokoiw.beget.tech/back/';
    baseUrl = 'http://localhost:80/myblog/';
    constructor(private http: HttpClient ) {


    }
    GetProjects() {
        return this.http.get<Project[]>(this.baseUrl + 'developer.php?Key=get-projects');
    }
    GetTechs() {
        return this.http.get<Technology[]>(this.baseUrl + 'developer.php?Key=get-techs');
    }
    GetUsers() {
        return this.http.get<Person[]>(this.baseUrl + 'developer.php?Key=get-users');
    }
    GetRequirements(id) {
        return this.http.get<Requirement[]>(this.baseUrl + 'developer.php?Key=get-requirements&Id=' + id);
    }
    
    GetProject(id) {
        return this.http.get<Project>(this.baseUrl + 'developer.php?Key=get-project&Id=' + id);
    }
    GetTeam(id) {
        return this.http.get<ProjectPerson[]>(this.baseUrl + 'developer.php?Key=get-team&Id=' + id);
    }
    GetTask(id) {
        return this.http.get<Task>(this.baseUrl + 'developer.php?Key=get-task&Id=' + id);
    }
    GetRequirement(id) {
        return this.http.get<Requirement>(this.baseUrl + 'developer.php?Key=get-requirement&Id=' + id);
    }
   
    AddProject(NewProject) {

        return this.http.post(this.baseUrl + 'developer.php?Key=add-project', NewProject);
    }
    AddTask(NewTask) {

        return this.http.post(this.baseUrl + 'developer.php?Key=add-task', NewTask);
    }
    ChangeTask(ChTask, id) {
        return this.http.post(this.baseUrl + 'developer.php?Key=change-task&Id=' + id,ChTask);
    }
    ChangeReq(ChReq, id) {
        return this.http.post(this.baseUrl + 'developer.php?Key=change-req&Id=' + id,ChReq);
    }
    SetPrev(Prev, UserId) {
        return this.http.post(this.baseUrl + 'developer.php?Key=set-prev&Id=' + UserId,Prev);
    }
    AddRequirement(NewRequirement) {

        return this.http.post(this.baseUrl + 'developer.php?Key=add-requirement', NewRequirement);
    }
    AddProjectUser(NewPUser) {

        return this.http.post(this.baseUrl + 'developer.php?Key=add-project-user', NewPUser);
    }

    AddTech(NewTech) {

        return this.http.post(this.baseUrl + 'developer.php?Key=add-tech', NewTech);
    }
    CloseProject(id) {
        return this.http.delete(this.baseUrl + 'developer.php?Key=close-project&Id=' + id);
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


