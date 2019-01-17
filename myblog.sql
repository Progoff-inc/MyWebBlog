-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Янв 18 2019 г., 00:21
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
  `SubjectId` int(20) DEFAULT NULL,
  `Name` varchar(100) NOT NULL,
  `DateStart` datetime NOT NULL,
  `DateFinish` datetime NOT NULL,
  `Cabinet` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `files`
--

CREATE TABLE `files` (
  `Id` int(20) NOT NULL,
  `OwnerId` int(20) NOT NULL,
  `Type` tinyint(4) NOT NULL,
  `Path` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `links`
--

CREATE TABLE `links` (
  `Id` int(20) NOT NULL,
  `OwnerId` int(20) NOT NULL,
  `Type` tinyint(4) NOT NULL,
  `Link` varchar(100) NOT NULL,
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
  `SubjectId` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

-- --------------------------------------------------------

--
-- Структура таблицы `projectusers`
--

CREATE TABLE `projectusers` (
  `ProjectId` int(20) NOT NULL,
  `UserId` int(20) NOT NULL,
  `Position` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `Status` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `subjects`
--

CREATE TABLE `subjects` (
  `Id` int(20) NOT NULL,
  `TeacherId` int(20) DEFAULT NULL,
  `Name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `Status` tinyint(4) DEFAULT '0',
  `Priority` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `teachers`
--

CREATE TABLE `teachers` (
  `Id` int(20) NOT NULL,
  `Name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `PaperId` int(20) DEFAULT NULL,
  `Name` varchar(100) NOT NULL,
  `Text` text NOT NULL,
  `ModifyDate` datetime NOT NULL
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
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `exams_subjects_fk` (`SubjectId`),
  ADD KEY `exams_papers_fk` (`PaperId`);

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
  ADD KEY `tasks_requirements_fk` (`RequirementId`);

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
  ADD KEY `topics_papers_fk` (`PaperId`);

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
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

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
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `photoes`
--
ALTER TABLE `photoes`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `projects`
--
ALTER TABLE `projects`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `questions`
--
ALTER TABLE `questions`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `requirements`
--
ALTER TABLE `requirements`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `subjects`
--
ALTER TABLE `subjects`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `teachers`
--
ALTER TABLE `teachers`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `techs`
--
ALTER TABLE `techs`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

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
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `exams`
--
ALTER TABLE `exams`
  ADD CONSTRAINT `exams_papers_fk` FOREIGN KEY (`PaperId`) REFERENCES `papers` (`Id`),
  ADD CONSTRAINT `exams_subjects_fk` FOREIGN KEY (`SubjectId`) REFERENCES `subjects` (`Id`);

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
  ADD CONSTRAINT `topics_papers_fk` FOREIGN KEY (`PaperId`) REFERENCES `papers` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
