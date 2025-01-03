-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2025 at 07:04 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oxygen_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `fullname`, `email`, `password`, `timestamp`) VALUES
(1, 'Oxygen Administration', 'admin@oxygen.com', '77313ed75f1f24343c3e917929e557aa549ec6d4', '2025-01-02 23:39:19'),
(2, 'Hadi Irshaid', 'HadiIrshaid8722@gmail.com', '32493dd81d38cb1f430beaa0f7e7ca13ef9488cf', '2025-01-02 23:39:39'),
(3, 'Zahi AbuShalbak', 'ZahiAbuShalbak@gmail.com', 'f7c3bc1d808e04732adf679965ccc34ca7ae3441', '2025-01-03 13:30:26');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `category` enum('supplements','snacks','wearables') NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `category`, `image_path`, `created_at`) VALUES
(2, 'Oxygen Shirt2', 'Oxygen Shirt2', 60.00, 'wearables', '/uploads/471974649_1718402892064308_615431441905763572_n.jpg', '2025-01-01 16:15:35'),
(3, 'Oxygen Shirt3', 'Oxygen Shirt2', 60.00, 'wearables', '/uploads/471700551_472727382532164_6759833452749978714_n.jpg', '2025-01-01 16:17:01'),
(4, 'test', 'desc', 780.00, 'supplements', '/uploads/471275959_605522431977231_7514368423933072613_n.jpg', '2025-01-01 16:21:35'),
(5, 'snackOne', 'Description', 5.00, 'snacks', '/uploads/ISO WHEY.jpg', '2025-01-01 18:50:45'),
(6, 'snackTwo', 'Some Description about the new snack we have JUST BROUGHT, ITS AWESOME, YOU MUST TRY IT OUT VERY SOON.', 4.00, 'snacks', '/uploads/ISO WHEY.jpg', '2025-01-01 18:55:00'),
(7, 'snackthree', 'Some Description about the new snack we have JUST BROUGHT, ITS AWESOME, YOU MUST TRY IT OUT VERY SOON.', 3.00, 'snacks', '/uploads/ISO WHEY.jpg', '2025-01-01 18:55:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
