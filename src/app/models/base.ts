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
export class Message{
    Id:number;
    OwnerId:number;
    Type:Type;
    UserId:number;
    Text:string;

    User:Person;
}

export class Person{
    Id:number;
    Name:string;
    Email:string;
    Photo:string;
    Root:number;
}

export enum Status{
    Proposed="Proposed",
    Active="Active",
    Resolved="Resolved",
    Closed="Closed"
}
export enum Priority{
    Low="Low",
    Medium="Medium",
    Hight="High"
}
export enum Sphere{
    Front,
    Back,
    DataBase
}

export enum Position{
    TeamLead = "TeamLead",
    FrontDeveloper = "FrontDeveloper",
    BackDeveloper = "BackDeveloper",
    DataBaseDeveloper = "DataBaseDeveloper",
    JuniorDeveloper = "JuniorDeveloper",
    Designer = "Designer"
}

export enum Type{
    Topic,
    User,
    Teacher,
    Technology,
    Exam,
    Paper
}
