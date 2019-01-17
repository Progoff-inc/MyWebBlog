-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Янв 17 2019 г., 20:53
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
-- Структура таблицы `papers`
--

CREATE TABLE `papers` (
  `Id` int(20) NOT NULL,
  `SubjectId` int(20) DEFAULT NULL
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
-- Структура таблицы `subjects`
--

CREATE TABLE `subjects` (
  `Id` int(20) NOT NULL,
  `TeacherId` int(20) DEFAULT NULL,
  `Name` varchar(20) NOT NULL
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
-- Индексы таблицы `papers`
--
ALTER TABLE `papers`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `papers_subjects_fk` (`SubjectId`);

--
-- Индексы таблицы `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `questions_exams_fk` (`ExamId`);

--
-- Индексы таблицы `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `subjects_teachers_fk` (`TeacherId`);

--
-- Индексы таблицы `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`Id`);

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
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `exams`
--
ALTER TABLE `exams`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `papers`
--
ALTER TABLE `papers`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `questions`
--
ALTER TABLE `questions`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `subjects`
--
ALTER TABLE `subjects`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `teachers`
--
ALTER TABLE `teachers`
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
-- Ограничения внешнего ключа таблицы `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_exams_fk` FOREIGN KEY (`ExamId`) REFERENCES `exams` (`Id`);

--
-- Ограничения внешнего ключа таблицы `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `subjects_teachers_fk` FOREIGN KEY (`TeacherId`) REFERENCES `teachers` (`Id`);

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
