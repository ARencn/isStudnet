/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 8.0.19 : Database - daan
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`daan` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `daan`;

/*Table structure for table `info` */

DROP TABLE IF EXISTS `info`;

CREATE TABLE `info` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) DEFAULT NULL,
  `query` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `daan` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8;

/*Data for the table `info` */

insert  into `info`(`id`,`ip`,`query`,`daan`,`date`) values (1,'127.0.0.1','啊','可能会发生一些令人吃惊的事情作为结局','2020-4-14 0:26:56'),(2,'127.0.0.1','啊','做一个为什么的清单','2020-4-14 0:29:34'),(3,'127.0.0.1','啊','谨慎的处理','2020-4-14 0:29:39'),(4,'112.65.8.9','啊','可能,当你老的时候','2020-4-14 2:19:27'),(5,'112.65.8.9','啊','你将需要适当调整一下','2020-4-14 2:19:38'),(6,'113.121.198.182','赵小仁儿以后会好好的吧','确保最好的决定,镇定下来','2020-4-14 2:34:2'),(7,'113.121.198.182','赵小仁儿以后会好好的吧','实施一个不太可能的解决方案','2020-4-14 2:34:3'),(8,'113.121.198.182','赵小仁儿以后会好好的吧','它将会带来好运','2020-4-14 2:34:4'),(9,'113.121.198.182','赵小仁儿以后会好好的吧','这是一个做一个新计划的最好时机了','2020-4-14 2:34:4'),(10,'113.121.198.182','赵小仁儿以后会好好的吧','你需要采取主动','2020-4-14 2:34:4'),(11,'113.121.198.182','赵小仁儿以后会好好的吧','你将不得不妥协','2020-4-14 2:34:4'),(12,'113.121.198.182','赵小仁儿以后会好好的吧','相信你最初的想法','2020-4-14 2:34:8'),(13,'113.121.198.182','赵小仁儿以后会好好的吧','它将引起一场轰动','2020-4-14 2:34:8'),(14,'113.121.198.182','赵小仁儿以后会好好的吧','可能会发生一些令人吃惊的事作为结局','2020-4-14 2:34:8'),(15,'113.121.198.182','赵小仁儿以后会好好的吧','履行你自己的义务','2020-4-14 2:34:8'),(16,'113.121.198.182','赵小仁儿以后会好好的吧','期望能够解决','2020-4-14 2:34:18'),(17,'113.121.198.182','赵小仁儿以后会好好的吧','相信你最初的想法','2020-4-14 2:34:18'),(18,'113.121.198.182','赵小仁儿以后会好好的吧','相信你最初的想法','2020-4-14 2:34:18'),(19,'113.121.198.182','赵小仁儿以后会好好的吧','从现在起的一年都没有什么所谓','2020-4-14 2:34:19'),(20,'113.121.198.182','赵小仁儿以后会好好的吧','装作它已经是真的了','2020-4-14 2:34:19'),(21,'113.121.198.182','赵小仁儿以后会好好的吧','当然','2020-4-14 2:34:30'),(22,'113.121.198.182','赵小仁儿以后会好好的吧','你将需要适当调整一下','2020-4-14 2:34:31'),(23,'113.121.198.182','赵小仁儿以后会好好的吧','怀疑你','2020-4-14 2:34:31'),(24,'113.121.198.182','赵小仁儿以后会好好的吧','期待能够解决','2020-4-14 2:34:31'),(25,'113.121.198.182','赵小仁儿会越来越好的吧？','你需要更多的信息','2020-4-14 2:37:49'),(26,'113.121.198.182','赵小仁儿会越来越好的吧？','千万别陷入你的个人感情','2020-4-14 2:37:52'),(27,'113.121.198.182','赵小仁儿会越来越好的吧？','相信你最初的想法','2020-4-14 2:37:55'),(28,'113.121.198.182','赵小仁儿会越来越好的吧？','避开第一个解决方案','2020-4-14 2:37:59'),(29,'113.121.198.182','赵小仁儿会越来越好的吧？','它将是一种乐趣','2020-4-14 2:38:2'),(30,'113.121.198.182','赵小仁儿会越来越好的吧？','你会发现你自己无法妥协','2020-4-14 2:38:7'),(31,'113.121.198.182','赵小仁儿会越来越好的吧？','可能','2020-4-14 2:38:40'),(32,'113.121.198.182','赵小仁儿会越来越好的吧？','听取专家意见','2020-4-14 2:38:51'),(33,'113.121.198.182','赵小仁儿会越来越好的吧？','先让你自己休息一下','2020-4-14 2:39:44'),(34,'113.121.198.182','赵小仁儿会越来越好的吧？','最好等等看','2020-4-14 2:39:54'),(35,'113.121.198.182','赵小仁儿会越来越好的吧？','避开第一个解决方案','2020-4-14 2:39:56'),(36,'113.121.198.182','赵小仁儿会越来越好的吧？','不要做的太过火了','2020-4-14 2:39:58'),(37,'113.121.198.182','赵小仁儿会越来越好的吧？','千万别在这上面押宝','2020-4-14 2:40:1'),(38,'113.121.198.182','赵小仁儿会越来越好的吧？','冒险一试','2020-4-14 2:40:2'),(39,'113.121.198.182','赵小仁儿会越来越好的吧？','冒险一试','2020-4-14 2:40:3'),(40,'112.65.8.9','啊','相信你最初的想法','2020-4-14 18:12:57'),(41,'112.65.8.9','啊','它可能是一个木已成舟的事','2020-4-14 18:13:55'),(42,'112.65.8.9','啊啊','听取专家建议','2020-4-14 18:13:59'),(43,'112.65.8.9','啊','移除你自己的阻碍','2020-4-14 18:15:12'),(44,'112.65.8.9','啊','实际点','2020-4-14 18:39:23'),(45,'112.65.8.9','啊','当你要去做的时候,小心行事','2020-4-14 18:43:39'),(46,'113.121.198.182','什么问题？','这时候非常不顺利','2020-4-14 18:44:57'),(47,'112.65.8.9','阿','欣然的确定它','2020-4-14 18:49:20'),(48,'112.65.8.9','阿','不知优先次序将会是过程中一个必须的部分','2020-4-14 18:49:25'),(49,'112.65.8.9','啊','它仍然无法预测','2020-4-14 20:48:44'),(50,'112.65.8.9','啊','保持灵活性','2020-4-15 0:57:32'),(51,'112.65.8.9','啊','它将会影响到它人怎么看你','2020-4-15 1:3:34'),(52,'112.65.8.9','阿','最好等等看','2020-4-15 1:6:52'),(53,'112.65.8.9','阿','避开第一个解决方案','2020-4-15 1:6:54'),(54,'112.65.8.9','啊','听取专家意见','2020-4-16 9:42:20'),(55,'112.65.8.9','啊','注意细节','2020-4-16 9:44:40'),(56,'112.65.8.9','啊','最好等等看','2020-4-16 9:46:56'),(57,'112.65.8.9','啊','相关联的问题可能会浮出水面','2020-4-16 10:0:6'),(58,'112.65.8.9','啊','做一个为什么的清单','2020-4-16 10:12:59'),(59,'112.65.8.9','啊','更加仔细的聆听,然后你将会知道','2020-4-16 10:13:33'),(60,'112.65.8.9','啊','它将会带来好运','2020-4-16 10:13:33'),(61,'112.65.8.9','啊','合作将会是至关重要的','2020-4-16 10:13:34'),(62,'112.65.8.9','啊','我爱你','2020-4-16 10:13:34'),(63,'112.64.8.9','啊','继续前进','2020-6-1 2:11:47'),(64,'112.64.8.9','爱','我爱你','2020-6-1 2:19:12'),(65,'112.64.8.9','喜欢','我爱你','2020-6-1 2:19:18'),(66,'112.64.8.9','w','相信你最初的想法','2020-6-1 2:19:24'),(67,'60.178.57.53','仁','时间会给你答案','2020-6-6 10:7:21'),(68,'60.178.57.53','爱','我爱你','2020-6-6 10:7:57'),(69,'116.77.73.247','为什么时间会拿走我所有的快乐？','不要犹豫了','2020-6-6 10:9:3'),(70,'116.77.73.247','','先让你自己休息一下','2020-6-6 10:9:11');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;