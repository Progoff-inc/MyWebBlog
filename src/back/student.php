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
$client_id = '6828242'; // ID приложения
$client_secret = 'jBSP9VR9s7pn9GaRg08Z'; // Защищённый ключ
$redirect_uri = 'http://localhost/myblog'; // Адрес сайта

$url = 'http://oauth.vk.com/authorize';
$params = array(
    'client_id'     => $client_id,
    'redirect_uri'  => $redirect_uri,
    'response_type' => 'code'
);


$ctxt = new DataBase();
if(isset($_GET['Key']))
{
    
    switch ($_GET['Key']) {
        case 'get-user':
            
            echo json_encode($ctxt->getUser($_GET['Id']));
            break;
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
        case 'add-topic':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->setTopic($inp['OwnerId'], $inp['Name'], $inp['Description'], $inp['Type'], $inp['ModifyUserId']));
            break;
        case 'add-link':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->setLink($inp['OwnerId'], $inp['Text'], $inp['Path'], $inp['Type']));
            break;
        case 'save-topic':
            $inp = json_decode(file_get_contents('php://input'), true);
            echo json_encode($ctxt->saveTopic($inp['Id'], $inp['Description'], $inp['ModifyUserId']));
            break;
        case 'get-exams':
            echo json_encode($ctxt->getExams());
            break;
        case 'get-paper':
            echo json_encode($ctxt->getPaper($_GET['Id'], true));
            break;
        case 'get-tech':
            echo json_encode($ctxt->getTech($_GET['Id']));
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