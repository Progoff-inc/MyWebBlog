-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Янв 21 2019 г., 15:12
-- Версия сервера: 10.1.32-MariaDB
-- Версия PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `myblog`
--

-- --------------------------------------------------------

--
-- Структура таблицы `exams`
--

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

CREATE TABLE `links` (
  `Id` int(20) NOT NULL,
  `OwnerId` int(20) NOT NULL,
  `Type` tinyint(4) NOT NULL,
  `Path` varchar(200) NOT NULL,
  `Text` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `news`
--

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

CREATE TABLE `projectusers` (
  `ProjectId` int(20) NOT NULL,
  `UserId` int(20) NOT NULL,
  `Position` varchar(20) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `projectusers`
--

INSERT INTO `projectusers` (`ProjectId`, `UserId`, `Position`) VALUES
(1, 1, 'TeamLead'),
(1, 2, 'BackDeveloper'),
(1, 3, 'Designer'),
(2, 1, 'TeamLead');

-- --------------------------------------------------------

--
-- Структура таблицы `questions`
--

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

CREATE TABLE `requirements` (
  `Id` int(20) NOT NULL,
  `ProjectId` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` text NOT NULL,
  `Status` varchar(20) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `requirements`
--

INSERT INTO `requirements` (`Id`, `ProjectId`, `Name`, `Description`, `Status`) VALUES
(1, 1, 'Сделать красивый мобильный вид', 'Заказчик попросил сделать красивый мобильный вид, так как большая часть ее аудитории заходит на сайт именно с мобильных устройств.', 'Proposed'),
(2, 1, 'Обеспечить безопастность данных пользователей', 'Необходимо надежно шифровать все соединения, так как используется авторизация пользователей', 'Proposed'),
(4, 1, 'Чат с клиентом', 'Необходимо реализовать возможность переписываться с клиентом для оформления заказа.\n\nЭто можно делать:\n1) С любой страницы кроме контактов.\n2) Из личного кабинета (здесь показывается вся переписка)', 'Proposed'),
(5, 2, 'Удобный пользовательский интерфейс', '1) Сделать возможность делать выборку заданий задания (Мои/Мои не законченные)', 'Proposed');

-- --------------------------------------------------------

--
-- Структура таблицы `subjects`
--

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

CREATE TABLE `tasks` (
  `Id` int(20) NOT NULL,
  `ProjectId` int(20) NOT NULL,
  `RequirementId` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` text NOT NULL,
  `Status` varchar(20) DEFAULT '0',
  `Priority` varchar(20) DEFAULT '0',
  `UserId` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`Id`, `ProjectId`, `RequirementId`, `Name`, `Description`, `Status`, `Priority`, `UserId`) VALUES
(3, 1, 2, 'Шифровать данные', 'Шифровать данные пользователей при обращении к серверу.', 'Active', 'Medium', 1),
(5, 1, 1, 'Добавить поиск с главной страницы', 'Добавить возможность поиска подходящих авто с главной страницы.\n\nНа основной странице можно ввести данные для фильтрации, потом пользователь должен быть переброшен на страницу автомобилей, где увидит уже отфильтрованные варианты.', 'Proposed', 'Low', 1),
(6, 2, 5, 'Добавить фильтры', 'Добавить фильтры на страницу проета, чтобы можно было выбрать свои задания.\n\nЗначения фильтров: Мои, Мои не законченные', 'Active', 'Low', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `teachers`
--

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
(13, 'Oracle PL/SQL', 'PL/Sql', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `timesheet`
--

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

CREATE TABLE `topics` (
  `Id` int(20) NOT NULL,
  `OwnerId` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` text NOT NULL,
  `ModifyDate` datetime NOT NULL,
  `Type` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `Id` int(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`Id`, `Name`, `Email`) VALUES
(1, 'Иван Номконов', 'nomokonov.vana@gmail.com'),
(2, 'Андрей Ледащев', 'ledachev@yandex.ru'),
(3, 'Мария Воробьева', 'vorobyevamaria@yandex.ru');

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
  ADD KEY `papers_subjects_fk` (`SubjectId`);

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
  ADD KEY `requirements_projects_fk` (`ProjectId`);

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
  ADD KEY `UserId` (`UserId`);

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
  ADD KEY `topics_papers_fk` (`OwnerId`);

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
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

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
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `subjects`
--
ALTER TABLE `subjects`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `teachers`
--
ALTER TABLE `teachers`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `techs`
--
ALTER TABLE `techs`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  ADD CONSTRAINT `papers_subjects_fk` FOREIGN KEY (`SubjectId`) REFERENCES `subjects` (`Id`);

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
