import { BaseLink, BaseEntity, Person } from "./base";
import { Status, Priority, Sphere, Type } from "./base";



export class Exam extends BaseEntity{
    PaperId:number;
    DateStart:Date;
    DateFinish:Date;
    Cabinet:number;

    Paper:Paper;
    Questions:Question[];
}
export class Paper{
    Id:number;
    SubjectId:number;
    ModifyDate:Date;

    Topics:Topic[];
    Links:BaseLink[];
    Files:BaseLink[];
    Subject:Subject;
}

export class Topic extends BaseEntity{
    OwnerId:number;
    Type:Type;
    ModifyDate:Date;
    ModifyUserId:number;

    Links:BaseLink[];
    Photoes:BaseLink[];
    Files:BaseLink[];
}

export class News extends BaseLink{
    Header:string;
}

export class Question extends BaseEntity{
    ExamId:number;
    Answer:string;
    QuestionNumber:string;
}

export class Subject extends BaseEntity{
    TeacherId:number;

    Teacher:Person;
    Paper:Paper;
}






