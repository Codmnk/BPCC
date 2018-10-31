-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2018 at 10:34 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.7

SET SQL_MODE
= "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT
= 0;
START TRANSACTION;
SET time_zone
= "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backpackercourier_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users`
(
  `uId` int
(11) NOT NULL,
  `uFirstName` varchar
(50) NOT NULL,
  `uLastName` varchar
(50) NOT NULL,
  `uEmail` varchar
(100) NOT NULL,
  `uPassword` varchar
(60) NOT NULL,
  `uMobile` int
(11) NOT NULL,
  `uProfileImg` varchar
(256) NOT NULL,
  `uCreatedDate` datetime NOT NULL,
  `uLastUpdatedDate` datetime NOT NULL,
  `uRole` tinyint
(4) NOT NULL DEFAULT '2',
  `uStatus` varchar
(12) NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles`
(
  `rId` tinyint
(4) NOT NULL,
  `rName` varchar
(20) NOT NULL,
  `rResources` varchar
(256) NOT NULL,
  `rCreatedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`
rId`,
`rName
`, `rResources`, `rCreatedDate`) VALUES
(1, 'Super User', 'all', '2018-10-28 00:00:00'),
(2, 'Public User', '', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
ADD PRIMARY KEY
(`uId`),
ADD UNIQUE KEY `uEmail`
(`uEmail`,`uMobile`),
ADD KEY `uRole`
(`uRole`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
ADD PRIMARY KEY
(`rId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uId` int
(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `rId` tinyint
(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY
(`uRole`) REFERENCES `user_roles`
(`rId`) ON
DELETE NO ACTION ON
UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
