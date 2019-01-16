drop database ArticlesDB;
create database ArticlesDB;
use ArticlesDB;

create table Articles
(
    id          int             not null
                                auto_increment,
    
    headline    varchar (120)   not null
                                unique,

    meta        varchar (120),

    image_url   varchar (120),

    createdAt       timestamp
                    not null
                    default CURRENT_TIMESTAMP,
    
    primary key (id)
);
