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
            
            echo json_encode($ctxt->setProject($inp['Name'], $inp['Description'], $inp['DateStart'], false, $inp['UserId'], $inp['Link'], array($_FILES)));
            break;
        case 'add-project-user':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->setProjectUser($inp['Id'], $inp['Position'], $inp['ProjectId']));
            break;
        case 'close-project':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->closeProject($_GET['Id'], $inp['ModifyUserId']));
            break;
        case 'upload-file':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode(array($ctxt->uploadFile($_GET['Id'], $_FILES, $_GET['Type'])));
            break;
        case 'add-task':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->setTask($inp['Name'], $inp['Description'], $inp['UserId'], $inp['RequirementId'], $inp['Priority'], $inp['Status'], $inp['ProjectId'], $inp['ModifyUserId']));
            break;
        case 'change-task':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->changeTask($_GET['Id'], $inp['Description'], $inp['Priority'], $inp['Status'], $inp['UserId'], $inp['ModifyUserId']));
            break;
        case 'change-link':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->changeLink($_GET['Id'], $inp['Link'], $inp['ModifyUserId']));
            break;
        case 'change-req':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->changeReq($_GET['Id'], $inp['Description'], $inp['Status'], $inp['ModifyUserId']));
            break;
        case 'add-requirement':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->setRequirement($inp['Name'], $inp['Description'], $inp['ProjectId'], $inp['Status'], $inp['ModifyUserId']));
            break;
        case 'set-prev':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->setPrev($_GET['Id'], $inp['Root']));
            break;
        
        case 'get-requirements':
            echo json_encode($ctxt->getRequirements($_GET['Id']));
            break;
        case 'get-requirement':
            echo json_encode($ctxt->getRequirement($_GET['Id']));
            break;
        case 'get-task':
            echo json_encode($ctxt->getTask($_GET['Id']));
            break;
        case 'get-team':
            echo json_encode($ctxt->getTeam($_GET['Id']));
            break;
        case 'delete-team-user':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->deleteTeamUser($_GET['Id'], $inp['UserId'], $inp['ModifyUserId']));
            break;
        case 'get-techs':
            echo json_encode($ctxt->getTechs());
            break;
        case 'add-tech':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->setTech($inp['Name'], $inp['Language'], $inp['Sphere']));
            break;

        case 'get-ip':
            $ip =  $_SERVER['REMOTE_ADDR'];
            echo json_encode($ip);
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