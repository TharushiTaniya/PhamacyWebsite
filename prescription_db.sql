-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2024 at 09:23 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prescription_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `prescriptions`
--

CREATE TABLE `prescriptions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `note` text DEFAULT NULL,
  `delivery_address` text DEFAULT NULL,
  `images` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` enum('pending','accepted','rejected') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prescriptions`
--

INSERT INTO `prescriptions` (`id`, `user_id`, `note`, `delivery_address`, `images`, `status`, `created_at`) VALUES
(1, 1, 'prescription notes', 'colombo', '[]', 'pending', '2024-12-12 05:02:50'),
(22, 1, 'cjdcndc', 'colombo', '[\"c48ae00cca3ffff93127a59f27fbb896\"]', 'pending', '2024-12-12 07:00:04'),
(23, 1, 'jbnjbjh', 'jhny', '[\"f118751c8a0184d46771de115089a8c5\"]', 'pending', '2024-12-12 07:07:01'),
(24, 1, 'hgfdsa', 'dxdx', '[\"d422ac8e006ac7a63870de4ba3562308\"]', 'pending', '2024-12-12 07:10:44'),
(25, 1, 'cvv', 'vcv', '[\"bcc61d45b304dc60ec8375f197e83392\"]', 'pending', '2024-12-12 07:25:13'),
(26, 1, 'cgghj', 'colombo', '[\"81535d886a6c7f9669c568b32fc030f3\"]', 'pending', '2024-12-12 09:17:41'),
(27, 1, 'asdfg', 'sdfgh', '[\"f595ff2f0c69015dee238ae164e5ebe7\"]', 'pending', '2024-12-12 09:23:33'),
(28, 1, 'jghcgcjgvgg', 'ggfgf', '[\"fe44c2fc086a3351e1171087746f3c0c\"]', 'pending', '2024-12-12 09:35:08'),
(29, 1, 'vhhzscc', 'jhgh', '[\"d4a2b8bd19057f2a216dc3d646c491a4\"]', 'pending', '2024-12-12 09:59:37'),
(30, 1, 'bbh', 'jn jm', '[\"b6c3685fb2c907862ae09fb74bb1ec32\"]', 'pending', '2024-12-12 10:13:28'),
(31, 1, 'm fdsc', 'djnc c', '[\"ece85436e373e8330ee11a8f8795d259\"]', 'pending', '2024-12-12 10:46:11'),
(32, 1, 'taniya', 'Embilipitiya', '[\"ecac049c0caab0124aad7ddf7e14cb66\"]', 'pending', '2024-12-12 10:54:28'),
(33, 1, ' bnxn c ', 'xm c', '[\"bdb9c9cfe2708068efc0108b9f58f112\"]', 'pending', '2024-12-12 10:59:38'),
(34, 1, 'c d,', 'd knx', '[\"4258c5c9f72a63311885f06d9c308735\"]', 'pending', '2024-12-12 11:05:06'),
(35, 1, 'xfvf', 'xvfv', '[]', 'pending', '2024-12-12 11:14:15'),
(36, 1, 'fbvrhbfjd', 'rfnrjfr', '[\"348c2bb33dc75fc486748f65168da1d6\"]', 'pending', '2024-12-12 15:40:10');

-- --------------------------------------------------------

--
-- Table structure for table `quotations`
--

CREATE TABLE `quotations` (
  `id` int(11) NOT NULL,
  `prescription_id` int(11) NOT NULL,
  `pharmacy_id` int(11) NOT NULL,
  `quotation` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('user','pharmacy') DEFAULT 'user',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'Sithum Uthpala', 'sithum@example.com', 'hashed_password', 'user', '2024-12-12 04:01:12'),
(2, 'Pharmacy 1', 'pharmacy@example.com', 'hashed_password', 'pharmacy', '2024-12-12 04:01:48'),
(5, 'ravindu', 'ravindu@example.com', '$2a$10$aLrLt9YxOQc1MaPKwq1YLuPBYOyz3KASHSG2MepxJCS9N53cSoBlC', 'user', '2024-12-12 04:59:03'),
(6, 'test1', 'test1@example.com', '$2a$10$NgNiyG64bkPhhy9Ufkb/TuBJ.tlvGd7Jo/QF.x56F3qXgu41Pms6C', 'user', '2024-12-12 05:10:07'),
(7, 'Health Plus Pharmacy', 'healthplus@example.com', '$2a$10$BOhwWsEXyDX0qTS4UB.tseos0Ztgqu0p7Okhj5eXMFNZmal7OW8nu', 'pharmacy', '2024-12-12 06:14:25'),
(8, 'kasun', 'k@gmail.com', '$2a$10$CmKoXSuHZUPg9USlkQMWSeV8hNmskGtJqXDg2JY2pZpS3hSwVaLy6', 'user', '2024-12-12 10:47:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `quotations`
--
ALTER TABLE `quotations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prescription_id` (`prescription_id`),
  ADD KEY `pharmacy_id` (`pharmacy_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `prescriptions`
--
ALTER TABLE `prescriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `quotations`
--
ALTER TABLE `quotations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `prescriptions`
--
ALTER TABLE `prescriptions`
  ADD CONSTRAINT `prescriptions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quotations`
--
ALTER TABLE `quotations`
  ADD CONSTRAINT `quotations_ibfk_1` FOREIGN KEY (`prescription_id`) REFERENCES `prescriptions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `quotations_ibfk_2` FOREIGN KEY (`pharmacy_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
