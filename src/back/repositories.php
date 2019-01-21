<?php
require 'models.php';

class DataBase {
    //$this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_cc;charset=UTF8','nomokoiw_cc','f%EO%6ta');
    public $db;
    public function __construct()
    {
        $this->db = new PDO('mysql:host=localhost;dbname=myblog;charset=UTF8','nlc','12345');
    }
    public function getPapers() {
        $sth = $this->db->query("SELECT * FROM papers");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Paper');
        $papers = [];
        while ($u = $sth->fetch()) {
            $u->Subject = $this->getSubject($u->SubjectId);
            $papers[] = $u;
        }
        return $papers;
    }
    public function getExams() {
        $sth = $this->db->query("SELECT * FROM exams");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Exam');
        $exams = [];
        while ($u = $sth->fetch()) {
            $u->DateStart = date($u->DateStart);
            $u->DateFinish = date($u->DateFinish);
            $u->Paper = $this->getPaper($u->PaperId);
            $exams[] = $u;
        }
        return $exams;
    }
    public function getQuestions($eid){
        $s = $this->db->prepare("SELECT * FROM questions WHERE Id=?");
        $s->execute(array($eid));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Question');
        return $s->fetchAll();
    }
    public function getRequirements($pid){
        $s = $this->db->prepare("SELECT * FROM requirements WHERE ProjectId=?");
        $s->execute(array($pid));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Requirement');
        return $s->fetchAll();
    }
    public function getTechs(){
        $s = $this->db->query("SELECT * FROM techs");
        $s->setFetchMode(PDO::FETCH_CLASS, 'Technology');
        return $s->fetchAll();
    }
    public function getUsers(){
        $s = $this->db->query("SELECT * FROM users");
        $s->setFetchMode(PDO::FETCH_CLASS, 'Person');
        return $s->fetchAll();
    }
    public function getUser($id){
        $s = $this->db->prepare("SELECT * FROM users WHERE Id=?");
        $s->execute(array($id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Person');
        return $s->fetch();
    }
    public function getTasks($pid){
        $s = $this->db->prepare("SELECT * FROM tasks WHERE ProjectId=?");
        $s->execute(array($pid));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Task');
        return $s->fetchAll();
    }
    public function getRTasks($rid){
        $s = $this->db->prepare("SELECT * FROM tasks WHERE RequirementId=?");
        $s->execute(array($rid));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Task');
        return $s->fetchAll();
    }
    public function getProjects(){
        $sth = $this->db->query("SELECT * FROM projects");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Project');
        $projects = [];
        while ($u = $sth->fetch()) {
            $u->Tasks = $this->getTasks($u->Id);
            $u->Team = $this->getTeam($u->Id);
            $projects[] = $u;
        }
        return $projects;
    }
    public function getSubject($Id) {
        $s = $this->db->prepare("SELECT * FROM subjects WHERE Id=?");
        $s->execute(array($Id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Subject');
        return $s->fetch();
    }
    public function getTask($Id) {
        $s = $this->db->prepare("SELECT * FROM tasks WHERE Id=?");
        $s->execute(array($Id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Task');
        return $s->fetch();
    }
    public function getRequirement($Id, $incl_t=false) {
        $s = $this->db->prepare("SELECT * FROM requirements WHERE Id=?");
        $s->execute(array($Id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Requirement');
        $r = $s->fetch();
        $r->Tasks = $this->getRTasks($Id);
        return $r;
    }
    public function getProject($Id) {
        $s = $this->db->prepare("SELECT * FROM projects WHERE Id=?");
        $s->execute(array($Id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Project');
        $project = $s->fetch();
        $project->Tasks = $this->getTasks($project->Id);
        $project->Requirements = $this->getRequirements($project->Id);
        $project->Team = $this->getTeam($project->Id);
        return $project;
    }

    public function getTeam($pid){
        $s = $this->db->prepare("SELECT users.Id, projectusers.ProjectId, projectusers.Position, users.Name, users.Email FROM projectusers JOIN users WHERE ProjectId=? and users.Id=projectusers.UserId");
        $s->execute(array($pid));
        $s->setFetchMode(PDO::FETCH_CLASS, 'ProjectPerson');
        return $s->fetchAll();
    }
    public function getPaper($Id) {
        $s = $this->db->prepare("SELECT * FROM papers WHERE Id=?");
        $s->execute(array($Id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Paper');
        $paper = $s->fetch();
        $paper->Subject = $this->getSubject($paper->SubjectId);
        return $paper;
    }
    public function setTeacher($e, $n){
        $sth = $this->db->prepare("INSERT INTO teachers (Name, Email) VALUES (?,?) ");
        $sth->execute(array($n, $e));
        return $this->db->lastInsertId();
    }
    public function setSubject($tid, $n){
        $sth = $this->db->prepare("INSERT INTO subjects (TeacherId, Name) VALUES (?,?)");
        $sth->execute(array($tid, $n));
        return $this->db->lastInsertId();
    }
    public function setPaper($sid){
        $sth = $this->db->prepare("INSERT INTO papers (SubjectId, ModifyDate) VALUES (?,now())");
        $sth->execute(array($sid));
        return $this->db->lastInsertId();
    }
    public function setExam($pid, $dst, $dfn, $c){
        $sth = $this->db->prepare("INSERT INTO exams (PaperId, DateStart, DateFinish, Cabinet) VALUES (?,?,?,?)");
        $sth->execute(array($pid, $dst, $dfn, $c));
        return $this->db->lastInsertId();
    }
    public function setProject($n,$descr,$dst, $isf){
        $sth = $this->db->prepare("INSERT INTO projects (Name, Description, DateStart, IsFinished) VALUES (?,?,?,?)");
        $sth->execute(array($n, $descr, $dst, $isf));
        return $this->db->lastInsertId();
    }
    public function setTask($n,$descr,$uid, $rid, $pr, $st, $pid){
        $sth = $this->db->prepare("INSERT INTO tasks (Name, Description, UserId, RequirementId, Priority, Status, ProjectId) VALUES (?,?,?,?,?,?,?)");
        $sth->execute(array($n, $descr,$uid, $rid, $pr, $st, $pid));
        return $this->db->lastInsertId();
    }
    public function changeTask($id, $descr, $pr, $st, $uid){
        $s = $this->db->prepare("UPDATE tasks SET Description=?, Priority=?, Status=?, UserId=? WHERE Id=?" );
        $s->execute(array($descr, $pr, $st, $uid, $id));
        return array($id, $descr, $pr, $st, $uid);
    }
    public function setRequirement($n, $descr, $pid, $st){
        $sth = $this->db->prepare("INSERT INTO requirements (Name, Description, ProjectId, Status) VALUES (?,?,?,?)");
        $sth->execute(array($n, $descr, $pid, $st));
        return $this->db->lastInsertId();
    }
    public function setProjectUser($uid,$p,$pid){
        $sth = $this->db->prepare("INSERT INTO projectusers (UserId, Position, ProjectId) VALUES (?,?,?)");
        $sth->execute(array($uid,$p,$pid));
        return $this->db->lastInsertId();
    }
    public function setUser($id, $n, $ph){
        $s = $this->db->prepare("SELECT * FROM users WHERE Id=?");
        $s->execute(array($id));
        if(count($s->fetchAll())==0){
            $sth = $this->db->prepare("INSERT INTO users (Id, Name, Photo) VALUES (?,?,?)");
            $sth->execute(array($id, $n, $ph));
        }
        else{
            $s = $this->db->prepare("UPDATE users SET Name=?, Photo=? WHERE Id=?" );
            $s->execute(array($n, $ph, $id));
        }
        // if()
        // $s->setFetchMode(PDO::FETCH_CLASS, 'Paper');
        // $sth = $this->db->prepare("INSERT INTO users (Id, Name, Photo) VALUES (?,?,?)");
        // $sth->execute(array($id, $n, $ph));
        return $this->db->lastInsertId();
    }
    public function setTech($n,$l,$s){
        $sth = $this->db->prepare("INSERT INTO techs (Name, Language, Sphere) VALUES (?,?,?)");
        $sth->execute(array($n,$l,$s));
        return $s;
    }
}

?>