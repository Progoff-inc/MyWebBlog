import { Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Paper } from '../models/student';
import { Project, Technology } from '../models/developer';

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
    
    // GetCarPhotos(id: number) {
    //     return this.http.get<string[]>(this.baseUrl + 'CarsController.php?Key=get-photos&Id=' + id);
    // }
   
    AddProject(NewProject) {

        return this.http.post(this.baseUrl + 'developer.php?Key=add-project', NewProject);
    }

    AddTech(NewTech) {

        return this.http.post(this.baseUrl + 'developer.php?Key=add-tech', NewTech);
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
            console.log(str.match(reg));
            return str.match(reg) ? str.match(reg)[0] : null;
        }
        return str;
    }
    checkEmail(str: string) {
        return !str.match(/[a-z]+@[a-z]+\.[a-z]+/ig);
    }
}


