<?php
require 'models.php';

class DataBase {
    //$this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_portal;charset=UTF8','nomokoiw_portal','KESRdV2f');
    public $db;
    public function __construct()
    {
        //$this->db = new PDO('mysql:host=localhost;dbname=myblog;charset=UTF8','nlc','12345');
        $this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_portal;charset=UTF8','nomokoiw_portal','KESRdV2f');
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
    public function uploadFile($pid, $files, $t){
        $url = "http://nomokoiw.beget.tech/back/";
        for($i=0;$i<count($files);$i++){
            switch ($t){
                case 0:
                    
                    $folder="project_".$pid;
                    $n = basename($files['Data']['name']);
                    $d = "ProjectFiles/$folder/$n";
                    if(file_exists("ProjectFiles/$folder")){
                        
                        if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                            $s = $this->db->prepare("INSERT INTO files (OwnerId, Type, Path, Text) VALUES (?,?,?,?)");
                            $s->execute(array($pid, $t, $url.$d, basename($files['Data']['name'])));
                            return('Загружен');
                        }else{
                            return($_FILES['Data']['tmp_name']);
                        }
                    }else{
                        mkdir("ProjectFiles/$folder");
                        if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                            $s = $this->db->prepare("INSERT INTO files (OwnerId, Type, Path, Text) VALUES (?,?,?,?)");
                            $s->execute(array($pid, $t, $url.$d, basename($files['Data']['name'])));
                            return('Загружен');
                        }else{
                            return($_FILES['Data']['tmp_name']);
                        }
                    }
                    break;
                case 2:
                    
                    $folder="tech_".$pid;
                    $n = basename($files['Data']['name']);
                    $d = "TechFiles/$folder/$n";
                    if(file_exists("TechFiles/$folder")){
                        if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                            $s = $this->db->prepare("INSERT INTO files (OwnerId, Type, Path, Text) VALUES (?,?,?,?)");
                            $s->execute(array($pid, $t, $url.$d, basename($files['Data']['name'])));
                            return('Загружен');
                        }else{
                            return($_FILES['Data']['tmp_name']);
                        }
                    }else{
                        mkdir("TechFiles/$folder");
                        if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                            $s = $this->db->prepare("INSERT INTO files (OwnerId, Type, Path, Text) VALUES (?,?,?,?)");
                            $s->execute(array($pid, $t, $url.$d, basename($files['Data']['name'])));
                            return('Загружен');
                        }else{
                            return($_FILES['Data']['tmp_name']);
                        }
                    }
                    break;
                case 1:
                    
                    $folder="paper_".$pid;
                    $n = basename($files['Data']['name']);
                    $d = "PaperFiles/$folder/$n";
                    if(file_exists("PaperFiles/$folder")){
                        if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                            $s = $this->db->prepare("INSERT INTO files (OwnerId, Type, Path, Text) VALUES (?,?,?,?)");
                            $s->execute(array($pid, $t, $url.$d, basename($files['Data']['name'])));
                            return('Загружен');
                        }else{
                            return($_FILES['Data']['tmp_name']);
                        }
                    }else{
                        mkdir("PaperFiles/$folder");
                        if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                            $s = $this->db->prepare("INSERT INTO files (OwnerId, Type, Path, Text) VALUES (?,?,?,?)");
                            $s->execute(array($pid, $t, $url.$d, basename($files['Data']['name'])));
                            return('Загружен');
                        }else{
                            return($_FILES['Data']['tmp_name']);
                        }
                    }
                    break;
                case 4:
                    
                    $folder="req_".$pid;
                    $n = basename($files['Data']['name']);
                    $d = "ReqFiles/$folder/$n";
                    if(file_exists("ReqFiles/$folder")){
                        if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                            $s = $this->db->prepare("INSERT INTO files (OwnerId, Type, Path, Text) VALUES (?,?,?,?)");
                            $s->execute(array($pid, $t, $url.$d, basename($files['Data']['name'])));
                            return('Загружен');
                        }else{
                            return($_FILES['Data']['tmp_name']);
                        }
                    }else{
                        mkdir("ReqFiles/$folder");
                        if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                            $s = $this->db->prepare("INSERT INTO files (OwnerId, Type, Path, Text) VALUES (?,?,?,?)");
                            $s->execute(array($pid, $t, $url.$d, basename($files['Data']['name'])));
                            return('Загружен');
                        }else{
                            return($_FILES['Data']['tmp_name']);
                        }
                    }
                    break;
                case 3:
                    
                    $folder="task_".$pid;
                    $n = basename($files['Data']['name']);
                    $d = "TaskFiles/$folder/$n";
                    if(file_exists("TaskFiles/$folder")){
                        if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                            $s = $this->db->prepare("INSERT INTO files (OwnerId, Type, Path, Text) VALUES (?,?,?,?)");
                            $s->execute(array($pid, $t, $url.$d, basename($files['Data']['name'])));
                            return('Загружен');
                        }else{
                            return($_FILES['Data']['tmp_name']);
                        }
                    }else{
                        mkdir("TaskFiles/$folder");
                        if(move_uploaded_file($files['Data']['tmp_name'], $d)){
                            $s = $this->db->prepare("INSERT INTO files (OwnerId, Type, Path, Text) VALUES (?,?,?,?)");
                            $s->execute(array($pid, $t, $url.$d, basename($files['Data']['name'])));
                            return('Загружен');
                        }else{
                            return($_FILES['Data']['tmp_name']);
                        }
                    }
                    break;
                    
                    
            }
        }
        return(array($pid, $files));
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
        $sth = $this->db->query("SELECT * FROM projects WHERE IsFinished=0");
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
    public function getTask($Id, $uid) {
        if($this->getTaskOpen($Id)['Open']=="1"){
            $s = $this->db->prepare("SELECT * FROM tasks WHERE Id=?");
            $s->execute(array($Id));
            $s->setFetchMode(PDO::FETCH_CLASS, 'Task');
            $task = $s->fetch();
            $task->Links = $this->getLinks($task->Id, 3);
            $task->Files = $this->getFiles($task->Id, 3);
            $task->Messages = $this->getMessages($task->Id, 3);
            return $task;
        }
        else{
            if($uid == "null"){
                return null;
            }
            $s = $this->db->prepare("SELECT * FROM tasks WHERE Id=?");
            $s->execute(array($Id));
            $s->setFetchMode(PDO::FETCH_CLASS, 'Task');
            $task = $s->fetch();
            if($this->getProjectUser($task->ProjectId, $uid)['Count']>0){
                $task->Links = $this->getLinks($task->Id, 3);
                $task->Files = $this->getFiles($task->Id, 3);
                $task->Messages = $this->getMessages($task->Id, 3);
                return $task;
            }
            else{
                return null;
            }
            
        }
        
    }
    private function getTaskOpen($id){
        $s = $this->db->query("SELECT Open FROM tasks WHERE Id=$id");
        return $s->fetch();
    }
    private function getReqOpen($id){
        $s = $this->db->query("SELECT Open FROM requirements WHERE Id=$id");
        return $s->fetch();
    }
    private function getProjectUser($pid, $id){
        $s = $this->db->query("SELECT COUNT(*) AS Count FROM projectusers WHERE ProjectId=$pid and UserId=$id");
        return $s->fetch();
    }
    public function getRequirement($Id, $uid, $incl_t=false) {
        if($this->getReqOpen($Id)['Open']=="1"){
            $s = $this->db->prepare("SELECT * FROM requirements WHERE Id=?");
            $s->execute(array($Id));
            $s->setFetchMode(PDO::FETCH_CLASS, 'Requirement');
            $r = $s->fetch();
            $r->Tasks = $this->getRTasks($Id);
            $r->Links = $this->getLinks($r->Id, 4);
            $r->Files = $this->getFiles($r->Id, 4);
            $r->Messages = $this->getMessages($r->Id, 4);
            return $r;
        }
        else{
            if($uid == "null"){
                return null;
            }
            $s = $this->db->prepare("SELECT * FROM requirements WHERE Id=?");
            $s->execute(array($Id));
            $s->setFetchMode(PDO::FETCH_CLASS, 'Requirement');
            $r = $s->fetch();
            if($this->getProjectUser($r->ProjectId, $uid)['Count']>0){
                $r->Tasks = $this->getRTasks($Id);
                $r->Links = $this->getLinks($r->Id, 4);
                $r->Files = $this->getFiles($r->Id, 4);
                $r->Messages = $this->getMessages($r->Id, 4);
                return $r;
            }
            else{
                return null;
            }
            
        }
    }
    public function getProject($Id) {
        $s = $this->db->prepare("SELECT * FROM projects WHERE Id=?");
        $s->execute(array($Id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Project');
        $project = $s->fetch();
        $project->Tasks = $this->getTasks($project->Id);
        $project->Requirements = $this->getRequirements($project->Id);
        $project->Team = $this->getTeam($project->Id);
        $project->Files = $this->getFiles($project->Id,0);
        return $project;
    }

    public function getTeam($pid){
        $s = $this->db->prepare("SELECT users.Id, projectusers.ProjectId, projectusers.Position, users.Name, users.Email FROM projectusers JOIN users WHERE ProjectId=? and users.Id=projectusers.UserId");
        $s->execute(array($pid));
        $s->setFetchMode(PDO::FETCH_CLASS, 'ProjectPerson');
        return $s->fetchAll();
    }
    public function deleteTeamUser($pid, $uid, $muid){
        $s = $this->db->prepare("DELETE FROM projectusers WHERE ProjectId=? and UserId=?");
        $s->execute(array($pid, $uid));
        $s = $this->db->prepare("UPDATE projects SET ModifyDate=now(), ModifyUserId=? WHERE Id=?");
        $s->execute(array($muid, $pid));
        return $this->db->lastInsertId();
    }
    public function getPaper($Id, $topics=false) {
        $s = $this->db->prepare("SELECT * FROM papers WHERE Id=?");
        $s->execute(array($Id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Paper');
        $paper = $s->fetch();
        $paper->Subject = $this->getSubject($paper->SubjectId);
        if($topics){
            $paper->Topics = $this->getTopics($paper->Id, 1);
        }
        return $paper;
    }
    public function getTech($Id) {
        $s = $this->db->prepare("SELECT * FROM techs WHERE Id=?");
        $s->execute(array($Id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Technology');
        $tech = $s->fetch();
        $tech->Topics = $this->getTopics($tech->Id, 2);
        $tech->Links = $this->getLinks($tech->Id, 2);
        $tech->Files = $this->getFiles($tech->Id, 2);
        return $tech;
    }
    public function getTopics($id,$type){
        $s = $this->db->prepare("SELECT * FROM topics WHERE OwnerId=? and Type=?");
        $s->execute(array($id, $type));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Topic');
        return $s->fetchAll();
    }
    public function getLinks($id,$type){
        $s = $this->db->prepare("SELECT * FROM links WHERE OwnerId=? and Type=?");
        $s->execute(array($id, $type));
        $s->setFetchMode(PDO::FETCH_CLASS, 'BaseLink');
        return $s->fetchAll();
    }
    public function getMessages($id,$type){
        $s = $this->db->prepare("SELECT * FROM messages WHERE OwnerId=? and Type=?");
        $s->execute(array($id, $type));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Message');
        $messages = [];
        while ($u = $s->fetch()) {
            $u->User = $this->getUser($u->UserId);
            $messages[] = $u;
        }
        return $messages;
    }
    public function getFiles($id,$type){
        $s = $this->db->prepare("SELECT * FROM files WHERE OwnerId=? and Type=?");
        $s->execute(array($id, $type));
        $s->setFetchMode(PDO::FETCH_CLASS, 'BaseLink');
        return $s->fetchAll();
    }
    public function setTeacher($e, $n){
        $sth = $this->db->prepare("INSERT INTO teachers (Name, Email) VALUES (?,?) ");
        $sth->execute(array($n, $e));
        return $this->db->lastInsertId();
    }
    public function setTopic($oid, $n, $descr, $t, $muid){
        $sth = $this->db->prepare("INSERT INTO topics (OwnerId, Name, Description, Type, ModifyUserId, ModifyDate) VALUES (?,?,?,?,?,now()) ");
        $sth->execute(array($oid, $n, $descr, $t, $muid));
        return $this->db->lastInsertId();
    }
    public function setLink($oid, $t, $l, $tp){
        $sth = $this->db->prepare("INSERT INTO links (OwnerId, Text, Path, Type) VALUES (?,?,?,?) ");
        $sth->execute(array($oid, $t, $l, $tp));
        return $this->db->lastInsertId();
    }
    public function setMessage($oid, $t, $uid, $type){
        $sth = $this->db->prepare("INSERT INTO messages (OwnerId, Text, UserId, Type, CreateDate) VALUES (?,?,?,?,now())");
        $sth->execute(array($oid, $t, $uid, $type));
        return array($oid, $t, $uid, $type);
    }
    public function setFileLink($oid, $t, $l, $tp){
        $sth = $this->db->prepare("INSERT INTO files (OwnerId, Text, Path, Type) VALUES (?,?,?,?) ");
        $sth->execute(array($oid, $t, $l, $tp));
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
    public function setProject($n,$descr,$dst, $isf, $uid, $l, $fls){
        $sth = $this->db->prepare("INSERT INTO projects (Name, Description, DateStart, IsFinished, ModifyUserId, GitHubLink, ModifyDate) VALUES (?,?,?,?,?,?,now())");
        $sth->execute(array($n, $descr, $dst, $isf, $uid, $l ));
        return $this->db->lastInsertId();
    }
    public function setTask($n,$descr,$uid, $rid, $pr, $st, $pid, $muid){
        $sth = $this->db->prepare("INSERT INTO tasks (Name, Description, UserId, RequirementId, Priority, Status, ProjectId, ModifyUserId, ModifyDate) VALUES (?,?,?,?,?,?,?,?,now())");
        $sth->execute(array($n, $descr,$uid, $rid, $pr, $st, $pid, $muid));
        return $this->db->lastInsertId();
    }
    public function changeTask($id, $descr, $pr, $st, $uid, $muid){
        $s = $this->db->prepare("UPDATE tasks SET Description=?, Priority=?, Status=?, UserId=?, ModifyUserId=?, ModifyDate=now() WHERE Id=?" );
        $s->execute(array($descr, $pr, $st, $uid, $muid, $id));
        return $this->db->lastInsertId();
    }
    public function changeLink($id, $l, $muid){
        $s = $this->db->prepare("UPDATE projects SET GitHubLink=?, ModifyUserId=?, ModifyDate=now() WHERE Id=?" );
        $s->execute(array($l, $muid, $id));
        return array($id, $l, $muid);
    }
    public function saveTopic($id, $descr, $muid){
        $s = $this->db->prepare("UPDATE topics SET Description=?, ModifyUserId=?, ModifyDate=now() WHERE Id=?" );
        $s->execute(array($descr, $muid, $id));
        return $this->db->lastInsertId();
    }
    public function setPrev($id, $r){
        $s = $this->db->prepare("UPDATE users SET Root=? WHERE Id=?" );
        $s->execute(array($r, $id));
        return array($r, $id);
    }
    public function changeReq($id, $descr, $st, $muid){
        $s = $this->db->prepare("UPDATE requirements SET Description=?, Status=?, ModifyUserId=?, ModifyDate=now() WHERE Id=?" );
        $s->execute(array($descr, $st, $muid, $id));
        return $this->db->lastInsertId();
    }
    public function closeProject($id, $muid){
        $s = $this->db->prepare("UPDATE projects SET IsFinished=1, ModifyUserId=?, ModifyDate=now() WHERE Id=?" );
        $s->execute(array($muid, $id));
        return array($muid, $id);
    }
    public function setRequirement($n, $descr, $pid, $st, $muid){
        $sth = $this->db->prepare("INSERT INTO requirements (Name, Description, ProjectId, Status, ModifyUserId, ModifyDate) VALUES (?,?,?,?,?,now())");
        $sth->execute(array($n, $descr, $pid, $st, $muid));
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
            $sth = $this->db->prepare("INSERT INTO users (Id, Name, Photo, Root) VALUES (?,?,?,?)");
            $sth->execute(array($id, $n, $ph, 5));
        }
        else{
            $s = $this->db->prepare("UPDATE users SET Name=?, Photo=? WHERE Id=?" );
            $s->execute(array($n, $ph, $id));
        }
        $s = $this->db->prepare("SELECT * FROM users WHERE Id=?");
        $s->execute(array($id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Person');
        return $s->fetch();
    }
    public function changeOpen($id, $t){
        if($t==1){
            $sth = $this->db->prepare("UPDATE tasks SET Open = NOT Open WHERE Id=?");
            $sth->execute(array($id));
        }
        else{
            $sth = $this->db->prepare("UPDATE requirements SET Open = NOT Open WHERE Id=?");
            $sth->execute(array($id));
        }
        $s = $this->db->prepare("SELECT * FROM users WHERE Id=?");
        $s->execute(array($id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Person');
        return $s->fetch();
    }
    public function setTech($n,$l,$s){
        $sth = $this->db->prepare("INSERT INTO techs (Name, Language, Sphere) VALUES (?,?,?)");
        $sth->execute(array($n,$l,$s));
        return $s;
    }
}

?>