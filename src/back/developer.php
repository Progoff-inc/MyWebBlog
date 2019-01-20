<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");


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
            $Id = $ctxt->setTeacher($inp['TeacherName'], $inp['Email']);
            $Id = $ctxt->setSubject($Id, $inp['SubjectName']);
            $ctxt->setPaper($Id);
            echo json_encode(true);
            break;
        case 'add-exam':
            $inp = json_decode(file_get_contents('php://input'), true);
            // SELECT Id FROM users WHERE Email=?;
            $ctxt->setExam($inp['PaperId'], $inp['DateStart'], $inp['DateFinish'], $inp['Cabinet']);
            
            
            echo json_encode($inp['DateStart']);
            break;
        case 'get-exams':
            echo json_encode($ctxt->getExams());
            break;
        case 'get-users':
            echo json_encode($ctxt->getUsers());
            break;
        case 'get-projects':
            echo json_encode($ctxt->getProjects());
            break;
        case 'get-project':
            echo json_encode($ctxt->getProject($_GET['Id']));
            break;
        case 'add-project':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->setProject($inp['Name'], $inp['Description'], $inp['DateStart'], false));
            break;
        case 'add-project-user':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->setProjectUser($inp['Id'], $inp['Position'], $inp['ProjectId'], false));
            break;
        case 'get-techs':
            echo json_encode($ctxt->getTechs());
            break;
        case 'add-tech':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->setTech($inp['Name'], $inp['Language'], $inp['Sphere']));
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