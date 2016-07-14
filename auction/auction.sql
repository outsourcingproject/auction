/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50550
Source Host           : localhost:3306
Source Database       : auction

Target Server Type    : MYSQL
Target Server Version : 50550
File Encoding         : 65001

Date: 2016-07-14 10:16:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(255) NOT NULL,
  `isDefault` bit(1) NOT NULL,
  `content` varchar(255) NOT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `address_ibfk_1` (`user`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES ('1', '1', '', '这是第1条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('2', '1', '\0', '这是第2条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('3', '2', '', '这是第3条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('4', '2', '\0', '这是第4条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('5', '3', '', '这是第5条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('6', '3', '\0', '这是第6条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('7', '4', '', '这是第7条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('8', '4', '\0', '这是第8条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('9', '5', '', '这是第9条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('10', '5', '\0', '这是第10条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('11', '6', '', '这是第11条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('12', '6', '\0', '这是第12条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('13', '7', '', '这是第13条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('14', '7', '\0', '这是第14条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('15', '8', '', '这是第15条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('16', '8', '\0', '这是第16条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('17', '9', '', '这是第17条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('18', '9', '\0', '这是第18条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('19', '10', '', '这是第19条地址', '1468346687855', '1468346687855');
INSERT INTO `address` VALUES ('20', '10', '\0', '这是第20条地址', '1468346687855', '1468346687855');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `content` text,
  `author` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `author` (`author`),
  KEY `type` (`type`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_ibfk_2` FOREIGN KEY (`type`) REFERENCES `article_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', '这是第1篇文章的题目', '[1]', '这是第1篇文章的内容，写的真精彩', '1', '2', '1468346687820', '1468346687820');
INSERT INTO `article` VALUES ('2', '这是第2篇文章的题目', '[2]', '这是第2篇文章的内容，写的真精彩', '1', '3', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('3', '这是第3篇文章的题目', '[3]', '这是第3篇文章的内容，写的真精彩', '1', '4', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('4', '这是第4篇文章的题目', '[4]', '这是第4篇文章的内容，写的真精彩', '1', '1', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('5', '这是第5篇文章的题目', '[5]', '这是第5篇文章的内容，写的真精彩', '1', '2', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('6', '这是第6篇文章的题目', '[6]', '这是第6篇文章的内容，写的真精彩', '2', '3', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('7', '这是第7篇文章的题目', '[7]', '这是第7篇文章的内容，写的真精彩', '2', '4', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('8', '这是第8篇文章的题目', '[8]', '这是第8篇文章的内容，写的真精彩', '2', '1', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('9', '这是第9篇文章的题目', '[9]', '这是第9篇文章的内容，写的真精彩', '2', '2', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('10', '这是第10篇文章的题目', '[10]', '这是第10篇文章的内容，写的真精彩', '2', '3', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('11', '这是第11篇文章的题目', '[11]', '这是第11篇文章的内容，写的真精彩', '3', '4', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('12', '这是第12篇文章的题目', '[12]', '这是第12篇文章的内容，写的真精彩', '3', '1', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('13', '这是第13篇文章的题目', '[13]', '这是第13篇文章的内容，写的真精彩', '3', '2', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('14', '这是第14篇文章的题目', '[14]', '这是第14篇文章的内容，写的真精彩', '3', '3', '1468346687822', '1468346687822');
INSERT INTO `article` VALUES ('15', '这是第15篇文章的题目', '[15]', '这是第15篇文章的内容，写的真精彩', '3', '4', '1468346687823', '1468346687823');
INSERT INTO `article` VALUES ('16', '这是第16篇文章的题目', '[16]', '这是第16篇文章的内容，写的真精彩', '4', '1', '1468346687823', '1468346687823');
INSERT INTO `article` VALUES ('17', '这是第17篇文章的题目', '[17]', '这是第17篇文章的内容，写的真精彩', '4', '2', '1468346687823', '1468346687823');
INSERT INTO `article` VALUES ('18', '这是第18篇文章的题目', '[18]', '这是第18篇文章的内容，写的真精彩', '4', '3', '1468346687826', '1468346687826');
INSERT INTO `article` VALUES ('19', '这是第19篇文章的题目', '[19]', '这是第19篇文章的内容，写的真精彩', '4', '4', '1468346687826', '1468346687826');
INSERT INTO `article` VALUES ('20', '这是第20篇文章的题目', '[20]', '这是第20篇文章的内容，写的真精彩', '4', '1', '1468346687827', '1468346687827');
INSERT INTO `article` VALUES ('21', '这是第21篇文章的题目', '[21]', '这是第21篇文章的内容，写的真精彩', '5', '2', '1468346687827', '1468346687827');
INSERT INTO `article` VALUES ('22', '这是第22篇文章的题目', '[22]', '这是第22篇文章的内容，写的真精彩', '5', '3', '1468346687827', '1468346687827');
INSERT INTO `article` VALUES ('23', '这是第23篇文章的题目', '[23]', '这是第23篇文章的内容，写的真精彩', '5', '4', '1468346687827', '1468346687827');
INSERT INTO `article` VALUES ('24', '这是第24篇文章的题目', '[24]', '这是第24篇文章的内容，写的真精彩', '5', '1', '1468346687827', '1468346687827');
INSERT INTO `article` VALUES ('25', '这是第25篇文章的题目', '[25]', '这是第25篇文章的内容，写的真精彩', '5', '2', '1468346687827', '1468346687827');
INSERT INTO `article` VALUES ('26', '这是第26篇文章的题目', '[26]', '这是第26篇文章的内容，写的真精彩', '6', '3', '1468346687827', '1468346687827');
INSERT INTO `article` VALUES ('27', '这是第27篇文章的题目', '[27]', '这是第27篇文章的内容，写的真精彩', '6', '4', '1468346687827', '1468346687827');
INSERT INTO `article` VALUES ('28', '这是第28篇文章的题目', '[28]', '这是第28篇文章的内容，写的真精彩', '6', '1', '1468346687827', '1468346687827');

-- ----------------------------
-- Table structure for article_type
-- ----------------------------
DROP TABLE IF EXISTS `article_type`;
CREATE TABLE `article_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article_type
-- ----------------------------
INSERT INTO `article_type` VALUES ('1', '系统公告', '系统发布的公告', '1468346687536', '1468346687536');
INSERT INTO `article_type` VALUES ('2', '新闻动态', '系统发布的公告', '1468346687536', '1468346687536');
INSERT INTO `article_type` VALUES ('3', '行业动态', '系统发布的公告', '1468346687536', '1468346687536');
INSERT INTO `article_type` VALUES ('4', '知识荟萃', '系统发布的公告', '1468346687536', '1468346687536');

-- ----------------------------
-- Table structure for authority
-- ----------------------------
DROP TABLE IF EXISTS `authority`;
CREATE TABLE `authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `allows` text NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of authority
-- ----------------------------
INSERT INTO `authority` VALUES ('1', '浏览拍品', '描述浏览拍品', '允许浏览拍品', '1468346687655', '1468346687655');
INSERT INTO `authority` VALUES ('2', '参与竞标', '描述参与竞标', '允许参与竞标', '1468346687655', '1468346687655');
INSERT INTO `authority` VALUES ('3', '送货上门', '描述送货上门', '允许送货上门', '1468346687656', '1468346687656');

-- ----------------------------
-- Table structure for bid
-- ----------------------------
DROP TABLE IF EXISTS `bid`;
CREATE TABLE `bid` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `value` decimal(10,0) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0：得标； 1：失败； 2：领先；3： 被超；',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `item` (`item`),
  KEY `user` (`user`),
  CONSTRAINT `bid_ibfk_1` FOREIGN KEY (`item`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bid_ibfk_2` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bid
-- ----------------------------
INSERT INTO `bid` VALUES ('1', '1', '2', '100', '1', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('2', '3', '3', '150', '2', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('3', '4', '4', '200', '3', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('4', '5', '5', '250', '0', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('5', '6', '6', '300', '1', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('6', '7', '7', '350', '2', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('7', '8', '8', '400', '3', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('8', '9', '9', '450', '0', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('9', '10', '10', '500', '1', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('10', '1', '1', '50', '2', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('11', '1', '2', '100', '3', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('12', '3', '3', '150', '0', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('13', '4', '4', '200', '1', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('14', '5', '5', '250', '2', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('15', '6', '6', '300', '3', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('16', '7', '7', '350', '0', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('17', '8', '8', '400', '1', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('18', '9', '9', '450', '2', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('19', '10', '10', '500', '3', '1468346688327', '1468346688327');
INSERT INTO `bid` VALUES ('20', '1', '1', '50', '0', '1468346688328', '1468346688328');
INSERT INTO `bid` VALUES ('21', '2', '2', '100', '1', '1468346688328', '1468346688328');
INSERT INTO `bid` VALUES ('22', '3', '3', '150', '2', '1468346688328', '1468346688328');
INSERT INTO `bid` VALUES ('23', '4', '4', '200', '3', '1468346688328', '1468346688328');
INSERT INTO `bid` VALUES ('24', '5', '5', '250', '0', '1468346688328', '1468346688328');
INSERT INTO `bid` VALUES ('25', '6', '6', '300', '1', '1468346688328', '1468346688328');
INSERT INTO `bid` VALUES ('26', '7', '7', '350', '2', '1468346688328', '1468346688328');
INSERT INTO `bid` VALUES ('27', '8', '8', '400', '3', '1468346688328', '1468346688328');
INSERT INTO `bid` VALUES ('28', '9', '9', '450', '0', '1468346688329', '1468346688329');
INSERT INTO `bid` VALUES ('29', '10', '10', '500', '1', '1468346688329', '1468346688329');
INSERT INTO `bid` VALUES ('30', '1', '1', '50', '2', '1468346688329', '1468346688329');
INSERT INTO `bid` VALUES ('31', '2', '4', '10000', '1', '1468317957368', '1468317957368');
INSERT INTO `bid` VALUES ('32', '2', '2', '100', '1', '1468346863398', '1468346863398');
INSERT INTO `bid` VALUES ('33', '3', '3', '150', '2', '1468346863398', '1468346863398');
INSERT INTO `bid` VALUES ('34', '4', '4', '200', '3', '1468346863399', '1468346863399');
INSERT INTO `bid` VALUES ('35', '5', '5', '250', '0', '1468346863399', '1468346863399');
INSERT INTO `bid` VALUES ('36', '6', '6', '300', '1', '1468346863399', '1468346863399');
INSERT INTO `bid` VALUES ('37', '7', '7', '350', '2', '1468346863399', '1468346863399');
INSERT INTO `bid` VALUES ('38', '8', '8', '400', '3', '1468346863399', '1468346863399');
INSERT INTO `bid` VALUES ('39', '9', '9', '450', '0', '1468346863400', '1468346863400');
INSERT INTO `bid` VALUES ('40', '10', '10', '500', '1', '1468346863400', '1468346863400');
INSERT INTO `bid` VALUES ('41', '1', '1', '50', '2', '1468346863400', '1468346863400');
INSERT INTO `bid` VALUES ('42', '2', '2', '100', '3', '1468346863400', '1468346863400');
INSERT INTO `bid` VALUES ('43', '3', '3', '150', '0', '1468346863400', '1468346863400');
INSERT INTO `bid` VALUES ('44', '4', '4', '200', '1', '1468346863400', '1468346863400');
INSERT INTO `bid` VALUES ('45', '5', '5', '250', '2', '1468346863400', '1468346863400');
INSERT INTO `bid` VALUES ('46', '6', '6', '300', '3', '1468346863401', '1468346863401');
INSERT INTO `bid` VALUES ('47', '7', '7', '350', '0', '1468346863401', '1468346863401');
INSERT INTO `bid` VALUES ('48', '8', '8', '400', '1', '1468346863401', '1468346863401');
INSERT INTO `bid` VALUES ('49', '9', '9', '450', '2', '1468346863401', '1468346863401');
INSERT INTO `bid` VALUES ('50', '10', '10', '500', '3', '1468346863401', '1468346863401');
INSERT INTO `bid` VALUES ('51', '1', '1', '50', '0', '1468346863401', '1468346863401');
INSERT INTO `bid` VALUES ('52', '2', '2', '100', '1', '1468346863401', '1468346863401');
INSERT INTO `bid` VALUES ('53', '3', '3', '150', '2', '1468346863402', '1468346863402');
INSERT INTO `bid` VALUES ('54', '4', '4', '200', '3', '1468346863402', '1468346863402');
INSERT INTO `bid` VALUES ('55', '5', '5', '250', '0', '1468346863402', '1468346863402');
INSERT INTO `bid` VALUES ('56', '6', '6', '300', '1', '1468346863402', '1468346863402');
INSERT INTO `bid` VALUES ('57', '7', '7', '350', '2', '1468346863402', '1468346863402');
INSERT INTO `bid` VALUES ('58', '8', '8', '400', '3', '1468346863402', '1468346863402');
INSERT INTO `bid` VALUES ('59', '9', '9', '450', '0', '1468346863402', '1468346863402');
INSERT INTO `bid` VALUES ('60', '10', '10', '500', '1', '1468346863402', '1468346863402');
INSERT INTO `bid` VALUES ('61', '1', '1', '50', '2', '1468346863402', '1468346863402');
INSERT INTO `bid` VALUES ('62', '2', '2', '100', '1', '1468346929004', '1468346929004');
INSERT INTO `bid` VALUES ('63', '3', '3', '150', '2', '1468346929004', '1468346929004');
INSERT INTO `bid` VALUES ('64', '4', '4', '200', '3', '1468346929004', '1468346929004');
INSERT INTO `bid` VALUES ('65', '5', '5', '250', '0', '1468346929004', '1468346929004');
INSERT INTO `bid` VALUES ('66', '6', '6', '300', '1', '1468346929004', '1468346929004');
INSERT INTO `bid` VALUES ('67', '7', '7', '350', '2', '1468346929004', '1468346929004');
INSERT INTO `bid` VALUES ('68', '8', '8', '400', '3', '1468346929004', '1468346929004');
INSERT INTO `bid` VALUES ('69', '9', '9', '450', '0', '1468346929004', '1468346929004');
INSERT INTO `bid` VALUES ('70', '10', '10', '500', '1', '1468346929004', '1468346929004');
INSERT INTO `bid` VALUES ('71', '1', '1', '550', '2', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('72', '2', '2', '600', '3', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('73', '3', '3', '650', '0', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('74', '4', '4', '700', '1', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('75', '5', '5', '750', '2', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('76', '6', '6', '800', '3', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('77', '7', '7', '850', '0', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('78', '8', '8', '900', '1', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('79', '9', '9', '950', '2', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('80', '10', '10', '1000', '3', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('81', '1', '1', '1050', '0', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('82', '2', '2', '1100', '1', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('83', '3', '3', '1150', '2', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('84', '4', '4', '1200', '3', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('85', '5', '5', '1250', '0', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('86', '6', '6', '1300', '1', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('87', '7', '7', '1350', '2', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('88', '8', '8', '1400', '3', '1468346929005', '1468346929005');
INSERT INTO `bid` VALUES ('89', '9', '9', '1450', '0', '1468346929006', '1468346929006');
INSERT INTO `bid` VALUES ('90', '10', '10', '1500', '1', '1468346929006', '1468346929006');
INSERT INTO `bid` VALUES ('91', '1', '1', '1550', '2', '1468346929006', '1468346929006');

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `config` text NOT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config
-- ----------------------------

-- ----------------------------
-- Table structure for follow
-- ----------------------------
DROP TABLE IF EXISTS `follow`;
CREATE TABLE `follow` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(10) NOT NULL,
  `item` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `watching_ibfk_1` (`user`) USING BTREE,
  KEY `watching_ibfk_2` (`item`) USING BTREE,
  CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`item`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of follow
-- ----------------------------
INSERT INTO `follow` VALUES ('1', '1', '1');
INSERT INTO `follow` VALUES ('2', '2', '2');
INSERT INTO `follow` VALUES ('3', '3', '3');
INSERT INTO `follow` VALUES ('4', '4', '4');
INSERT INTO `follow` VALUES ('5', '5', '5');
INSERT INTO `follow` VALUES ('6', '6', '6');
INSERT INTO `follow` VALUES ('7', '7', '7');
INSERT INTO `follow` VALUES ('8', '8', '8');
INSERT INTO `follow` VALUES ('9', '9', '9');
INSERT INTO `follow` VALUES ('10', '10', '10');
INSERT INTO `follow` VALUES ('11', '1', '11');
INSERT INTO `follow` VALUES ('12', '2', '12');
INSERT INTO `follow` VALUES ('13', '3', '13');
INSERT INTO `follow` VALUES ('14', '4', '14');
INSERT INTO `follow` VALUES ('15', '5', '15');
INSERT INTO `follow` VALUES ('16', '6', '16');
INSERT INTO `follow` VALUES ('17', '7', '17');
INSERT INTO `follow` VALUES ('18', '8', '18');
INSERT INTO `follow` VALUES ('19', '9', '19');
INSERT INTO `follow` VALUES ('20', '10', '20');

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  PRIMARY KEY (`id`,`uuid`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of image
-- ----------------------------
INSERT INTO `image` VALUES ('1', '1e9e8d70-485b-11e6-b504-c1457e976e3a', 'image1', 'www/pictures/image1');
INSERT INTO `image` VALUES ('2', '1e9e8d71-485b-11e6-b504-c1457e976e3a', 'image2', 'www/pictures/image2');
INSERT INTO `image` VALUES ('3', '1e9e8d72-485b-11e6-b504-c1457e976e3a', 'image3', 'www/pictures/image3');
INSERT INTO `image` VALUES ('4', '1e9e8d73-485b-11e6-b504-c1457e976e3a', 'image4', 'www/pictures/image4');
INSERT INTO `image` VALUES ('5', '1e9e8d74-485b-11e6-b504-c1457e976e3a', 'image5', 'www/pictures/image5');
INSERT INTO `image` VALUES ('6', '1e9e8d75-485b-11e6-b504-c1457e976e3a', 'image6', 'www/pictures/image6');
INSERT INTO `image` VALUES ('7', '1e9e8d76-485b-11e6-b504-c1457e976e3a', 'image7', 'www/pictures/image7');
INSERT INTO `image` VALUES ('8', '1e9e8d77-485b-11e6-b504-c1457e976e3a', 'image8', 'www/pictures/image8');
INSERT INTO `image` VALUES ('9', '1e9e8d78-485b-11e6-b504-c1457e976e3a', 'image9', 'www/pictures/image9');
INSERT INTO `image` VALUES ('10', '1e9e8d79-485b-11e6-b504-c1457e976e3a', 'image10', 'www/pictures/image10');
INSERT INTO `image` VALUES ('11', '1e9e8d7a-485b-11e6-b504-c1457e976e3a', 'image11', 'www/pictures/image11');
INSERT INTO `image` VALUES ('12', '1e9e8d7b-485b-11e6-b504-c1457e976e3a', 'image12', 'www/pictures/image12');
INSERT INTO `image` VALUES ('13', '1e9e8d7c-485b-11e6-b504-c1457e976e3a', 'image13', 'www/pictures/image13');
INSERT INTO `image` VALUES ('14', '1e9e8d7d-485b-11e6-b504-c1457e976e3a', 'image14', 'www/pictures/image14');
INSERT INTO `image` VALUES ('15', '1e9e8d7e-485b-11e6-b504-c1457e976e3a', 'image15', 'www/pictures/image15');
INSERT INTO `image` VALUES ('16', '1e9e8d7f-485b-11e6-b504-c1457e976e3a', 'image16', 'www/pictures/image16');
INSERT INTO `image` VALUES ('17', '1e9e8d80-485b-11e6-b504-c1457e976e3a', 'image17', 'www/pictures/image17');
INSERT INTO `image` VALUES ('18', '1e9e8d81-485b-11e6-b504-c1457e976e3a', 'image18', 'www/pictures/image18');
INSERT INTO `image` VALUES ('19', '1e9e8d82-485b-11e6-b504-c1457e976e3a', 'image19', 'www/pictures/image19');
INSERT INTO `image` VALUES ('20', '1e9e8d83-485b-11e6-b504-c1457e976e3a', 'image20', 'www/pictures/image20');

-- ----------------------------
-- Table structure for item
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `foundTime` varchar(255) DEFAULT NULL,
  `foundLocation` varchar(255) DEFAULT NULL,
  `desc` text,
  `image` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0: 即将开拍; 1:拍卖中; 2:拍卖结束; 3:流拍; ',
  `publisher` int(11) NOT NULL,
  `currentBidder` int(11) DEFAULT NULL,
  `group` int(11) NOT NULL,
  `beginPrice` decimal(10,0) NOT NULL,
  `stage` decimal(10,0) NOT NULL,
  `currentPrice` decimal(10,0) NOT NULL,
  `auctionType` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0：时间领先；1：固定时间;',
  `auctionBeginTime` bigint(20) NOT NULL,
  `auctionEndTime` bigint(20) NOT NULL,
  `watchCount` int(11) NOT NULL DEFAULT '0',
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  `type` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `publisher` (`publisher`),
  KEY `group` (`group`),
  KEY `item_ibfk_3` (`type`),
  KEY `item_ibfk_4` (`currentBidder`),
  CONSTRAINT `item_ibfk_1` FOREIGN KEY (`publisher`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `item_ibfk_2` FOREIGN KEY (`group`) REFERENCES `item_group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `item_ibfk_3` FOREIGN KEY (`type`) REFERENCES `item_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `item_ibfk_4` FOREIGN KEY (`currentBidder`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item
-- ----------------------------
INSERT INTO `item` VALUES ('1', 'item1', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[1]', '1', '2', '2', '2', '50', '50', '1550', '1', '1468346688086', '1468346688086', '100', '1468346688117', '1468346688117', '2');
INSERT INTO `item` VALUES ('2', 'item2', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[2]', '2', '3', '3', '3', '50', '50', '10000', '0', '1468346688086', '1468346688086', '200', '1468346688117', '1468346688117', '3');
INSERT INTO `item` VALUES ('3', 'item3', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[3]', '3', '4', '4', '4', '50', '50', '1150', '1', '1468346688087', '1468346688087', '300', '1468346688117', '1468346688117', '4');
INSERT INTO `item` VALUES ('4', 'item4', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[4]', '0', '5', '5', '5', '50', '50', '1200', '0', '1468346688087', '1468346688087', '400', '1468346688117', '1468346688117', '1');
INSERT INTO `item` VALUES ('5', 'item5', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[5]', '1', '6', '6', '6', '50', '50', '1250', '1', '1468346688087', '1468346688087', '500', '1468346688117', '1468346688117', '2');
INSERT INTO `item` VALUES ('6', 'item6', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[6]', '2', '7', '7', '7', '50', '50', '1300', '0', '1468346688087', '1468346688087', '600', '1468346688117', '1468346688117', '3');
INSERT INTO `item` VALUES ('7', 'item7', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[7]', '3', '8', '8', '8', '50', '50', '1350', '1', '1468346688087', '1468346688087', '700', '1468346688117', '1468346688117', '4');
INSERT INTO `item` VALUES ('8', 'item8', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[8]', '0', '9', '9', '1', '50', '50', '1400', '0', '1468346688087', '1468346688087', '800', '1468346688117', '1468346688117', '1');
INSERT INTO `item` VALUES ('9', 'item9', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[9]', '1', '10', '10', '2', '50', '50', '1450', '1', '1468346688087', '1468346688087', '900', '1468346688117', '1468346688117', '2');
INSERT INTO `item` VALUES ('10', 'item10', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[10]', '2', '1', '1', '3', '50', '50', '1500', '0', '1468346688087', '1468346688087', '1000', '1468346688117', '1468346688117', '3');
INSERT INTO `item` VALUES ('11', 'item11', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[11]', '3', '2', '2', '4', '50', '50', '550', '1', '1468346688087', '1468346688087', '1100', '1468346688118', '1468346688118', '4');
INSERT INTO `item` VALUES ('12', 'item12', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[12]', '0', '3', '3', '5', '50', '50', '600', '0', '1468346688087', '1468346688087', '1200', '1468346688118', '1468346688118', '1');
INSERT INTO `item` VALUES ('13', 'item13', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[13]', '1', '4', '4', '6', '50', '50', '650', '1', '1468346688087', '1468346688087', '1300', '1468346688118', '1468346688118', '2');
INSERT INTO `item` VALUES ('14', 'item14', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[14]', '2', '5', '5', '7', '50', '50', '700', '0', '1468346688087', '1468346688087', '1400', '1468346688118', '1468346688118', '3');
INSERT INTO `item` VALUES ('15', 'item15', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[15]', '3', '6', '6', '8', '50', '50', '750', '1', '1468346688087', '1468346688087', '1500', '1468346688118', '1468346688118', '4');
INSERT INTO `item` VALUES ('16', 'item16', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[16]', '0', '7', '7', '1', '50', '50', '800', '0', '1468346688087', '1468346688087', '1600', '1468346688118', '1468346688118', '1');
INSERT INTO `item` VALUES ('17', 'item17', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[17]', '1', '8', '8', '2', '50', '50', '850', '1', '1468346688087', '1468346688087', '1700', '1468346688118', '1468346688118', '2');
INSERT INTO `item` VALUES ('18', 'item18', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[18]', '2', '9', '9', '3', '50', '50', '900', '0', '1468346688087', '1468346688087', '1800', '1468346688118', '1468346688118', '3');
INSERT INTO `item` VALUES ('19', 'item19', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[19]', '3', '10', '10', '4', '50', '50', '950', '1', '1468346688087', '1468346688087', '1900', '1468346688118', '1468346688118', '4');
INSERT INTO `item` VALUES ('20', 'item20', 'Wed Jul 13 2016 02:04:48 GMT+0800 (中国标准时间)', '河北省邯郸市', '赵国国宝', '[20]', '0', '1', '1', '5', '50', '50', '1000', '0', '1468346688087', '1468346688087', '2000', '1468346688118', '1468346688118', '1');

-- ----------------------------
-- Table structure for item_group
-- ----------------------------
DROP TABLE IF EXISTS `item_group`;
CREATE TABLE `item_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `no` int(11) NOT NULL DEFAULT '0' COMMENT '第几个专场',
  `isOpen` bit(1) NOT NULL DEFAULT b'0' COMMENT '是否在首页显示',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item_group
-- ----------------------------
INSERT INTO `item_group` VALUES ('1', '专场0', '[0]', '这是第i个专场', '1', '\0', '1468346687997', '1468346687997');
INSERT INTO `item_group` VALUES ('2', '专场1', '[1]', '这是第i个专场', '1', '', '1468346687997', '1468346687997');
INSERT INTO `item_group` VALUES ('3', '专场2', '[2]', '这是第i个专场', '1', '\0', '1468346687997', '1468346687997');
INSERT INTO `item_group` VALUES ('4', '专场3', '[3]', '这是第i个专场', '1', '', '1468346687997', '1468346687997');
INSERT INTO `item_group` VALUES ('5', '专场4', '[4]', '这是第i个专场', '1', '\0', '1468346687997', '1468346687997');
INSERT INTO `item_group` VALUES ('6', '专场5', '[5]', '这是第i个专场', '1', '', '1468346687997', '1468346687997');
INSERT INTO `item_group` VALUES ('7', '专场6', '[6]', '这是第i个专场', '1', '\0', '1468346687997', '1468346687997');
INSERT INTO `item_group` VALUES ('8', '专场7', '[7]', '这是第i个专场', '1', '', '1468346687997', '1468346687997');

-- ----------------------------
-- Table structure for item_type
-- ----------------------------
DROP TABLE IF EXISTS `item_type`;
CREATE TABLE `item_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item_type
-- ----------------------------
INSERT INTO `item_type` VALUES ('1', '古玩类型0', '这是古玩类型0');
INSERT INTO `item_type` VALUES ('2', '古玩类型1', '这是古玩类型1');
INSERT INTO `item_type` VALUES ('3', '古玩类型2', '这是古玩类型2');
INSERT INTO `item_type` VALUES ('4', '古玩类型3', '这是古玩类型3');
INSERT INTO `item_type` VALUES ('5', '古玩类型4', '这是古玩类型4');

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from` int(11) NOT NULL,
  `to` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text,
  `read` bit(1) NOT NULL DEFAULT b'0',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `from` (`from`),
  KEY `to` (`to`),
  CONSTRAINT `message_ibfk_1` FOREIGN KEY (`from`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `message_ibfk_2` FOREIGN KEY (`to`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('1', '1', '2', '这是user1发给user2的消息', 'Hello, user1, I\'m user 2', '', '1468346687921', '1468346687921');
INSERT INTO `message` VALUES ('2', '2', '3', '这是user2发给user3的消息', 'Hello, user2, I\'m user 3', '\0', '1468346687921', '1468346687921');
INSERT INTO `message` VALUES ('3', '3', '4', '这是user3发给user4的消息', 'Hello, user3, I\'m user 4', '', '1468346687921', '1468346687921');
INSERT INTO `message` VALUES ('4', '4', '5', '这是user4发给user5的消息', 'Hello, user4, I\'m user 5', '\0', '1468346687921', '1468346687921');
INSERT INTO `message` VALUES ('5', '5', '6', '这是user5发给user6的消息', 'Hello, user5, I\'m user 6', '', '1468346687921', '1468346687921');
INSERT INTO `message` VALUES ('6', '6', '7', '这是user6发给user7的消息', 'Hello, user6, I\'m user 7', '\0', '1468346687921', '1468346687921');
INSERT INTO `message` VALUES ('7', '7', '8', '这是user7发给user8的消息', 'Hello, user7, I\'m user 8', '', '1468346687921', '1468346687921');
INSERT INTO `message` VALUES ('8', '8', '9', '这是user8发给user9的消息', 'Hello, user8, I\'m user 9', '\0', '1468346687921', '1468346687921');
INSERT INTO `message` VALUES ('9', '9', '10', '这是user9发给user10的消息', 'Hello, user9, I\'m user 10', '', '1468346687921', '1468346687921');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(10) NOT NULL,
  `item` int(11) NOT NULL,
  `address` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0:"待确认" 1:"待付款"; 2:"待发货"; 3:"已发货"; 4:"已完成"',
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_ibfk_1` (`user`),
  KEY `order_ibfk_2` (`item`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`item`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '1', '1', '1', '0', '1468346688222', '1468346688222');
INSERT INTO `order` VALUES ('2', '1', '2', '2', '1', '1468346688222', '1468346688222');
INSERT INTO `order` VALUES ('3', '3', '3', '3', '2', '1468346688222', '1468346688222');
INSERT INTO `order` VALUES ('4', '4', '4', '4', '3', '1468346688222', '1468346688222');
INSERT INTO `order` VALUES ('5', '5', '5', '5', '4', '1468346688222', '1468346688222');
INSERT INTO `order` VALUES ('6', '6', '6', '6', '0', '1468346688222', '1468346688222');
INSERT INTO `order` VALUES ('7', '7', '7', '7', '1', '1468346688222', '1468346688222');
INSERT INTO `order` VALUES ('8', '8', '8', '8', '2', '1468346688222', '1468346688222');
INSERT INTO `order` VALUES ('9', '9', '9', '9', '3', '1468346688222', '1468346688222');
INSERT INTO `order` VALUES ('10', '10', '10', '10', '4', '1468346688222', '1468346688222');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `desc` text,
  `extend` varchar(255) NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `extends` (`extend`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'anonymous', 'user which has not signed up yet', '[]', '1468256270300', '1468256270300');
INSERT INTO `role` VALUES ('2', 'registered', 'user which has already signed up and not assigned to other role', '[\"anonymous\"]', '1468256270542', '1468256270542');

-- ----------------------------
-- Table structure for role_authority
-- ----------------------------
DROP TABLE IF EXISTS `role_authority`;
CREATE TABLE `role_authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` int(11) NOT NULL,
  `authority` int(11) NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `role` (`role`),
  KEY `authority` (`authority`),
  CONSTRAINT `role_authority_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `role_authority_ibfk_2` FOREIGN KEY (`authority`) REFERENCES `authority` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_authority
-- ----------------------------
INSERT INTO `role_authority` VALUES ('1', '1', '1', '1468346687699', '1468346687699');
INSERT INTO `role_authority` VALUES ('2', '2', '2', '1468346687699', '1468346687699');
INSERT INTO `role_authority` VALUES ('3', '1', '3', '1468346687699', '1468346687699');
INSERT INTO `role_authority` VALUES ('4', '2', '1', '1468346687699', '1468346687699');
INSERT INTO `role_authority` VALUES ('5', '1', '2', '1468346687699', '1468346687699');
INSERT INTO `role_authority` VALUES ('6', '2', '3', '1468346687699', '1468346687699');
INSERT INTO `role_authority` VALUES ('7', '1', '1', '1468346687699', '1468346687699');
INSERT INTO `role_authority` VALUES ('8', '2', '2', '1468346687699', '1468346687699');
INSERT INTO `role_authority` VALUES ('9', '1', '3', '1468346687699', '1468346687699');
INSERT INTO `role_authority` VALUES ('10', '2', '1', '1468346687699', '1468346687699');

-- ----------------------------
-- Table structure for service
-- ----------------------------
DROP TABLE IF EXISTS `service`;
CREATE TABLE `service` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createAt` bigint(255) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`,`title`),
  KEY `service_ibfk_1` (`image`),
  CONSTRAINT `service_ibfk_1` FOREIGN KEY (`image`) REFERENCES `image` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of service
-- ----------------------------
INSERT INTO `service` VALUES ('1', '1', '如实描述', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1468346687502', '1468346687502');
INSERT INTO `service` VALUES ('2', '2', '快速上拍', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1468346687502', '1468346687502');
INSERT INTO `service` VALUES ('3', '3', '24小时发货', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1468346687502', '1468346687502');
INSERT INTO `service` VALUES ('4', '4', '诚信服务', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1468346687502', '1468346687502');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `emailValidate` bit(1) NOT NULL DEFAULT b'0',
  `desc` varchar(255) DEFAULT NULL,
  `avatar` int(255) NOT NULL,
  `creditLines` decimal(10,0) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '0',
  `role` int(11) NOT NULL,
  `lastLogin` bigint(11) NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `role` (`role`),
  KEY `user_ibfk_2` (`avatar`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`avatar`) REFERENCES `image` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'zhangle0', 'zlpwd0', '0573328344@qq.com', '', 'I\'m zhangle', '1', '0', '1', '2', '1468346687715', '1468346687747', '1468346687747');
INSERT INTO `user` VALUES ('2', 'zhangle1', 'zlpwd1', '1573328344@qq.com', '', 'I\'m zhangle', '1', '1', '2', '1', '1468346687716', '1468346687747', '1468346687747');
INSERT INTO `user` VALUES ('3', 'zhangle2', 'zlpwd2', '2573328344@qq.com', '', 'I\'m zhangle', '1', '2', '3', '1', '1468346687716', '1468346687747', '1468346687747');
INSERT INTO `user` VALUES ('4', 'zhangle3', 'zlpwd3', '3573328344@qq.com', '', 'I\'m zhangle', '1', '3', '4', '1', '1468346687716', '1468346687748', '1468346687748');
INSERT INTO `user` VALUES ('5', 'zhangle4', 'zlpwd4', '4573328344@qq.com', '', 'I\'m zhangle', '1', '4', '5', '1', '1468346687716', '1468346687748', '1468346687748');
INSERT INTO `user` VALUES ('6', 'zhangle5', 'zlpwd5', '5573328344@qq.com', '', 'I\'m zhangle', '1', '5', '6', '1', '1468346687716', '1468346687748', '1468346687748');
INSERT INTO `user` VALUES ('7', 'zhangle6', 'zlpwd6', '6573328344@qq.com', '', 'I\'m zhangle', '1', '6', '7', '1', '1468346687716', '1468346687748', '1468346687748');
INSERT INTO `user` VALUES ('8', 'zhangle7', 'zlpwd7', '7573328344@qq.com', '', 'I\'m zhangle', '1', '7', '8', '1', '1468346687716', '1468346687748', '1468346687748');
INSERT INTO `user` VALUES ('9', 'zhangle8', 'zlpwd8', '8573328344@qq.com', '', 'I\'m zhangle', '1', '8', '9', '1', '1468346687716', '1468346687748', '1468346687748');
INSERT INTO `user` VALUES ('10', 'zhangle9', 'zlpwd9', '9573328344@qq.com', '', 'I\'m zhangle', '1', '9', '10', '1', '1468346687716', '1468346687748', '1468346687748');
DROP TRIGGER IF EXISTS `updateCurrentPrice`;
DELIMITER ;;
CREATE TRIGGER `updateCurrentPrice` AFTER INSERT ON `bid` FOR EACH ROW BEGIN
set @maxPrice = (SELECT MAX(`value`) FROM bid WHERE(`item`= new.item));
UPDATE item set currentPrice=@maxPrice  WHERE(`id`= new.item);
END
;;
DELIMITER ;
