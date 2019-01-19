<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");

require 'models.php';
require 'repositories.php';
class Lecturer {
    public $Name;
    public $Email;
    public $Password;
}



$ctxt = new DataBase();
if(isset($_GET['Key']))
{
    
    switch ($_GET['Key']) {
        case 'get-papers':
            echo json_encode($ctxt->getPapers());
            break;
        case 'add-paper':
            $inp = json_decode(file_get_contents('php://input'), true);
            // SELECT Id FROM users WHERE Email=?;
            $sth = $db->prepare("INSERT INTO teachers (Name, Email) VALUES (?,?) ");
            $Id = $ctxt->setTeacher($inp['TeacherName'], $inp['Email']);
            $Id = $ctxt->setSubject($Id, $inp['SubjectName']);
            $sth = $db->prepare("INSERT INTO papers (SubjectId, ModifyDate) VALUES (?,now())");
            $ctxt->setPaper($Id);
            echo json_encode(true);
            break;
        case 'add-exam':
            $inp = json_decode(file_get_contents('php://input'), true);
            // SELECT Id FROM users WHERE Email=?;
            $ctxt->setExam($inp['PaperId'], $inp['Name'], $inp['DateStart'], $inp['DateFinish'], $inp['Cabinet']);
            echo json_encode(true);
            break;
        default:
            echo "Введенный ключ несуществует";
        
    }
    
}
else
{  
    echo "Введенные данные некорректны";
}
// if(isset($_GET['Key']))
// {
    
//     $q = $db->query('SELECT * FROM exam_marks');
//     $res = [];
//     while ($row = $q->fetch()) {
//         $res[] = new Entree($row['MARK']*1, $row['EXAM_DATE']);
        
//     }
//     echo json_encode($res,true);
// }
// else
// {  
//     echo "Введенные данные некорректны";
// }
?>