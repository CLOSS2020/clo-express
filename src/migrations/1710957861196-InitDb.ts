import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDb1710957861196 implements MigrationInterface {
  name = 'InitDb1710957861196';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`usuarios\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechamodifi\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`nombre\` varchar(30) NOT NULL DEFAULT '', \`username\` varchar(30) NOT NULL DEFAULT '', \`password\` varchar(255) NOT NULL DEFAULT '', \`vendedor\` varchar(30) NOT NULL DEFAULT '', \`almacen\` varchar(2) NOT NULL DEFAULT '', \`desactivo\` decimal(2,0) NOT NULL DEFAULT '0', \`ualterprec\` decimal(4,0) NOT NULL, \`sesionactiva\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`version\` varchar(30) NOT NULL DEFAULT '1.0.0', \`sesion\` int NOT NULL DEFAULT '0', \`role\` enum ('USER', 'CUSTOMER', 'ADMIN') NOT NULL DEFAULT 'USER', INDEX \`vendedor\` (\`vendedor\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`ke_opti\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechamodifi\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`kti_ndoc\` varchar(30) NOT NULL DEFAULT '', \`kti_tdoc\` varchar(30) NOT NULL DEFAULT 'PED', \`kti_codcli\` varchar(30) NOT NULL DEFAULT '', \`kti_nombrecli\` varchar(30) NOT NULL DEFAULT '', \`kti_codven\` varchar(30) NOT NULL DEFAULT '', \`kti_docsol\` varchar(30) NOT NULL DEFAULT '', \`kti_condicion\` varchar(30) NOT NULL DEFAULT '', \`kti_tipprec\` decimal(2,0) NOT NULL DEFAULT '0', \`kti_totneto\` decimal(2,0) NOT NULL DEFAULT '0', \`kti_status\` varchar(2) NOT NULL DEFAULT '0', \`kti_nroped\` varchar(8) NOT NULL DEFAULT '', \`kti_fchdoc\` datetime NOT NULL DEFAULT '0001-01-01 01:01:01', \`kti_negesp\` char(2) NOT NULL DEFAULT '0', \`ke_pedstatus\` char(2) NOT NULL DEFAULT '', \`dolarflete\` int NOT NULL DEFAULT '0', INDEX \`kti_codven\` (\`kti_codven\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`articulo\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechamodifi\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`codigo\` varchar(30) NOT NULL DEFAULT '', \`grupo\` varchar(6) NOT NULL DEFAULT '', \`subgrupo\` varchar(6) NOT NULL DEFAULT '', \`nombre\` varchar(150) NOT NULL DEFAULT '', \`referencia\` varchar(20) NOT NULL DEFAULT '', \`marca\` varchar(20) NOT NULL DEFAULT '', \`unidad\` varchar(15) NOT NULL DEFAULT '', \`existencia\` decimal(20,7) NOT NULL DEFAULT '0.0000000', \`precio1\` decimal(20,7) NOT NULL DEFAULT '0.0000000', \`precio2\` decimal(20,7) NOT NULL DEFAULT '0.0000000', \`precio3\` decimal(20,7) NOT NULL DEFAULT '0.0000000', \`precio4\` decimal(20,7) NOT NULL DEFAULT '0.0000000', \`precio5\` decimal(20,7) NOT NULL DEFAULT '0.0000000', \`precio6\` decimal(20,7) NOT NULL DEFAULT '0.0000000', \`precio7\` decimal(20,7) NOT NULL DEFAULT '0.0000000', \`discont\` decimal(4,0) NOT NULL DEFAULT '0', \`vta_max\` decimal(20,7) NOT NULL DEFAULT '0.0000000', \`vta_min\` decimal(20,7) NOT NULL DEFAULT '0.0000000', \`dctotope\` decimal(4,2) NOT NULL DEFAULT '0.00', \`enpreventa\` char(1) NOT NULL DEFAULT '', \`comprometido\` decimal(24,7) NOT NULL DEFAULT '0.0000000', \`vta_minenx\` decimal(15,3) NOT NULL DEFAULT '0.000', \`vta_solofac\` int NOT NULL DEFAULT '0', \`vta_solone\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`ke_opmv\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechamodifi\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`kti_tdoc\` varchar(8) NOT NULL DEFAULT '', \`kti_ndoc\` varchar(17) NOT NULL DEFAULT '', \`kti_tipprec\` decimal(2,0) NOT NULL DEFAULT '0', \`kmv_codart\` varchar(25) NOT NULL DEFAULT '', \`kmv_nombre\` varchar(150) NOT NULL DEFAULT '', \`kmv_cant\` decimal(24,7) NOT NULL DEFAULT '0.0000000', \`kmv_artprec\` decimal(24,7) NOT NULL DEFAULT '0.0000000', \`kmv_stot\` decimal(24,7) NOT NULL DEFAULT '0.0000000', \`kmv_dctolin\` decimal(4,2) NOT NULL DEFAULT '0.00', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`cliempre\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechamodifi\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`codigo\` varchar(20) NOT NULL DEFAULT '', \`nombre\` char(100) NOT NULL DEFAULT '', \`direccion\` varchar(200) NOT NULL DEFAULT '', \`telefonos\` varchar(150) NOT NULL DEFAULT '', \`perscont\` varchar(50) NOT NULL DEFAULT '', \`vendedor\` varchar(8) NOT NULL DEFAULT '', \`contribespecial\` decimal(4,0) NOT NULL DEFAULT '0', \`status\` decimal(2,0) NOT NULL DEFAULT '0', \`sector\` varchar(6) NOT NULL DEFAULT '', \`subcodigo\` varchar(6) NOT NULL DEFAULT '', \`precio\` decimal(2,0) NOT NULL DEFAULT '0', \`email\` varchar(1024) NOT NULL DEFAULT '', \`kne_activa\` char(1) NOT NULL DEFAULT '', \`kne_mtomin\` decimal(24,7) NOT NULL DEFAULT '0.0000000', \`noemifac\` int NOT NULL DEFAULT '0', \`noeminota\` int NOT NULL DEFAULT '0', \`fchultvta\` date NOT NULL DEFAULT '0001-01-01', \`mtoultvta\` decimal(20,6) NOT NULL DEFAULT '0.000000', \`prcdpagdia\` decimal(20,6) NOT NULL DEFAULT '0.000000', \`promdiasp\` decimal(20,6) NOT NULL DEFAULT '0.000000', \`riesgocrd\` decimal(20,6) NOT NULL DEFAULT '0.000000', \`cantdocs\` decimal(20,6) NOT NULL DEFAULT '0.000000', \`totmtodocs\` decimal(20,6) NOT NULL DEFAULT '0.000000', \`prommtodoc\` decimal(20,6) NOT NULL DEFAULT '0.000000', \`diasultvta\` decimal(20,6) NOT NULL DEFAULT '0.000000', \`promdiasvta\` decimal(20,6) NOT NULL DEFAULT '0.000000', \`limcred\` decimal(20,6) NOT NULL DEFAULT '0.000000', \`fchcrea\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`dolarflete\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`categorias\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`fechamodifi\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` timestamp(6) NULL, \`nombre\` varchar(30) NOT NULL DEFAULT '', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`categorias\``);
    await queryRunner.query(`DROP TABLE \`cliempre\``);
    await queryRunner.query(`DROP TABLE \`ke_opmv\``);
    await queryRunner.query(`DROP TABLE \`articulo\``);
    await queryRunner.query(`DROP INDEX \`kti_codven\` ON \`ke_opti\``);
    await queryRunner.query(`DROP TABLE \`ke_opti\``);
    await queryRunner.query(`DROP INDEX \`vendedor\` ON \`usuarios\``);
    await queryRunner.query(`DROP TABLE \`usuarios\``);
  }
}
