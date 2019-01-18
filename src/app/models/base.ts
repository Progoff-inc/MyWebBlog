export class BaseEntity{
    Id:number;
    Name:string;
    Description:string;
}

export class BaseLink{
    Id:number;
    OwnerId:number;
    Type:Type;
    Path:string;
    Text:string;
}

export class Person{
    Id:number;
    Name:string;
    Email:string;
}

export enum Status{
    Response,
    Active,
    Resolved,
    Closed
}
export enum Priority{
    Low,
    Medium,
    Hight
}
export enum Sphere{
    Front,
    Back,
    DataBase
}

export enum Position{
    Chef,
    TeamLead,
    FrontDeveloper,
    BackDeveloper,
    DataBaseDeveloper,
    JuniorDeveloper
}

export enum Type{
    Topic,
    User,
    Teacher,
    Technology,
    Exam,
    Paper
}
