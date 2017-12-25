/*
Navicat MySQL Data Transfer

Source Server         : FFF
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : assure

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-12-25 16:21:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `risk` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `list_type` varchar(255) DEFAULT NULL,
  `size_num` varchar(255) DEFAULT NULL,
  `risk_num` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES ('1', '逸龙科技有限公司', '1', '5', '互联网', '3', '2017-12-17 16:18:39', '2000000', '2', '15人', 'AE1513508153');
INSERT INTO `company` VALUES ('2', '波记饭店', '1', '5', '餐饮', '3', '2017-12-17 16:44:08', '500000', '2', '15人', 'AE1513519730');
INSERT INTO `company` VALUES ('5', '美斯特服装公司', '3', '4', '批发经营、零售', '4', '2017-12-17 16:56:07', '3000000', '2', '100人', 'AE1513527972');
INSERT INTO `company` VALUES ('6', '新记茶餐厅', '2', '5', '餐饮', '1', '2017-12-17 16:59:43', '500000', '2', '50人', 'AE1513527978');
INSERT INTO `company` VALUES ('7', '力策软件有限公司', '1', '5', '软件销售', '', '2017-12-17 17:00:36', '2000000', '', '15人', '');
INSERT INTO `company` VALUES ('8', '新禧美食餐厅', '2', '5', '饮食', '', '2017-12-17 17:01:48', '3000000', '', '50人', '');
INSERT INTO `company` VALUES ('10', '致好网络有限公司', '1', '5', '互联网', '', '2017-12-17 17:18:46', '800000', '', '15人', '');
INSERT INTO `company` VALUES ('11', '一记云团面', '5', '4', '饮食', '', '2017-12-17 17:20:48', '5000000', '', '150人以上', '');
INSERT INTO `company` VALUES ('12', '天天洗车', '1', '5', '生活服务', '', '2017-12-17 17:25:26', '500000', '', '15人', '');
INSERT INTO `company` VALUES ('13', '飞极网卡', '2', '4', '娱乐行业', '4', '2017-12-17 17:28:26', '3000000', '2', '50人', 'AE1513528103');
INSERT INTO `company` VALUES ('14', '厚今网络有限公司', '1', '5', '互联网', '', '2017-12-17 17:29:25', '500000', '', '15人', '');
INSERT INTO `company` VALUES ('15', '惠来超市', '2', '5', '零售,生活服务', '', '2017-12-17 17:37:27', '3000000', '', '50人', '');
INSERT INTO `company` VALUES ('16', '东方广告有限公司', '4', '9', '广告服务', '', '2017-12-25 12:05:36', '500000', '', '150人', '');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `risk_num` varchar(255) DEFAULT NULL,
  `order_num` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `risk` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `company_amount` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `company_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('2', 'AE1513508153', 'OD1513521163', '逸龙科技有限公司', '3', '300000', '15人', '2000000', '2', '1');
INSERT INTO `order` VALUES ('3', 'AE1513527978', 'OD1513527990', '新记茶餐厅', '1', '150000', '50人', '500000', '0', '6');
INSERT INTO `order` VALUES ('4', 'AE1513527972', 'OD1513528004', '美斯特服装公司', '4', '200000', '100人', '3000000', '1', '5');
INSERT INTO `order` VALUES ('5', 'AE1513508153', 'OD1513528034', '逸龙科技有限公司', '3', '50000', '15人', '2000000', '2', '1');
INSERT INTO `order` VALUES ('6', 'AE1513519730', 'OD1513528045', '波记饭店', '3', '20000', '15人', '500000', '0', '2');
INSERT INTO `order` VALUES ('7', 'AE1513528103', 'OD1513528119', '飞极网卡', '4', '50000', '50人', '3000000', '0', '13');

-- ----------------------------
-- Table structure for risk
-- ----------------------------
DROP TABLE IF EXISTS `risk`;
CREATE TABLE `risk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of risk
-- ----------------------------
INSERT INTO `risk` VALUES ('1', '一级');
INSERT INTO `risk` VALUES ('2', '二级');
INSERT INTO `risk` VALUES ('3', '三级');
INSERT INTO `risk` VALUES ('4', '四级');

-- ----------------------------
-- Table structure for size
-- ----------------------------
DROP TABLE IF EXISTS `size`;
CREATE TABLE `size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `num` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of size
-- ----------------------------
INSERT INTO `size` VALUES ('1', '15人');
INSERT INTO `size` VALUES ('2', '50人');
INSERT INTO `size` VALUES ('3', '100人');
INSERT INTO `size` VALUES ('4', '150人');
INSERT INTO `size` VALUES ('5', '150人以上');

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES ('1', '国有企业');
INSERT INTO `type` VALUES ('2', '集体企业');
INSERT INTO `type` VALUES ('3', '有限责任公司');
INSERT INTO `type` VALUES ('4', '股份有限公司');
INSERT INTO `type` VALUES ('5', '私营企业');
INSERT INTO `type` VALUES ('6', '港、澳、台商投资企业');
INSERT INTO `type` VALUES ('7', '合资经营企业');
INSERT INTO `type` VALUES ('8', '中外合资经营企业');
INSERT INTO `type` VALUES ('9', '外商投资股份有限公司');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '123456');
