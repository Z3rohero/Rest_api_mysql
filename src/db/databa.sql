create database if not exists companydb;

use companydb;

create table employes (
  id int(11) not null auto_increment,
  name varchar(45) default null,
  salary int (5) default null,
  primary key (id)
)ENGINE =InnoDB;

insert  employee values (1, 'zero', 1000),
(2, 'joe', 1000),
(3, 'henry', 2000),
(4, ' sam', 3000),



