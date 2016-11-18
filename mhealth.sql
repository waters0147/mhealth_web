-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- 主機: 127.0.0.1
-- 產生時間： 2016-10-18 11:14:25
-- 伺服器版本: 10.1.16-MariaDB
-- PHP 版本： 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `mhealth`
--

-- --------------------------------------------------------

--
-- 資料表結構 `bpandpulse`
--

CREATE TABLE `bpandpulse` (
  `id` int(200) NOT NULL,
  `systolic` int(10) NOT NULL,
  `diastolic` int(10) NOT NULL,
  `pulse` int(10) NOT NULL,
  `date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表的匯出資料 `bpandpulse`
--

INSERT INTO `bpandpulse` (`id`, `systolic`, `diastolic`, `pulse`, `date`) VALUES
(1, 130, 80, 75, '2016-10-07 15:23:23.000000'),
(1, 125, 60, 90, '2016-10-07 17:21:34.000000'),
(1, 135, 80, 100, '2016-10-08 18:28:33.196000');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `id` int(100) NOT NULL,
  `height` int(20) NOT NULL,
  `weight` int(20) NOT NULL,
  `sex` int(10) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表的匯出資料 `user`
--

INSERT INTO `user` (`id`, `height`, `weight`, `sex`, `date`) VALUES
(1, 175, 67, 1, '1993-10-24');

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
