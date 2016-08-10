/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50528
Source Host           : localhost:3306
Source Database       : auction

Target Server Type    : MYSQL
Target Server Version : 50528
File Encoding         : 65001

Date: 2016-08-09 22:38:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(255) NOT NULL,
  `isDefault` tinyint(1) NOT NULL,
  `province` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  `phoneNum` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `address_ibfk_1` (`user`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES ('3', '2', '0', '北京', '北京', '东城区', 'aaaaaaxxxxx', '这是第3条地址', '1468489586809', '1470722061338', '18530268149');
INSERT INTO `address` VALUES ('4', '2', '1', '天津', '天津', '和平区', 'aaaaa', '这是第4条地址', '1468489586809', '1470722045211', '18530268149');
INSERT INTO `address` VALUES ('5', '3', '1', '', '', '', '', '这是第5条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('6', '3', '0', '', '', '', '', '这是第6条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('7', '4', '1', '', '', '', '', '这是第7条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('8', '4', '0', '', '', '', '', '这是第8条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('9', '5', '1', '', '', '', '', '这是第9条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('10', '5', '0', '', '', '', '', '这是第10条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('11', '6', '1', '', '', '', '', '这是第11条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('12', '6', '0', '', '', '', '', '这是第12条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('13', '7', '1', '', '', '', '', '这是第13条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('14', '7', '0', '', '', '', '', '这是第14条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('15', '8', '1', '', '', '', '', '这是第15条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('16', '8', '0', '', '', '', '', '这是第16条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('17', '9', '1', '', '', '', '', '这是第17条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('18', '9', '0', '', '', '', '', '这是第18条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('19', '10', '1', '', '', '', '', '这是第19条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('20', '10', '0', '', '', '', '', '这是第20条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('21', '1', '1', '辽宁', '大连', '沙河口区', 'chongqing university', 'aa', '1470704524931', '1470721589195', '18530268149');
INSERT INTO `address` VALUES ('22', '1', '0', '山西', '太原', '小店区', 'adsfdsaf', 'sdafdasf', '1470707543437', '1470721545255', '18530268149');
INSERT INTO `address` VALUES ('23', '1', '0', '重庆', '重庆', '渝中区', 'chongqing university', 'dsafd', '1470707622585', '1470721580142', '18530268149');

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `image` int(11) DEFAULT NULL,
  `content` text,
  `author` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `author` (`author`),
  KEY `type` (`type`),
  KEY `article_ibfk_3` (`image`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_ibfk_2` FOREIGN KEY (`type`) REFERENCES `article_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `article_ibfk_3` FOREIGN KEY (`image`) REFERENCES `image` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('6', '这是第6篇文章的题目', '7', '<p>这是第6篇文章的内容，写的真精彩aaaaa!!!</p>', '2', '3', '1468489586790', '1470723398497');
INSERT INTO `article` VALUES ('7', '这是第7篇文章的题目', '8', '这是第7篇文章的内容，写的真精彩', '2', '4', '1468489586790', '1468489586790');
INSERT INTO `article` VALUES ('9', '这是第9篇文章的题目', '10', '这是第9篇文章的内容，写的真精彩', '2', '2', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('10', '这是第10篇文章的题目', '1', '这是第10篇文章的内容，写的真精彩', '2', '3', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('11', '这是第11篇文章的题目', '2', '这是第11篇文章的内容，写的真精彩', '3', '2', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('13', '这是第13篇文章的题目', '4', '这是第13篇文章的内容，写的真精彩', '3', '2', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('14', '这是第14篇文章的题目', '5', '这是第14篇文章的内容，写的真精彩', '3', '3', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('15', '这是第15篇文章的题目', '6', '这是第15篇文章的内容，写的真精彩', '3', '1', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('17', '这是第17篇文章的题目', '8', '这是第17篇文章的内容，写的真精彩', '4', '2', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('18', '这是第18篇文章的题目', '9', '这是第18篇文章的内容，写的真精彩', '4', '3', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('19', '这是第19篇文章的题目', '10', '这是第19篇文章的内容，写的真精彩', '4', '1', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('21', '这是第21篇文章的题目', '2', '这是第21篇文章的内容，写的真精彩', '5', '2', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('22', '这是第22篇文章的题目', '3', '这是第22篇文章的内容，写的真精彩', '5', '1', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('23', '这是第23篇文章的题目', '4', '这是第23篇文章的内容，写的真精彩', '5', '1', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('25', '这是第25篇文章的题目', '6', '这是第25篇文章的内容，写的真精彩', '5', '2', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('26', '这是第26篇文章的题目', '7', '这是第26篇文章的内容，写的真精彩', '6', '3', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('27', '这是第27篇文章的题目', '8', '这是第27篇文章的内容，写的真精彩', '6', '1', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('38', 'asdfads', '0', '<p>fasdf</p>', '2', '1', '1470725003585', '1470725003585');

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
INSERT INTO `article_type` VALUES ('1', '系统公告', '系统公告', '0', '0');
INSERT INTO `article_type` VALUES ('2', '新闻动态', '系统发布的公告', '1468489586629', '1468489586629');
INSERT INTO `article_type` VALUES ('3', '行业动态', '系统发布的公告', '1468489586629', '1468489586629');
INSERT INTO `article_type` VALUES ('4', '知识荟萃', '系统发布的公告', '1468489586629', '1468489586629');

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
INSERT INTO `authority` VALUES ('1', '浏览拍品', '描述浏览拍品', '允许浏览拍品', '1468489586669', '1468489586669');
INSERT INTO `authority` VALUES ('2', '参与竞标', '描述参与竞标', '允许参与竞标', '1468489586669', '1468489586669');
INSERT INTO `authority` VALUES ('3', '送货上门', '描述送货上门', '允许送货上门', '1468489586669', '1468489586669');

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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bid
-- ----------------------------
INSERT INTO `bid` VALUES ('1', '2', '2', '100', '1', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('2', '3', '3', '150', '2', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('3', '4', '4', '200', '3', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('4', '5', '5', '250', '0', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('5', '6', '6', '300', '1', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('6', '7', '7', '350', '2', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('7', '8', '8', '400', '3', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('8', '9', '9', '450', '0', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('9', '10', '10', '500', '1', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('10', '1', '1', '550', '2', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('11', '2', '1', '600', '3', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('12', '3', '1', '650', '0', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('13', '4', '1', '700', '1', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('14', '5', '5', '750', '2', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('15', '6', '6', '800', '3', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('16', '7', '7', '850', '0', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('17', '8', '8', '900', '1', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('18', '9', '9', '950', '2', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('19', '10', '10', '1000', '3', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('20', '2', '1', '1050', '0', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('21', '2', '2', '1100', '1', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('22', '3', '3', '1150', '2', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('23', '4', '4', '1200', '3', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('24', '5', '5', '1250', '0', '1468489587187', '1468489587187');
INSERT INTO `bid` VALUES ('25', '6', '6', '1300', '1', '1468489587187', '1468489587187');
INSERT INTO `bid` VALUES ('26', '7', '7', '1350', '2', '1468489587187', '1468489587187');
INSERT INTO `bid` VALUES ('27', '8', '8', '1400', '3', '1468489587187', '1468489587187');
INSERT INTO `bid` VALUES ('28', '9', '9', '1450', '0', '1468489587187', '1468489587187');
INSERT INTO `bid` VALUES ('29', '10', '10', '1500', '1', '1468489587187', '1468489587187');
INSERT INTO `bid` VALUES ('30', '1', '1', '1550', '2', '1468489587187', '1468489587187');

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES ('1', '{\"defaultRoles\":[{\"name\":\"anonymous\",\"desc\":\"user which has not signed up yet\",\"extend\":[],\"authorities\":[\"index\",\"page\",\"home\",\"restAPI\"]},{\"name\":\"registered\",\"extend\":[\"anonymous\"],\"desc\":\"user which has already signed up and not assigned to other role\",\"authorities\":[\"admin\"]}],\"defaultAuthorities\":[{\"name\":\"index\",\"desc\":\"can visit index\",\"paths\":[\"/\"]},{\"name\":\"page\",\"desc\":\"can visit static page\",\"paths\":[\"/^page\\\\//\"]},{\"name\":\"home\",\"desc\":\"can use home module\",\"paths\":[\"/^home\\\\//\"]},{\"name\":\"restAPI\",\"desc\":\"can use rest API\",\"paths\":[\"/^rest\\\\//\"]},{\"name\":\"admin\",\"desc\":\"can admin the site\",\"paths\":[\"/^admin\\\\//\"]}],\"pageCount\":{\"default\":10,\"article\":5,\"item\":20,\"bid\":10,\"order\":10},\"auction\":{\"bid_increasment\":[[0,50],[1000,100],[5000,200],[10000,500],[20000,1000]],\"ahead_time\":{\"time\":1440},\"fix_time\":{\"need_delay_time\":5,\"auto_delay_time\":5}}}', '1468473580040', '1468473580040');

-- ----------------------------
-- Table structure for follow
-- ----------------------------
DROP TABLE IF EXISTS `follow`;
CREATE TABLE `follow` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(10) NOT NULL,
  `item` int(10) NOT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `watching_ibfk_1` (`user`) USING BTREE,
  KEY `watching_ibfk_2` (`item`) USING BTREE,
  CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`item`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of follow
-- ----------------------------
INSERT INTO `follow` VALUES ('1', '1', '1', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('2', '2', '2', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('3', '3', '3', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('4', '4', '4', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('5', '5', '5', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('6', '6', '6', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('7', '7', '7', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('8', '8', '8', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('9', '9', '9', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('10', '10', '10', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('11', '1', '11', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('12', '2', '12', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('13', '3', '13', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('14', '4', '14', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('15', '5', '15', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('16', '6', '16', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('17', '7', '17', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('18', '8', '18', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('19', '9', '19', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('20', '10', '20', '1468489587089', '1468489587089');

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `originName` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of image
-- ----------------------------
INSERT INTO `image` VALUES ('0', 'null', 'null', '0', '0');
INSERT INTO `image` VALUES ('1', 'avatar.png', 'file://UPLOAD_PATH/images/1e301a70-5891-11e6-b2e7-b3fd5b9adfa3.png', '1468489586529', '1468489586529');
INSERT INTO `image` VALUES ('2', 'image2', 'www/pictures/image2', '1468489586529', '1468489586529');
INSERT INTO `image` VALUES ('3', 'image3', 'www/pictures/image3', '1468489586529', '1468489586529');
INSERT INTO `image` VALUES ('4', 'image4', 'www/pictures/image4', '1468489586529', '1468489586529');
INSERT INTO `image` VALUES ('5', 'image5', 'www/pictures/image5', '1468489586529', '1468489586529');
INSERT INTO `image` VALUES ('6', 'image6', 'www/pictures/image6', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('7', 'image7', 'www/pictures/image7', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('8', 'image8', 'www/pictures/image8', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('9', 'image9', 'www/pictures/image9', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('10', 'image10', 'www/pictures/image10', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('11', 'image11', 'www/pictures/image11', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('12', 'image12', 'www/pictures/image12', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('13', 'image13', 'www/pictures/image13', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('14', 'image14', 'www/pictures/image14', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('15', 'image15', 'www/pictures/image15', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('16', 'image16', 'www/pictures/image16', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('17', 'image17', 'www/pictures/image17', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('18', 'image18', 'www/pictures/image18', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('19', 'image19', 'www/pictures/image19', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('20', '201211172256364491.png', 'file://UPLOAD_PATH/images/033ad2b0-5dd6-11e6-9747-0376144db653.png', '1468489586530', '1468489586530');
INSERT INTO `image` VALUES ('21', '1.JPG', 'file://UPLOAD_PATH/images/9bc84170-5e17-11e6-b289-675671fdd8a6.JPG', '1470708444011', '1470708444011');
INSERT INTO `image` VALUES ('22', '14.JPG', 'file://UPLOAD_PATH/images/9bc8ddb0-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617244', '1470736617244');
INSERT INTO `image` VALUES ('23', '2.JPG', 'file://UPLOAD_PATH/images/9bc7a530-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617243', '1470736617243');
INSERT INTO `image` VALUES ('24', '3.JPG', 'file://UPLOAD_PATH/images/9bc7cc40-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617243', '1470736617243');
INSERT INTO `image` VALUES ('25', '4.JPG', 'file://UPLOAD_PATH/images/9bc7f350-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617243', '1470736617243');
INSERT INTO `image` VALUES ('26', '5.JPG', 'file://UPLOAD_PATH/images/9bc7f351-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617243', '1470736617243');
INSERT INTO `image` VALUES ('27', '6.JPG', 'file://UPLOAD_PATH/images/9bc81a60-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617244', '1470736617244');
INSERT INTO `image` VALUES ('28', '7.JPG', 'file://UPLOAD_PATH/images/9bc81a61-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617244', '1470736617244');
INSERT INTO `image` VALUES ('29', '8.JPG', 'file://UPLOAD_PATH/images/9bc84170-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617244', '1470736617244');
INSERT INTO `image` VALUES ('30', '9.JPG', 'file://UPLOAD_PATH/images/9bc86880-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617244', '1470736617244');
INSERT INTO `image` VALUES ('31', '10.JPG', 'file://UPLOAD_PATH/images/9bc86881-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617244', '1470736617244');
INSERT INTO `image` VALUES ('32', '11.JPG', 'file://UPLOAD_PATH/images/9bc88f90-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617244', '1470736617244');
INSERT INTO `image` VALUES ('33', '12.JPG', 'file://UPLOAD_PATH/images/9bc88f91-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617244', '1470736617244');
INSERT INTO `image` VALUES ('34', '13.JPG', 'file://UPLOAD_PATH/images/9bc8b6a0-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617244', '1470736617244');
INSERT INTO `image` VALUES ('35', '14.JPG', 'file://UPLOAD_PATH/images/9bc8ddb0-5e17-11e6-b289-675671fdd8a6.JPG', '1470736617244', '1470736617244');

-- ----------------------------
-- Table structure for item
-- ----------------------------
DROP TABLE IF EXISTS `item`;
CREATE TABLE `item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `foundTime` varchar(255) DEFAULT NULL,
  `foundLocation` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL COMMENT '发货标记',
  `desc` text,
  `image` text,
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0: 即将开拍; 1:拍卖中; 2:拍卖结束; 3:流拍; ',
  `publisher` int(11) NOT NULL,
  `currentBidder` int(11) DEFAULT NULL,
  `group` int(11) NOT NULL,
  `beginPrice` decimal(10,0) NOT NULL,
  `currentPrice` decimal(10,0) NOT NULL,
  `auctionType` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0：时间领先；1：固定时间;',
  `auctionBeginTime` bigint(20) NOT NULL,
  `auctionEndTime` bigint(20) NOT NULL,
  `followCount` int(11) NOT NULL DEFAULT '0',
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item
-- ----------------------------
INSERT INTO `item` VALUES ('1', 'item1', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '赵国国宝', '[21,22,23]', '1', '2', '2', '2', '50', '1550', '1', '1468489587023', '1468489587023', '100', '1468489587037', '1468489587037', '2');
INSERT INTO `item` VALUES ('2', 'item2', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[22,23,24]', '2', '3', '3', '2', '50', '1100', '0', '1468489587023', '1468489587023', '200', '1468489587037', '1468489587037', '3');
INSERT INTO `item` VALUES ('3', 'item3', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[23,24,25]', '3', '4', '4', '4', '50', '1150', '1', '1468489587023', '1468489587023', '300', '1468489587037', '1468489587037', '4');
INSERT INTO `item` VALUES ('4', 'item4', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '赵国国宝', '[24,25,26]', '0', '5', '5', '2', '50', '1200', '0', '1468489587023', '1468489587023', '400', '1468489587037', '1468489587037', '1');
INSERT INTO `item` VALUES ('5', 'item5', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[25,26,27]', '1', '6', '6', '6', '50', '1250', '1', '1468489587023', '1468489587023', '500', '1468489587037', '1468489587037', '2');
INSERT INTO `item` VALUES ('6', 'item6', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '赵国国宝', '[26,27,28]', '2', '7', '7', '2', '50', '1300', '0', '1468489587023', '1468489587023', '600', '1468489587038', '1468489587038', '3');
INSERT INTO `item` VALUES ('7', 'item7', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[27,28,29]', '3', '8', '8', '8', '50', '1350', '1', '1468489587023', '1468489587023', '700', '1468489587038', '1468489587038', '4');
INSERT INTO `item` VALUES ('8', 'item8', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '赵国国宝', '[28,29,30]', '0', '9', '9', '6', '50', '1400', '0', '1468489587023', '1468489587023', '800', '1468489587038', '1468489587038', '1');
INSERT INTO `item` VALUES ('9', 'item9', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[29,30,31]', '1', '10', '10', '2', '50', '1450', '1', '1468489587023', '1468489587023', '900', '1468489587038', '1468489587038', '2');
INSERT INTO `item` VALUES ('10', 'item10', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '赵国国宝', '[30,31,32]', '2', '1', '1', '6', '50', '1500', '0', '1468489587023', '1468489587023', '1000', '1468489587038', '1468489587038', '3');
INSERT INTO `item` VALUES ('11', 'item11', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[31,32,33]', '3', '2', '2', '2', '50', '550', '1', '1468489587023', '1468489587023', '1100', '1468489587040', '1468489587040', '4');
INSERT INTO `item` VALUES ('12', 'item12', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '赵国国宝', '[32,33,34]', '0', '3', '3', '6', '50', '600', '0', '1468489587023', '1468489587023', '1200', '1468489587041', '1468489587041', '1');
INSERT INTO `item` VALUES ('13', 'item13', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[23,24,25]', '1', '4', '4', '6', '50', '650', '1', '1468489587023', '1468489587023', '1300', '1468489587041', '1468489587041', '2');
INSERT INTO `item` VALUES ('14', 'item14', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '赵国国宝', '[24,25,26]', '2', '5', '5', '4', '50', '700', '0', '1468489587023', '1468489587023', '1400', '1468489587041', '1468489587041', '3');
INSERT INTO `item` VALUES ('15', 'item15', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[25,26,27]', '3', '6', '6', '8', '50', '750', '1', '1468489587023', '1468489587023', '1500', '1468489587041', '1468489587041', '4');
INSERT INTO `item` VALUES ('16', 'item16', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '赵国国宝', '[26,27,28]', '0', '7', '7', '8', '50', '800', '0', '1468489587023', '1468489587023', '1600', '1468489587041', '1468489587041', '1');
INSERT INTO `item` VALUES ('17', 'item17', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[27,28,29]', '1', '8', '8', '8', '50', '850', '1', '1468489587023', '1468489587023', '1700', '1468489587041', '1468489587041', '2');
INSERT INTO `item` VALUES ('18', 'item18', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '赵国国宝', '[28,29,30]', '2', '9', '9', '6', '50', '900', '0', '1468489587023', '1468489587023', '1800', '1468489587041', '1468489587041', '3');
INSERT INTO `item` VALUES ('19', 'item19', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[29,30,31]', '3', '10', '10', '4', '50', '950', '1', '1468489587023', '1468489587023', '1900', '1468489587041', '1468489587041', '4');
INSERT INTO `item` VALUES ('20', 'item20', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', null, '赵国国宝', '[30,31,32]', '0', '1', '1', '2', '50', '1000', '0', '1468489587023', '1468489587023', '2000', '1468489587042', '1468489587042', '1');
INSERT INTO `item` VALUES ('23', '121', '12', '12', '12', '<p>12</p>', '[21,21,21]', '0', '2', null, '2', '12', '12', '0', '1470730978580', '1470730978580', '0', '1470730988540', '1470730988540', '1');

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
  `isOpen` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否在首页显示',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item_group
-- ----------------------------
INSERT INTO `item_group` VALUES ('1', 'aa专场', '[0]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '0', '1468489586896', '1468489586896');
INSERT INTO `item_group` VALUES ('2', 'bb专场', '[1]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '1', '1468489586896', '1468489586896');
INSERT INTO `item_group` VALUES ('3', 'cc专场', '[2]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '0', '1468489586896', '1468489586896');
INSERT INTO `item_group` VALUES ('4', 'dd专场', '[3]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '1', '1468489586896', '1468489586896');
INSERT INTO `item_group` VALUES ('5', 'ee专场', '[4]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '0', '1468489586896', '1468489586896');
INSERT INTO `item_group` VALUES ('6', 'ff专场', '[5]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '1', '1468489586896', '1468489586896');
INSERT INTO `item_group` VALUES ('7', 'gg专场', '[6]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '0', '1468489586896', '1468489586896');
INSERT INTO `item_group` VALUES ('8', 'hh专场', '[7]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '1', '1468489586896', '1468489586896');

-- ----------------------------
-- Table structure for item_type
-- ----------------------------
DROP TABLE IF EXISTS `item_type`;
CREATE TABLE `item_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item_type
-- ----------------------------
INSERT INTO `item_type` VALUES ('1', '古玩类型0', '这是古玩类型0', '1468489586886', '1468489586886');
INSERT INTO `item_type` VALUES ('2', '古玩类型1', '这是古玩类型1', '1468489586886', '1468489586886');
INSERT INTO `item_type` VALUES ('3', '古玩类型2', '这是古玩类型2', '1468489586886', '1468489586886');
INSERT INTO `item_type` VALUES ('4', '古玩类型3', '这是古玩类型3', '1468489586886', '1468489586886');
INSERT INTO `item_type` VALUES ('5', '古玩类型4', '这是古玩类型4', '1468489586886', '1468489586886');

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
  `read` tinyint(1) NOT NULL DEFAULT '0',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `from` (`from`),
  KEY `to` (`to`),
  CONSTRAINT `message_ibfk_1` FOREIGN KEY (`from`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `message_ibfk_2` FOREIGN KEY (`to`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('1', '1', '2', '这是user1发给user2的消息', 'Hello, user1, I\'m user 2', '1', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('2', '2', '3', '这是user2发给user3的消息', 'Hello, user2, I\'m user 3', '0', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('3', '3', '4', '这是user3发给user4的消息', 'Hello, user3, I\'m user 4', '1', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('4', '4', '5', '这是user4发给user5的消息', 'Hello, user4, I\'m user 5', '0', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('5', '5', '6', '这是user5发给user6的消息', 'Hello, user5, I\'m user 6', '1', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('6', '6', '7', '这是user6发给user7的消息', 'Hello, user6, I\'m user 7', '0', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('7', '7', '8', '这是user7发给user8的消息', 'Hello, user7, I\'m user 8', '1', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('8', '8', '9', '这是user8发给user9的消息', 'Hello, user8, I\'m user 9', '0', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('9', '9', '10', '这是user9发给user10的消息', 'Hello, user9, I\'m user 10', '1', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('10', '10', '1', '这是user10发给user1的消息', 'Hello, user1, I\'m user 10', '0', '1468489586858', '1468489586858');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(10) NOT NULL,
  `item` int(11) NOT NULL,
  `address` int(11) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '[''待确认'', ''待付款'',''待核实'', "待发货", "已发货", "已完成",''已取消'']',
  `price` decimal(10,0) NOT NULL DEFAULT '0',
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
INSERT INTO `order` VALUES ('1', '1', '1', '1', '0', '1000', '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('2', '2', '2', '2', '0', '2000', '1468489587100', '1470733822065');
INSERT INTO `order` VALUES ('3', '3', '3', '3', '2', '3000', '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('4', '4', '4', '4', '3', '4000', '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('5', '5', '5', '5', '4', '5000', '1468489587100', '1470733905021');
INSERT INTO `order` VALUES ('6', '6', '6', '6', '0', '6000', '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('7', '7', '7', '7', '1', '700', '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('8', '8', '8', '8', '2', '800', '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('9', '9', '9', '9', '3', '900', '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('10', '10', '10', '10', '4', '100', '1468489587100', '1468489587100');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'anonymous', 'user which has not signed up yet', '[]', '1468256270300', '1468256270300');
INSERT INTO `role` VALUES ('2', 'registered', 'user which has already signed up and not assigned to other role', '[\"anonymous\"]', '1468256270542', '1468256270542');
INSERT INTO `role` VALUES ('3', 'admin', 'admin', '[\"registered\"]', '1468256270542', '1468256270542');

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
INSERT INTO `role_authority` VALUES ('1', '1', '1', '1468489586696', '1468489586696');
INSERT INTO `role_authority` VALUES ('2', '2', '2', '1468489586696', '1468489586696');
INSERT INTO `role_authority` VALUES ('3', '1', '3', '1468489586696', '1468489586696');
INSERT INTO `role_authority` VALUES ('4', '2', '1', '1468489586696', '1468489586696');
INSERT INTO `role_authority` VALUES ('5', '1', '2', '1468489586696', '1468489586696');
INSERT INTO `role_authority` VALUES ('6', '2', '3', '1468489586696', '1468489586696');
INSERT INTO `role_authority` VALUES ('7', '1', '1', '1468489586696', '1468489586696');
INSERT INTO `role_authority` VALUES ('8', '2', '2', '1468489586696', '1468489586696');
INSERT INTO `role_authority` VALUES ('9', '1', '3', '1468489586696', '1468489586696');
INSERT INTO `role_authority` VALUES ('10', '2', '1', '1468489586696', '1468489586696');

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
INSERT INTO `service` VALUES ('1', '1', '如实描述', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1468489586601', '1468489586601');
INSERT INTO `service` VALUES ('2', '2', '快速上拍', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1468489586601', '1468489586601');
INSERT INTO `service` VALUES ('3', '3', '24小时发货', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1468489586601', '1468489586601');
INSERT INTO `service` VALUES ('4', '4', '诚信服务', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1468489586601', '1468489586601');

-- ----------------------------
-- Table structure for session
-- ----------------------------
DROP TABLE IF EXISTS `session`;
CREATE TABLE `session` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `cookie` varchar(255) NOT NULL DEFAULT '',
  `data` text,
  `expire` bigint(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cookie` (`cookie`),
  KEY `expire` (`expire`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of session
-- ----------------------------
INSERT INTO `session` VALUES ('1', 'ZvHgReqiUa7_eH5PuqyGxHcx1LzUS_6b', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":1,\"level\":2,\"role\":3,\"lastLogin\":1470748073288,\"createAt\":1468489586719,\"updateAt\":1470742842706,\"totalVolume\":1,\"totalTurnover\":1100}}', '1470835517797');
INSERT INTO `session` VALUES ('2', 'YDZwLEQm43KPMcU_EOfXUBDvAEuVlVjP', null, '1470834086749');
INSERT INTO `session` VALUES ('3', 'uKmRlPIsxxZuSd2KYkd_UCwtW9zVrdGL', null, '1470834088534');
INSERT INTO `session` VALUES ('4', '7YkTGT4UaH2HajumQvT2lALwImnhLNl0', null, '1470834098816');
INSERT INTO `session` VALUES ('5', 'N5wyflD9H_NNtC3ZiP2fzJCWfxAOBuMI', null, '1470834136669');
INSERT INTO `session` VALUES ('6', '0SB_k8l_LV_5Nxz7TFOnHq4ct8d2LjeM', null, '1470834149271');
INSERT INTO `session` VALUES ('7', 'aOu_TBOcMHzpS2eE8D2ZNuMZ_leyYQ03', null, '1470834264414');
INSERT INTO `session` VALUES ('8', 'STEYUpRpPa5IXdmuHayr_nQplFH9vKhq', null, '1470834791323');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `emailValidate` tinyint(1) NOT NULL DEFAULT '0',
  `desc` varchar(255) DEFAULT NULL,
  `avatar` int(255) NOT NULL DEFAULT '1',
  `creditLines` decimal(10,0) NOT NULL DEFAULT '0',
  `level` int(11) NOT NULL DEFAULT '0',
  `role` int(11) NOT NULL,
  `lastLogin` bigint(11) DEFAULT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `role` (`role`),
  KEY `user_ibfk_2` (`avatar`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`avatar`) REFERENCES `image` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'zl810881283', 'zl7112585', '0573328344@qq.com', '1', 'I\'m zhangle', '1', '5000', '1', '2', '1470745571641', '1468489586718', '1470745571683');
INSERT INTO `user` VALUES ('2', 'admin', 'admin', '1573328344@qq.com', '1', 'I\'m zhangle', '1', '1', '2', '3', '1470748073288', '1468489586719', '1470748073332');
INSERT INTO `user` VALUES ('3', 'zhangle2', 'zlpwd2', '2573328344@qq.com', '1', 'I\'m zhangle', '1', '2', '3', '1', '1468489586704', '1468489586719', '1468489586719');
INSERT INTO `user` VALUES ('4', 'zhangle3', 'zlpwd3', '3573328344@qq.com', '1', 'I\'m zhangle', '1', '3', '4', '1', '1468489586704', '1468489586719', '1468489586719');
INSERT INTO `user` VALUES ('5', 'zhangle4', 'zlpwd4', '4573328344@qq.com', '1', 'I\'m zhangle', '1', '4', '5', '1', '1468489586704', '1468489586719', '1468489586719');
INSERT INTO `user` VALUES ('6', 'zhangle5', 'zlpwd5', '5573328344@qq.com', '1', 'I\'m zhangle', '1', '5', '6', '1', '1468489586704', '1468489586720', '1468489586720');
INSERT INTO `user` VALUES ('7', 'zhangle6', 'zlpwd6', '6573328344@qq.com', '1', 'I\'m zhangle', '1', '6', '7', '1', '1468489586704', '1468489586720', '1468489586720');
INSERT INTO `user` VALUES ('8', 'zhangle7', 'zlpwd7', '7573328344@qq.com', '1', 'I\'m zhangle', '1', '7', '8', '1', '1468489586704', '1468489586720', '1468489586720');
INSERT INTO `user` VALUES ('9', 'zhangle8', 'zlpwd8', '8573328344@qq.com', '1', 'I\'m zhangle', '1', '8', '9', '1', '1468489586704', '1468489586720', '1468489586720');
INSERT INTO `user` VALUES ('10', 'zhangle9', 'zlpwd9', '9573328344@qq.com', '1', 'I\'m zhangle', '1', '9', '10', '1', '1468489586704', '1468489586720', '1468489586720');
INSERT INTO `user` VALUES ('12', 'zhangle10', 'zlpwd10', '57332@qq.com', '0', null, '1', '0', '0', '2', '1470724024364', '1470224426225', '1470724024383');
INSERT INTO `user` VALUES ('15', 'test2', 'zl7112585', '8108812831@qq.com', '0', null, '1', '0', '0', '2', '1470741990406', '1470741990519', '1470741990519');
DROP TRIGGER IF EXISTS `updateCurrentPrice`;
DELIMITER ;;
CREATE TRIGGER `updateCurrentPrice` AFTER INSERT ON `bid` FOR EACH ROW BEGIN
set @maxPrice = (SELECT MAX(`value`) FROM bid WHERE(`item`= new.item));
UPDATE item set currentPrice=@maxPrice  WHERE(`id`= new.item);
END
;;
DELIMITER ;
