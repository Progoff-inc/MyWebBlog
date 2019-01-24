<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");
require 'repositories.php';
$client_id = '6828242'; // ID приложения
$client_secret = 'jBSP9VR9s7pn9GaRg08Z'; // Защищённый ключ
$redirect_uri = 'http://localhost/myblog'; // Адрес сайта
$ctxt = new DataBase();
$url = 'http://oauth.vk.com/authorize';
$params = array(
    'client_id'     => $client_id,
    'redirect_uri'  => $redirect_uri,
    'response_type' => 'code'
);
if (isset($_GET['code'])) {
    $params = array(
        'client_id' => $client_id,
        'client_secret' => $client_secret,
        'code' => $_GET['code'],
        'redirect_uri' => $redirect_uri
    );
    $token = json_decode(file_get_contents('https://oauth.vk.com/access_token' . '?' . urldecode(http_build_query($params))), true);
}
if (isset($token['access_token'])) {
    $params = array(
        'uids'         => $token['user_id'],
        'fields'       => 'uid,first_name,last_name,screen_name,sex,bdate,photo_big',
        'access_token' => $token['access_token'],
        'v'=> '3.0'
    );
    $userInfo = json_decode(file_get_contents('https://api.vk.com/method/users.get' . '?' . urldecode(http_build_query($params))), true);
    $ctxt->setUser($userInfo['response'][0]['uid'], $userInfo['response'][0]['first_name'].' '.$userInfo['response'][0]['last_name'],$userInfo['response'][0]['photo_big']);
    header('Location: http://nomokoiw.beget.tech?'.urldecode(http_build_query($userInfo)));
    echo json_encode($userInfo['response'][0]['uid']);
}
    







// if(isset($_GET['Key']))
// {
    
//     switch ($_GET['Key']) {
//         case 'get-auth-link':
//             $link = '<p><a href="' . $url . '?' . urldecode(http_build_query($params)) . '">Аутентификация через ВКонтакте</a></p>';
//             echo json_encode($link);
//             break;
        
        
//         default:
//             echo "Введенный ключ несуществует";
        
//     }
    
// }
// else
// {  
//     echo "Введенные данные некорректны";
// }
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
