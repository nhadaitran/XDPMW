Mo ta:
_Bai tap 2 su dung plugin Datatable tu Jquery de hien thi du lieu len table tu 3 nguon khac nhau (HTML, Javascript, Api)

Cai dat:
1. tao database: fake_db
2. load sql tao table: user_fake

CREATE TABLE IF NOT EXISTS `user_fake` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

3. Dat sourcecode trong documentRoot (wamp\www,...),
chay db.php de them du lieu vao database

(Thay doi so dong can them trong db.php - neu can)



