import { BaseLink, BaseEntity, Person, Position } from "./base";
import { Status, Priority, Sphere, Type } from "./base";
import { Topic } from "./student";
export class Project extends BaseEntity{
    DateStart:Date;
    IsFinished:boolean;
    GitHubLink:string;
    
    Requirements:Requirement[];
    Tasks:Task[];
    Team:ProjectPerson[];
}

export class Requirement extends BaseEntity{
    ProjectId:number;
    Status:Status;
    ModifyUserId:number;
    ModifyDate:number;

    Links:BaseLink[];
    Tasks:Task[];
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
}
export class ProjectPerson{
    Id:number;
    Name:string;
    Email:string;
    Position:Position;
    ProjectId:number;

}