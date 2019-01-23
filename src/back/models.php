<?php
class BaseEntity{
    public $Id;
    public $Name;
    public $Description;
}

class BaseLink{
    public $Id;
    public $OwnerId;
    public $Type;
    public $Path;
    public $Text;
}

class Person{
    public $Id;
    public $Name;
    public $Email;
    public $Photo;
}

class Project extends BaseEntity{
    public $DateStart;
    public $IsFinished;

    public $Requirements;
    public $Tasks;
    public $Team;
}

class Requirement extends BaseEntity{
    public $ProjectId;
    public $Status;
    public $ModifyUserId;
    public $ModifyDate;

    public $Tasks;
}

class Task extends Requirement{
    public $RequirementId;
    public $UserId;
    public $Priority;

    public $User;
}

class ProjectUser{
    public $ProjectId;
    public $UserId;
    public $Position;
}

class ProjectPerson{
    public $Id;
    public $Name;
    public $Email;
    public $Position;
    public $ProjectId;

}

class Technology extends BaseEntity{
    public $Language;
    public $Sphere;

    public $Topics;
    public $Links;
}

class Exam extends BaseEntity{
    public $PaperId;
    public $DateStart;
    public $DateFinish;
    public $Cabinet;

    public $Paper;
    public $Questions;
}
class Paper{
    public $Id;
    public $SubjectId;
    public $ModifyDate;

    public $Topics;
    public $Subject;
    public $Links;
}

class Topic extends BaseEntity{
    public $OwnerId;
    public $Type;
    public $ModifyDate;
    public $ModifyUserId;

    public $Links;
    public $Photoes;
    public $Files;
}

class News extends BaseLink{
    public $Header;
}

class Question extends BaseEntity{
    public $ExamId;
    public $Answer;
    public $QuestionNumber;
}

class Subject extends BaseEntity{
    public $TeacherId;

    public $Teacher;
    public $Paper;
}
?>