CREATE TABLE IF NOT EXISTS destinos (
 id bigint(20) NOT NULL AUTO_INCREMENT,
 valor decimal(19,2) NOT NULL,
 nome varchar(100) DEFAULT NULL,
 descricao varchar(100) DEFAULT NULL,
 duracao varchar(100) DEFAULT NULL,
 pontos varchar(100) DEFAULT NULL,
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS disponibilidade (
     id bigint(20) NOT NULL AUTO_INCREMENT,
     nome varchar(100) DEFAULT NULL,
     data varchar(100) DEFAULT NULL,
     vagas int(1) DEFAULT NULL,
     destino_id int DEFAULT NULL,
    PRIMARY KEY (id)
);
