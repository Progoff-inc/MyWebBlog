<?php
require 'models.php';

class DataBase {
    //$db = new PDO('mysql:host=localhost;dbname=nomokoiw_cc;charset=UTF8','nomokoiw_cc','f%EO%6ta');
    public $db = new PDO('mysql:host=localhost;dbname=myblog;charset=UTF8','nlc','12345');
    public function getPapers() {
        $sth = $db->query("SELECT * FROM papers");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Paper');
        $papers = [];
        while ($u = $sth->fetch()) {
            $u->Subject = $this->getSubject($u->SubjectId);
            $papers[] = $u;
        }
        return $papers;
    }
    public function getSubject($Id) {
        $s = $db->prepare("SELECT * FROM subjects WHERE Id=?");
        $s->execute(array($Id));
        $s->setFetchMode(PDO::FETCH_CLASS, 'Subject');
        return $s->fetch();
    }
    public function setTeacher($e, $n){
        $sth = $db->prepare("INSERT INTO teachers (Name, Email) VALUES (?,?) ");
        $sth->execute(array($n, $e));
        return $db->lastInsertId();
    }
    public function setSubject($tid, $n){
        $sth = $db->prepare("INSERT INTO subjects (TeacherId, Name) VALUES (?,?)");
        $sth->execute(array($tid, $n));
        return $db->lastInsertId();
    }
    public function setPaper($sid){
        $sth = $db->prepare("INSERT INTO papers (SubjectId, ModifyDate) VALUES (?,now())");
        $sth->execute(array($sid));
        return $db->lastInsertId();
    }
    public function setExam($pid, $n, $dst, $dfn, $c){
        $sth = $db->prepare("INSERT INTO exams (PaperId, Name, DateStart, DateFinish, Cabinet) VALUES (?,?,?,?,?)");
        $sth->execute(array($pid, $n, $dst, $dfn, $с));
        return $db->lastInsertId();
    }
}

?>