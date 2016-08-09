/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50710
 Source Host           : localhost
 Source Database       : auction

 Target Server Type    : MySQL
 Target Server Version : 50710
 File Encoding         : utf-8

 Date: 08/09/2016 10:10:09 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `address`
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(255) NOT NULL,
  `isDefault` tinyint(1) NOT NULL,
  `province` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `area` varchar(255) NOT NULL,
  `detail` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `address_ibfk_1` (`user`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `address`
-- ----------------------------
BEGIN;
INSERT INTO `address` VALUES ('1', '1', '1', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第1条地址', '1470676233349', '1470676233349'), ('2', '1', '0', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第2条地址', '1470676233349', '1470676233349'), ('3', '2', '1', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第3条地址', '1470676233349', '1470676233349'), ('4', '2', '0', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第4条地址', '1470676233349', '1470676233349'), ('5', '3', '1', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第5条地址', '1470676233349', '1470676233349'), ('6', '3', '0', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第6条地址', '1470676233349', '1470676233349'), ('7', '4', '1', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第7条地址', '1470676233349', '1470676233349'), ('8', '4', '0', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第8条地址', '1470676233349', '1470676233349'), ('9', '5', '1', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第9条地址', '1470676233349', '1470676233349'), ('10', '5', '0', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第10条地址', '1470676233349', '1470676233349'), ('11', '6', '1', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第11条地址', '1470676233349', '1470676233349'), ('12', '6', '0', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第12条地址', '1470676233349', '1470676233349'), ('13', '7', '1', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第13条地址', '1470676233349', '1470676233349'), ('14', '7', '0', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第14条地址', '1470676233349', '1470676233349'), ('15', '8', '1', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第15条地址', '1470676233349', '1470676233349'), ('16', '8', '0', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第16条地址', '1470676233349', '1470676233349'), ('17', '9', '1', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第17条地址', '1470676233349', '1470676233349'), ('18', '9', '0', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第18条地址', '1470676233349', '1470676233349'), ('19', '10', '1', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第19条地址', '1470676233349', '1470676233349'), ('20', '10', '0', '重庆市', '重庆市', '沙坪坝区', '沙正街1号', '这是第20条地址', '1470676233349', '1470676233349');
COMMIT;

-- ----------------------------
--  Table structure for `article`
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
  CONSTRAINT `article_ibfk_3` FOREIGN KEY (`image`) REFERENCES `image` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `article`
-- ----------------------------
BEGIN;
INSERT INTO `article` VALUES ('1', '这是第1篇文章的题目', '2', '这是第1篇文章的内容，写的真精彩', '1', '2', '1470676233346', '1470676233346'), ('2', '这是第2篇文章的题目', '3', '这是第2篇文章的内容，写的真精彩', '1', '3', '1470676233346', '1470676233346'), ('3', '这是第3篇文章的题目', '4', '这是第3篇文章的内容，写的真精彩', '1', '4', '1470676233346', '1470676233346'), ('4', '这是第4篇文章的题目', '5', '这是第4篇文章的内容，写的真精彩', '1', '1', '1470676233346', '1470676233346'), ('5', '这是第5篇文章的题目', '6', '这是第5篇文章的内容，写的真精彩', '1', '2', '1470676233346', '1470676233346'), ('6', '这是第6篇文章的题目', '7', '这是第6篇文章的内容，写的真精彩', '2', '3', '1470676233346', '1470676233346'), ('7', '这是第7篇文章的题目', '8', '这是第7篇文章的内容，写的真精彩', '2', '4', '1470676233346', '1470676233346'), ('8', '这是第8篇文章的题目', '9', '这是第8篇文章的内容，写的真精彩', '2', '1', '1470676233346', '1470676233346'), ('9', '这是第9篇文章的题目', '10', '这是第9篇文章的内容，写的真精彩', '2', '2', '1470676233346', '1470676233346'), ('10', '这是第10篇文章的题目', '1', '这是第10篇文章的内容，写的真精彩', '2', '3', '1470676233346', '1470676233346'), ('11', '这是第11篇文章的题目', '2', '这是第11篇文章的内容，写的真精彩', '3', '4', '1470676233346', '1470676233346'), ('12', '这是第12篇文章的题目', '3', '这是第12篇文章的内容，写的真精彩', '3', '1', '1470676233346', '1470676233346'), ('13', '这是第13篇文章的题目', '4', '这是第13篇文章的内容，写的真精彩', '3', '2', '1470676233346', '1470676233346'), ('14', '这是第14篇文章的题目', '5', '这是第14篇文章的内容，写的真精彩', '3', '3', '1470676233346', '1470676233346'), ('15', '这是第15篇文章的题目', '6', '这是第15篇文章的内容，写的真精彩', '3', '4', '1470676233346', '1470676233346'), ('16', '这是第16篇文章的题目', '7', '这是第16篇文章的内容，写的真精彩', '4', '1', '1470676233346', '1470676233346'), ('17', '这是第17篇文章的题目', '8', '这是第17篇文章的内容，写的真精彩', '4', '2', '1470676233347', '1470676233347'), ('18', '这是第18篇文章的题目', '9', '这是第18篇文章的内容，写的真精彩', '4', '3', '1470676233347', '1470676233347'), ('19', '这是第19篇文章的题目', '10', '这是第19篇文章的内容，写的真精彩', '4', '4', '1470676233347', '1470676233347'), ('20', '这是第20篇文章的题目', '1', '这是第20篇文章的内容，写的真精彩', '4', '1', '1470676233347', '1470676233347'), ('21', '这是第21篇文章的题目', '2', '这是第21篇文章的内容，写的真精彩', '5', '2', '1470676233347', '1470676233347'), ('22', '这是第22篇文章的题目', '3', '这是第22篇文章的内容，写的真精彩', '5', '3', '1470676233347', '1470676233347'), ('23', '这是第23篇文章的题目', '4', '这是第23篇文章的内容，写的真精彩', '5', '4', '1470676233347', '1470676233347'), ('24', '这是第24篇文章的题目', '5', '这是第24篇文章的内容，写的真精彩', '5', '1', '1470676233347', '1470676233347'), ('25', '这是第25篇文章的题目', '6', '这是第25篇文章的内容，写的真精彩', '5', '2', '1470676233347', '1470676233347'), ('26', '这是第26篇文章的题目', '7', '这是第26篇文章的内容，写的真精彩', '6', '3', '1470676233347', '1470676233347'), ('27', '这是第27篇文章的题目', '8', '这是第27篇文章的内容，写的真精彩', '6', '4', '1470676233347', '1470676233347'), ('28', '这是第28篇文章的题目', '9', '这是第28篇文章的内容，写的真精彩', '6', '1', '1470676233347', '1470676233347');
COMMIT;

-- ----------------------------
--  Table structure for `article_type`
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
--  Records of `article_type`
-- ----------------------------
BEGIN;
INSERT INTO `article_type` VALUES ('1', '系统公告', '系统发布的公告', '1470676233303', '1470676233303'), ('2', '新闻动态', '系统发布的公告', '1470676233303', '1470676233303'), ('3', '行业动态', '系统发布的公告', '1470676233303', '1470676233303'), ('4', '知识荟萃', '系统发布的公告', '1470676233303', '1470676233303');
COMMIT;

-- ----------------------------
--  Table structure for `authority`
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
--  Records of `authority`
-- ----------------------------
BEGIN;
INSERT INTO `authority` VALUES ('1', '浏览拍品', '描述浏览拍品', '允许浏览拍品', '1470676233324', '1470676233324'), ('2', '参与竞标', '描述参与竞标', '允许参与竞标', '1470676233324', '1470676233324'), ('3', '送货上门', '描述送货上门', '允许送货上门', '1470676233324', '1470676233324');
COMMIT;

-- ----------------------------
--  Table structure for `bid`
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
--  Records of `bid`
-- ----------------------------
BEGIN;
INSERT INTO `bid` VALUES ('1', '2', '2', '100', '1', '1470676233471', '1470676233471'), ('2', '3', '3', '150', '2', '1470676233471', '1470676233471'), ('3', '4', '4', '200', '3', '1470676233471', '1470676233471'), ('4', '5', '5', '250', '0', '1470676233471', '1470676233471'), ('5', '6', '6', '300', '1', '1470676233471', '1470676233471'), ('6', '7', '7', '350', '2', '1470676233471', '1470676233471'), ('7', '8', '8', '400', '3', '1470676233471', '1470676233471'), ('8', '9', '9', '450', '0', '1470676233471', '1470676233471'), ('9', '10', '10', '500', '1', '1470676233471', '1470676233471'), ('10', '1', '1', '550', '2', '1470676233471', '1470676233471'), ('11', '2', '2', '600', '3', '1470676233471', '1470676233471'), ('12', '3', '3', '650', '0', '1470676233471', '1470676233471'), ('13', '4', '4', '700', '1', '1470676233471', '1470676233471'), ('14', '5', '5', '750', '2', '1470676233471', '1470676233471'), ('15', '6', '6', '800', '3', '1470676233471', '1470676233471'), ('16', '7', '7', '850', '0', '1470676233471', '1470676233471'), ('17', '8', '8', '900', '1', '1470676233471', '1470676233471'), ('18', '9', '9', '950', '2', '1470676233471', '1470676233471'), ('19', '10', '10', '1000', '3', '1470676233471', '1470676233471'), ('20', '1', '1', '1050', '0', '1470676233471', '1470676233471'), ('21', '2', '2', '1100', '1', '1470676233471', '1470676233471'), ('22', '3', '3', '1150', '2', '1470676233471', '1470676233471'), ('23', '4', '4', '1200', '3', '1470676233471', '1470676233471'), ('24', '5', '5', '1250', '0', '1470676233471', '1470676233471'), ('25', '6', '6', '1300', '1', '1470676233471', '1470676233471'), ('26', '7', '7', '1350', '2', '1470676233471', '1470676233471'), ('27', '8', '8', '1400', '3', '1470676233471', '1470676233471'), ('28', '9', '9', '1450', '0', '1470676233471', '1470676233471'), ('29', '10', '10', '1500', '1', '1470676233471', '1470676233471'), ('30', '1', '1', '1550', '2', '1470676233471', '1470676233471');
COMMIT;

-- ----------------------------
--  Table structure for `config`
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
--  Records of `config`
-- ----------------------------
BEGIN;
INSERT INTO `config` VALUES ('1', '{\"defaultRoles\":[{\"name\":\"anonymous\",\"desc\":\"user which has not signed up yet\",\"extend\":[],\"authorities\":[\"index\",\"page\",\"home\",\"restAPI\"]},{\"name\":\"registered\",\"extend\":[\"anonymous\"],\"desc\":\"user which has already signed up and not assigned to other role\",\"authorities\":[\"admin\"]}],\"defaultAuthorities\":[{\"name\":\"index\",\"desc\":\"can visit index\",\"paths\":[\"/\"]},{\"name\":\"page\",\"desc\":\"can visit static page\",\"paths\":[\"/^page\\\\//\"]},{\"name\":\"home\",\"desc\":\"can use home module\",\"paths\":[\"/^home\\\\//\"]},{\"name\":\"restAPI\",\"desc\":\"can use rest API\",\"paths\":[\"/^rest\\\\//\"]},{\"name\":\"admin\",\"desc\":\"can admin the site\",\"paths\":[\"/^admin\\\\//\"]}],\"pageCount\":{\"default\":10,\"article\":5,\"item\":20,\"bid\":10,\"order\":10},\"auction\":{\"bid_increasment\":[[0,50],[1000,100],[5000,200],[10000,500],[20000,1000]],\"ahead_time\":{\"time\":1440},\"fix_time\":{\"need_delay_time\":5,\"auto_delay_time\":5}}}', '1468473580040', '1468473580040');
COMMIT;

-- ----------------------------
--  Table structure for `follow`
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
--  Records of `follow`
-- ----------------------------
BEGIN;
INSERT INTO `follow` VALUES ('1', '1', '1', '1470676233440', '1470676233440'), ('2', '2', '2', '1470676233440', '1470676233440'), ('3', '3', '3', '1470676233440', '1470676233440'), ('4', '4', '4', '1470676233440', '1470676233440'), ('5', '5', '5', '1470676233440', '1470676233440'), ('6', '6', '6', '1470676233440', '1470676233440'), ('7', '7', '7', '1470676233440', '1470676233440'), ('8', '8', '8', '1470676233440', '1470676233440'), ('9', '9', '9', '1470676233440', '1470676233440'), ('10', '10', '10', '1470676233441', '1470676233441'), ('11', '1', '11', '1470676233441', '1470676233441'), ('12', '2', '12', '1470676233441', '1470676233441'), ('13', '3', '13', '1470676233441', '1470676233441'), ('14', '4', '14', '1470676233441', '1470676233441'), ('15', '5', '15', '1470676233441', '1470676233441'), ('16', '6', '16', '1470676233441', '1470676233441'), ('17', '7', '17', '1470676233441', '1470676233441'), ('18', '8', '18', '1470676233441', '1470676233441'), ('19', '9', '19', '1470676233441', '1470676233441'), ('20', '10', '20', '1470676233441', '1470676233441');
COMMIT;

-- ----------------------------
--  Table structure for `image`
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `image`
-- ----------------------------
BEGIN;
INSERT INTO `image` VALUES ('1', 'image1', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-1.JPG', '1470676233287', '1470676233287'), ('2', 'image2', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-2.JPG', '1470676233288', '1470676233288'), ('3', 'image3', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-3.JPG', '1470676233288', '1470676233288'), ('4', 'image4', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-4.JPG', '1470676233288', '1470676233288'), ('5', 'image5', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-5.JPG', '1470676233288', '1470676233288'), ('6', 'image6', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-6.JPG', '1470676233288', '1470676233288'), ('7', 'image7', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-7.JPG', '1470676233288', '1470676233288'), ('8', 'image8', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-8.JPG', '1470676233288', '1470676233288'), ('9', 'image9', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-9.JPG', '1470676233288', '1470676233288'), ('10', 'image10', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-10.JPG', '1470676233288', '1470676233288'), ('11', 'image11', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-11.JPG', '1470676233288', '1470676233288'), ('12', 'image12', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-12.JPG', '1470676233288', '1470676233288'), ('13', 'image13', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-13.JPG', '1470676233288', '1470676233288'), ('14', 'image14', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-14.JPG', '1470676233288', '1470676233288'), ('15', 'image15', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-15.JPG', '1470676233288', '1470676233288'), ('16', 'image16', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-16.JPG', '1470676233288', '1470676233288'), ('17', 'image17', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-17.JPG', '1470676233288', '1470676233288'), ('18', 'image18', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-18.JPG', '1470676233288', '1470676233288'), ('19', 'image19', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-19.JPG', '1470676233288', '1470676233288'), ('20', 'image20', 'file://UPLOAD_PATH/path/79f13390-49a9-11e6-8d82-bbdc9cd18b98-20.JPG', '1470676233288', '1470676233288');
COMMIT;

-- ----------------------------
--  Table structure for `item`
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
  `currentBidder` int(11) NOT NULL,
  `group` int(11) DEFAULT NULL,
  `startPrice` decimal(10,0) NOT NULL,
  `stage` decimal(10,0) NOT NULL,
  `currentPrice` decimal(10,0) NOT NULL,
  `auctionType` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0：时间领先；1：固定时间;',
  `auctionBeginTime` bigint(20) NOT NULL,
  `auctionEndTime` bigint(20) NOT NULL,
  `followCount` int(11) NOT NULL DEFAULT '0',
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  `type` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `publisher` (`publisher`),
  KEY `group` (`group`),
  KEY `item_ibfk_3` (`type`),
  KEY `item_ibfk_4` (`currentBidder`),
  CONSTRAINT `item_ibfk_1` FOREIGN KEY (`publisher`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `item_ibfk_2` FOREIGN KEY (`group`) REFERENCES `item_group` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `item_ibfk_3` FOREIGN KEY (`type`) REFERENCES `item_type` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `item_ibfk_4` FOREIGN KEY (`currentBidder`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `item`
-- ----------------------------
BEGIN;
INSERT INTO `item` VALUES ('1', 'item1', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[1]', '1', '2', '2', '2', '50', '50', '1550', '1', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '2'), ('2', 'item2', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[2]', '2', '3', '3', '3', '50', '50', '1100', '0', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '3'), ('3', 'item3', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[3]', '3', '4', '4', '4', '50', '50', '1150', '1', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '4'), ('4', 'item4', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[4]', '0', '5', '5', '5', '50', '50', '1200', '0', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '1'), ('5', 'item5', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[5]', '1', '6', '6', '6', '50', '50', '1250', '1', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '2'), ('6', 'item6', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[6]', '2', '7', '7', '7', '50', '50', '1300', '0', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '3'), ('7', 'item7', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[7]', '3', '8', '8', '8', '50', '50', '1350', '1', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '4'), ('8', 'item8', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[8]', '0', '9', '9', '1', '50', '50', '1400', '0', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '1'), ('9', 'item9', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[9]', '1', '10', '10', '2', '50', '50', '1450', '1', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '2'), ('10', 'item10', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[10]', '2', '1', '1', '3', '50', '50', '1500', '0', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '3'), ('11', 'item11', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[11]', '3', '2', '2', '4', '50', '50', '550', '1', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '4'), ('12', 'item12', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[12]', '0', '3', '3', '5', '50', '50', '600', '0', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '1'), ('13', 'item13', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[13]', '1', '4', '4', '6', '50', '50', '650', '1', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '2'), ('14', 'item14', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[14]', '2', '5', '5', '7', '50', '50', '700', '0', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '3'), ('15', 'item15', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[15]', '3', '6', '6', '8', '50', '50', '750', '1', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '4'), ('16', 'item16', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[16]', '0', '7', '7', '1', '50', '50', '800', '0', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '1'), ('17', 'item17', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[17]', '1', '8', '8', '2', '50', '50', '850', '1', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '2'), ('18', 'item18', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[18]', '2', '9', '9', '3', '50', '50', '900', '0', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '3'), ('19', 'item19', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[19]', '3', '10', '10', '4', '50', '50', '950', '1', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '4'), ('20', 'item20', 'Tue Aug 09 2016 01:10:33 GMT+0800 (CST)', '河北省邯郸市', '赵国国宝', '[20]', '0', '1', '1', '5', '50', '50', '1000', '0', '1470676233425', '1470676233425', '0', '1470676233428', '1470676233428', '1');
COMMIT;

-- ----------------------------
--  Table structure for `item_group`
-- ----------------------------
DROP TABLE IF EXISTS `item_group`;
CREATE TABLE `item_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `no` int(11) NOT NULL DEFAULT '0' COMMENT '第几个专场',
  `isOpen` tinyint(1) NOT NULL COMMENT '是否在首页显示',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `item_group`
-- ----------------------------
BEGIN;
INSERT INTO `item_group` VALUES ('1', '专场0', '[0]', '这是第i个专场', '0', '0', '1470676233416', '1470676233416'), ('2', '专场1', '[1]', '这是第i个专场', '0', '1', '1470676233416', '1470676233416'), ('3', '专场2', '[2]', '这是第i个专场', '0', '0', '1470676233416', '1470676233416'), ('4', '专场3', '[3]', '这是第i个专场', '0', '1', '1470676233416', '1470676233416'), ('5', '专场4', '[4]', '这是第i个专场', '0', '0', '1470676233416', '1470676233416'), ('6', '专场5', '[5]', '这是第i个专场', '0', '1', '1470676233416', '1470676233416'), ('7', '专场6', '[6]', '这是第i个专场', '0', '0', '1470676233416', '1470676233416'), ('8', '专场7', '[7]', '这是第i个专场', '0', '1', '1470676233416', '1470676233416');
COMMIT;

-- ----------------------------
--  Table structure for `item_type`
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
--  Records of `item_type`
-- ----------------------------
BEGIN;
INSERT INTO `item_type` VALUES ('1', '古玩类型0', '这是古玩类型0', '1470676233397', '1470676233397'), ('2', '古玩类型1', '这是古玩类型1', '1470676233397', '1470676233397'), ('3', '古玩类型2', '这是古玩类型2', '1470676233397', '1470676233397'), ('4', '古玩类型3', '这是古玩类型3', '1470676233397', '1470676233397'), ('5', '古玩类型4', '这是古玩类型4', '1470676233397', '1470676233397');
COMMIT;

-- ----------------------------
--  Table structure for `message`
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `message`
-- ----------------------------
BEGIN;
INSERT INTO `message` VALUES ('1', '1', '2', '这是user1发给user2的消息', 'Hello, user1, I\'m user 2', '1', '1470676233377', '1470676233377'), ('2', '2', '3', '这是user2发给user3的消息', 'Hello, user2, I\'m user 3', '0', '1470676233377', '1470676233377'), ('3', '3', '4', '这是user3发给user4的消息', 'Hello, user3, I\'m user 4', '1', '1470676233377', '1470676233377'), ('4', '4', '5', '这是user4发给user5的消息', 'Hello, user4, I\'m user 5', '0', '1470676233377', '1470676233377'), ('5', '5', '6', '这是user5发给user6的消息', 'Hello, user5, I\'m user 6', '1', '1470676233377', '1470676233377'), ('6', '6', '7', '这是user6发给user7的消息', 'Hello, user6, I\'m user 7', '0', '1470676233377', '1470676233377'), ('7', '7', '8', '这是user7发给user8的消息', 'Hello, user7, I\'m user 8', '1', '1470676233377', '1470676233377'), ('8', '8', '9', '这是user8发给user9的消息', 'Hello, user8, I\'m user 9', '0', '1470676233377', '1470676233377'), ('9', '9', '10', '这是user9发给user10的消息', 'Hello, user9, I\'m user 10', '1', '1470676233377', '1470676233377');
COMMIT;

-- ----------------------------
--  Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(10) DEFAULT NULL,
  `item` int(11) DEFAULT NULL,
  `address` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '[''待确认'', ''待付款'',''待核实'', "待发货", "已发货", "已完成",''已取消'']',
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `order_ibfk_1` (`user`),
  KEY `order_ibfk_2` (`item`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`item`) REFERENCES `item` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `order`
-- ----------------------------
BEGIN;
INSERT INTO `order` VALUES ('1', '1', '1', '1', '0', '1470676233446', '1470676233446'), ('2', '2', '2', '2', '1', '1470676233446', '1470676233446'), ('3', '3', '3', '3', '2', '1470676233446', '1470676233446'), ('4', '4', '4', '4', '3', '1470676233446', '1470676233446'), ('5', '5', '5', '5', '4', '1470676233446', '1470676233446'), ('6', '6', '6', '6', '0', '1470676233446', '1470676233446'), ('7', '7', '7', '7', '1', '1470676233446', '1470676233446'), ('8', '8', '8', '8', '2', '1470676233446', '1470676233446'), ('9', '9', '9', '9', '3', '1470676233446', '1470676233446'), ('10', '10', '10', '10', '4', '1470676233446', '1470676233446');
COMMIT;

-- ----------------------------
--  Table structure for `role`
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
--  Records of `role`
-- ----------------------------
BEGIN;
INSERT INTO `role` VALUES ('1', 'anonymous', 'user which has not signed up yet', '[]', '1468256270300', '1468256270300'), ('2', 'registered', 'user which has already signed up and not assigned to other role', '[\"anonymous\"]', '1468256270542', '1468256270542');
COMMIT;

-- ----------------------------
--  Table structure for `role_authority`
-- ----------------------------
DROP TABLE IF EXISTS `role_authority`;
CREATE TABLE `role_authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` int(11) DEFAULT NULL,
  `authority` int(11) DEFAULT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `role` (`role`),
  KEY `authority` (`authority`),
  CONSTRAINT `role_authority_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `role_authority_ibfk_2` FOREIGN KEY (`authority`) REFERENCES `authority` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `role_authority`
-- ----------------------------
BEGIN;
INSERT INTO `role_authority` VALUES ('1', '1', '1', '1470676233332', '1470676233332'), ('2', '2', '2', '1470676233332', '1470676233332'), ('3', '1', '3', '1470676233332', '1470676233332'), ('4', '2', '1', '1470676233332', '1470676233332'), ('5', '1', '2', '1470676233332', '1470676233332'), ('6', '2', '3', '1470676233332', '1470676233332'), ('7', '1', '1', '1470676233332', '1470676233332'), ('8', '2', '2', '1470676233332', '1470676233332'), ('9', '1', '3', '1470676233332', '1470676233332'), ('10', '2', '1', '1470676233332', '1470676233332');
COMMIT;

-- ----------------------------
--  Table structure for `service`
-- ----------------------------
DROP TABLE IF EXISTS `service`;
CREATE TABLE `service` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createAt` bigint(255) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`,`title`),
  KEY `service_ibfk_1` (`image`),
  CONSTRAINT `service_ibfk_1` FOREIGN KEY (`image`) REFERENCES `image` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `service`
-- ----------------------------
BEGIN;
INSERT INTO `service` VALUES ('1', '1', '如实描述', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1470676233294', '1470676233294'), ('2', '2', '快速上拍', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1470676233294', '1470676233294'), ('3', '3', '24小时发货', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1470676233294', '1470676233294'), ('4', '4', '诚信服务', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', '1470676233294', '1470676233294');
COMMIT;

-- ----------------------------
--  Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `emailValidate` tinyint(1) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `avatar` int(255) DEFAULT '1',
  `creditLines` decimal(10,0) NOT NULL DEFAULT '0',
  `level` int(11) NOT NULL DEFAULT '0',
  `role` int(11) DEFAULT NULL,
  `lastLogin` bigint(11) DEFAULT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `role` (`role`),
  KEY `user_ibfk_2` (`avatar`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`avatar`) REFERENCES `image` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `user`
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES ('1', 'zhangle0', 'zlpwd0', '0573328344@qq.com', '1', 'I\'m zhangle', '1', '0', '1', '1', '1470676233339', '1470676233341', '1470676233341'), ('2', 'zhangle1', 'zlpwd1', '1573328344@qq.com', '1', 'I\'m zhangle', '1', '1', '2', '1', '1470676233340', '1470676233341', '1470676233341'), ('3', 'zhangle2', 'zlpwd2', '2573328344@qq.com', '1', 'I\'m zhangle', '1', '2', '3', '1', '1470676233340', '1470676233341', '1470676233341'), ('4', 'zhangle3', 'zlpwd3', '3573328344@qq.com', '1', 'I\'m zhangle', '1', '3', '4', '1', '1470676233340', '1470676233341', '1470676233341'), ('5', 'zhangle4', 'zlpwd4', '4573328344@qq.com', '1', 'I\'m zhangle', '1', '4', '5', '1', '1470676233340', '1470676233341', '1470676233341'), ('6', 'zhangle5', 'zlpwd5', '5573328344@qq.com', '1', 'I\'m zhangle', '1', '5', '6', '1', '1470676233340', '1470676233341', '1470676233341'), ('7', 'zhangle6', 'zlpwd6', '6573328344@qq.com', '1', 'I\'m zhangle', '1', '6', '7', '1', '1470676233340', '1470676233341', '1470676233341'), ('8', 'zhangle7', 'zlpwd7', '7573328344@qq.com', '1', 'I\'m zhangle', '1', '7', '8', '1', '1470676233340', '1470676233341', '1470676233341'), ('9', 'zhangle8', 'zlpwd8', '8573328344@qq.com', '1', 'I\'m zhangle', '1', '8', '9', '1', '1470676233340', '1470676233341', '1470676233341'), ('10', 'zhangle9', 'zlpwd9', '9573328344@qq.com', '1', 'I\'m zhangle', '1', '9', '10', '1', '1470676233340', '1470676233341', '1470676233341');
COMMIT;

-- ----------------------------
--  Triggers structure for table bid
-- ----------------------------
DROP TRIGGER IF EXISTS `updateCurrentPrice`;
delimiter ;;
CREATE TRIGGER `updateCurrentPrice` AFTER INSERT ON `bid` FOR EACH ROW BEGIN
set @maxPrice = (SELECT MAX(`value`) FROM bid WHERE(`item`= new.item));
UPDATE item set currentPrice=@maxPrice  WHERE(`id`= new.item);
END
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
