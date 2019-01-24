-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Янв 24 2019 г., 15:07
-- Версия сервера: 5.7.21-20-beget-5.7.21-20-1-log
-- Версия PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `nomokoiw_portal`
--

-- --------------------------------------------------------

--
-- Структура таблицы `exams`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `exams`;
CREATE TABLE `exams` (
  `Id` int(20) NOT NULL,
  `PaperId` int(20) DEFAULT NULL,
  `DateStart` datetime NOT NULL,
  `DateFinish` datetime NOT NULL,
  `Cabinet` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `exams`
--

INSERT INTO `exams` (`Id`, `PaperId`, `DateStart`, `DateFinish`, `Cabinet`) VALUES
(1, 30, '2019-01-26 08:00:00', '2019-01-26 09:30:00', 408),
(13, 34, '2019-01-22 08:00:00', '2019-01-22 09:30:00', 303);

-- --------------------------------------------------------

--
-- Структура таблицы `files`
--
-- Создание: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `files`;
CREATE TABLE `files` (
  `Id` int(20) NOT NULL,
  `OwnerId` int(20) NOT NULL,
  `Type` tinyint(4) NOT NULL,
  `Path` varchar(200) NOT NULL,
  `text` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `links`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 08:09
--

DROP TABLE IF EXISTS `links`;
CREATE TABLE `links` (
  `Id` int(20) NOT NULL,
  `OwnerId` int(20) NOT NULL,
  `Type` tinyint(4) NOT NULL,
  `Path` varchar(200) NOT NULL,
  `Text` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `links`
--

INSERT INTO `links` (`Id`, `OwnerId`, `Type`, `Path`, `Text`) VALUES
(1, 14, 2, 'https://bootstrap-4.ru/docs/4.2.1/getting-started/introduction/', 'Bootstrap 4 (Документация)'),
(2, 14, 2, 'https://getbootstrap.com/docs/4.0/getting-started/introduction/', 'Bootstrap (Оригинальная документация)'),
(3, 8, 2, 'https://ruseller.com/lessons.php?id=1659', 'Авторизация через ВК'),
(4, 15, 2, 'https://learn.javascript.ru/range-textrange-selection', 'Обработка выделения текста'),
(5, 6, 2, 'https://www.youtube.com/watch?v=2vujABNBFAY&list=PLNkWIWHIRwME_Gv2vlWAR6TfeSXylYfw4', 'Видео курс React.js + Redux'),
(6, 5, 2, 'https://m.habr.com/ru/company/ruvds/blog/423703/', 'Node.js, Node_moduls, npm (habr)'),
(7, 8, 2, 'https://tatet.net/p450-nastroyka-avtorizatsii-cherez-google.html', 'Авторизация через Google'),
(8, 7, 2, 'https://youtu.be/qHBSc_LuHnU', 'Видео курс по основам Vue.js'),
(9, 16, 2, 'https://proglib.io/p/git-base/', 'Статья про базовый курс по Git'),
(10, 8, 2, 'https://m.vk.com/page-1_43705551', 'Отправка сообщений вк');

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--
-- Создание: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `Id` int(20) NOT NULL,
  `OwnerId` int(20) NOT NULL,
  `Type` tinyint(4) NOT NULL,
  `Path` varchar(200) NOT NULL,
  `Header` varchar(200) NOT NULL,
  `Text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `papers`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `papers`;
CREATE TABLE `papers` (
  `Id` int(20) NOT NULL,
  `SubjectId` int(20) DEFAULT NULL,
  `ModifyDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `papers`
--

INSERT INTO `papers` (`Id`, `SubjectId`, `ModifyDate`) VALUES
(30, 14, '2019-01-19 03:41:44'),
(32, 15, '2019-01-19 03:42:34'),
(34, 16, '2019-01-19 22:23:28');

-- --------------------------------------------------------

--
-- Структура таблицы `photoes`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `photoes`;
CREATE TABLE `photoes` (
  `Id` int(20) NOT NULL,
  `OwnerId` int(20) NOT NULL,
  `Type` tinyint(4) NOT NULL,
  `Path` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `photoes`
--

INSERT INTO `photoes` (`Id`, `OwnerId`, `Type`, `Path`) VALUES
(1, 1, 1, '../../assets/images/cool_photo.jpg');

-- --------------------------------------------------------

--
-- Структура таблицы `projects`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `Id` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `DateStart` datetime NOT NULL,
  `Description` text NOT NULL,
  `IsFinished` bit(1) DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `projects`
--

INSERT INTO `projects` (`Id`, `Name`, `DateStart`, `Description`, `IsFinished`) VALUES
(1, 'Cars Crete', '2018-10-01 00:00:00', 'Аренда авто на Крите.', b'0'),
(2, 'My Developer Blog', '2019-01-17 00:00:00', 'Проект создан для оптимизации работы с другими проектами в рамках компании NoLedCorp.', b'0');

-- --------------------------------------------------------

--
-- Структура таблицы `projectusers`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 10:38
--

DROP TABLE IF EXISTS `projectusers`;
CREATE TABLE `projectusers` (
  `ProjectId` int(20) NOT NULL,
  `UserId` int(20) NOT NULL,
  `Position` varchar(20) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `projectusers`
--

INSERT INTO `projectusers` (`ProjectId`, `UserId`, `Position`) VALUES
(1, 55309248, 'Designer'),
(1, 96488888, 'DataBaseDeveloper'),
(2, 55309248, 'Designer'),
(2, 96488888, 'DataBaseDeveloper');

-- --------------------------------------------------------

--
-- Структура таблицы `questions`
--
-- Создание: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `Id` int(20) NOT NULL,
  `ExamId` int(20) DEFAULT NULL,
  `Question` tinytext NOT NULL,
  `Answer` text NOT NULL,
  `DateFinish` datetime NOT NULL,
  `QuestionNumber` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `requirements`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 10:40
--

DROP TABLE IF EXISTS `requirements`;
CREATE TABLE `requirements` (
  `Id` int(20) NOT NULL,
  `ProjectId` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` text NOT NULL,
  `Status` varchar(20) DEFAULT '0',
  `ModifyUserId` int(20) DEFAULT NULL,
  `ModifyDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `requirements`
--

INSERT INTO `requirements` (`Id`, `ProjectId`, `Name`, `Description`, `Status`, `ModifyUserId`, `ModifyDate`) VALUES
(1, 1, 'Сделать красивый мобильный вид', 'Заказчик попросила сделать красивый мобильный вид, так как большая часть ее аудитории заходит на сайт именно с мобильных устройств.', 'Active', NULL, NULL),
(2, 1, 'Обеспечить безопастность данных пользователей', 'Необходимо надежно шифровать все соединения, так как используется авторизация пользователей', 'Proposed', NULL, NULL),
(4, 1, 'Чат с клиентом', 'Необходимо реализовать возможность переписываться с клиентом для оформления заказа.\n\nЭто можно делать:\n1) С любой страницы кроме контактов.\n2) Из личного кабинета (здесь показывается вся переписка)', 'Proposed', NULL, NULL),
(5, 2, 'Удобный пользовательский интерфейс', '1) Сделать возможность делать выборку заданий задания (Мои/Мои не законченные)', 'Proposed', NULL, NULL),
(6, 2, 'Исправление ошибок', 'Это требование для багов', 'Proposed', 96488888, '2019-01-24 10:49:41'),
(7, 2, 'Сделать бэк на php', 'Все функции можно посмотреть в c# файле по ссылке :\nhttps://github.com/NOLedCorp/CarsCreet/blob/master/CarsCrete/Controllers/CarsController.cs\n\n', 'Proposed', 96488888, '2019-01-24 11:40:29'),
(8, 1, 'Сделать бэк на php', 'Все функции можно посмотреть в c# файле по ссылке :\nhttps://github.com/NOLedCorp/CarsCreet/blob/master/CarsCrete/Controllers/CarsController.cs\n', 'Proposed', 96488888, '2019-01-24 11:45:31');

-- --------------------------------------------------------

--
-- Структура таблицы `subjects`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `subjects`;
CREATE TABLE `subjects` (
  `Id` int(20) NOT NULL,
  `TeacherId` int(20) DEFAULT NULL,
  `Name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `subjects`
--

INSERT INTO `subjects` (`Id`, `TeacherId`, `Name`) VALUES
(14, 20, 'CУБД'),
(15, 21, 'Операционные системы'),
(16, 22, 'Философия');

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 10:41
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `Id` int(20) NOT NULL,
  `ProjectId` int(20) NOT NULL,
  `RequirementId` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` text NOT NULL,
  `Status` varchar(20) DEFAULT '0',
  `Priority` varchar(20) DEFAULT '0',
  `UserId` int(20) DEFAULT NULL,
  `ModifyUserId` int(20) DEFAULT NULL,
  `ModifyDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`Id`, `ProjectId`, `RequirementId`, `Name`, `Description`, `Status`, `Priority`, `UserId`, `ModifyUserId`, `ModifyDate`) VALUES
(3, 1, 2, 'Шифровать данные', 'Шифровать данные пользователей при обращении к серверу.', 'Proposed', 'Medium', 96488888, 96488888, '2019-01-24 11:46:58'),
(5, 1, 1, 'Добавить поиск с главной страницы', 'Добавить возможность поиска подходящих авто с главной страницы.\n\nНа основной странице можно ввести данные для фильтрации, потом пользователь должен быть переброшен на страницу автомобилей, где увидит уже отфильтрованные варианты.', 'Proposed', 'Low', 96488888, NULL, NULL),
(6, 2, 5, 'Добавить фильтры', 'Добавить фильтры на страницу проета, чтобы можно было выбрать свои задания.\n\nЗначения фильтров: Мои, Мои не законченные', 'Active', 'Low', 96488888, NULL, NULL),
(7, 2, 5, 'Добавить возможность изменять расписание.', 'На странице студент сделать расписание изменяемым.\n\nТакже должна быть возможность добавить изменения в расписании', 'Closed', 'Medium', 96488888, 96488888, '2019-01-24 11:56:28'),
(8, 2, 7, 'Реализовать отправку комментариев ', 'В разделе feedback необходимо реализовать функцию отправки комментариев. \n\nПосмотри реализацию на с# (ссылка в требовании)', 'Proposed', 'Low', 96488888, 96488888, '2019-01-24 11:43:06'),
(9, 1, 8, 'Реализовать сохранение отзывов', 'Реализация есть в файле c# (ссылка в требовании)', 'Proposed', 'Medium', 96488888, 96488888, '2019-01-24 11:46:42');

-- --------------------------------------------------------

--
-- Структура таблицы `teachers`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `teachers`;
CREATE TABLE `teachers` (
  `Id` int(20) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Email` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `teachers`
--

INSERT INTO `teachers` (`Id`, `Name`, `Email`) VALUES
(20, 'Волков Андрей Геннад', 'volkov@yandex.ru'),
(21, 'Коротеев Михаил Викт', 'mvkoroteev@gmail.com'),
(22, 'adenikin@yandex.ru', 'Деникина Зоя Дмитриевна');

-- --------------------------------------------------------

--
-- Структура таблицы `techs`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `techs`;
CREATE TABLE `techs` (
  `Id` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Language` varchar(100) NOT NULL,
  `Sphere` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `techs`
--

INSERT INTO `techs` (`Id`, `Name`, `Language`, `Sphere`) VALUES
(5, 'Angular', 'TypeScript', 0),
(6, 'React.js', 'JavaScript', 0),
(7, 'Vue.js', 'JavaScript', 0),
(8, 'PHP', 'PHP', 1),
(9, 'Node.js', 'JavaScript', 1),
(10, 'ASP.NET Core 2', 'C#', 1),
(11, 'MySql', 'SQL', 2),
(12, 'MSSQL Server', 'SQL', 2),
(13, 'Oracle PL/SQL', 'PL/Sql', 2),
(14, 'Bootstrap', 'CSS', 0),
(15, 'JavaScript', 'JavaScript', 0),
(16, 'Git', 'Bash', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `timesheet`
--
-- Создание: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `timesheet`;
CREATE TABLE `timesheet` (
  `Id` int(20) NOT NULL,
  `SubjectId` int(20) DEFAULT NULL,
  `Cabinet` int(10) NOT NULL,
  `LessonNumber` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `timesheetchanges`
--
-- Создание: Янв 24 2019 г., 06:01
--

DROP TABLE IF EXISTS `timesheetchanges`;
CREATE TABLE `timesheetchanges` (
  `Id` int(20) NOT NULL,
  `SubjectId` int(20) DEFAULT NULL,
  `Date` datetime NOT NULL,
  `Cabinet` int(10) NOT NULL,
  `LessonNumber` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `topics`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 10:40
--

DROP TABLE IF EXISTS `topics`;
CREATE TABLE `topics` (
  `Id` int(20) NOT NULL,
  `OwnerId` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` text NOT NULL,
  `ModifyDate` datetime NOT NULL,
  `Type` tinyint(4) NOT NULL,
  `ModifyUserId` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `topics`
--

INSERT INTO `topics` (`Id`, `OwnerId`, `Name`, `Description`, `ModifyDate`, `Type`, `ModifyUserId`) VALUES
(1, 14, 'Форма Email + Password', '<form [formGroup]=\"название\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We\'ll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>', '2019-01-22 23:58:49', 2, 96488888),
(2, 14, 'Горизонтальная карточка', '<div class=\"card\" style=\"width: 18rem;\">\n  <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Card title</h5>\n    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n    <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n  </div>\n</div>', '0000-00-00 00:00:00', 2, 96488888),
(3, 14, 'Карусель с кнопками', '<div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\".../800x400?auto=yes&bg=777&fg=555&text=First slide\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\".../800x400?auto=yes&bg=666&fg=444&text=Second slide\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\".../800x400?auto=yes&bg=555&fg=333&text=Third slide\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>', '2019-01-22 18:33:35', 2, 96488888),
(4, 34, 'Школа киников. Школа Эпикура.  Школа Эпикура.', 'Привет!\n\nЦель философии, по мнению Эпикура, указать человеку путь к счастью. В теории познания Эпикур был сенсуалистом, считая, что критерием истины является ощущение, а разум полностью зависит от ощущения. Ощущения дают нам истинную картину мира, они ошибаться не могут. Ошибается судящий о них разум. Из повторяющихся ощущений возникают понятия. Эти понятия тоже истинны, а мысли о понятиях могут быть ошибочными.\n\nЭпикур говорил, что в своей философии он стремится освободить людей от трех видов страха: страха перед небесными явлениями, страха перед богами и страха смерти. Эпикур был материалистом: он пытался доказать, что все протекающие в мире процессы имеют причинно-следственный механизм. Нет ничего сверхъестественного, и так как нет субстанций, кроме материальных, то и причины могут быть также материальные. Если причина найдена, то Эпикур считает свою задачу выполненной. Узнав естественную причину явления, человек начинает побеждать страх перед этим явлением.\n\nЭпикур считал, что тела состоят из атомов, которые находятся в постоянном движении. Все изменения в телах происходят из-за перемещения атомов. Число атомов бесконечно, поэтому и Вселенная бесконечна. Вселенных бесконечное множество. Между этими мирами находятся боги. Боги существуют не в нашем мире, а между мирами, и поэтому на наш мир не влияют, следовательно, и обратной связи не существует. Всякое поклонение богам бессмысленно, боги совершенно блаженны, поэтому страха перед богами не должно быть.\n\nЧтобы избавить человека от страха перед смертью, Эпикур разрабатывает этическую часть своей философской системы. Смерти бояться не надо, так как жизнь и смерть никогда не соприкасаются. Когда есть жизнь – еще нет смерти, когда есть смерть – уже нет жизни. Мы боимся смерти – того, чего никогда не можем знать. Это бессмысленно. Смерти бояться не надо: так как душа состоит из атомов, а со смертью наше материальное тело распадается на атомы, распадается и душа. Душа смертна, и загробной жизни не существует. Смерти бояться нельзя, как нельзя бояться того, что не существует. Поэтому смысл и цель жизни – в самой жизни. Этот смысл жизни Эпикур находит в том, чтоб избегать страданий, получать наслаждение. Это достигается философией, поэтому философией заниматься не поздно никогда. Но надо искать не временных удовольствий: в еде, вине, в других телесных удовольствиях. Они либо скоро кончатся, либо могут превратиться в свою противоположность, как, например, переедание. Телесные удовольствия ограниченны и непостоянны. Поэтому душевные наслаждения, душевный покой выше телесных, так как душевный покой может быть постоянным. Духовное и душевное (Эпикур их не различает) выше телесного потому, что включают в себя не только настоящее (как телесное), но и прошлое и будущее.\n\nШкола киников\n\nОснователем этой школы был Антисфен (ок. 444 – 368 гг. до н. э.), и именно у него мы находим теоретическое обоснование кинического образа жизни, а Диоген из Синопы практически реализовал замыслы своего учителя. Антисфен, будучи верным учеником Сократа, вслед за ним утверждал, что философия как умозрение и рассуждение о природе не нужна, а нужна как способ и средство достижения жизненного блага, способ достижения счастья. Он развивал и другое положение Сократа – о том, что знание должно быть выражено в понятиях.\n\nКиник приходит к выводу, что необходимо отказаться от всех общих понятий, от общепринятых норм жизни и стремиться нужно лишь к тому, чтобы следовать тем понятиям, которые находятся в своей собственной душе. Такой образ жизни вел Диоген Синопский. Понятия здоровья, богатства, т.е. понятия общие, для Диогена не существовали.', '2019-01-23 00:27:24', 1, 96488888);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--
-- Создание: Янв 24 2019 г., 06:01
-- Последнее обновление: Янв 24 2019 г., 11:51
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `Id` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Photo` varchar(255) DEFAULT NULL,
  `Root` tinyint(4) DEFAULT NULL,
  `Link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`Id`, `Name`, `Email`, `Photo`, `Root`, `Link`) VALUES
(55309248, 'Мария Воробьёва', '', 'https://pp.userapi.com/c830508/v830508825/1d62b/DwuNDiICJM0.jpg?ava=1', 2, NULL),
(96488888, 'Андрей Ледащев', '', 'https://pp.userapi.com/c636416/v636416888/3a205/KB9Z_YdayZ4.jpg?ava=1', 2, NULL),
(340963685, 'Ванька Кома', '', 'https://pp.userapi.com/c850228/v850228731/9f503/_Ms8VIYKl68.jpg?ava=1', 5, NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `exams_subjects_fk` (`PaperId`);

--
-- Индексы таблицы `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `OwnerId` (`OwnerId`);

--
-- Индексы таблицы `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `OwnerId` (`OwnerId`);

--
-- Индексы таблицы `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `OwnerId` (`OwnerId`);

--
-- Индексы таблицы `papers`
--
ALTER TABLE `papers`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `p_s_fk` (`SubjectId`);

--
-- Индексы таблицы `photoes`
--
ALTER TABLE `photoes`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `OwnerId` (`OwnerId`);

--
-- Индексы таблицы `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `projectusers`
--
ALTER TABLE `projectusers`
  ADD PRIMARY KEY (`ProjectId`,`UserId`),
  ADD KEY `ProjectUsers_users_fk` (`UserId`);

--
-- Индексы таблицы `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `questions_exams_fk` (`ExamId`);

--
-- Индексы таблицы `requirements`
--
ALTER TABLE `requirements`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `requirements_projects_fk` (`ProjectId`),
  ADD KEY `req_changeuser_users_fk` (`ModifyUserId`);

--
-- Индексы таблицы `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `subjects_teachers_fk` (`TeacherId`);

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `tasks_projects_fk` (`ProjectId`),
  ADD KEY `tasks_requirements_fk` (`RequirementId`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `task_changeuser_users_fk` (`ModifyUserId`);

--
-- Индексы таблицы `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `techs`
--
ALTER TABLE `techs`
  ADD PRIMARY KEY (`Id`);

--
-- Индексы таблицы `timesheet`
--
ALTER TABLE `timesheet`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `timesheet_subjects_fk` (`SubjectId`);

--
-- Индексы таблицы `timesheetchanges`
--
ALTER TABLE `timesheetchanges`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `timesheetchanges_subjects_fk` (`SubjectId`);

--
-- Индексы таблицы `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `topics_papers_fk` (`OwnerId`),
  ADD KEY `t_u_fk` (`ModifyUserId`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `exams`
--
ALTER TABLE `exams`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `files`
--
ALTER TABLE `files`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `links`
--
ALTER TABLE `links`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `news`
--
ALTER TABLE `news`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `papers`
--
ALTER TABLE `papers`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT для таблицы `photoes`
--
ALTER TABLE `photoes`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `projects`
--
ALTER TABLE `projects`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `questions`
--
ALTER TABLE `questions`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `requirements`
--
ALTER TABLE `requirements`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `subjects`
--
ALTER TABLE `subjects`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `teachers`
--
ALTER TABLE `teachers`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `techs`
--
ALTER TABLE `techs`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `timesheet`
--
ALTER TABLE `timesheet`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `timesheetchanges`
--
ALTER TABLE `timesheetchanges`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `topics`
--
ALTER TABLE `topics`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=340963686;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `exams`
--
ALTER TABLE `exams`
  ADD CONSTRAINT `exams_papers_fk` FOREIGN KEY (`PaperId`) REFERENCES `papers` (`Id`);

--
-- Ограничения внешнего ключа таблицы `papers`
--
ALTER TABLE `papers`
  ADD CONSTRAINT `p_s_fk` FOREIGN KEY (`SubjectId`) REFERENCES `subjects` (`Id`);

--
-- Ограничения внешнего ключа таблицы `projectusers`
--
ALTER TABLE `projectusers`
  ADD CONSTRAINT `ProjectUsers_projects_fk` FOREIGN KEY (`ProjectId`) REFERENCES `projects` (`Id`),
  ADD CONSTRAINT `ProjectUsers_users_fk` FOREIGN KEY (`UserId`) REFERENCES `users` (`Id`);

--
-- Ограничения внешнего ключа таблицы `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_exams_fk` FOREIGN KEY (`ExamId`) REFERENCES `exams` (`Id`);

--
-- Ограничения внешнего ключа таблицы `requirements`
--
ALTER TABLE `requirements`
  ADD CONSTRAINT `req_changeuser_users_fk` FOREIGN KEY (`ModifyUserId`) REFERENCES `users` (`Id`),
  ADD CONSTRAINT `requirements_projects_fk` FOREIGN KEY (`ProjectId`) REFERENCES `projects` (`Id`);

--
-- Ограничения внешнего ключа таблицы `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_teachers_fk` FOREIGN KEY (`TeacherId`) REFERENCES `teachers` (`Id`);

--
-- Ограничения внешнего ключа таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `task_changeuser_users_fk` FOREIGN KEY (`ModifyUserId`) REFERENCES `users` (`Id`),
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`Id`),
  ADD CONSTRAINT `tasks_projects_fk` FOREIGN KEY (`ProjectId`) REFERENCES `projects` (`Id`),
  ADD CONSTRAINT `tasks_requirements_fk` FOREIGN KEY (`RequirementId`) REFERENCES `requirements` (`Id`);

--
-- Ограничения внешнего ключа таблицы `timesheet`
--
ALTER TABLE `timesheet`
  ADD CONSTRAINT `timesheet_subjects_fk` FOREIGN KEY (`SubjectId`) REFERENCES `subjects` (`Id`);

--
-- Ограничения внешнего ключа таблицы `timesheetchanges`
--
ALTER TABLE `timesheetchanges`
  ADD CONSTRAINT `timesheetchanges_subjects_fk` FOREIGN KEY (`SubjectId`) REFERENCES `subjects` (`Id`);

--
-- Ограничения внешнего ключа таблицы `topics`
--
ALTER TABLE `topics`
  ADD CONSTRAINT `t_u_fk` FOREIGN KEY (`ModifyUserId`) REFERENCES `users` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
