-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: localhost    Database: carefood
-- ------------------------------------------------------
-- Server version	8.0.39-0ubuntu0.24.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `boxes`
--

DROP TABLE IF EXISTS `boxes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boxes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `provider_id` int DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `provider_id` (`provider_id`),
  CONSTRAINT `boxes_ibfk_1` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boxes`
--

LOCK TABLES `boxes` WRITE;
/*!40000 ALTER TABLE `boxes` DISABLE KEYS */;
INSERT INTO `boxes` VALUES (1,1,'Standard','Includes meat or fish products, frozen or fresh, mushrooms, vegetables, fruits, pasta, sauces.'),(2,1,'Vegan','Includes only plant-based items: vegetables, fruits, grains, pasta, sauces.'),(3,1,'Diabetic','Includes diabetic-friendly items: whole grains, vegetables, low-sugar products.'),(4,2,'Standard','Includes meat or fish products, frozen or fresh, mushrooms, vegetables, fruits, pasta, sauces.'),(5,2,'Vegan','Includes only plant-based items: vegetables, fruits, grains, pasta, sauces.'),(6,2,'Diabetic','Includes diabetic-friendly items: whole grains, vegetables, low-sugar products.'),(7,3,'Standard','Includes meat or fish products, frozen or fresh, mushrooms, vegetables, fruits, pasta, sauces.'),(8,3,'Vegan','Includes only plant-based items: vegetables, fruits, grains, pasta, sauces.'),(9,3,'Diabetic','Includes diabetic-friendly items: whole grains, vegetables, low-sugar products.');
/*!40000 ALTER TABLE `boxes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `providers`
--

DROP TABLE IF EXISTS `providers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `providers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `coordinates` varchar(100) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `providers`
--

LOCK TABLES `providers` WRITE;
/*!40000 ALTER TABLE `providers` DISABLE KEYS */;
INSERT INTO `providers` VALUES (1,'Lidl138Gray','Lidl138Gray','pr123456','lidl138@example.com','0123456789','Rue Gray 138, 1050 Ixelles','50.8276, 4.3724','Discount supermarket chain.'),(2,'Lidl40Cote','Lidl40Cote','pr123456','lidl40@example.com','0123456789','Rue des Coteaux 40, 1030 Schaerbeek','50.8647, 4.3769','Discount supermarket chain.'),(3,'AldiWest','AldiWest','pr123456','aldiwest@example.com','0123987654','Rue de Intendant 53, 1080 Molenbeek-Saint-Jean','50.8595, 4.3307','Discount supermarket chain.');
/*!40000 ALTER TABLE `providers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `box_id` int DEFAULT NULL,
  `provider_id` int DEFAULT NULL,
  `reservation_date` date DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `box_id` (`box_id`),
  KEY `provider_id` (`provider_id`),
  CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`box_id`) REFERENCES `boxes` (`id`),
  CONSTRAINT `reservations_ibfk_3` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `preferences` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'John Smith','john@example.com','123456789','u123456','Standard'),(2,'Anna White','anna@example.com','987654321','u123456','Vegan');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weekly_plans`
--

DROP TABLE IF EXISTS `weekly_plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weekly_plans` (
  `id` int NOT NULL AUTO_INCREMENT,
  `provider_id` int DEFAULT NULL,
  `week_start` date DEFAULT NULL,
  `standard_quantity` int DEFAULT NULL,
  `vegan_quantity` int DEFAULT NULL,
  `diabetic_quantity` int DEFAULT NULL,
  `pickup_time` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `provider_id` (`provider_id`),
  CONSTRAINT `weekly_plans_ibfk_1` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weekly_plans`
--

LOCK TABLES `weekly_plans` WRITE;
/*!40000 ALTER TABLE `weekly_plans` DISABLE KEYS */;
INSERT INTO `weekly_plans` VALUES (1,1,'2024-09-09',8,3,1,'17:30:00'),(2,1,'2024-09-10',8,3,1,'17:30:00'),(3,1,'2024-09-11',8,3,1,'17:30:00'),(4,1,'2024-09-12',8,3,1,'17:30:00'),(5,1,'2024-09-13',8,3,1,'17:30:00'),(6,1,'2024-09-14',10,4,2,'17:30:00'),(7,1,'2024-09-15',0,0,0,'17:30:00'),(8,1,'2024-09-16',8,3,1,'17:30:00'),(9,1,'2024-09-17',8,3,1,'17:30:00'),(10,1,'2024-09-18',8,3,1,'17:30:00'),(11,1,'2024-09-19',8,3,1,'17:30:00'),(12,1,'2024-09-20',8,3,1,'17:30:00'),(13,1,'2024-09-21',10,4,2,'17:30:00'),(14,1,'2024-09-22',0,0,0,'17:30:00'),(15,1,'2024-09-23',8,3,1,'17:30:00'),(16,1,'2024-09-24',8,3,1,'17:30:00'),(17,1,'2024-09-25',8,3,1,'17:30:00'),(18,1,'2024-09-26',8,3,1,'17:30:00'),(19,1,'2024-09-27',8,3,1,'17:30:00'),(20,1,'2024-09-28',10,4,2,'17:30:00'),(21,1,'2024-09-29',0,0,0,'17:30:00'),(22,2,'2024-09-09',8,3,1,'17:30:00'),(23,2,'2024-09-10',8,3,1,'17:30:00'),(24,2,'2024-09-11',8,3,1,'17:30:00'),(25,2,'2024-09-12',8,3,1,'17:30:00'),(26,2,'2024-09-13',8,3,1,'17:30:00'),(27,2,'2024-09-14',10,4,2,'17:30:00'),(28,2,'2024-09-15',0,0,0,'17:30:00'),(29,2,'2024-09-16',8,3,1,'17:30:00'),(30,2,'2024-09-17',8,3,1,'17:30:00'),(31,2,'2024-09-18',8,3,1,'17:30:00'),(32,2,'2024-09-19',8,3,1,'17:30:00'),(33,2,'2024-09-20',8,3,1,'17:30:00'),(34,2,'2024-09-21',10,4,2,'17:30:00'),(35,2,'2024-09-22',0,0,0,'17:30:00'),(36,2,'2024-09-23',8,3,1,'17:30:00'),(37,2,'2024-09-24',8,3,1,'17:30:00'),(38,2,'2024-09-25',8,3,1,'17:30:00'),(39,2,'2024-09-26',8,3,1,'17:30:00'),(40,2,'2024-09-27',8,3,1,'17:30:00'),(41,2,'2024-09-28',10,4,2,'17:30:00'),(42,2,'2024-09-29',0,0,0,'17:30:00'),(43,3,'2024-09-09',8,3,1,'17:30:00'),(44,3,'2024-09-10',8,3,1,'17:30:00'),(45,3,'2024-09-11',8,3,1,'17:30:00'),(46,3,'2024-09-12',8,3,1,'17:30:00'),(47,3,'2024-09-13',8,3,1,'17:30:00'),(48,3,'2024-09-14',10,4,2,'17:30:00'),(49,3,'2024-09-15',0,0,0,'17:30:00'),(50,3,'2024-09-16',8,3,1,'17:30:00'),(51,3,'2024-09-17',8,3,1,'17:30:00'),(52,3,'2024-09-18',8,3,1,'17:30:00'),(53,3,'2024-09-19',8,3,1,'17:30:00'),(54,3,'2024-09-20',8,3,1,'17:30:00'),(55,3,'2024-09-21',10,4,2,'17:30:00'),(56,3,'2024-09-22',0,0,0,'17:30:00'),(57,3,'2024-09-23',8,3,1,'17:30:00'),(58,3,'2024-09-24',8,3,1,'17:30:00'),(59,3,'2024-09-25',8,3,1,'17:30:00'),(60,3,'2024-09-26',8,3,1,'17:30:00'),(61,3,'2024-09-27',8,3,1,'17:30:00'),(62,3,'2024-09-28',10,4,2,'17:30:00'),(63,3,'2024-09-29',0,0,0,'17:30:00');
/*!40000 ALTER TABLE `weekly_plans` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-10 11:50:05
