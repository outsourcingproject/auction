-- phpMyAdmin SQL Dump
-- version 4.0.10.12
-- http://www.phpmyadmin.net
--
-- 主机: 127.11.87.2:3306
-- 生成日期: 2017-05-22 17:06:45
-- 服务器版本: 5.5.52
-- PHP 版本: 5.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `auctionprod`
--

-- --------------------------------------------------------

--
-- 表的结构 `address`
--

CREATE TABLE IF NOT EXISTS `address` (
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
  KEY `address_ibfk_1` (`user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=26 ;

--
-- 转存表中的数据 `address`
--

INSERT INTO `address` (`id`, `user`, `isDefault`, `province`, `city`, `district`, `address`, `name`, `createAt`, `updateAt`, `phoneNum`) VALUES
(21, 1, 1, '辽宁', '大连', '沙河口区', 'chongqing university', 'aa', 1470704524931, 1470721589195, '18530268149'),
(22, 1, 0, '山西', '太原', '小店区', 'adsfdsaf', 'sdafdasf', 1470707543437, 1470721545255, '18530268149'),
(23, 1, 0, '重庆', '重庆', '渝中区', 'chongqing university', 'dsafd', 1470707622585, 1470721580142, '18530268149'),
(24, 18, 1, '北京', '北京', '东城区', 'aaa', 'aaa', 1476967433899, 1476967454339, '18530268149'),
(25, 19, 0, '北京', '北京', '东城区', '测试1街1号', '谁啊谁', 1488638766549, 1488638766549, '13855550096');

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text,
  `author` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `author` (`author`),
  KEY `type` (`type`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `title`, `content`, `author`, `type`, `createAt`, `updateAt`) VALUES
(1, '系统公告2017.03.04', '<p>系统公告2017.03.04</p>', 18, 1, 1488638353666, 1488638353666),
(2, '新闻动态2017.03.04', '<p>新闻动态2017.03.04</p>', 18, 2, 1488638365337, 1488638365337),
(3, '行业动态2017.03.04', '<p>行业动态2017.03.04</p>', 18, 3, 1488638381194, 1488638381194),
(4, '知识荟萃2017.03.04', '<p>知识荟萃2017.03.04</p>', 18, 4, 1488638393488, 1488638393488);

-- --------------------------------------------------------

--
-- 表的结构 `article_type`
--

CREATE TABLE IF NOT EXISTS `article_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `article_type`
--

INSERT INTO `article_type` (`id`, `name`, `desc`, `createAt`, `updateAt`) VALUES
(1, '系统公告', '系统公告', 0, 0),
(2, '新闻动态', '系统发布的公告', 1468489586629, 1468489586629),
(3, '行业动态', '系统发布的公告', 1468489586629, 1468489586629),
(4, '知识荟萃', '系统发布的公告', 1468489586629, 1468489586629);

-- --------------------------------------------------------

--
-- 表的结构 `authority`
--

CREATE TABLE IF NOT EXISTS `authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `allows` text NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `authority`
--

INSERT INTO `authority` (`id`, `name`, `desc`, `allows`, `createAt`, `updateAt`) VALUES
(1, '浏览拍品', '描述浏览拍品', '允许浏览拍品', 1468489586669, 1468489586669),
(2, '参与竞标', '描述参与竞标', '允许参与竞标', 1468489586669, 1468489586669),
(3, '送货上门', '描述送货上门', '允许送货上门', 1468489586669, 1468489586669);

-- --------------------------------------------------------

--
-- 表的结构 `bid`
--

CREATE TABLE IF NOT EXISTS `bid` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `value` decimal(10,0) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0：得标； 1：失败； 2：领先；3： 被超；',
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `item` (`item`),
  KEY `user` (`user`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- 转存表中的数据 `bid`
--

INSERT INTO `bid` (`id`, `item`, `user`, `value`, `status`, `createAt`, `updateAt`) VALUES
(6, 5, 19, '50', 3, 1488638327722, 1488639479460),
(7, 5, 19, '100', 3, 1488638809140, 1488639479460),
(8, 5, 19, '150', 3, 1488638874444, 1488639479460),
(9, 6, 19, '50', 3, 1488639012853, 1488639021645),
(10, 6, 19, '100', 2, 1488639021619, 1488639021619),
(11, 8, 19, '50', 3, 1488639243559, 1488639247351),
(12, 8, 19, '100', 2, 1488639247335, 1488639247335),
(13, 7, 19, '50', 3, 1488639266649, 1488639270522),
(14, 7, 19, '100', 2, 1488639270504, 1488639270504),
(15, 5, 19, '200', 2, 1488639479451, 1488639479451);

--
-- 触发器 `bid`
--
DROP TRIGGER IF EXISTS `updateCurrentPrice`;
DELIMITER //
CREATE TRIGGER `updateCurrentPrice` AFTER INSERT ON `bid`
 FOR EACH ROW BEGIN
set @maxPrice = (SELECT MAX(`value`) FROM bid WHERE(`item`= new.item));
UPDATE item set currentPrice=@maxPrice  WHERE(`id`= new.item);
END
//
DELIMITER ;

-- --------------------------------------------------------

--
-- 表的结构 `config`
--

CREATE TABLE IF NOT EXISTS `config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `config` text NOT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

-- --------------------------------------------------------

--
-- 表的结构 `follow`
--

CREATE TABLE IF NOT EXISTS `follow` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(10) NOT NULL,
  `item` int(10) NOT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `watching_ibfk_1` (`user`) USING BTREE,
  KEY `watching_ibfk_2` (`item`) USING BTREE
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- 转存表中的数据 `follow`
--

INSERT INTO `follow` (`id`, `user`, `item`, `createAt`, `updateAt`) VALUES
(17, 18, 4, 1488638024424, 1488638024424);

-- --------------------------------------------------------

--
-- 表的结构 `image`
--

CREATE TABLE IF NOT EXISTS `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `originName` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=103 ;

--
-- 转存表中的数据 `image`
--

INSERT INTO `image` (`id`, `originName`, `path`, `createAt`, `updateAt`) VALUES
(1, 'avatar.png', 'file://UPLOAD_PATH/images/1e301a70-5891-11e6-b2e7-b3fd5b9adfa3.png', 1468489586529, 1468489586529),
(2, 'image2', 'www/pictures/image2', 1468489586529, 1468489586529),
(3, 'image3', 'www/pictures/image3', 1468489586529, 1468489586529),
(4, 'image4', 'www/pictures/image4', 1468489586529, 1468489586529),
(5, 'image5', 'www/pictures/image5', 1468489586529, 1468489586529),
(6, 'image6', 'www/pictures/image6', 1468489586530, 1468489586530),
(7, 'image7', 'www/pictures/image7', 1468489586530, 1468489586530),
(8, 'image8', 'www/pictures/image8', 1468489586530, 1468489586530),
(9, 'image9', 'www/pictures/image9', 1468489586530, 1468489586530),
(10, 'image10', 'www/pictures/image10', 1468489586530, 1468489586530),
(11, 'image11', 'www/pictures/image11', 1468489586530, 1468489586530),
(12, 'image12', 'www/pictures/image12', 1468489586530, 1468489586530),
(13, 'image13', 'www/pictures/image13', 1468489586530, 1468489586530),
(14, 'image14', 'www/pictures/image14', 1468489586530, 1468489586530),
(15, 'image15', 'www/pictures/image15', 1468489586530, 1468489586530),
(16, 'image16', 'www/pictures/image16', 1468489586530, 1468489586530),
(17, 'image17', 'www/pictures/image17', 1468489586530, 1468489586530),
(18, 'image18', 'www/pictures/image18', 1468489586530, 1468489586530),
(19, 'image19', 'www/pictures/image19', 1468489586530, 1468489586530),
(20, '201211172256364491.png', 'file://UPLOAD_PATH/images/033ad2b0-5dd6-11e6-9747-0376144db653.png', 1468489586530, 1468489586530),
(21, '1.JPG', 'file://UPLOAD_PATH/images/9bc84170-5e17-11e6-b289-675671fdd8a6.JPG', 1470708444011, 1470708444011),
(22, '14.JPG', 'file://UPLOAD_PATH/images/9bc8ddb0-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617244, 1470736617244),
(23, '2.JPG', 'file://UPLOAD_PATH/images/9bc7a530-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617243, 1470736617243),
(24, '3.JPG', 'file://UPLOAD_PATH/images/9bc7cc40-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617243, 1470736617243),
(25, '4.JPG', 'file://UPLOAD_PATH/images/9bc7f350-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617243, 1470736617243),
(26, '5.JPG', 'file://UPLOAD_PATH/images/9bc7f351-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617243, 1470736617243),
(27, '6.JPG', 'file://UPLOAD_PATH/images/9bc81a60-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617244, 1470736617244),
(28, '7.JPG', 'file://UPLOAD_PATH/images/9bc81a61-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617244, 1470736617244),
(29, '8.JPG', 'file://UPLOAD_PATH/images/9bc84170-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617244, 1470736617244),
(30, '9.JPG', 'file://UPLOAD_PATH/images/9bc86880-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617244, 1470736617244),
(31, '10.JPG', 'file://UPLOAD_PATH/images/9bc86881-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617244, 1470736617244),
(32, '11.JPG', 'file://UPLOAD_PATH/images/9bc88f90-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617244, 1470736617244),
(33, '12.JPG', 'file://UPLOAD_PATH/images/9bc88f91-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617244, 1470736617244),
(34, '13.JPG', 'file://UPLOAD_PATH/images/9bc8b6a0-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617244, 1470736617244),
(35, '14.JPG', 'file://UPLOAD_PATH/images/9bc8ddb0-5e17-11e6-b289-675671fdd8a6.JPG', 1470736617244, 1470736617244),
(36, '100.png', 'file://UPLOAD_PATH/images/6f44a820-6941-11e6-9b20-9903a0c22185.png', 1471964044244, 1471964044244),
(37, 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/eb575a20-6941-11e6-9b20-9903a0c22185.png', 1471964252373, 1471964252373),
(38, '789e6070-8bcd-11e5-966d-cf96bfb23ee8.jpeg', 'file://UPLOAD_PATH/images/0483bfc0-6942-11e6-9b20-9903a0c22185.jpeg', 1471964294624, 1471964294624),
(39, 'XwVzT.png', 'file://UPLOAD_PATH/images/0bb024f0-6942-11e6-9b20-9903a0c22185.png', 1471964306635, 1471964306635),
(40, 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/84c1f300-6942-11e6-9b20-9903a0c22185.png', 1471964509757, 1471964509757),
(41, '中国煤科标志4.jpg', 'file://UPLOAD_PATH/images/8cd3d960-6946-11e6-9b20-9903a0c22185.jpg', 1471966241282, 1471966241282),
(42, 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/bc403310-6946-11e6-9b20-9903a0c22185.png', 1471966320847, 1471966320847),
(43, 'QQ图片20160730230137.jpg', 'file://UPLOAD_PATH/images/e039a440-6946-11e6-9b20-9903a0c22185.jpg', 1471966381199, 1471966381199),
(44, 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/80adff20-6947-11e6-9b20-9903a0c22185.png', 1471966650398, 1471966650398),
(45, 'XwVzT.png', 'file://UPLOAD_PATH/images/83633410-6947-11e6-9b20-9903a0c22185.png', 1471966654941, 1471966654941),
(46, 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/87c2bda0-6947-11e6-9b20-9903a0c22185.png', 1471966662278, 1471966662278),
(47, 'QQ图片20160730230137.jpg', 'file://UPLOAD_PATH/images/982c3f90-6947-11e6-9b20-9903a0c22185.jpg', 1471966689837, 1471966689837),
(48, 'XwVzT.png', 'file://UPLOAD_PATH/images/c250f9a0-6947-11e6-9b20-9903a0c22185.png', 1471966760518, 1471966760518),
(49, 'XwVzT.png', 'file://UPLOAD_PATH/images/c483b820-6947-11e6-9b20-9903a0c22185.png', 1471966764205, 1471966764205),
(50, 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/c60d6560-6947-11e6-9b20-9903a0c22185.png', 1471966766811, 1471966766811),
(51, 'avatar.png', 'file://UPLOAD_PATH/images/27269d70-6949-11e6-9b20-9903a0c22185.png', 1471967359191, 1471967359191),
(52, 'XwVzT.png', 'file://UPLOAD_PATH/images/89a52750-6949-11e6-9b20-9903a0c22185.png', 1471967524435, 1471967524435),
(53, 'QQ图片20160730230137.jpg', 'file://UPLOAD_PATH/images/8c206080-6949-11e6-9b20-9903a0c22185.jpg', 1471967528597, 1471967528597),
(54, 'XwVzT.png', 'file://UPLOAD_PATH/images/8db3f8d0-6949-11e6-9b20-9903a0c22185.png', 1471967531242, 1471967531242),
(55, 'XwVzT.png', 'file://UPLOAD_PATH/images/c9655810-6949-11e6-9b20-9903a0c22185.png', 1471967631394, 1471967631394),
(56, 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/ca7c4650-6949-11e6-9b20-9903a0c22185.png', 1471967633218, 1471967633218),
(57, 'QQ图片20160730230137.jpg', 'file://UPLOAD_PATH/images/cbcb0d70-6949-11e6-9b20-9903a0c22185.jpg', 1471967635412, 1471967635412),
(58, 'QQ图片20160823180705.png', 'file://UPLOAD_PATH/images/3cca8d20-702f-11e6-af98-9d342938f5ae.png', 1472725886716, 1472725886716),
(59, 'avatar.png', 'file://UPLOAD_PATH/images/47febcb0-70e4-11e6-9408-218470406e23.png', 1472803644424, 1472803644424),
(60, 'avatar.png', 'file://UPLOAD_PATH/images/47901fa0-7295-11e6-9dd3-d736d78a2376.png', 1472989615784, 1472989615784),
(61, 'avatar.png', 'file://UPLOAD_PATH/images/e8a8d630-72a8-11e6-87c5-870e94d25a54.png', 1472998046495, 1472998046495),
(62, 'avatar.png', 'file://UPLOAD_PATH/images/21756f90-72aa-11e6-8856-e367a4c13793.png', 1472998571285, 1472998571285),
(63, 'avatar.png', 'file://UPLOAD_PATH/images/66df0f00-72aa-11e6-8856-e367a4c13793.png', 1472998687739, 1472998687739),
(64, 'avatar.png', 'file://UPLOAD_PATH/images/c3ea5560-72aa-11e6-8856-e367a4c13793.png', 1472998843841, 1472998843841),
(65, 'avatar.png', 'file://UPLOAD_PATH/images/c7ddd6b0-72aa-11e6-8856-e367a4c13793.png', 1472998850472, 1472998850472),
(66, 'avatar.png', 'file://UPLOAD_PATH/images/169c6b30-72ac-11e6-9d66-591116dc16ea.png', 1472999412079, 1472999412079),
(67, 'avatar.png', 'file://UPLOAD_PATH/images/292511b0-72ae-11e6-9bc0-032001d10bc4.png', 1473000302169, 1473000302169),
(68, 'avatar.png', 'file://UPLOAD_PATH/images/67f5b250-72ae-11e6-9bc0-032001d10bc4.png', 1473000407552, 1473000407552),
(69, 'avatar.png', 'file://UPLOAD_PATH/images/ac1f7ec0-72ae-11e6-9bc0-032001d10bc4.png', 1473000521934, 1473000521934),
(70, 'avatar.png', 'file://UPLOAD_PATH/images/ad7daf30-72ae-11e6-9bc0-032001d10bc4.png', 1473000524205, 1473000524205),
(71, 'avatar.png', 'file://UPLOAD_PATH/images/04119310-72b0-11e6-9bc0-032001d10bc4.png', 1473001098961, 1473001098961),
(72, 'avatar.png', 'file://UPLOAD_PATH/images/a3810110-72b0-11e6-9bc0-032001d10bc4.png', 1473001366446, 1473001366446),
(73, 'avatar.png', 'file://UPLOAD_PATH/images/3beb8f10-72b1-11e6-9bc0-032001d10bc4.png', 1473001622156, 1473001622156),
(74, 'null', 'null', 0, 0),
(75, 'QQ图片20161003115007.png', 'file://UPLOAD_PATH/images/bcddd7d0-92b5-11e6-8476-73a454fe86e2.png', 1476521993683, 1476521993683),
(76, 'QQ图片20161003115550.jpg', 'file://UPLOAD_PATH/images/c54f8e40-92b5-11e6-8476-73a454fe86e2.jpg', 1476522007849, 1476522007849),
(77, 'QQ图片20161003115007.png', 'file://UPLOAD_PATH/images/c72363e0-92b5-11e6-8476-73a454fe86e2.png', 1476522010915, 1476522010915),
(78, 'QQ图片20161003115550.jpg', 'file://UPLOAD_PATH/images/dc772dc0-92b6-11e6-8476-73a454fe86e2.jpg', 1476522476194, 1476522476194),
(79, 'QQ图片20161003115550.jpg', 'file://UPLOAD_PATH/images/cc2cec40-92b9-11e6-8476-73a454fe86e2.jpg', 1476523737354, 1476523737354),
(80, 'QQ图片20161003115550.jpg', 'file://UPLOAD_PATH/images/a624c9e0-92ba-11e6-8476-73a454fe86e2.jpg', 1476524103043, 1476524103043),
(81, 'QQ图片20161003115007.png', 'file://UPLOAD_PATH/images/aaebae80-92bf-11e6-8476-73a454fe86e2.png', 1476526258542, 1476526258542),
(82, 'QQ图片20161003115550.jpg', 'file://UPLOAD_PATH/images/ac5e0330-92bf-11e6-8476-73a454fe86e2.jpg', 1476526260968, 1476526260968),
(83, '雨安国际第54场 (1).JPG', 'file://UPLOAD_PATH/images/e4fa98d0-9566-11e6-b0d9-1f22368aebab.JPG', 1476817984228, 1476817984228),
(84, '雨安国际第54场 (2).JPG', 'file://UPLOAD_PATH/images/e857cd90-9566-11e6-b0d9-1f22368aebab.JPG', 1476817989871, 1476817989871),
(85, '雨安国际第84场 (1).JPG', 'file://UPLOAD_PATH/images/fbb5d440-000a-11e7-8df3-c3185451b76b.JPG', 1488543283080, 1488543283080),
(86, '雨安国际第84场 (2).JPG', 'file://UPLOAD_PATH/images/fd7b5200-000a-11e7-8df3-c3185451b76b.JPG', 1488543286049, 1488543286049),
(87, '雨安国际第84场 (3).JPG', 'file://UPLOAD_PATH/images/31b7f870-000b-11e7-8df3-c3185451b76b.JPG', 1488543373688, 1488543373688),
(88, '雨安国际第84场 (4).JPG', 'file://UPLOAD_PATH/images/33b91fa0-000b-11e7-8df3-c3185451b76b.JPG', 1488543377051, 1488543377051),
(89, '雨安国际第84场 (3).JPG', 'file://UPLOAD_PATH/images/451f02f0-000b-11e7-8df3-c3185451b76b.JPG', 1488543406239, 1488543406239),
(90, '雨安国际第84场 (4).JPG', 'file://UPLOAD_PATH/images/478e0720-000b-11e7-8df3-c3185451b76b.JPG', 1488543410323, 1488543410323),
(91, '雨安国际第84场 (5).JPG', 'file://UPLOAD_PATH/images/6838e990-000b-11e7-8df3-c3185451b76b.JPG', 1488543465130, 1488543465130),
(92, '雨安国际第84场 (6).JPG', 'file://UPLOAD_PATH/images/6ac560d0-000b-11e7-8df3-c3185451b76b.JPG', 1488543469405, 1488543469405),
(93, '雨安国际第78场 (1).JPG', 'file://UPLOAD_PATH/images/334dedc0-00e7-11e7-bf05-4b5e2fc47703.JPG', 1488637865631, 1488637865631),
(94, '雨安国际第78场 (2).JPG', 'file://UPLOAD_PATH/images/354a5a00-00e7-11e7-bf05-4b5e2fc47703.JPG', 1488637868963, 1488637868963),
(95, '雨安国际第78场 (3).JPG', 'file://UPLOAD_PATH/images/7a5389f0-00e7-11e7-bf05-4b5e2fc47703.JPG', 1488637984786, 1488637984786),
(96, '雨安国际第78场 (4).JPG', 'file://UPLOAD_PATH/images/7c5cee80-00e7-11e7-bf05-4b5e2fc47703.JPG', 1488637988201, 1488637988201),
(97, '雨安国际第78场 (5).JPG', 'file://UPLOAD_PATH/images/9c36c550-00e7-11e7-bf05-4b5e2fc47703.JPG', 1488638041638, 1488638041638),
(98, '雨安国际第78场 (6).JPG', 'file://UPLOAD_PATH/images/9da4ad30-00e7-11e7-bf05-4b5e2fc47703.JPG', 1488638044036, 1488638044036),
(99, '雨安国际第78场 (8).JPG', 'file://UPLOAD_PATH/images/4367c1b0-00ea-11e7-bf05-4b5e2fc47703.JPG', 1488639181134, 1488639181134),
(100, '雨安国际第78场 (7).JPG', 'file://UPLOAD_PATH/images/43c12c50-00ea-11e7-bf05-4b5e2fc47703.JPG', 1488639181719, 1488639181719),
(101, '雨安国际第78场 (9).JPG', 'file://UPLOAD_PATH/images/5c26bf80-00ea-11e7-bf05-4b5e2fc47703.JPG', 1488639222649, 1488639222649),
(102, '雨安国际第78场 (10).JPG', 'file://UPLOAD_PATH/images/5c800310-00ea-11e7-bf05-4b5e2fc47703.JPG', 1488639223234, 1488639223234);

-- --------------------------------------------------------

--
-- 表的结构 `item`
--

CREATE TABLE IF NOT EXISTS `item` (
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
  KEY `item_ibfk_4` (`currentBidder`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `item`
--

INSERT INTO `item` (`id`, `name`, `foundTime`, `foundLocation`, `tag`, `desc`, `image`, `status`, `publisher`, `currentBidder`, `group`, `beginPrice`, `currentPrice`, `auctionType`, `auctionBeginTime`, `auctionEndTime`, `followCount`, `createAt`, `updateAt`, `type`) VALUES
(4, '【雨安国际78场-01】	德国汉堡1914年3马克 完未', '', '', '', '<p>[B]1、拍品信息：[/B]</p><p>实物高清拍摄，如有疑问欢迎咨询</p><p><br/></p><p>[B]2、拍卖简介：[/B]</p><p>雨安标准拍卖，本人绝不拍假售假，拍品一律终身保真。</p><p>雨安国际专场，[COLOR=red]本专场二十件物品[/COLOR]，[COLOR=red]全部结束统一下单[/COLOR]。</p><p>拍品已发中国，烦请稍等国际运输，物品抵达中国转运。</p><p><br/></p><p>[B]3、运输说明：[/B]</p><p>拍卖全场包邮，不论得标多少拍品，一律三包安全到手。</p><p>少量物品挂号，较大价值物品顺丰，不使用其它小速递。</p><p><br/></p>', '[93,null,null]', 3, 18, NULL, 11, '0', '0', 0, 1488637768341, 1489161600000, 0, 1488637868386, 1489192534311, 1),
(5, '【雨安国际78场-02】	德国普鲁士1913年3马克军装 完未暴光', '', '', '', '<p>[B]1、拍品信息：[/B]</p><p>实物高清拍摄，如有疑问欢迎咨询</p><p><br/></p><p>[B]2、拍卖简介：[/B]</p><p>雨安标准拍卖，本人绝不拍假售假，拍品一律终身保真。</p><p>雨安国际专场，[COLOR=red]本专场二十件物品[/COLOR]，[COLOR=red]全部结束统一下单[/COLOR]。</p><p>拍品已发中国，烦请稍等国际运输，物品抵达中国转运。</p><p><br/></p><p>[B]3、运输说明：[/B]</p><p>拍卖全场包邮，不论得标多少拍品，一律三包安全到手。</p><p>少量物品挂号，较大价值物品顺丰，不使用其它小速递。</p><p><br/></p>', '[95,null,null]', 3, 18, NULL, 11, '0', '200', 0, 1488637909142, 1489161600000, 0, 1488637985971, 1489192534323, 1),
(6, '【雨安国际78场-03】	德国符腾堡1914年3马克 完未暴光', '', '', '', '<p>[B]1、拍品信息：[/B]</p><p>实物高清拍摄，如有疑问欢迎咨询</p><p><br/></p><p>[B]2、拍卖简介：[/B]</p><p>雨安标准拍卖，本人绝不拍假售假，拍品一律终身保真。</p><p>雨安国际专场，[COLOR=red]本专场二十件物品[/COLOR]，[COLOR=red]全部结束统一下单[/COLOR]。</p><p>拍品已发中国，烦请稍等国际运输，物品抵达中国转运。</p><p><br/></p><p>[B]3、运输说明：[/B]</p><p>拍卖全场包邮，不论得标多少拍品，一律三包安全到手。</p><p>少量物品挂号，较大价值物品顺丰，不使用其它小速递。</p><p><br/></p>', '[97,null,98]', 3, 18, NULL, 11, '0', '100', 0, 1488637936756, 1489161600000, 0, 1488638046823, 1489192534338, 1),
(7, '【雨安国际78场-04】	德国汉堡1900年5马克', '', '', '', '<p>[B]1、拍品信息：[/B]</p><p>实物高清拍摄，如有疑问欢迎咨询</p><p><br/></p><p>[B]2、拍卖简介：[/B]</p><p>雨安标准拍卖，本人绝不拍假售假，拍品一律终身保真。</p><p>雨安国际专场，[COLOR=red]本专场二十件物品[/COLOR]，[COLOR=red]全部结束统一下单[/COLOR]。</p><p>拍品已发中国，烦请稍等国际运输，物品抵达中国转运。</p><p><br/></p><p>[B]3、运输说明：[/B]</p><p>拍卖全场包邮，不论得标多少拍品，一律三包安全到手。</p><p>少量物品挂号，较大价值物品顺丰，不使用其它小速递。</p><p><br/></p>', '[100,99,null]', 3, 18, NULL, 13, '0', '100', 1, 1488639087453, 1489161600000, 0, 1488639188187, 1489192534350, 1),
(8, '【雨安国际78场-05】	德国普鲁士1914年5马克军装 完未', '', '', '', '<p>[B]1、拍品信息：[/B]</p><p>实物高清拍摄，如有疑问欢迎咨询</p><p><br/></p><p>[B]2、拍卖简介：[/B]</p><p>雨安标准拍卖，本人绝不拍假售假，拍品一律终身保真。</p><p>雨安国际专场，[COLOR=red]本专场二十件物品[/COLOR]，[COLOR=red]全部结束统一下单[/COLOR]。</p><p>拍品已发中国，烦请稍等国际运输，物品抵达中国转运。</p><p><br/></p><p>[B]3、运输说明：[/B]</p><p>拍卖全场包邮，不论得标多少拍品，一律三包安全到手。</p><p>少量物品挂号，较大价值物品顺丰，不使用其它小速递。</p><p><br/></p>', '[101,null,102]', 3, 18, NULL, 13, '0', '100', 1, 1488639141451, 1489161600000, 0, 1488639225099, 1489192534356, 1);

-- --------------------------------------------------------

--
-- 表的结构 `item_group`
--

CREATE TABLE IF NOT EXISTS `item_group` (
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- 转存表中的数据 `item_group`
--

INSERT INTO `item_group` (`id`, `name`, `image`, `desc`, `no`, `isOpen`, `createAt`, `updateAt`) VALUES
(11, '标准钱币拍卖第001场', NULL, '欢迎来到标准钱币收藏，第一次拍卖正式启动', NULL, 1, 1476965705621, 1476965903492),
(13, '标准钱币拍卖第002场', NULL, '标准钱币拍卖第002场', NULL, 1, 1488543204348, 1488543204348);

-- --------------------------------------------------------

--
-- 表的结构 `item_type`
--

CREATE TABLE IF NOT EXISTS `item_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `createAt` bigint(20) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `item_type`
--

INSERT INTO `item_type` (`id`, `name`, `desc`, `createAt`, `updateAt`) VALUES
(1, '古玩类型0', '这是古玩类型0', 1468489586886, 1468489586886),
(2, '古玩类型1', '这是古玩类型1', 1468489586886, 1468489586886),
(3, '古玩类型2', '这是古玩类型2', 1468489586886, 1468489586886),
(4, '古玩类型3', '这是古玩类型3', 1468489586886, 1468489586886),
(5, '古玩类型4', '这是古玩类型4', 1468489586886, 1468489586886);

-- --------------------------------------------------------

--
-- 表的结构 `message`
--

CREATE TABLE IF NOT EXISTS `message` (
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
  KEY `to` (`to`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- 转存表中的数据 `message`
--

INSERT INTO `message` (`id`, `from`, `to`, `title`, `content`, `read`, `createAt`, `updateAt`) VALUES
(1, 1, 19, '系统消息', '您的商品【包邮】【雨安国际84场-02】	荷兰海尔德兰省1786年2stuiver银毫暂时领先', 0, 1488543935939, 1488543935939),
(3, 1, 19, '系统消息', '您的商品【包邮】【雨安国际84场-02】	荷兰海尔德兰省1786年2stuiver银毫被超越', 0, 1488544048667, 1488544048667),
(6, 1, 19, '系统消息', '您的商品【包邮】【雨安国际84场-04】	加拿大1966年一元大银币暂时领先', 0, 1488544114661, 1488544114661),
(7, 1, 19, '系统消息', '您的商品【雨安国际78场-02】	德国普鲁士1913年3马克军装 完未暴光暂时领先', 0, 1488638327749, 1488638327749),
(8, 1, 19, '系统消息', '您的商品【雨安国际78场-02】	德国普鲁士1913年3马克军装 完未暴光暂时领先', 0, 1488638809146, 1488638809146),
(9, 1, 19, '系统消息', '您的商品【雨安国际78场-02】	德国普鲁士1913年3马克军装 完未暴光暂时领先', 0, 1488638874452, 1488638874452),
(10, 1, 19, '系统消息', '您的商品【雨安国际78场-03】	德国符腾堡1914年3马克 完未暴光暂时领先', 0, 1488639012862, 1488639012862),
(11, 1, 19, '系统消息', '您的商品【雨安国际78场-03】	德国符腾堡1914年3马克 完未暴光暂时领先', 0, 1488639021628, 1488639021628),
(12, 1, 19, '系统消息', '您的商品【雨安国际78场-05】	德国普鲁士1914年5马克军装 完未暂时领先', 0, 1488639243569, 1488639243569),
(13, 1, 19, '系统消息', '您的商品【雨安国际78场-05】	德国普鲁士1914年5马克军装 完未暂时领先', 0, 1488639247342, 1488639247342),
(14, 1, 19, '系统消息', '您的商品【雨安国际78场-04】	德国汉堡1900年5马克暂时领先', 0, 1488639266654, 1488639266654),
(15, 1, 19, '系统消息', '您的商品【雨安国际78场-04】	德国汉堡1900年5马克暂时领先', 0, 1488639270511, 1488639270511);

-- --------------------------------------------------------

--
-- 表的结构 `order`
--

CREATE TABLE IF NOT EXISTS `order` (
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
  KEY `order_ibfk_2` (`item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `desc` text,
  `extend` varchar(255) NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  KEY `extends` (`extend`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `role`
--

INSERT INTO `role` (`id`, `name`, `desc`, `extend`, `createAt`, `updateAt`) VALUES
(1, 'anonymous', 'user which has not signed up yet', '[]', 1468256270300, 1468256270300),
(2, 'registered', 'user which has already signed up and not assigned to other role', '["anonymous"]', 1468256270542, 1468256270542),
(3, 'admin', 'admin', '["registered"]', 1468256270542, 1468256270542);

-- --------------------------------------------------------

--
-- 表的结构 `role_authority`
--

CREATE TABLE IF NOT EXISTS `role_authority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` int(11) NOT NULL,
  `authority` int(11) NOT NULL,
  `createAt` bigint(20) NOT NULL DEFAULT '0',
  `updateAt` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `role` (`role`),
  KEY `authority` (`authority`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `role_authority`
--

INSERT INTO `role_authority` (`id`, `role`, `authority`, `createAt`, `updateAt`) VALUES
(1, 1, 1, 1468489586696, 1468489586696),
(2, 2, 2, 1468489586696, 1468489586696),
(3, 1, 3, 1468489586696, 1468489586696),
(4, 2, 1, 1468489586696, 1468489586696),
(5, 1, 2, 1468489586696, 1468489586696),
(6, 2, 3, 1468489586696, 1468489586696),
(7, 1, 1, 1468489586696, 1468489586696),
(8, 2, 2, 1468489586696, 1468489586696),
(9, 1, 3, 1468489586696, 1468489586696),
(10, 2, 1, 1468489586696, 1468489586696);

-- --------------------------------------------------------

--
-- 表的结构 `service`
--

CREATE TABLE IF NOT EXISTS `service` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createAt` bigint(255) NOT NULL,
  `updateAt` bigint(20) NOT NULL,
  PRIMARY KEY (`id`,`title`),
  KEY `service_ibfk_1` (`image`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `service`
--

INSERT INTO `service` (`id`, `image`, `title`, `content`, `createAt`, `updateAt`) VALUES
(1, 1, '如实描述', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', 1468489586601, 1468489586601),
(2, 2, '快速上拍', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', 1468489586601, 1468489586601),
(3, 3, '24小时发货', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', 1468489586601, 1468489586601),
(4, 4, '诚信服务', '是指房产买房将其已抵押给银行或按揭方式购买且尚未还清的房产转让给', 1468489586601, 1468489586601);

-- --------------------------------------------------------

--
-- 表的结构 `session`
--

CREATE TABLE IF NOT EXISTS `session` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `cookie` varchar(255) NOT NULL DEFAULT '',
  `data` text,
  `expire` bigint(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cookie` (`cookie`),
  KEY `expire` (`expire`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;

--
-- 转存表中的数据 `session`
--

INSERT INTO `session` (`id`, `cookie`, `data`, `expire`) VALUES
(23, 'Pf2cUhLZ3PyIRGwnigoIzgAd11L_D6nw', NULL, 1495131949796),
(24, 'wrZHD_YCGqR8tNmSiniAdvKWG8PUUZ3d', NULL, 1495131951244);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
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
  KEY `user_ibfk_2` (`avatar`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=20 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `emailValidate`, `desc`, `avatar`, `creditLines`, `level`, `role`, `mark`, `lastLogin`, `income`, `age`, `name`, `idNum`, `phoneNum`, `checked`, `createAt`, `updateAt`) VALUES
(1, 'zl810881283', 'zl7112585', '0573328344@qq.com', 1, 'I''m zhangle', 1, '5000', 1, 2, NULL, 1482911411103, NULL, NULL, NULL, NULL, NULL, 0, 1468489586718, 1482911411106),
(18, 'admin', 'admin', '123@qq.com', 0, NULL, 1, '9999999999', 0, 3, NULL, 1488637318298, NULL, NULL, NULL, NULL, NULL, 0, 0, 1488637318299),
(19, 'test1', 'test1', 'zsf0807@126.com', 0, '他很懒，什么都没留下', 1, '1000', 1, 2, NULL, 1488638065928, NULL, NULL, NULL, NULL, NULL, 0, 1488543858860, 1488638065928);

--
-- 限制导出的表
--

--
-- 限制表 `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`author`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `article_ibfk_2` FOREIGN KEY (`type`) REFERENCES `article_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `bid`
--
ALTER TABLE `bid`
  ADD CONSTRAINT `bid_ibfk_1` FOREIGN KEY (`item`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bid_ibfk_2` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `follow`
--
ALTER TABLE `follow`
  ADD CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`item`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`publisher`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `item_ibfk_2` FOREIGN KEY (`group`) REFERENCES `item_group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `item_ibfk_3` FOREIGN KEY (`type`) REFERENCES `item_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `item_ibfk_4` FOREIGN KEY (`currentBidder`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`from`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`to`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`item`) REFERENCES `item` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `role_authority`
--
ALTER TABLE `role_authority`
  ADD CONSTRAINT `role_authority_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `role_authority_ibfk_2` FOREIGN KEY (`authority`) REFERENCES `authority` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `service`
--
ALTER TABLE `service`
  ADD CONSTRAINT `service_ibfk_1` FOREIGN KEY (`image`) REFERENCES `image` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 限制表 `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`avatar`) REFERENCES `image` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
