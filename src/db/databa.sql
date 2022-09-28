create database if not exists companydb;

use companydb;

create table employes (
  id int(11) not null auto_increment,
  name varchar(45) default null,
  salary int (5) default null,
  primary key (id)
)ENGINE =InnoDB;