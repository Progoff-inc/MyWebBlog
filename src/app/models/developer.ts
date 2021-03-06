import { BaseLink, BaseEntity, Person, Position, Message } from "./base";
import { Status, Priority, Sphere, Type } from "./base";
import { Topic } from "./student";
export class Project extends BaseEntity{
    DateStart:Date;
    IsFinished:boolean;
    GitHubLink:string;
    
    Requirements:Requirement[];
    Tasks:Task[];
    Files:BaseLink[];
    Team:ProjectPerson[];
}

export class Requirement extends BaseEntity{
    ProjectId:number;
    Status:Status;
    ModifyUserId:number;
    ModifyDate:number;
    Open:boolean;

    Links:BaseLink[];
    Tasks:Task[];
    Files:BaseLink[];
    Messages:Message[];
}

export class Task extends Requirement{
    RequirementId:number;
    UserId:number;
    Priority:Priority;

    User:Person;
    Links:BaseLink[];
    
}

export class ProjectUsers{
    ProjectId:number;
    UserId:number;
    Position:Position;
}

export class Technology extends BaseEntity{
    Language:string;
    Sphere:Sphere;

    Topics:Topic[];
    Links:BaseLink[];
    Files:BaseLink[];
}
export class ProjectPerson{
    Id:number;
    Name:string;
    Email:string;
    Position:Position;
    ProjectId:number;

}