/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : auction

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2017-08-05 11:27:34
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES ('3', '2', '0', '北京', '北京', '东城区', 'aaaaaaxxxxx', '这是第3条地址', '1468489586809', '1472909610101', '18530268149');
INSERT INTO `address` VALUES ('4', '2', '1', '天津', '天津', '和平区', 'aaaaa', '这是第4条地址', '1468489586809', '1472909610100', '18530268149');
INSERT INTO `address` VALUES ('5', '3', '1', '', '', '', '', '这是第5条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('6', '3', '0', '', '', '', '', '这是第6条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('7', '4', '1', '', '', '', '', '这是第7条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('8', '4', '0', '', '', '', '', '这是第8条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('9', '5', '1', '', '', '', '', '这是第9条地址', '1468489586809', '1468489586809', null);
INSERT INTO `address` VALUES ('10', '5', '0', '', '', '', '', '这是第10条地址', '1468489586809', '1468489586809', null);
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
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('6', '这是第6篇文章的题目', '<p>这是第6篇文章的内容，写的真精彩aaaaa!!!</p>', '2', '3', '1468489586790', '1470723398497');
INSERT INTO `article` VALUES ('7', '这是第7篇文章的题目', '这是第7篇文章的内容，写的真精彩', '2', '4', '1468489586790', '1468489586790');
INSERT INTO `article` VALUES ('9', '这是第9篇文章的题目', '这是第9篇文章的内容，写的真精彩', '2', '2', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('10', '这是第10篇文章的题目', '这是第10篇文章的内容，写的真精彩', '2', '3', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('11', '这是第11篇文章的题目', '这是第11篇文章的内容，写的真精彩', '3', '2', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('13', '这是第13篇文章的题目', '这是第13篇文章的内容，写的真精彩', '3', '2', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('14', '这是第14篇文章的题目', '这是第14篇文章的内容，写的真精彩', '3', '3', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('15', '这是第15篇文章的题目', '这是第15篇文章的内容，写的真精彩', '3', '1', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('17', '这是第17篇文章的题目', '这是第17篇文章的内容，写的真精彩', '4', '2', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('18', '这是第18篇文章的题目', '这是第18篇文章的内容，写的真精彩', '4', '3', '1468489586791', '1468489586791');
INSERT INTO `article` VALUES ('19', '这是第19篇文章的题目', '这是第19篇文章的内容，写的真精彩', '4', '1', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('21', '这是第21篇文章的题目', '这是第21篇文章的内容，写的真精彩', '5', '2', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('22', '这是第22篇文章的题目', '这是第22篇文章的内容，写的真精彩', '5', '1', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('23', '这是第23篇文章的题目', '这是第23篇文章的内容，写的真精彩', '5', '1', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('25', '这是第25篇文章的题目', '这是第25篇文章的内容，写的真精彩', '5', '2', '1468489586792', '1468489586792');
INSERT INTO `article` VALUES ('38', 'asdfads', '<p>fasdfaaaaaaaa</p>', '2', '1', '1470725003585', '1476814136818');
INSERT INTO `article` VALUES ('41', '标题要长标题要长标题要长标题要长标题要长标题要长标题要长标题要长', '<p>标题要长标题要长标题要长标题要长</p><p>标题要长</p>', '2', '3', '1488630632396', '1488630632396');

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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bid
-- ----------------------------
INSERT INTO `bid` VALUES ('1', '2', '2', '100', '1', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('2', '3', '3', '150', '2', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('3', '4', '4', '200', '1', '1468489587185', '1471973625608');
INSERT INTO `bid` VALUES ('7', '8', '8', '400', '1', '1468489587185', '1471977880617');
INSERT INTO `bid` VALUES ('8', '9', '9', '450', '1', '1468489587185', '1471977883291');
INSERT INTO `bid` VALUES ('9', '10', '10', '500', '1', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('10', '1', '1', '550', '1', '1468489587185', '1471960530920');
INSERT INTO `bid` VALUES ('11', '2', '1', '600', '3', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('12', '3', '1', '650', '0', '1468489587185', '1468489587185');
INSERT INTO `bid` VALUES ('13', '4', '1', '700', '1', '1468489587186', '1471973625608');
INSERT INTO `bid` VALUES ('17', '8', '8', '900', '1', '1468489587186', '1471977880617');
INSERT INTO `bid` VALUES ('18', '9', '9', '950', '1', '1468489587186', '1471977883291');
INSERT INTO `bid` VALUES ('19', '10', '10', '1000', '3', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('20', '2', '1', '1050', '0', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('21', '2', '2', '1100', '1', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('22', '3', '3', '1150', '2', '1468489587186', '1468489587186');
INSERT INTO `bid` VALUES ('23', '4', '4', '1200', '1', '1468489587186', '1471973625608');
INSERT INTO `bid` VALUES ('27', '8', '8', '1400', '1', '1468489587187', '1471977880617');
INSERT INTO `bid` VALUES ('28', '9', '9', '1450', '1', '1468489587187', '1471977883291');
INSERT INTO `bid` VALUES ('29', '10', '10', '1500', '1', '1468489587187', '1468489587187');
INSERT INTO `bid` VALUES ('30', '1', '1', '1550', '1', '1468489587187', '1471960530920');
INSERT INTO `bid` VALUES ('31', '23', '2', '62', '1', '1470758231249', '1470758231249');
INSERT INTO `bid` VALUES ('32', '23', '2', '112', '1', '1470758256712', '1470758256712');
INSERT INTO `bid` VALUES ('33', '23', '2', '162', '1', '1470758261166', '1470758261166');
INSERT INTO `bid` VALUES ('34', '23', '2', '212', '1', '1470758269708', '1470758269708');
INSERT INTO `bid` VALUES ('35', '54', '2', '10', '3', '1495387965709', '1495387974521');
INSERT INTO `bid` VALUES ('36', '54', '2', '20', '2', '1495387974498', '1495387974498');
INSERT INTO `bid` VALUES ('40', '56', '2', '10', '0', '1497722487922', '1497722574243');

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES ('3', '{\"defaultRoles\":[{\"name\":\"anonymous\",\"desc\":\"user which has not signed up yet\",\"extend\":[],\"authorities\":[\"index\",\"page\",\"home\",\"restAPI\"]},{\"name\":\"registered\",\"extend\":[\"anonymous\"],\"desc\":\"user which has already signed up and not assigned to other role\",\"authorities\":[\"admin\"]}],\"defaultAuthorities\":[{\"name\":\"index\",\"desc\":\"can visit index\",\"paths\":[\"/\"]},{\"name\":\"page\",\"desc\":\"can visit static page\",\"paths\":[\"/^page\\\\//\"]},{\"name\":\"home\",\"desc\":\"can use home module\",\"paths\":[\"/^home\\\\//\"]},{\"name\":\"restAPI\",\"desc\":\"can use rest API\",\"paths\":[\"/^rest\\\\//\"]},{\"name\":\"admin\",\"desc\":\"can admin the site\",\"paths\":[\"/^admin\\\\//\"]}],\"pageCount\":{\"default\":10,\"article\":5,\"item\":20,\"bid\":10,\"order\":10},\"user\":{\"default\":{\"role\":2,\"creditLines\":1000,\"avatar\":\"/assets/img/avatar.png\",\"desc\":\"他很懒，什么都没留下\",\"level\":1}},\"auction\":{\"bid_increasment\":[[0,10],[1000,20],[5000,50],[10000,200],[20000,500]],\"ahead_time\":{\"time\":86400},\"fix_time\":{\"need_delay_time\":5,\"auto_delay_time\":5}}}', '1495385415893', '1495385415893');

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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of follow
-- ----------------------------
INSERT INTO `follow` VALUES ('1', '1', '1', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('2', '2', '2', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('3', '3', '3', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('4', '4', '4', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('8', '8', '8', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('9', '9', '9', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('10', '10', '10', '1468489587088', '1468489587088');
INSERT INTO `follow` VALUES ('11', '1', '11', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('12', '2', '12', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('13', '3', '13', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('14', '4', '14', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('18', '8', '18', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('19', '9', '19', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('20', '10', '20', '1468489587089', '1468489587089');
INSERT INTO `follow` VALUES ('21', '2', '14', '1471960734893', '1471960734893');

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
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of image
-- ----------------------------
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
INSERT INTO `image` VALUES ('36', '100.png', 'file://UPLOAD_PATH/images/6f44a820-6941-11e6-9b20-9903a0c22185.png', '1471964044244', '1471964044244');
INSERT INTO `image` VALUES ('37', 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/eb575a20-6941-11e6-9b20-9903a0c22185.png', '1471964252373', '1471964252373');
INSERT INTO `image` VALUES ('38', '789e6070-8bcd-11e5-966d-cf96bfb23ee8.jpeg', 'file://UPLOAD_PATH/images/0483bfc0-6942-11e6-9b20-9903a0c22185.jpeg', '1471964294624', '1471964294624');
INSERT INTO `image` VALUES ('39', 'XwVzT.png', 'file://UPLOAD_PATH/images/0bb024f0-6942-11e6-9b20-9903a0c22185.png', '1471964306635', '1471964306635');
INSERT INTO `image` VALUES ('40', 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/84c1f300-6942-11e6-9b20-9903a0c22185.png', '1471964509757', '1471964509757');
INSERT INTO `image` VALUES ('41', '中国煤科标志4.jpg', 'file://UPLOAD_PATH/images/8cd3d960-6946-11e6-9b20-9903a0c22185.jpg', '1471966241282', '1471966241282');
INSERT INTO `image` VALUES ('42', 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/bc403310-6946-11e6-9b20-9903a0c22185.png', '1471966320847', '1471966320847');
INSERT INTO `image` VALUES ('43', 'QQ图片20160730230137.jpg', 'file://UPLOAD_PATH/images/e039a440-6946-11e6-9b20-9903a0c22185.jpg', '1471966381199', '1471966381199');
INSERT INTO `image` VALUES ('44', 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/80adff20-6947-11e6-9b20-9903a0c22185.png', '1471966650398', '1471966650398');
INSERT INTO `image` VALUES ('45', 'XwVzT.png', 'file://UPLOAD_PATH/images/83633410-6947-11e6-9b20-9903a0c22185.png', '1471966654941', '1471966654941');
INSERT INTO `image` VALUES ('46', 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/87c2bda0-6947-11e6-9b20-9903a0c22185.png', '1471966662278', '1471966662278');
INSERT INTO `image` VALUES ('47', 'QQ图片20160730230137.jpg', 'file://UPLOAD_PATH/images/982c3f90-6947-11e6-9b20-9903a0c22185.jpg', '1471966689837', '1471966689837');
INSERT INTO `image` VALUES ('48', 'XwVzT.png', 'file://UPLOAD_PATH/images/c250f9a0-6947-11e6-9b20-9903a0c22185.png', '1471966760518', '1471966760518');
INSERT INTO `image` VALUES ('49', 'XwVzT.png', 'file://UPLOAD_PATH/images/c483b820-6947-11e6-9b20-9903a0c22185.png', '1471966764205', '1471966764205');
INSERT INTO `image` VALUES ('50', 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/c60d6560-6947-11e6-9b20-9903a0c22185.png', '1471966766811', '1471966766811');
INSERT INTO `image` VALUES ('51', 'avatar.png', 'file://UPLOAD_PATH/images/27269d70-6949-11e6-9b20-9903a0c22185.png', '1471967359191', '1471967359191');
INSERT INTO `image` VALUES ('52', 'XwVzT.png', 'file://UPLOAD_PATH/images/89a52750-6949-11e6-9b20-9903a0c22185.png', '1471967524435', '1471967524435');
INSERT INTO `image` VALUES ('53', 'QQ图片20160730230137.jpg', 'file://UPLOAD_PATH/images/8c206080-6949-11e6-9b20-9903a0c22185.jpg', '1471967528597', '1471967528597');
INSERT INTO `image` VALUES ('54', 'XwVzT.png', 'file://UPLOAD_PATH/images/8db3f8d0-6949-11e6-9b20-9903a0c22185.png', '1471967531242', '1471967531242');
INSERT INTO `image` VALUES ('55', 'XwVzT.png', 'file://UPLOAD_PATH/images/c9655810-6949-11e6-9b20-9903a0c22185.png', '1471967631394', '1471967631394');
INSERT INTO `image` VALUES ('56', 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/ca7c4650-6949-11e6-9b20-9903a0c22185.png', '1471967633218', '1471967633218');
INSERT INTO `image` VALUES ('57', 'QQ图片20160730230137.jpg', 'file://UPLOAD_PATH/images/cbcb0d70-6949-11e6-9b20-9903a0c22185.jpg', '1471967635412', '1471967635412');
INSERT INTO `image` VALUES ('58', 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/3cca8d20-702f-11e6-af98-9d342938f5ae.png', '1472725886716', '1472725886716');
INSERT INTO `image` VALUES ('59', 'avatar.png', 'file://UPLOAD_PATH/images/47febcb0-70e4-11e6-9408-218470406e23.png', '1472803644424', '1472803644424');
INSERT INTO `image` VALUES ('60', 'avatar.png', 'file://UPLOAD_PATH/images/47901fa0-7295-11e6-9dd3-d736d78a2376.png', '1472989615784', '1472989615784');
INSERT INTO `image` VALUES ('61', 'avatar.png', 'file://UPLOAD_PATH/images/e8a8d630-72a8-11e6-87c5-870e94d25a54.png', '1472998046495', '1472998046495');
INSERT INTO `image` VALUES ('62', 'avatar.png', 'file://UPLOAD_PATH/images/21756f90-72aa-11e6-8856-e367a4c13793.png', '1472998571285', '1472998571285');
INSERT INTO `image` VALUES ('63', 'avatar.png', 'file://UPLOAD_PATH/images/66df0f00-72aa-11e6-8856-e367a4c13793.png', '1472998687739', '1472998687739');
INSERT INTO `image` VALUES ('64', 'avatar.png', 'file://UPLOAD_PATH/images/c3ea5560-72aa-11e6-8856-e367a4c13793.png', '1472998843841', '1472998843841');
INSERT INTO `image` VALUES ('65', 'avatar.png', 'file://UPLOAD_PATH/images/c7ddd6b0-72aa-11e6-8856-e367a4c13793.png', '1472998850472', '1472998850472');
INSERT INTO `image` VALUES ('66', 'avatar.png', 'file://UPLOAD_PATH/images/169c6b30-72ac-11e6-9d66-591116dc16ea.png', '1472999412079', '1472999412079');
INSERT INTO `image` VALUES ('67', 'avatar.png', 'file://UPLOAD_PATH/images/292511b0-72ae-11e6-9bc0-032001d10bc4.png', '1473000302169', '1473000302169');
INSERT INTO `image` VALUES ('68', 'avatar.png', 'file://UPLOAD_PATH/images/67f5b250-72ae-11e6-9bc0-032001d10bc4.png', '1473000407552', '1473000407552');
INSERT INTO `image` VALUES ('69', 'avatar.png', 'file://UPLOAD_PATH/images/ac1f7ec0-72ae-11e6-9bc0-032001d10bc4.png', '1473000521934', '1473000521934');
INSERT INTO `image` VALUES ('70', 'avatar.png', 'file://UPLOAD_PATH/images/ad7daf30-72ae-11e6-9bc0-032001d10bc4.png', '1473000524205', '1473000524205');
INSERT INTO `image` VALUES ('71', 'avatar.png', 'file://UPLOAD_PATH/images/04119310-72b0-11e6-9bc0-032001d10bc4.png', '1473001098961', '1473001098961');
INSERT INTO `image` VALUES ('72', 'avatar.png', 'file://UPLOAD_PATH/images/a3810110-72b0-11e6-9bc0-032001d10bc4.png', '1473001366446', '1473001366446');
INSERT INTO `image` VALUES ('73', 'avatar.png', 'file://UPLOAD_PATH/images/3beb8f10-72b1-11e6-9bc0-032001d10bc4.png', '1473001622156', '1473001622156');
INSERT INTO `image` VALUES ('74', 'null', 'null', '0', '0');
INSERT INTO `image` VALUES ('75', 'QQ图片20161003115007.png', 'file://UPLOAD_PATH/images/bcddd7d0-92b5-11e6-8476-73a454fe86e2.png', '1476521993683', '1476521993683');
INSERT INTO `image` VALUES ('76', 'QQ图片20161003115550.jpg', 'file://UPLOAD_PATH/images/c54f8e40-92b5-11e6-8476-73a454fe86e2.jpg', '1476522007849', '1476522007849');
INSERT INTO `image` VALUES ('77', 'QQ图片20161003115007.png', 'file://UPLOAD_PATH/images/c72363e0-92b5-11e6-8476-73a454fe86e2.png', '1476522010915', '1476522010915');
INSERT INTO `image` VALUES ('78', 'QQ图片20161003115550.jpg', 'file://UPLOAD_PATH/images/dc772dc0-92b6-11e6-8476-73a454fe86e2.jpg', '1476522476194', '1476522476194');
INSERT INTO `image` VALUES ('79', 'QQ图片20161003115550.jpg', 'file://UPLOAD_PATH/images/cc2cec40-92b9-11e6-8476-73a454fe86e2.jpg', '1476523737354', '1476523737354');
INSERT INTO `image` VALUES ('80', 'QQ图片20161003115550.jpg', 'file://UPLOAD_PATH/images/a624c9e0-92ba-11e6-8476-73a454fe86e2.jpg', '1476524103043', '1476524103043');
INSERT INTO `image` VALUES ('81', 'QQ图片20161003115007.png', 'file://UPLOAD_PATH/images/aaebae80-92bf-11e6-8476-73a454fe86e2.png', '1476526258542', '1476526258542');
INSERT INTO `image` VALUES ('82', '1-RPKQq3zYYddwJf9rSeQ4Dg.jpeg', 'file://UPLOAD_PATH/images/e559cac0-3ed6-11e7-b360-f3b4477f95bf.jpeg', '1495447834993', '1495447834993');

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
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item
-- ----------------------------
INSERT INTO `item` VALUES ('1', 'item1', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '赵国国宝', '[21,22,23]', '2', '2', '2', '2', '50', '1550', '1', '1468489587023', '1468489587023', '100', '1468489587037', '1471960530794', '2');
INSERT INTO `item` VALUES ('2', 'item2', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[22,23,24]', '2', '3', '3', '2', '50', '1100', '0', '1468489587023', '1468489587023', '200', '1468489587037', '1468489587037', '3');
INSERT INTO `item` VALUES ('3', 'item3', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[23,24,25]', '3', '4', '4', '4', '50', '1150', '1', '1468489587023', '1468489587023', '300', '1468489587037', '1468489587037', '4');
INSERT INTO `item` VALUES ('4', 'item4', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '赵国国宝', '[24,25,26]', '2', '5', '5', '2', '50', '1200', '0', '1468489587023', '1468489587023', '400', '1468489587037', '1471973625517', '1');
INSERT INTO `item` VALUES ('7', 'item7', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[27,28,29]', '3', '8', '8', '8', '50', '1350', '1', '1468489587023', '1468489587023', '700', '1468489587038', '1468489587038', '4');
INSERT INTO `item` VALUES ('8', 'item8', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '赵国国宝', '[28,29,30]', '2', '9', '9', '6', '50', '1400', '0', '1468489587023', '1468489587023', '800', '1468489587038', '1471977880562', '1');
INSERT INTO `item` VALUES ('9', 'item9', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[29,30,31]', '2', '10', '10', '2', '50', '1450', '1', '1468489587023', '1468489587023', '900', '1468489587038', '1471977883236', '2');
INSERT INTO `item` VALUES ('10', 'item10', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '赵国国宝', '[30,31,32]', '2', '1', '1', '6', '50', '1500', '0', '1468489587023', '1468489587023', '1000', '1468489587038', '1468489587038', '3');
INSERT INTO `item` VALUES ('11', 'item11', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[31,32,33]', '3', '2', '2', '2', '50', '550', '1', '1468489587023', '1468489587023', '1100', '1468489587040', '1468489587040', '4');
INSERT INTO `item` VALUES ('12', 'item12', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '赵国国宝', '[32,33,34]', '3', '3', '3', '6', '50', '600', '0', '1468489587023', '1468489587023', '1200', '1468489587041', '1471977894501', '1');
INSERT INTO `item` VALUES ('13', 'item13', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[23,24,25]', '3', '4', '4', '6', '50', '650', '1', '1468489587023', '1468489587023', '1300', '1468489587041', '1471977894574', '2');
INSERT INTO `item` VALUES ('14', 'item14', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '赵国国宝', '[24,25,26]', '2', '5', '5', '4', '50', '700', '0', '1468489587023', '1468489587023', '1400', '1468489587041', '1468489587041', '3');
INSERT INTO `item` VALUES ('17', 'item17', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[27,28,29]', '3', '8', '8', '8', '50', '850', '1', '1468489587023', '1468489587023', '1700', '1468489587041', '1471977894725', '2');
INSERT INTO `item` VALUES ('18', 'item18', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '赵国国宝', '[28,29,30]', '2', '9', '9', '6', '50', '900', '0', '1468489587023', '1468489587023', '1800', '1468489587041', '1468489587041', '3');
INSERT INTO `item` VALUES ('19', 'item19', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', 'tag', '<p>长 :68cm 宽 :36cm 材质: 纸本 形式: 画心<br>完残状况：黄斑、污痕、折痕、边有撕口、缺肉</p>\r\n            <p style=\"color: red\">※ 本公司欢迎您亲临查看拍品。</p>\r\n            <p>物品描述<br>注：此拍品约为2.20平尺<br>卢星堂，1938年11月生于常熟，家学渊远。1959年进江苏省国画院深造，得到傅抱石、钱松岩、亚明等当代山水大师真传。\r\n              <br>现为国家一 ...... 卢星堂简介</p>', '[29,30,31]', '3', '10', '10', '4', '50', '950', '1', '1468489587023', '1468489587023', '1900', '1468489587041', '1468489587041', '4');
INSERT INTO `item` VALUES ('20', 'item20', 'Thu Jul 14 2016 17:46:27 GMT+0800 (中国标准时间)', '河北省邯郸市', '12tag', '赵国国宝', '[30,31,32]', '3', '1', '1', '2', '50', '1000', '0', '1468489587023', '1468489587023', '2000', '1468489587042', '1471977894768', '1');
INSERT INTO `item` VALUES ('23', '121', '12', '12', 'tag', '<p>12</p>', '[21,21,21]', '3', '2', null, '2', '12', '212', '0', '1470730978580', '1470730978580', '0', '1470730988540', '1471977894808', '1');
INSERT INTO `item` VALUES ('24', '12', '12', '12', 'tag', '<p>1212</p>', '[21,21,21]', '3', '2', null, '1', '12', '12', '0', '1470838169434', '1470838169434', '0', '1470838178629', '1471977894854', '2');
INSERT INTO `item` VALUES ('25', '12', '12', '12', 'tag', '<p>1212</p>', '[21,21,21]', '3', '2', null, '2', '12', '12', '0', '1470838169434', '1470838169434', '0', '1470838208203', '1471977894929', '2');
INSERT INTO `item` VALUES ('26', 'asdfasd', 'asdfasd', 'asdf', 'tag', '<p>sdafadsf</p>', '[55,56,57]', '3', '2', null, '2', '12', '12', '1', '1471967618696', '1471967618696', '0', '1471967636085', '1471977894965', '1');
INSERT INTO `item` VALUES ('27', 'etasw', 'asdf', 'sadf', 'tag', '<p>adsfasdf</p>', '[null,null,null]', '3', '2', null, '2', '1000', '1000', '0', '1472725789088', '1472725789088', '0', '1472725804156', '1472802250270', '1');
INSERT INTO `item` VALUES ('28', 'dsfa', '12', '12', 'tag', '<p>dsafdsf</p>', '[58,null,null]', '3', '2', null, '2', '12', '12', '0', '1472725875156', '1472725875156', '0', '1472725888390', '1472802250338', '2');
INSERT INTO `item` VALUES ('29', 'asdfsd', '12', '12', 'tag', '', '[59,null,null]', '3', '2', null, '2', '123', '123', '0', '1472803629558', '1479813629558', '0', '1472803646328', '1488629511927', '2');
INSERT INTO `item` VALUES ('30', 'testss', '12', '12', '121', '<p>dsfadsaf</p>', '[60,null,null]', '3', '2', null, '1', '12', '12', '0', '1472989592239', '1473177600000', '0', '1472989617619', '1476500348478', '1');
INSERT INTO `item` VALUES ('31', 'DSf', 'adsf', 'dasf', '12', '<p>sadf</p>', '[null,null,null]', '3', '2', null, '1', '12', '12', '0', '1472989773505', '1473782400000', '0', '1472989784735', '1476500348566', '1');
INSERT INTO `item` VALUES ('49', '12321312121', '12', '12', '123', '<p>asdfdas</p>', '[75,80,81,82]', '3', '2', null, '9', '0', '0', '0', '1476502776579', '1476502776579', '0', '1476502786128', '1476804928021', '2');
INSERT INTO `item` VALUES ('50', '111', '', '', '', '<p>11</p>', '[null,null,null]', '3', '2', null, '2', '0', '0', '0', '1478571777348', '1478571777348', '0', '1478571784969', '1478571785024', '2');
INSERT INTO `item` VALUES ('51', '【包邮】【雨安国际84场-04】	加拿大1966年一元大银币  ', '12', '12', '12', '<p>sdafadsf</p>', '[null,null,null]', '3', '2', null, '2', '0', '0', '1', '1488629490324', '1488629490324', '0', '1488629511906', '1488629511932', '2');
INSERT INTO `item` VALUES ('52', '【包邮】【雨安国际84场-04】	加拿大1966年一元大银币  ', '12', '12', '1', '<p>121212<br/></p>', '[null,null,null]', '3', '2', null, '3', '1', '1', '1', '1488629515063', '1488629515063', '0', '1488629529200', '1488629529221', '2');
INSERT INTO `item` VALUES ('53', '【包邮】【雨安国际84场-04】	加拿大1966年一元大银币【包邮】【雨安国际84场-04】	加拿大1966年一元大银币', '12', '12', '12', '<p>1212</p>', '[null,null,null]', '3', '2', null, '2', '0', '0', '1', '1488629803146', '1488629803146', '0', '1488629813531', '1488629813550', '2');
INSERT INTO `item` VALUES ('54', 'aaaaaaaaaaa', '12', '12', '111', '<p>adsfdasf</p>', '[]', '3', '2', null, '3', '0', '20', '0', '1495385081989', '1496073600000', '0', '1495385098441', '1497716506693', '2');
INSERT INTO `item` VALUES ('55', '12', '12', '12', '1212', '<p>12</p>', '[82]', '3', '2', null, '2', '0', '0', '0', '1495447821696', '1495447821696', '0', '1495447837003', '1495447837027', '2');
INSERT INTO `item` VALUES ('56', 'aaaa', 'aa', 'aaa', 'aaa', '<p>aaaaa</p>', '[]', '2', '2', '2', '2', '0', '10', '1', '1497722454175', '1497722574175', '0', '1497717607359', '1497722574225', '1');

-- ----------------------------
-- Table structure for item_group
-- ----------------------------
DROP TABLE IF EXISTS `item_group`;
CREATE TABLE `item_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `no` int(11) DEFAULT '0' COMMENT '第几个专场',
  `isOpen` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否在首页显示',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of item_group
-- ----------------------------
INSERT INTO `item_group` VALUES ('1', 'aa专场', '[0]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '1', '1468489586896', '1476806880258');
INSERT INTO `item_group` VALUES ('2', 'bb专场', '[1]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '1', '1468489586896', '1476786134243');
INSERT INTO `item_group` VALUES ('3', 'cc专场', '[2]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '1', '1468489586896', '1476786134671');
INSERT INTO `item_group` VALUES ('4', 'dd专场', '[3]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '1', '1468489586896', '1476806941373');
INSERT INTO `item_group` VALUES ('5', 'ee专场', '[4]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '0', '1468489586896', '1468489586896');
INSERT INTO `item_group` VALUES ('6', 'ff专场', '[5]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '0', '1468489586896', '1476786117043');
INSERT INTO `item_group` VALUES ('7', 'gg专场', '[6]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '0', '1468489586896', '1468489586896');
INSERT INTO `item_group` VALUES ('8', 'hh专场', '[7]', ' 这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长   这是第i个专场 ，专场介绍要长  ', '1', '1', '1468489586896', '1468489586896');
INSERT INTO `item_group` VALUES ('9', '1231', null, '123', null, '0', '1476501535503', '1476806826135');
INSERT INTO `item_group` VALUES ('10', '121', null, '213', null, '0', '1476501570699', '1476807195428');

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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('2', '2', '3', '这是user2发给user3的消息', 'Hello, user2, I\'m user 3', '0', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('3', '3', '4', '这是user3发给user4的消息', 'Hello, user3, I\'m user 4', '1', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('4', '4', '5', '这是user4发给user5的消息', 'Hello, user4, I\'m user 5', '0', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('8', '8', '9', '这是user8发给user9的消息', 'Hello, user8, I\'m user 9', '0', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('9', '9', '10', '这是user9发给user10的消息', 'Hello, user9, I\'m user 10', '1', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('10', '10', '1', '这是user10发给user1的消息', 'Hello, user1, I\'m user 10', '0', '1468489586858', '1468489586858');
INSERT INTO `message` VALUES ('13', '1', '5', '系统消息', '您的商品item4得标', '0', '1471973625652', '1471973625652');
INSERT INTO `message` VALUES ('14', '1', '5', '系统消息', '您的商品item4得标', '0', '1471973625689', '1471973625689');
INSERT INTO `message` VALUES ('16', '1', '9', '系统消息', '您的商品item8得标', '0', '1471977880629', '1471977880629');
INSERT INTO `message` VALUES ('17', '1', '10', '系统消息', '您的商品item9得标', '0', '1471977883304', '1471977883304');
INSERT INTO `message` VALUES ('18', '1', '2', '系统消息', '您的商品aaaaaaaaaaa暂时领先', '1', '1495387965724', '1495446004561');
INSERT INTO `message` VALUES ('19', '1', '2', '系统消息', '您的商品aaaaaaaaaaa暂时领先', '1', '1495387974510', '1495446002426');
INSERT INTO `message` VALUES ('20', '1', '19', '欢迎注册，请完善个人资料', '请至账户设置页，完善个人资料，我们审核通过后，会增加您的个人信用额度', '1', '1495451157925', '1495451173133');
INSERT INTO `message` VALUES ('21', '1', '2', '系统消息', '您的商品aaaa暂时领先', '0', '1497717663241', '1497717663241');
INSERT INTO `message` VALUES ('22', '1', '2', '系统消息', '您的商品aaaa暂时领先', '0', '1497718363771', '1497718363771');
INSERT INTO `message` VALUES ('23', '1', '2', '系统消息', '您的商品aaaa暂时领先', '0', '1497720823635', '1497720823635');
INSERT INTO `message` VALUES ('24', '1', '2', '系统消息', '您的商品aaaa暂时领先', '0', '1497722487937', '1497722487937');
INSERT INTO `message` VALUES ('25', '1', '2', '系统消息', '您的商品aaaa得标', '1', '1497722574256', '1497722628261');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(10) NOT NULL,
  `item` int(11) NOT NULL,
  `address` text,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '[''待确认'', ''待付款'',''待核实'', "待发货", "已发货", "已完成",''已取消'']',
  `price` decimal(10,0) NOT NULL DEFAULT '0',
  `expressName` text,
  `expressNo` text,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_ibfk_1` (`user`),
  KEY `order_ibfk_2` (`item`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`item`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('1', '1', '1', '1', '0', '1000', null, null, '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('2', '2', '2', '收货地址：天津 天津 和平区 aaaaa 收货人：这是第4条地址  电话：18530268149', '2', '1100', null, null, '1468489587100', '1472911257794');
INSERT INTO `order` VALUES ('3', '3', '3', '3', '2', '3000', null, null, '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('4', '4', '4', '4', '3', '4000', null, null, '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('8', '8', '8', '8', '2', '800', null, null, '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('9', '9', '9', '9', '3', '900', null, null, '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('10', '10', '10', '10', '4', '100', null, null, '1468489587100', '1468489587100');
INSERT INTO `order` VALUES ('11', '2', '1', '收货地址：北京 北京 东城区 aaaaaaxxxxx 收货人：这是第3条地址  电话：18530268149', '2', '1550', null, null, '1471960530857', '1472911178736');
INSERT INTO `order` VALUES ('12', '2', '1', '收货地址：天津 天津 和平区 aaaaa 收货人：这是第4条地址  电话：18530268149', '4', '1550', '申通快递', '123', '1471960530858', '1472918161557');
INSERT INTO `order` VALUES ('13', '5', '4', null, '0', '0', null, null, '1471973625566', '1471973625566');
INSERT INTO `order` VALUES ('14', '5', '4', null, '0', '0', null, null, '1471973625568', '1471973625568');
INSERT INTO `order` VALUES ('16', '9', '8', null, '6', '0', null, null, '1471977880592', '1472915133229');
INSERT INTO `order` VALUES ('17', '10', '9', null, '6', '0', null, null, '1471977883266', '1472915129689');
INSERT INTO `order` VALUES ('18', '2', '56', '收货地址：天津 天津 和平区 aaaaa 收货人：这是第4条地址  电话：18530268149', '4', '10', '申通快递', null, '1497722574237', '1497722619631');

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
) ENGINE=InnoDB AUTO_INCREMENT=346 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of session
-- ----------------------------
INSERT INTO `session` VALUES ('1', 'ZvHgReqiUa7_eH5PuqyGxHcx1LzUS_6b', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":1,\"level\":2,\"role\":3,\"lastLogin\":1470748073288,\"createAt\":1468489586719,\"updateAt\":1470742842706,\"totalVolume\":1,\"totalTurnover\":1100}}', '1470842495883');
INSERT INTO `session` VALUES ('2', 'YDZwLEQm43KPMcU_EOfXUBDvAEuVlVjP', null, '1470834086749');
INSERT INTO `session` VALUES ('3', 'uKmRlPIsxxZuSd2KYkd_UCwtW9zVrdGL', null, '1470834088534');
INSERT INTO `session` VALUES ('4', '7YkTGT4UaH2HajumQvT2lALwImnhLNl0', null, '1470834098816');
INSERT INTO `session` VALUES ('5', 'N5wyflD9H_NNtC3ZiP2fzJCWfxAOBuMI', null, '1470834136669');
INSERT INTO `session` VALUES ('6', '0SB_k8l_LV_5Nxz7TFOnHq4ct8d2LjeM', null, '1470834149271');
INSERT INTO `session` VALUES ('7', 'aOu_TBOcMHzpS2eE8D2ZNuMZ_leyYQ03', null, '1470834264414');
INSERT INTO `session` VALUES ('8', 'STEYUpRpPa5IXdmuHayr_nQplFH9vKhq', null, '1470834791323');
INSERT INTO `session` VALUES ('9', 'nY0UazCjqRMWDEu4KyR7zEYoOcFgvtQP', null, '1470840641875');
INSERT INTO `session` VALUES ('10', 'bQPUPwm3uesNm8dKI3IPbHla_3SIchfX', null, '1470840664970');
INSERT INTO `session` VALUES ('11', 'AKFrjDhry0El4IwQuxitWl6wGlYy_XGO', null, '1470840706131');
INSERT INTO `session` VALUES ('12', 'AmuOVDRQcFprsKr_Aik3XPaF9_s8L7Bd', null, '1470840749814');
INSERT INTO `session` VALUES ('13', 'LUVRevf3p_G9_jFejlVsViqYv1J10zbr', null, '1470840792246');
INSERT INTO `session` VALUES ('14', 'byBO89gXPiFr79i661v2OCGsJZlvl4FB', null, '1470840835058');
INSERT INTO `session` VALUES ('15', 'a_2YZnq6a8ZeD_KZGLAL_u16_gTNNYo_', null, '1470840878313');
INSERT INTO `session` VALUES ('16', 'BbFFsCngGfG1XM5uGcY0Du8dOPdr1uGX', null, '1470842104652');
INSERT INTO `session` VALUES ('17', '8JANYVxxwlDEOs_bGjQMljCJm69ZHhRN', null, '1470842141272');
INSERT INTO `session` VALUES ('18', 'pUXmvHY4TFsyZB_MuoT8Us_Va54I7m6j', null, '1470842179912');
INSERT INTO `session` VALUES ('19', 'ixSSUNAFNVMjST4VKQA58x7luc_v6gkc', null, '1470842228957');
INSERT INTO `session` VALUES ('20', 'bkYusUHMJpC05rlYli6eMHijODTnoBWd', null, '1470842266580');
INSERT INTO `session` VALUES ('21', 'tHtOCljAvXLFRabrYYNn1Ikx61SQkwBX', null, '1470842305933');
INSERT INTO `session` VALUES ('22', 'Dg9FDGoLHfhkulV_tLJortIHT3zrvwi2', null, '1470842344408');
INSERT INTO `session` VALUES ('23', 'jS2zUbr75tS0aL7E62HLk4fZK86uXhpi', null, '1470842382332');
INSERT INTO `session` VALUES ('24', 'MyoAtN5pP55ppk5mKy_kVoWv30SAehOP', null, '1470842420957');
INSERT INTO `session` VALUES ('25', 'ERSm8YJaR9gWmRTBlPvfrHsarmAmf0ah', null, '1470842459587');
INSERT INTO `session` VALUES ('26', 'bqOezgexI0biN_azY0TOoGgk6209St5q', null, '1470842466405');
INSERT INTO `session` VALUES ('27', 'SuGLe0f9luXcb_1XnyWWMg7iGa1Q8cuN', null, '1470842498626');
INSERT INTO `session` VALUES ('28', 'EC72ZDjX9EsCRO3Qb_eWA5sW_aDYioCw', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":1,\"level\":2,\"role\":3,\"lastLogin\":1470756561637,\"createAt\":1468489586719,\"updateAt\":1470748073332,\"totalVolume\":1,\"totalTurnover\":1100}}', '1470930446009');
INSERT INTO `session` VALUES ('29', 'nzRdv30LD1XxCwnU2e2MABljX2REnn9S', null, '1470842761416');
INSERT INTO `session` VALUES ('30', 'rEhFQ2IgUb0k35_HNkOFoRdVSvuMMGq3', null, '1470842796940');
INSERT INTO `session` VALUES ('31', 'tLljF2RSSmod8w0xvhAjiMtkpnCxeXit', null, '1470842835666');
INSERT INTO `session` VALUES ('32', 'cJP8eW9hAkyI25yyT9nWkNXGlVjdEUJu', null, '1470842837441');
INSERT INTO `session` VALUES ('33', 'TJuVe0VrB8WRRDCspfLp4BGcBsKwhVjT', null, '1470842875164');
INSERT INTO `session` VALUES ('34', 'ZzaQeT2_vTjUGdJodozDE_XC9OKor_AL', null, '1470842914139');
INSERT INTO `session` VALUES ('35', 'VCZUtjlqMfglkzaFw9Rw7_w6HtQHsE_m', null, '1470842950748');
INSERT INTO `session` VALUES ('36', 'GVU_A6TZKcDXZB5VRNoNb6tUCayxFTO_', null, '1470842972072');
INSERT INTO `session` VALUES ('37', 'Bxozz_OvqZ5JMXznf6QJH98ng9fXnfeI', null, '1470842989110');
INSERT INTO `session` VALUES ('38', 'I9brX6huTTm4t4ipdvQ7qj0EnU0IquTU', null, '1470843026961');
INSERT INTO `session` VALUES ('39', 'ice0CUyQM1OJS5tuMmEGJf0DxIHDFcxL', null, '1470843064899');
INSERT INTO `session` VALUES ('40', 'CVUf6AM_vWyDCNyV4vLTrBRyXCp7JsP_', null, '1470843075442');
INSERT INTO `session` VALUES ('41', 'PMHcvPX8m2VliXf1x0lRvpXHV7_h8d5w', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":1,\"level\":2,\"role\":3,\"lastLogin\":1470756947538,\"createAt\":1468489586719,\"updateAt\":1470756561658,\"totalVolume\":1,\"totalTurnover\":1100}}', '1470843385413');
INSERT INTO `session` VALUES ('42', '9euF49736yDQGczWNkBPrwrlb5wIqK_6', null, '1470924268727');
INSERT INTO `session` VALUES ('43', 'GDssiRtQKp4_myAISDjjr2Iys3Cowni9', null, '1470924269697');
INSERT INTO `session` VALUES ('44', 'mByNApgqLHtt_Au65Q5PS74yR1IO7tJ7', null, '1470924270991');
INSERT INTO `session` VALUES ('45', '6Mefg_h6UDz7ks3_EaJMGC0vQ9CDmP6e', null, '1470924271444');
INSERT INTO `session` VALUES ('46', 'vWEk8DZMDdji1FvPYNimQwL9J6IAq74t', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":1,\"level\":2,\"role\":3,\"lastLogin\":1471960559581,\"createAt\":1468489586719,\"updateAt\":1470756947550,\"totalVolume\":3,\"totalTurnover\":2650}}', '1472065230625');
INSERT INTO `session` VALUES ('47', '7QYZl4i92Lk5jWPdBW0TNAW7lekZrFT5', null, '1472047190675');
INSERT INTO `session` VALUES ('48', '4qR9gxEkeMNeRz9w44_1wZd7M8V_7twG', null, '1472047191575');
INSERT INTO `session` VALUES ('49', 'FIqMQVBCxV8U8Qj0fJ9ekO6gzPbQqqAS', null, '1472047194487');
INSERT INTO `session` VALUES ('50', 'nk2AKZKHGQmaluHZl5qrBhAVuj3kdZi3', null, '1472047195224');
INSERT INTO `session` VALUES ('51', 'cZPK92CRGcLtMEquRZzZCJuqskNRf5Yc', null, '1472047195796');
INSERT INTO `session` VALUES ('52', 'nTIriPWLOE2KuqJhJv2m921VNJTdwLH4', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":1,\"level\":2,\"role\":3,\"lastLogin\":1471964263412,\"createAt\":1468489586719,\"updateAt\":1471960559594,\"totalVolume\":3,\"totalTurnover\":2650}}', '1472050673299');
INSERT INTO `session` VALUES ('53', '_tbiUKBURROeuzJPkdqKsxwQt14ECqz4', null, '1472054073773');
INSERT INTO `session` VALUES ('54', '065Q2ZRTb_V4TbLuXR_7STuuVJh9l4jt', null, '1472054084081');
INSERT INTO `session` VALUES ('55', 'xge7t2TWg4qx5SYxETx0dVFOVAHh72ca', null, '1472054085307');
INSERT INTO `session` VALUES ('56', 'f8klabySYrK7MzBecCZXD5iG8F9_5RD_', null, '1472054086070');
INSERT INTO `session` VALUES ('57', 'ulYbAnfECed_e48tL4673CnhLoPVVE9U', null, '1472060071567');
INSERT INTO `session` VALUES ('58', 'oGzT_lsDrUfxqbtjv7Epa80xenBkqCAl', null, '1472060071899');
INSERT INTO `session` VALUES ('59', '04QxjvcQeCskzhT0IznyPaZctyKmNkLt', null, '1472060072364');
INSERT INTO `session` VALUES ('60', 'n44DhoMOSiCMSfk9P9oFUuv5_B19ivQu', null, '1472060075066');
INSERT INTO `session` VALUES ('61', 'c4Mwnrg2aWUyjWgPIjAWiENJzDppdicA', null, '1472060075422');
INSERT INTO `session` VALUES ('62', 'NVuWldXfXYEMcEonCw9fkOnYfMRmRS9D', null, '1472060077427');
INSERT INTO `session` VALUES ('63', 'y2iFAJs_GPvxTKJHO5kEaIURLovAYKMR', null, '1472060077739');
INSERT INTO `session` VALUES ('64', '20dX_h9LwjZr5LotqGsLptpw3JtLw9Bx', null, '1472060078090');
INSERT INTO `session` VALUES ('65', 'Z0EAr4jrWdsAJ1_kfTB4qWr_gIUOU_85', null, '1472060086044');
INSERT INTO `session` VALUES ('66', 'mp1ts_BO2UzZf9zdte3HbSsEUIWBMuFL', null, '1472060086656');
INSERT INTO `session` VALUES ('67', 'Y8xbur3q0rmtI5Nqa3bLYGH87_vtdIqm', null, '1472060087456');
INSERT INTO `session` VALUES ('68', 'uFeShKiYkYcmJlCGrDKeiiu3hqALt23k', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":1,\"level\":2,\"role\":3,\"lastLogin\":1472725765940,\"createAt\":1468489586719,\"updateAt\":1471964263426,\"totalVolume\":3,\"totalTurnover\":2650}}', '1472836287854');
INSERT INTO `session` VALUES ('69', 'Hp9IGBMTo1qy3YrIWuPU3DUeIfiIZLrP', null, '1472813917726');
INSERT INTO `session` VALUES ('70', 'kuIgT_NUVsjvhFaekzrlFsaYfkqwkkQz', null, '1472813918531');
INSERT INTO `session` VALUES ('71', '0QqcmiEwVXB_bkpo_NJCC6kBdii_Adx3', null, '1472833520014');
INSERT INTO `session` VALUES ('72', 'XZMBC_TdG8AtSd_G9n_AYq6heCNmO2fk', null, '1472833522014');
INSERT INTO `session` VALUES ('73', 'o94mdkVH_HY2qf7jrLK0wSNbNwggcT01', null, '1472833523484');
INSERT INTO `session` VALUES ('74', 'OXl52YO6_g8hiBhyqxoeZZCYbHBTK_c7', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":1,\"level\":2,\"role\":3,\"lastLogin\":1472802550963,\"createAt\":1468489586719,\"updateAt\":1472725765953,\"totalVolume\":3,\"totalTurnover\":2650}}', '1472904019352');
INSERT INTO `session` VALUES ('75', 'GoDuz_bYJMKy4LuJiKsvyykh7SRPQD1o', null, '1472888912817');
INSERT INTO `session` VALUES ('76', 'M1yfs0GC9b6D4PvMh0QBHxu8me85AMcB', null, '1472888914684');
INSERT INTO `session` VALUES ('77', '4AVGVbl1qk9_xs57HMcEV8vH8Jy_cpx5', null, '1472888915881');
INSERT INTO `session` VALUES ('78', 'KhTdeW_VAY7CS_KC8W9KawWHG22pE8i1', null, '1472888916353');
INSERT INTO `session` VALUES ('79', 'd1U9WSlYBEQTJnUdW_1anHqloZVBGprv', null, '1472888920580');
INSERT INTO `session` VALUES ('80', 'YsSXZm8avpRbbKa05ZtEcKC2mzcG_uyL', null, '1472889638171');
INSERT INTO `session` VALUES ('81', '2l52T6mk_jdZclHOnmtDfBeDpYrArrq_', null, '1472889639383');
INSERT INTO `session` VALUES ('82', 'pnG3iqMrU14_fLVUYiIcTZXH4aBWZjxL', null, '1472889639963');
INSERT INTO `session` VALUES ('83', 'IYI_XBAArs2m4vi4dPqybIz0BLu9kWnv', null, '1472890049565');
INSERT INTO `session` VALUES ('84', 'H2_dGPxqE_eCZYXTuEf0ABaFLhuA8ox1', null, '1472890049987');
INSERT INTO `session` VALUES ('85', 'GbX7R1KgMna7fGsW63HUyw6qLQm2VU0A', null, '1472890050733');
INSERT INTO `session` VALUES ('86', '4K_9irJCQd49rGL_EDYuWqjqyUII2vQ8', null, '1472894418740');
INSERT INTO `session` VALUES ('87', 'Zmtj1X_m44frg8qh95ELjugHuL6rC40e', null, '1472896207887');
INSERT INTO `session` VALUES ('88', 'IPOxVHtebIt5A0PU9NCPjPQnVGVRjM93', null, '1472896208289');
INSERT INTO `session` VALUES ('89', 'WUzQSbEwBKpGeWSXirZL_1Y_HjIEIXsl', null, '1472896208721');
INSERT INTO `session` VALUES ('90', '1dvqI46rk2LAWU67MGdJlkEapitPtGuJ', null, '1472896209845');
INSERT INTO `session` VALUES ('91', 'lXfNVD4ZEDvtsgv2I6EysaTXZL7_QE42', null, '1472896210163');
INSERT INTO `session` VALUES ('92', 'jJDYvTYXBfP_OEUtlebhoCgmATJCe3Sh', null, '1472896212078');
INSERT INTO `session` VALUES ('93', 'J2unwKy9LQWT1C8_HBd4donRQwXVX2Dp', null, '1472896223477');
INSERT INTO `session` VALUES ('94', '_YGHvs4KNk_pCoxNwvwHrjYVol2wB55t', null, '1472896226103');
INSERT INTO `session` VALUES ('95', '4d67gN6jYHggztjHH1ulFIaQJSJ2kPGw', null, '1472896992821');
INSERT INTO `session` VALUES ('96', '4eIVSAWk9JhPJcGtedlg9dAYsF8T6Q8J', null, '1472896994039');
INSERT INTO `session` VALUES ('97', 'cW5sMCsWdIhZrQevIXYd1lc0WfsP4O8N', null, '1472896994382');
INSERT INTO `session` VALUES ('98', 'SjZVkfAzxXVcPSU1a66m10t7HsIIYtgX', '{}', '1473012679088');
INSERT INTO `session` VALUES ('99', 'DF1V4jJCrZp3GUnMv65cqSfsFMRVbsf8', null, '1472973938035');
INSERT INTO `session` VALUES ('100', 'xiNKt1qu09BgU7VcdjB52QmDXSdXPPOc', null, '1472973938528');
INSERT INTO `session` VALUES ('101', 'TtHyyp75NT6_nl1n6dnhdatZ951roUXB', null, '1472974374999');
INSERT INTO `session` VALUES ('102', 'a5J3b17bab04ajzuj1MioOsq_1I3fbhI', null, '1472974375936');
INSERT INTO `session` VALUES ('103', '2w8wYeNZ_WWWx16xQpkulALYBieVnF1Z', null, '1472976616048');
INSERT INTO `session` VALUES ('104', '_E37J1yL2P_PaDsfIHXUFCloYjCC_JwX', null, '1472977137935');
INSERT INTO `session` VALUES ('105', '6QfW24sIhokQafG_8ZpDFP_L1PNJplgv', null, '1472977139547');
INSERT INTO `session` VALUES ('106', 'hi3kLOt5_0wsruViCbi23n7cYHlmCt3n', null, '1472977140017');
INSERT INTO `session` VALUES ('107', 'ULn07lqP7bfG3RdqGjeA97r_k3oYVIpf', null, '1472977140717');
INSERT INTO `session` VALUES ('108', 'udklohzq7pmSe9KR1tgup1l3ujewsV_t', null, '1472977584342');
INSERT INTO `session` VALUES ('109', 't_AJQ_IaiwuLEpMiAaoWu_gP3L0dnNxo', null, '1472977586990');
INSERT INTO `session` VALUES ('110', 'rMOznzgUA2ib6S7LPKDKzg8Jeq_wLM0_', null, '1472977591633');
INSERT INTO `session` VALUES ('111', 'B54EoU_XIJ8Nw1VZ4AasLmko6StKZsTc', null, '1472977842551');
INSERT INTO `session` VALUES ('112', 'tebiiB7RU2AdZem8RAz0zNpbFl5O5KjJ', null, '1472977881535');
INSERT INTO `session` VALUES ('113', 'AgMMsoy8_8eUuRQaiXK7___Hwja0Qp_6', null, '1472977882836');
INSERT INTO `session` VALUES ('114', 'ZwEH02zjn7obBf4GGgorYJjV42oBboiQ', null, '1472978885306');
INSERT INTO `session` VALUES ('115', 'nc6LOy1WMpzeCEZq6m5pyvdcvQv8t7aR', null, '1472978885307');
INSERT INTO `session` VALUES ('116', '0Byj_o__YUnALddLjzTqZPCIiGgYdDR6', null, '1472979301857');
INSERT INTO `session` VALUES ('117', '2BBBNTq1afzXvaHjnnJMZ53Pboi2ApPG', null, '1472979302750');
INSERT INTO `session` VALUES ('118', 'UkmNjI8kSZfH80qEzNgFasvzB0oRh3lM', null, '1472979326819');
INSERT INTO `session` VALUES ('119', 'YTlhPeu5vkfUSxIdSYgqGqXYhHk8tIpH', null, '1472979608479');
INSERT INTO `session` VALUES ('120', 'DDmxa2bp6cJXj17x6VwMsYTz6e3YjtV9', null, '1472979608973');
INSERT INTO `session` VALUES ('121', 'ql6hW5Zv1MJ0EHc24bW7N2rbLBi3V8Kn', null, '1472979614317');
INSERT INTO `session` VALUES ('122', 'WIKwr5NFtfkIWuFh4zcivXvtYk6Z9BjD', null, '1472979615246');
INSERT INTO `session` VALUES ('123', 'f6qKVGnglXF82Vh2ZpOthGG5iz_SnjaZ', null, '1472979616993');
INSERT INTO `session` VALUES ('124', 'veZYBf_OEQXoK8Y37eomOPGfBDpglqO7', null, '1472980140993');
INSERT INTO `session` VALUES ('125', '0_T9MGcqGygwT_5zfA0i9iwK5_ouyrCF', null, '1472992969306');
INSERT INTO `session` VALUES ('126', 'qTcJ9vOy49G5j_OP9moeu3C_CQObxopE', null, '1472993160061');
INSERT INTO `session` VALUES ('127', '9CPaTyiV16zZ4BdOtjFVJ3xD9ko5DPG1', null, '1472993255077');
INSERT INTO `session` VALUES ('128', '8PyJOAj5lsr_A3x6hBgatBDvJFDTTa_j', null, '1472993256455');
INSERT INTO `session` VALUES ('129', 'j8zaFAsdivm2a928bKu5ESIzn6Gw2NwR', null, '1472993271406');
INSERT INTO `session` VALUES ('130', '5Clr_npj7gcRcOwjJEZcP_3lAdiq2JMy', null, '1472993271848');
INSERT INTO `session` VALUES ('131', 'FRcOFxVbMm6E59lvQAee0Re__ztuhWS_', null, '1472993272294');
INSERT INTO `session` VALUES ('132', 'neHGP1M9x4dIQiwhssHPYMb2bmyoldAX', null, '1472993272711');
INSERT INTO `session` VALUES ('133', 'onmqDbheL_V2bp0vdeLr02cm8FmzNI9e', null, '1472993273850');
INSERT INTO `session` VALUES ('134', '34TD18Bk_oSspez10YWbnqaii0_djhZ_', null, '1472993273975');
INSERT INTO `session` VALUES ('135', '0CAKlDMaTtiiBcIVEIpu0f6n5d_tSutU', null, '1472993274400');
INSERT INTO `session` VALUES ('136', 'FUTBSPVjN1bolT2L34J7b5SSt7K5uT9Y', null, '1472993274770');
INSERT INTO `session` VALUES ('137', 'RtuXA9X_TV9pVZ2pvnD1EfGwohDgfdMW', null, '1472993275257');
INSERT INTO `session` VALUES ('138', 'Z_GilnPT4s8tJK7f9e4sa0LtDVdCarS9', null, '1472993276614');
INSERT INTO `session` VALUES ('139', '8QgkgiIGHMkHt6jx52EiNfDGj_sU3bH0', null, '1472993276959');
INSERT INTO `session` VALUES ('140', 'cm_ieCxqp8dK4Tk0syyVzYbWAjQMfBoL', null, '1472993277312');
INSERT INTO `session` VALUES ('141', 'GPqXrbnvVr5UCr7S_1E0XGHlhpA399Gq', null, '1472993393922');
INSERT INTO `session` VALUES ('142', 'gO1bfkZ_uyo3bniQf19ZzUTpsjOZ7rye', null, '1472993394671');
INSERT INTO `session` VALUES ('143', 'Scl4nKKvPjIpAB_1RyU9uUeMm2aeTdvS', null, '1472993395282');
INSERT INTO `session` VALUES ('144', '6ylKIaPxaP9uQZiYVwsu5p6mUWPo8RXg', null, '1472993396643');
INSERT INTO `session` VALUES ('145', '076gYR8RvEd3IwL2BVQlGVyeY7FqTtFQ', null, '1472993397939');
INSERT INTO `session` VALUES ('146', 'zzzxd3wpUK_VCv8y1ZydnPCpZRyu1JAW', null, '1472993915828');
INSERT INTO `session` VALUES ('147', '_Xe3pRiwJ2KZ87axNfXCQ2y8_ZyVS0xO', null, '1472993917070');
INSERT INTO `session` VALUES ('148', 'WFRbxCQC0o8P2uUrcLS87e_lD9HxZH2D', null, '1472993927882');
INSERT INTO `session` VALUES ('149', 'BZJCmiZFjXo9CjEVYTtSvWZw_rr9JWvn', null, '1472993928408');
INSERT INTO `session` VALUES ('150', 'GH2omBq7_MJvFxD9vmY4cR9gIFZGrchQ', null, '1472993930113');
INSERT INTO `session` VALUES ('151', 'CzZuG_u1YYIxo7RdWTXXy_7P6wBVjP5U', null, '1472993930662');
INSERT INTO `session` VALUES ('152', 'IiXm1jdHGP5UuGM25myfDCnEDUw3ZR2B', null, '1472993931205');
INSERT INTO `session` VALUES ('153', 'hA3K8XplOAsoziKMXVcW9ID3Q3AchkYZ', null, '1472993931655');
INSERT INTO `session` VALUES ('154', 'baWFpXR2CMp2T_a3ida2f3ZFm4qgqm8C', null, '1472993931976');
INSERT INTO `session` VALUES ('155', 'izqpyynQ1hp8XZsjrjOXxRU1xErVh8F6', null, '1472993950802');
INSERT INTO `session` VALUES ('156', 'uXuZwBcjLrbYEH7jFrS_S4SNKFNCc2L3', null, '1472993951407');
INSERT INTO `session` VALUES ('157', 'sPIDg9JlAHgQAeBXv_ixmXF8R8QQotdR', null, '1472993952581');
INSERT INTO `session` VALUES ('158', 'kWlRwrtlCPHjurg4SOfNJc7OKwBHAF8V', null, '1472993953656');
INSERT INTO `session` VALUES ('159', 'nGlWyX5BLmxgYp3YjRvbxzifl0RjreCS', null, '1472993954032');
INSERT INTO `session` VALUES ('160', 'GbVgjK29aICUdD1AqQExWIvxSpOWV_MX', null, '1472993989242');
INSERT INTO `session` VALUES ('161', 'H2nIgpHnQZt6PJrOYMfw2TH678ClaoM9', null, '1472993989907');
INSERT INTO `session` VALUES ('162', '9ZAmv9IuqBLehe5BFTdwnNMazDY3z3BE', null, '1472993991323');
INSERT INTO `session` VALUES ('163', 'F6AY_r4FySrUOmVwf6DOA8zfq7qyc221', null, '1472993992734');
INSERT INTO `session` VALUES ('164', 'KAqAmhrHRHOytJAZ1L_mgUi0cv2JdPUm', null, '1472993993097');
INSERT INTO `session` VALUES ('165', 'SiAphOIf_Fdfvo1kVSjX8reLrNU46zqU', null, '1472993993424');
INSERT INTO `session` VALUES ('166', 'yvAxSzwHlwQXZU7TBH_TDAfzN_AUbSOF', null, '1472996009977');
INSERT INTO `session` VALUES ('167', 'yT0IVn566XK8VX03Jgy2d9gTcWKiFuQ0', null, '1472996009979');
INSERT INTO `session` VALUES ('168', '09JDJTqkX166_CO1HlhMP5ju6yBlT5Hj', null, '1473010008194');
INSERT INTO `session` VALUES ('169', '5t9yPNtaHKQQeoMrkoSNcQq5NiezWuWp', null, '1473010008287');
INSERT INTO `session` VALUES ('170', 'CM6DiEQqTjTKpY56yp_ORGHqEMeRu6MW', null, '1473010008773');
INSERT INTO `session` VALUES ('171', '7A4QIUeWlwso2SO5RVZUI4OJoCtI8RWN', null, '1473010009293');
INSERT INTO `session` VALUES ('172', 'hbXpR5AlmdK3eKvrYVqrN9sOa6QP_wVV', null, '1473010896821');
INSERT INTO `session` VALUES ('173', '6lopO733WDjfepMKLlWCjxu8qtc9yxLs', null, '1473010899390');
INSERT INTO `session` VALUES ('174', 'LLpu6IyZgSHwvjBq5QVyLSCtjNFDLIDM', null, '1473010901072');
INSERT INTO `session` VALUES ('175', '3pHlOoBJIMEbAQP8_My46fI2_d94BT_K', null, '1473010908959');
INSERT INTO `session` VALUES ('176', 'mp8bKv7K8rP_eGgAOYNo5YZLx_Ahs04z', null, '1473010909379');
INSERT INTO `session` VALUES ('177', 'vwM4oeqo5fDnIQykz4dnClqNcB2EfAch', null, '1473012853104');
INSERT INTO `session` VALUES ('178', 'D2Q3Mv3cQ1Oxz6VgpkZytwDXvU2L3CxV', null, '1473012885027');
INSERT INTO `session` VALUES ('179', 'J33eYuRP_L5CCiFNDOJUA8sB0M0oJz_D', null, '1473012887386');
INSERT INTO `session` VALUES ('180', 'l__p9DGFGcggrHPFy25YOL6iPsdSjOUc', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":5000,\"level\":2,\"role\":3,\"lastLogin\":1472985449801,\"createAt\":1468489586719,\"updateAt\":1472892878195,\"totalVolume\":3,\"totalTurnover\":2650}}', '1473085287024');
INSERT INTO `session` VALUES ('181', 'PZNDyHhowG9gqp_8sG96g13lvoLK_vja', null, '1473071834062');
INSERT INTO `session` VALUES ('182', 'WE8ntxU_3eYIWZM1FnKtOBuC1FKl0a0Z', null, '1473071834591');
INSERT INTO `session` VALUES ('183', 'QVhcp9MCyr0FQIJUkikE_15JtgUH_ux9', null, '1473071974244');
INSERT INTO `session` VALUES ('184', 'vCBn25uwKYoP2_X5QydomMMI7o5Buj7a', null, '1473071978393');
INSERT INTO `session` VALUES ('185', 'Jkz8qFtu3jdsxG8bjrmqWfYKhw_TxZ6W', null, '1473071981244');
INSERT INTO `session` VALUES ('186', 'Cu82JQ8ODfFT_av28uvHECMANNx484ZF', null, '1473072088507');
INSERT INTO `session` VALUES ('187', 'EbB8egSZb5DMepdIgxSe8yrp3JYfEmL6', null, '1473072383787');
INSERT INTO `session` VALUES ('188', '6R5RpXNEICvbWMEtJR2g9XL6DfrN_O9v', null, '1473072453318');
INSERT INTO `session` VALUES ('189', 'gIhalFAXWylFmg_fiJSHshI7hno_FYob', null, '1473072457486');
INSERT INTO `session` VALUES ('190', 'MNCiW1AgXkU_tbV5em5WT_jR7T2sk2As', null, '1473072459567');
INSERT INTO `session` VALUES ('191', 'tcTuW__XDgKhmPWtv8i0PHiCsf_NFcYt', null, '1473072460221');
INSERT INTO `session` VALUES ('192', '0lVBwISZHJU43veAdd8pXgbuyuIpJVlb', null, '1473072460652');
INSERT INTO `session` VALUES ('193', 'auowIjbW51Q7nLQVjb1SNQKpBayokD80', null, '1473072531910');
INSERT INTO `session` VALUES ('194', 'MW8oN1Z9iz4qz01sTFvh_XVG49XWvn9v', null, '1473072540040');
INSERT INTO `session` VALUES ('195', 'k8EMaRqsMPBOKZxkeOqeEUluw_1xp3zp', null, '1473072540995');
INSERT INTO `session` VALUES ('196', 'wUrOxGaMo4YLZwPOLIqQ9AF1I98BthHh', null, '1473072543448');
INSERT INTO `session` VALUES ('197', 'WaJlTkldlgcLmsB6q_zfyD47j1DGK8z5', null, '1473072653153');
INSERT INTO `session` VALUES ('198', '_Gw3h_KilIdgUcDyOeN7XAg18GLmZvlT', null, '1473072657017');
INSERT INTO `session` VALUES ('199', 'zNz_FI74fD31q0ZtB4s1zs41Zqke0US_', null, '1473072667180');
INSERT INTO `session` VALUES ('200', 'JSxDQF_vPixBEPxCsKBJmIAvf8SaO7AN', null, '1473072687184');
INSERT INTO `session` VALUES ('201', 'aT2v6VkzE3ZMVWkYD7cAvJ4AhYdOEX_z', null, '1473072814583');
INSERT INTO `session` VALUES ('202', 'DNcUF006TrRlZdfsFX0DjCfZQ4SltGdc', null, '1473076126240');
INSERT INTO `session` VALUES ('203', 'PSeAtrCwXtOa9WonscpEZRt_jGrQLTim', null, '1473076127497');
INSERT INTO `session` VALUES ('204', 'Gbd2q_bGUx13bKLcKOP_Omz2pvisHXwu', null, '1473076130473');
INSERT INTO `session` VALUES ('205', 'cdL0NRLg3Bq5PpSGwXv3Keq5zTZopmi4', null, '1473076131030');
INSERT INTO `session` VALUES ('206', 'rdaU5cG7T_sHpBobTrUCoLU6WVxv4f0V', null, '1473084459476');
INSERT INTO `session` VALUES ('207', 'lIFOpzn0yyWbCBzP83m4PfoqpNmrREpw', null, '1473084708247');
INSERT INTO `session` VALUES ('208', 'ROK2jF6xkiIUp8REmld6JKrnMypJaVK_', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":5000,\"level\":2,\"role\":3,\"lastLogin\":1472999234550,\"createAt\":1468489586719,\"updateAt\":1472985449837,\"totalVolume\":3,\"totalTurnover\":2650}}', '1473088071308');
INSERT INTO `session` VALUES ('209', 'ag8qLQQj31STyp8cDE9HOCDExDvCzwKs', null, '1473086882959');
INSERT INTO `session` VALUES ('210', 'd8q2NAQVwmGURxTSZDhlIEkCdR8Pi3Yc', null, '1473086884254');
INSERT INTO `session` VALUES ('211', 'OhF9ZHBOknKQL6FFdCZJf1KEGglkalQE', null, '1473086887820');
INSERT INTO `session` VALUES ('212', 'cNuIqTIB_ZBGD_C9cunqKK2ZhM4MUdwC', '{\"user\":{\"id\":17,\"username\":\"test11\",\"email\":\"81088128321@qq.com\",\"emailValidate\":0,\"desc\":\"他很懒，什么都没留下\",\"avatar\":1,\"creditLines\":1000,\"level\":1,\"role\":2,\"lastLogin\":1476503053189,\"createAt\":1476503053206,\"updateAt\":1476503053206,\"totalVolume\":0,\"totalTurnover\":0}}', '1476593437658');
INSERT INTO `session` VALUES ('213', 'OGS3kQVdiX2tsWc0kc5J5K3JNs0qOv_C', null, '1476586858753');
INSERT INTO `session` VALUES ('214', 'J0QxwOJ8iY9IDBdF6j9d5gh_2wk8_6oa', null, '1476586859310');
INSERT INTO `session` VALUES ('215', 'MlQ1OdDG5VIsBhubLEbalsB2B2zyXsUD', null, '1476586870997');
INSERT INTO `session` VALUES ('216', 'bNLsIthl8sJBzTt6I5PeOP_Du8pQcvTe', null, '1476586871647');
INSERT INTO `session` VALUES ('217', 'IAJWHEbcb6UXuHMPZYOoWqvvIwycHj_n', null, '1476586872192');
INSERT INTO `session` VALUES ('218', 'lrGfG1is9udS700UPxNQ7NdkaGPPx_XH', null, '1476586875585');
INSERT INTO `session` VALUES ('219', '_fur_fKCT3BjVfnZpjeLCw_9ZrUE73WE', null, '1476586882926');
INSERT INTO `session` VALUES ('220', 'MjXypDHwMWpD_awV71l3r5tfuY6drcrs', null, '1476586890752');
INSERT INTO `session` VALUES ('221', '55QmUwNRf_9sJPR2tzRNDucCQObqAZoN', null, '1476588155942');
INSERT INTO `session` VALUES ('222', 'SalUOvNuNQBDavxzakAbjD2OVxweLsAf', null, '1476588160640');
INSERT INTO `session` VALUES ('223', 'kvydqO0XtuO_19zxKkqmc_yccKLMHGqI', null, '1476588286554');
INSERT INTO `session` VALUES ('224', '7dCei6hV0EH3GkeYppkhOc01BgQcxVb3', null, '1476588288488');
INSERT INTO `session` VALUES ('225', 'MQBykxGaapdNaMULzwImP4hBCqWTgLb8', null, '1476588290073');
INSERT INTO `session` VALUES ('226', 'Sdb0Bjq_phsSHpJFdA6Nh06lzEQ_uooN', null, '1476588303769');
INSERT INTO `session` VALUES ('227', 'NvRwWXceXn_Bnzm9CSGttWFOIY72aJTc', null, '1476588305264');
INSERT INTO `session` VALUES ('228', 'AWPJTek47V5N4OVjoVGJmMmZQgp1IRCn', null, '1476588306543');
INSERT INTO `session` VALUES ('229', 'Uv6zVPkfeFm1Snx8k2L9zwi1kDRQdn5R', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":5000,\"level\":2,\"role\":3,\"remark\":null,\"lastLogin\":1476534906500,\"createAt\":1468489586719,\"updateAt\":1476534880062,\"totalVolume\":3,\"totalTurnover\":2650}}', '1476621311710');
INSERT INTO `session` VALUES ('230', 'ncxRXE7Ye9hfqeRvy2I3_2DVyiyqu8RW', null, '1476610587909');
INSERT INTO `session` VALUES ('231', 'hjQBAHFABz5AMD2MLtilEPJ1iNWuhdvB', null, '1476610588628');
INSERT INTO `session` VALUES ('232', 'PcfxqPc5767XtdQNZZkHybJBX5JmrSMK', null, '1476610589631');
INSERT INTO `session` VALUES ('233', 'aD9nwAGGPhkP8imBLUFatPJUq8d5_6_W', null, '1476610592037');
INSERT INTO `session` VALUES ('234', 'IkQNiIG2GsIO0wj5no8EJaYwm9u_1oD6', null, '1476610592528');
INSERT INTO `session` VALUES ('235', '3ckb2hTRzbfUR4YkwsJVkCy5CA0YfFjW', null, '1476619727631');
INSERT INTO `session` VALUES ('236', 'V_QfNa4ukv2FuZg_qTlHAJNO_xm6VmgT', null, '1476619729024');
INSERT INTO `session` VALUES ('237', '3N4UCgBPILpK7jU_0OoV3ferOq7iKCK6', null, '1476619730231');
INSERT INTO `session` VALUES ('238', 'Q6RU60iLeWF1uZj6QvA2aB9MOk7a8qcM', null, '1476620444754');
INSERT INTO `session` VALUES ('239', 'QD8rdiuqoeWVuSOSb64wcFHTJwGi8dso', null, '1476620445541');
INSERT INTO `session` VALUES ('240', '8Pz7f5SO4YgMalX36kEbd5OpXEpUlBFf', null, '1476620446859');
INSERT INTO `session` VALUES ('241', 'CQVWS_vbD1sJqc1BEqS4gjDuai3XaZ6F', '{}', '1476901592168');
INSERT INTO `session` VALUES ('242', 'uv_qy_R17TpqxWTZI43NCK1a0uBYj_Rt', null, '1476872411051');
INSERT INTO `session` VALUES ('243', '9VgrrCt8f2n5Gv9gdymQX2p0TH_Wz5BA', null, '1476872412394');
INSERT INTO `session` VALUES ('244', '_HqlYDpiHA9O3TxTvf6DmpnLzcahDrSr', null, '1476872524501');
INSERT INTO `session` VALUES ('245', 'BY8qMMWbyAbivcKi_AthA_NZHGtYH4IZ', null, '1476872525040');
INSERT INTO `session` VALUES ('246', '7PnBwj47RSKzrVn7LFStdYLCGQpcz8Fl', null, '1476872525553');
INSERT INTO `session` VALUES ('247', 'HhRqvVHpD4FYTbZftOmx6VMYw9f5qHYb', null, '1476872536858');
INSERT INTO `session` VALUES ('248', '6i5znESYpPejrDkohuwfK2Fme_JPTWD1', null, '1476872539765');
INSERT INTO `session` VALUES ('249', 'eYWkYoVZCJ9jHCZg4BEMq1c__iRy6muA', null, '1476872540729');
INSERT INTO `session` VALUES ('250', 'F30L7WzF9tfaHqIXsPXZKiW6p0PFlW15', null, '1476872541936');
INSERT INTO `session` VALUES ('251', 'LSEaOKjeHpsS9_f_6bfcpEy8wzU5MGc2', null, '1476872553866');
INSERT INTO `session` VALUES ('252', 'CCOmk_qm4fGZ_OgtjeiqqtLrOBzGrKFP', null, '1476872554314');
INSERT INTO `session` VALUES ('253', 'RZLqeGrcc_TTlatSZHTPw_WgUHHDtnS7', null, '1476872554849');
INSERT INTO `session` VALUES ('254', '98m65RVnSZbr0ysb_GNhDwGAODT9vN5G', null, '1476892690728');
INSERT INTO `session` VALUES ('255', 'rsQwiWGRGJtro2BdvJgwMAqskPEe29O3', null, '1476892692274');
INSERT INTO `session` VALUES ('256', 'W8umTnVCNknYhBFXlkxjlVuB5p65L5yi', null, '1476892693194');
INSERT INTO `session` VALUES ('257', 'YEOwBsTINhzwb3UucBYXw29t9YBo8Csc', null, '1476892728537');
INSERT INTO `session` VALUES ('258', 'uEiwuGJOSq4vb9ilxdNQgB_Msh79cJSd', null, '1476892728852');
INSERT INTO `session` VALUES ('259', 'un8DMWs20yWujZmXmqVqhPncjxBtHPRx', null, '1476892731867');
INSERT INTO `session` VALUES ('260', 'okqbVL8kv4T6zGKNbRNKCqHyf_l_IA1d', null, '1476892732695');
INSERT INTO `session` VALUES ('261', 'iUDI4qHFCSY_3J5R974alXbWnh6QfQiJ', null, '1476892782600');
INSERT INTO `session` VALUES ('262', 'Xo6gFdfZjq20dD2BZ5yy7t_iTwHu5Pzp', null, '1476892823151');
INSERT INTO `session` VALUES ('263', '361XSLiuucWlTQBSv3qxf0zytaYGmymk', null, '1476892823719');
INSERT INTO `session` VALUES ('264', 'ogEFTcLmAictnWjhAvcHIMHJsZcJaRsC', null, '1476892824553');
INSERT INTO `session` VALUES ('265', '3szc520sLIWNIES3QvfxHufZ8CtX3Gep', null, '1476892824866');
INSERT INTO `session` VALUES ('266', 'ZyKRrY1JvwCbRG_MeUsy_y4lOSBRv04X', null, '1476893011221');
INSERT INTO `session` VALUES ('267', 'mPaTjJ_bC8hOPo03cXDPGSS8_6klb1Il', null, '1476893011893');
INSERT INTO `session` VALUES ('268', 'VFuMOOLewMYB0IH_Oxwla310ekAbRpba', null, '1476893021065');
INSERT INTO `session` VALUES ('269', 'XDRWPeEvDrS_yh4WK7O73Okwy6r_6Jz2', null, '1476893024301');
INSERT INTO `session` VALUES ('270', 'Ml6HoujwcOApnTPsPE5G8UgfIMSOrM6C', null, '1476893034328');
INSERT INTO `session` VALUES ('271', '0Ln_7_TqEpHC1fsybrNlVE5DeNgEhgyL', null, '1476893036970');
INSERT INTO `session` VALUES ('272', '_X7SuL2_KKP2OnZGvKoDnHzG4LKP0XYD', null, '1476893041406');
INSERT INTO `session` VALUES ('273', 'pB_EFlg_3CocbI00yAsTqtXspVfiS6Dq', null, '1476893072888');
INSERT INTO `session` VALUES ('274', 'DEnhXBBjMV3a2wTruZeY2wB2uhH3YFjc', null, '1476893074355');
INSERT INTO `session` VALUES ('275', '6wbboWsQP4GMfYS2UXdSrTxQ9xoy9BXE', null, '1476893092622');
INSERT INTO `session` VALUES ('276', 'ZS2WoAJFj7HJKjCA7GW7DdPzm14BvlSG', null, '1476893217002');
INSERT INTO `session` VALUES ('277', 'Fx66a5j0v4xz2f_8NXfAsKCd1hLoBkOH', null, '1476893802397');
INSERT INTO `session` VALUES ('278', 's3aLid9Y1OTPrEyfJ9gDcZGkDnH7XyC0', null, '1476893804200');
INSERT INTO `session` VALUES ('279', 'QJQYn5ZmSIVw9fIARNxO0pSEbhe7V5b4', null, '1476893804780');
INSERT INTO `session` VALUES ('280', 'Q_Y0frhSX0fMlU_jjTuec11G_0ZNS9GE', null, '1476893829280');
INSERT INTO `session` VALUES ('281', 'Clk10ehcsKMI6wBGGi95ztO44AZEhlar', null, '1476894543533');
INSERT INTO `session` VALUES ('282', '7ehub52yuoAmW83NhAmqguhFXvCCmXbF', null, '1476894804627');
INSERT INTO `session` VALUES ('283', 'cFDZYAN1MrO_xgkHB5ichgTJhqZky2eb', null, '1476894826669');
INSERT INTO `session` VALUES ('284', 'vs4A6WJZChYF7S3A7oXdg7OXUe_Iv4ge', null, '1476894830481');
INSERT INTO `session` VALUES ('285', 'lvWnd9wjwugoLt3vGosyNsCn3nppPSzU', null, '1476894832556');
INSERT INTO `session` VALUES ('286', 'Un8j_TTu7IXvEPq2bOO0GDId_H7ciZds', null, '1476894838447');
INSERT INTO `session` VALUES ('287', 'CfmuiU6WKn6MLS6dkIkNjVbZsWhGJXPb', null, '1476894840312');
INSERT INTO `session` VALUES ('288', 'pbz_NzDy0kQ60FQQsioKS5JauWHtWk1l', null, '1476896349329');
INSERT INTO `session` VALUES ('289', 'hjZQLOReEYtjFto_yl0S5pBafOTl6HrL', null, '1476896353888');
INSERT INTO `session` VALUES ('290', 'hDg_Kym4ggz3AS0LyPutbAfIVxvu_bXs', null, '1476896355924');
INSERT INTO `session` VALUES ('291', '6fSLPl38S4yFB0lABG04RpvsxG_Lhs1Y', null, '1476896358386');
INSERT INTO `session` VALUES ('292', 'mtLwanMHyvC3TBncd304GCmHPh6q_HVv', null, '1476897014718');
INSERT INTO `session` VALUES ('293', '_FMpB8H_YocM7E6VeuAA92xa5AFsbTOR', null, '1476897015293');
INSERT INTO `session` VALUES ('294', 'PS1D2_XEHCfF9y4VOnxawJERlUTD3AdS', null, '1476897016339');
INSERT INTO `session` VALUES ('295', '44OtwtEc0okedfnH7H_KtmcXjKQ_Vlu5', null, '1476901581248');
INSERT INTO `session` VALUES ('296', '77nYQQAmNIKZhPgUmTIRfUI_YZ8C0Jnd', null, '1476901583154');
INSERT INTO `session` VALUES ('297', 'PnEcfbu4L5CzuBmk0ylIosdvyoUWP24T', null, '1476901583697');
INSERT INTO `session` VALUES ('298', 'NQP8MhcEGU5hRRz1SK1PKlPgp2wJTc3r', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":5000,\"level\":2,\"role\":3,\"mark\":null,\"lastLogin\":1476815720911,\"createAt\":1468489586719,\"updateAt\":1476786081960,\"totalVolume\":3,\"totalTurnover\":2650}}', '1476902147526');
INSERT INTO `session` VALUES ('299', '6fyy_NJJJ3_S_UJdHDJGQBr4Yp2uH_df', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":5000,\"level\":2,\"role\":3,\"mark\":null,\"lastLogin\":1478573622410,\"createAt\":1468489586719,\"updateAt\":1478571665851,\"totalVolume\":3,\"totalTurnover\":2650}}', '1478707977849');
INSERT INTO `session` VALUES ('300', '9ZMgf07NCPGBaPHF0BgZcVtHpSTDwdzI', null, '1478657856842');
INSERT INTO `session` VALUES ('301', 'SeEXMwkJ2I82es8PHXidMdDKJo8kbJBP', null, '1478664336393');
INSERT INTO `session` VALUES ('302', '8tg2trqiRBwWG4wK6zmkYUkGNElejyT_', null, '1478707984572');
INSERT INTO `session` VALUES ('303', 'hIzMUVz0FKz3WagIdjKtz15RjVnnQH6s', null, '1478707985110');
INSERT INTO `session` VALUES ('304', '1pI93CPXuq_7_WXSyWBGMrcuvw5ABOJb', null, '1478707986097');
INSERT INTO `session` VALUES ('305', 'C_iqfQ2kH2_kqlmJiPX6OREFuLXhFg7c', null, '1478707987207');
INSERT INTO `session` VALUES ('306', 'sBDuhcq_0Dzi80BE4N_mt16Q6rzojQMW', null, '1478707989025');
INSERT INTO `session` VALUES ('307', 'NdeFi_0IdGKKq0aAdqEw80V_x74wIvNC', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":5000,\"level\":2,\"role\":3,\"mark\":null,\"lastLogin\":1488628288041,\"createAt\":1468489586719,\"updateAt\":1478573622414,\"totalVolume\":3,\"totalTurnover\":2650}}', '1488717483678');
INSERT INTO `session` VALUES ('308', 'mc0GcmjEr5pZXBhP8DlpJAPdV_JYJGb_', null, '1488715938197');
INSERT INTO `session` VALUES ('309', 'I_4fff4roiLx6nWZYP7OvPkWUvk3Mepp', null, '1488715940382');
INSERT INTO `session` VALUES ('310', 'L0Q9YW_BSIm__IwA5SmO8DUFEAP_JPjS', null, '1488715942332');
INSERT INTO `session` VALUES ('311', 'CPdF8IWQfvHCLhxq9np3XESNtn9dUKx5', null, '1488715981943');
INSERT INTO `session` VALUES ('312', '2AE0NqHxeMbPikkuGF3VSuYjFORUOzSx', null, '1488716008012');
INSERT INTO `session` VALUES ('313', 'R5XyULX7CYmW_r5TLCIT3HcHBTaDTf_5', null, '1488716017353');
INSERT INTO `session` VALUES ('314', 'ApR_q7qEPmbn5_E896JeQGq3vDeh7i7Y', null, '1488716058673');
INSERT INTO `session` VALUES ('315', '10YhLc_UaP_F7UdUar3eWuYNQpszgDeq', null, '1488716067626');
INSERT INTO `session` VALUES ('316', 'i_NWtK4x3l2xZy8y7CfSxv6geCWc_sgb', null, '1488716076623');
INSERT INTO `session` VALUES ('317', 'yQgTirhMxYB_ttj9HYVllZocrvpiRnYS', null, '1488716084720');
INSERT INTO `session` VALUES ('318', 'Co5mvQ2xMbpwsVSmadMLScZT6qwHcfVN', null, '1488716139711');
INSERT INTO `session` VALUES ('319', 'bwxQtNWlus2CRu9dDA8VhsLwcW_6CxB4', null, '1488716190475');
INSERT INTO `session` VALUES ('320', 'ebH9YWjSdOLYAREaWm8RlrCd10Y56DKt', null, '1488716224299');
INSERT INTO `session` VALUES ('321', 'wejHQEbVrzX7l9NuCH4pdiDpUdtEfiE2', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":5000,\"level\":2,\"role\":3,\"mark\":null,\"lastLogin\":1495385061496,\"createAt\":1468489586719,\"updateAt\":1488628288042,\"totalVolume\":3,\"totalTurnover\":2650}}', '1495474609538');
INSERT INTO `session` VALUES ('322', 'YAVyvqMpSXdjnQBU8_GoseydY1E7KAuX', null, '1495470721842');
INSERT INTO `session` VALUES ('323', 'TG476mZAdjpw7j4e25ox_7JxyOCQARQS', null, '1495470722254');
INSERT INTO `session` VALUES ('324', '5rO2Dx_j15vkyJPqeJsvfo0ccUp4818M', null, '1495470722550');
INSERT INTO `session` VALUES ('325', 'coGGQCq_VzM5zJ_M8o6Zjg3HfL5Skjph', null, '1495470723763');
INSERT INTO `session` VALUES ('326', 'KjtarOB6PXlYGA_uotzZOBY0v41D_9XN', null, '1495474360073');
INSERT INTO `session` VALUES ('327', 'UEdjRIRsNeKBAR6kOoPYZUL2QG_gIeQU', null, '1495474361549');
INSERT INTO `session` VALUES ('328', 'jS3EHQWWP_6gq4PY3DaBODMWyaAq3yb8', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":5000,\"level\":2,\"role\":3,\"mark\":null,\"lastLogin\":1495451308474,\"income\":212,\"age\":121,\"name\":\"121\",\"idNum\":\"121\",\"phoneNum\":\"121\",\"checked\":2,\"createAt\":1468489586719,\"updateAt\":1495451308474,\"password\":\"admin\",\"totalVolume\":3,\"totalTurnover\":2650}}', '1495537715376');
INSERT INTO `session` VALUES ('329', '3AIEoYckLbDhizqVGdmrjYJSBuxnB56n', null, '1495532402390');
INSERT INTO `session` VALUES ('330', 'NenN8w2zNsquCLzGScv1ZbbNUSmdGwA1', null, '1495532404523');
INSERT INTO `session` VALUES ('331', 'mi3_6S9imODyiMP9K9BxDadnP90ovZg6', null, '1495537451828');
INSERT INTO `session` VALUES ('332', '1WXXW9WP20uat2Qhib2euYkArJy_2_iQ', null, '1495537452349');
INSERT INTO `session` VALUES ('333', 'y6zsdw0AkUuUEwMIsNtXr3BtTUUzTkuj', null, '1495537463639');
INSERT INTO `session` VALUES ('334', 'rLkqH4Lm1ocPYGU4AwOJ9EiWM2x3uNRX', null, '1495537464143');
INSERT INTO `session` VALUES ('335', 'SVBwVmimgNINVVbIPw_xKK5F_qJX62La', null, '1495537465056');
INSERT INTO `session` VALUES ('336', 'A1HCLt4Q2Dgrsu6AnWs_8G3_kS7_ymYs', null, '1495537478722');
INSERT INTO `session` VALUES ('337', 'GyWEhP5HqwBHjWMebroSDHcXClhAUmir', null, '1495537573121');
INSERT INTO `session` VALUES ('338', 'YFPJLDmL_3xatT0iEp6ujtGRf7KAw8uP', '{}', '1497810000224');
INSERT INTO `session` VALUES ('339', '0Gb_4_2qpYLc8jB5yIwY5a4xfgrDEzZT', null, '1497809028180');
INSERT INTO `session` VALUES ('340', 'Owd_WaVY6kisn2sd16Y7_pkjopxTksW2', null, '1497809046726');
INSERT INTO `session` VALUES ('341', 'MDub8cwyBHFyuQbSMwKUj3jg54g9OHgG', null, '1497809047188');
INSERT INTO `session` VALUES ('342', 'EpNDvIif6ZXIHzKLxfD1d5QmMdT2W53K', '{\"user\":{\"id\":2,\"username\":\"admin\",\"email\":\"1573328344@qq.com\",\"emailValidate\":1,\"desc\":\"I\'m zhangle\",\"avatar\":1,\"creditLines\":5000,\"level\":2,\"role\":3,\"mark\":null,\"lastLogin\":1501903547459,\"income\":212,\"age\":121,\"name\":\"121\",\"idNum\":\"121\",\"phoneNum\":\"121\",\"checked\":2,\"createAt\":1468489586719,\"updateAt\":1501903547462,\"password\":\"admin\",\"totalVolume\":4,\"totalTurnover\":2660}}', '1501989949396');
INSERT INTO `session` VALUES ('343', 'nTcR3n1lvlRy32ySGzCyK1Hw8B6PVA4p', null, '1501989941455');
INSERT INTO `session` VALUES ('344', 'r1T_auj3eZnfaYSCRY0E_UgbXr_4Y0_E', null, '1501989941984');
INSERT INTO `session` VALUES ('345', '9jTzY8XaO_NouGQUQXtvoI2yrbklK4AZ', null, '1501989942694');

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
  `avatar` int(255) DEFAULT '1',
  `creditLines` decimal(10,0) NOT NULL DEFAULT '0',
  `level` int(11) NOT NULL DEFAULT '0',
  `role` int(11) NOT NULL,
  `mark` text,
  `lastLogin` bigint(11) DEFAULT NULL,
  `income` int(11) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `name` text,
  `idNum` text,
  `phoneNum` text,
  `checked` int(11) NOT NULL DEFAULT '0',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `role` (`role`),
  KEY `user_ibfk_2` (`avatar`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`avatar`) REFERENCES `image` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'zl810881283', 'zl7112585', '0573328344@qq.com', '1', 'I\'m zhangle', '1', '5000', '1', '2', null, '1472891876059', null, null, null, null, null, '0', '1468489586718', '1472891876071');
INSERT INTO `user` VALUES ('2', 'admin', 'admin', '1573328344@qq.com', '1', 'I\'m zhangle', '1', '5000', '2', '3', null, '1501903547459', '212', '121', '121', '121', '121', '2', '1468489586719', '1501903547462');
INSERT INTO `user` VALUES ('3', 'zhangle2', 'zlpwd2', '2573328344@qq.com', '1', 'I\'m zhangle', '1', '2', '3', '1', null, '1468489586704', null, null, null, null, null, '0', '1468489586719', '1468489586719');
INSERT INTO `user` VALUES ('4', 'zhangle3', 'zlpwd3', '3573328344@qq.com', '1', 'I\'m zhangle', '1', '3', '4', '1', null, '1468489586704', null, null, null, null, null, '0', '1468489586719', '1468489586719');
INSERT INTO `user` VALUES ('5', 'zhangle4', 'zlpwd4', '4573328344@qq.com', '1', 'I\'m zhangle', '1', '4', '5', '1', null, '1468489586704', null, null, null, null, null, '0', '1468489586719', '1468489586719');
INSERT INTO `user` VALUES ('8', 'zhangle7', 'zlpwd7', '7573328344@qq.com', '1', 'I\'m zhangle', '1', '7', '8', '1', null, '1468489586704', null, null, null, null, null, '0', '1468489586720', '1468489586720');
INSERT INTO `user` VALUES ('9', 'zhangle8', 'zlpwd8', '8573328344@qq.com', '1', 'I\'m zhangle', '1', '8', '9', '1', null, '1468489586704', null, null, null, null, null, '0', '1468489586720', '1468489586720');
INSERT INTO `user` VALUES ('10', 'zhangle9', 'zlpwd9', '9573328344@qq.com', '1', 'I\'m zhangle', '1', '9', '10', '1', null, '1468489586704', null, null, null, null, null, '0', '1468489586720', '1468489586720');
INSERT INTO `user` VALUES ('17', 'test11', 'test11', '81088128321@qq.com', '0', '他很懒，什么都没留下', '1', '1000', '1', '2', '111adsf', '1476503053189', null, null, null, null, null, '0', '1476503053206', '1476806126169');
INSERT INTO `user` VALUES ('19', 'test2', 'test2', 'asdfa@qq.com', '0', '他很懒，什么都没留下', '1', '1000', '1', '2', null, '1495451289889', null, null, null, null, null, '0', '1495451157918', '1495451289889');
DROP TRIGGER IF EXISTS `updateCurrentPrice`;
DELIMITER ;;
CREATE TRIGGER `updateCurrentPrice` AFTER INSERT ON `bid` FOR EACH ROW BEGIN
set @maxPrice = (SELECT MAX(`value`) FROM bid WHERE(`item`= new.item));
UPDATE item set currentPrice=@maxPrice  WHERE(`id`= new.item);
END
;;
DELIMITER ;
