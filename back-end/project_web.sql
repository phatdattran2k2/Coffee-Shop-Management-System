create database project_web;
use project_web;
drop database project_web;

create table ADMIN(
    MA_ADMIN        int(5) AUTO_INCREMENT primary key,
    TEN_ADMIN       varchar(50)     not null,
	MAT_KHAU_ADMIN  char(8)         not null,
	EMAIL_ADMIN    	varchar(50)     not null,
	SDT_ADMIN      	char(10)		not null
);

select * from ADMIN;
insert into ADMIN(MA_ADMIN,TEN_ADMIN,MAT_KHAU_ADMIN,EMAIL_ADMIN,SDT_ADMIN) VALUES ('1','Tran Phat Dat','@Dinos61','dinos@gmail.com','0773724789');
insert into ADMIN(MA_ADMIN,TEN_ADMIN,MAT_KHAU_ADMIN,EMAIL_ADMIN,SDT_ADMIN) VALUES ('3','Admin','@','dat@gmail.com','0772892190');
delete from admin where MA_ADMIN = '3';

create table NHAN_VIEN(
    MA_NV           int(5) AUTO_INCREMENT primary key,
    TEN_NV          varchar(50)     not null,
	MAT_KHAU_NV     char(8)         not null,
	EMAIL_NV     	varchar(50)     not null,
    GIOI_TINH_NV    char(3)         not null,
    NGAY_SINH_NV    date            not null,
	SDT_NV      	char(10)		not null
);

insert into NHAN_VIEN(MA_NV,TEN_NV,MAT_KHAU_NV,EMAIL_NV,GIOI_TINH_NV,NGAY_SINH_NV,SDT_NV) VALUES ('1','TRAN NHAT MINH','@NM12345','minh2190@gmail.com','NAM','2002-10-01','0773724789');
insert into NHAN_VIEN(MA_NV,TEN_NV,MAT_KHAU_NV,EMAIL_NV,GIOI_TINH_NV,NGAY_SINH_NV,SDT_NV) VALUES ('2','NGUYEN NGOC TRAN','@NT12345','tran12345@gmail.com','NU','2002-8-25','0986454321');
insert into NHAN_VIEN(MA_NV,TEN_NV,MAT_KHAU_NV,EMAIL_NV,GIOI_TINH_NV,NGAY_SINH_NV,SDT_NV) VALUES ('3','TRAN VAN TU','@VT12345','tu12345@gmail.com','NAM','2002-7-24','0931287093');
insert into NHAN_VIEN(MA_NV,TEN_NV,MAT_KHAU_NV,EMAIL_NV,GIOI_TINH_NV,NGAY_SINH_NV,SDT_NV) VALUES ('4','TRAN MINH DU','@MD12345','du12345@gmail.com','NAM','2002-02-10','0948789280');
insert into NHAN_VIEN(MA_NV,TEN_NV,MAT_KHAU_NV,EMAIL_NV,GIOI_TINH_NV,NGAY_SINH_NV,SDT_NV) VALUES ('5','NGUYEN VAN KHOI','@VK12345','khoi12345@gmail.com','NAM','2002-6-01','0780912635');

UPDATE NHAN_VIEN
SET NGAY_SINH_NV = '2002-10-01'
WHERE MA_NV = 1;

SELECT * FROM NHAN_VIEN;
select MA_NV from NHAN_VIEN where EMAIL_NV='tranphatdat2190@gmail.com' and SDT_NV='0773724789';
delete from NHAN_VIEN where MA_NV = '1';

create table QL_DMSP(
    MA_SP 		int(5) AUTO_INCREMENT primary key, 
    TEN_SP 		varchar(50) not null, 
    GIA_BAN_HT  float 		not null, 
    DON_VI_TINH char(10)	not null
);

insert into QL_DMSP(MA_SP,TEN_SP,GIA_BAN_HT,DON_VI_TINH) VALUES ('1','Coffee',15000,'VND');
insert into QL_DMSP(MA_SP,TEN_SP,GIA_BAN_HT,DON_VI_TINH) VALUES ('2','Ôlong',25000,'VND');
insert into QL_DMSP(MA_SP,TEN_SP,GIA_BAN_HT,DON_VI_TINH) VALUES ('3','Matcha',25000,'VND');
insert into QL_DMSP(MA_SP,TEN_SP,GIA_BAN_HT,DON_VI_TINH) VALUES ('4','Milk Tea',20000,'VND');
insert into QL_DMSP(MA_SP,TEN_SP,GIA_BAN_HT,DON_VI_TINH) VALUES ('5','Macchiato',30000,'VND');
insert into QL_DMSP(MA_SP,TEN_SP,GIA_BAN_HT,DON_VI_TINH) VALUES ('6','Boncha',10000,'VND');
insert into QL_DMSP(MA_SP,TEN_SP,GIA_BAN_HT,DON_VI_TINH) VALUES ('7','Trà xanh',20000,'VND');
SELECT * FROM QL_DMSP;
delete from QL_DMSP where MA_SP = '8';

create table QL_DMKH(
    MA_KH           int(5)	AUTO_INCREMENT primary key,
    TEN_KH          varchar(50)     not null,
	SDT_KH      	char(10)		not null,
    DIEM_TL			float		    not null
);

insert into QL_DMKH(MA_KH,TEN_KH,SDT_KH,DIEM_TL) VALUES ('1','TRAN PHAT TAI','0123456789',0);
insert into QL_DMKH(MA_KH,TEN_KH,SDT_KH,DIEM_TL) VALUES ('2','NGUYEN NGOC TRAM','0987654321',0);
insert into QL_DMKH(MA_KH,TEN_KH,SDT_KH,DIEM_TL) VALUES ('3','DINH KIET','0931287465',0);
insert into QL_DMKH(MA_KH,TEN_KH,SDT_KH,DIEM_TL) VALUES ('4','VAN HOANG HAI DANG','0948739180',0);
insert into QL_DMKH(MA_KH,TEN_KH,SDT_KH,DIEM_TL) VALUES ('5','TRAN KHOI','0789012635',0);
insert into QL_DMKH(MA_KH,TEN_KH,SDT_KH,DIEM_TL) VALUES ('6','TRAN SON','0907213145',0);
insert into QL_DMKH(MA_KH,TEN_KH,SDT_KH,DIEM_TL) VALUES ('7','TRAN VAN NAM','0937290098',0);

SELECT * FROM QL_DMKH;
delete from QL_DMKH where MA_KH = '9';

create table HOA_DON(
   STT_HD 		int(10) AUTO_INCREMENT primary key,
   NGAY_LAP_HD  date not null,
   GIA_TRI_HD   float not null,
   MA_KH 		int(5),
   FOREIGN KEY (MA_KH) REFERENCES QL_DMKH(MA_KH) ON DELETE CASCADE,
   MA_NV 		int(5),
   FOREIGN KEY (MA_NV) REFERENCES NHAN_VIEN(MA_NV)
);

ALTER TABLE HOA_DON
ADD CONSTRAINT MA_KH
FOREIGN KEY (MA_KH) REFERENCES QL_DMKH(MA_KH)
ON UPDATE CASCADE ON DELETE CASCADE;

insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('1','2023-4-01',135000,'1','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('2','2023-4-01',30000,'2','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('3','2023-4-01',25000,'5','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('4','2023-4-01',20000,'3','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('5','2023-4-01',30000,'1','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('6','2023-4-01',15000,'4','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('7','2023-4-01',25000,'4','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('8','2023-4-01',20000,'2','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('9','2023-4-01',15000,'3','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('10','2023-5-01',100000,'1','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('11','2023-5-01',150000,'2','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('12','2023-5-01',250000,'3','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('13','2023-5-01',250000,'4','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('14','2023-5-01',200000,'5','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('15','2023-5-01',300000,'1','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('16','2023-5-02',10000,'6','1');
insert into HOA_DON(STT_HD,NGAY_LAP_HD,GIA_TRI_HD,MA_KH,MA_NV) VALUES ('17','2023-5-02',200000,'7','1');

SELECT * FROM HOA_DON;
DELETE FROM HOA_DON WHERE STT_HD=(select ct.STT_HD from CHI_TIET_HD ct where ct.MA_SP='6');
delete from HOA_DON where STT_HD = '17';
select ct.STT_HD from CHI_TIET_HD ct where ct.MA_SP='6';

select max(STT_HD) as gSTT_HD from HOA_DON;

create table CHI_TIET_HD( 
    STT_HD 			 int(10),
    MA_SP		 	 int(5),
    CTHD_SO_LUONG 	 int not null, 
    CTHD_DON_GIA_BAN float not null,
    PRIMARY KEY(STT_HD, MA_SP),
	FOREIGN KEY (MA_SP) REFERENCES QL_DMSP(MA_SP) ON DELETE CASCADE,
    FOREIGN KEY (STT_HD) REFERENCES HOA_DON(STT_HD)
);

ALTER TABLE CHI_TIET_HD
ADD CONSTRAINT MA_SP
FOREIGN KEY (MA_SP) REFERENCES QL_DMSP(MA_SP)
ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE CHI_TIET_HD
ADD CONSTRAINT STT_HD
FOREIGN KEY (STT_HD) REFERENCES HOA_DON(STT_HD)
ON UPDATE CASCADE ON DELETE CASCADE;

insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('1','1',1,15000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('1','4',6,20000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('2','5',1,30000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('3','3',1,25000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('4','4',1,20000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('5','5',1,30000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('6','1',1,15000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('7','2',1,25000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('8','4',1,20000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('9','1',1,15000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('10','1',1,15000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('10','4',3,20000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('10','3',1,25000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('11','1',10,15000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('12','2',10,25000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('13','3',10,25000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('14','4',10,20000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('15','5',10,30000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('16','6',1,10000);
insert into CHI_TIET_HD(STT_HD,MA_SP,CTHD_SO_LUONG,CTHD_DON_GIA_BAN) VALUES ('17','4',10,20000);
SELECT * FROM CHI_TIET_HD;
SELECT * FROM QL_DMKH;
SELECT * FROM HOA_DON;
SELECT * FROM THUC_THU;
COMMIT;

delete from CHI_TIET_HD WHERE STT_HD = '17';

SELECT hd.STT_HD, nv.TEN_NV,kh.TEN_KH FROM HOA_DON hd join NHAN_VIEN nv on hd.MA_NV=nv.MA_NV
		join QL_DMKH kh on hd.MA_KH=kh.MA_KH where hd.STT_HD='1';

select sp.MA_SP from QL_DMSP sp where sp.MA_SP NOT IN (select ct.MA_SP from HOA_DON hd 
                join CHI_TIET_HD ct on hd.STT_HD=ct.STT_HD where hd.NGAY_LAP_HD = CURDATE());

create table THUC_THU(
   STT_HD 		int(10) primary key,
   THANH_TOAN   float not null,
   TIEN_GIAM 	float,
   NGAY_THU  	date not null,
   FOREIGN KEY (STT_HD) REFERENCES HOA_DON(STT_HD) 
   ON UPDATE CASCADE ON DELETE CASCADE
);

select * from THUC_THU;
drop table THUC_THU;

insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('1',135000,0,'2023-4-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('2',30000,0,'2023-4-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('3',25000,0,'2023-4-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('4',20000,0,'2023-4-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('5',30000,0,'2023-4-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('6',15000,0,'2023-4-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('7',25000,0,'2023-4-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('8',20000,0,'2023-4-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('9',15000,0,'2023-4-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('10',90000,10000,'2023-5-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('11',150000,0,'2023-5-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('12',250000,0,'2023-5-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('13',250000,0,'2023-5-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('14',200000,0,'2023-5-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('15',300000,0,'2023-5-01');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('16',10000,0,'2023-5-02');
insert into THUC_THU(STT_HD,THANH_TOAN,TIEN_GIAM,NGAY_THU) VALUES ('17',200000,5000,'2023-5-02');
delete from THUC_THU where STT_HD='17';
commit;