import { MigrationInterface, QueryRunner } from "typeorm";

export class Models1674620212898 implements MigrationInterface {
  name = "Models1674620212898";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "email" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "confirmed" boolean NOT NULL DEFAULT false, "address" character varying NOT NULL, "passcode" character varying NOT NULL, "records" json, "digId" bigint, CONSTRAINT "UQ_dbcde6796c076fc8bca0ff9e2f1" UNIQUE ("address"), CONSTRAINT "PK_1e7ed8734ee054ef18002e29b1c" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "geo" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "gh2" character(2) NOT NULL, "gh9" character(9) NOT NULL, "lat" character varying NOT NULL, "lng" character varying NOT NULL, "records" json, CONSTRAINT "PK_56e32047948967e75e3d980c9c1" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "place" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "line" character varying NOT NULL, "city" character varying NOT NULL, "region" character varying NOT NULL, "country" character varying NOT NULL, "records" json, "digId" bigint, "geoId" integer, CONSTRAINT "PK_96ab91d43aa89c5de1b59ee7cca" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "dig" ("id" SERIAL NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "active" boolean NOT NULL DEFAULT false, "pictureDate" character varying, "picture" character varying NOT NULL, "description" character varying NOT NULL, "neighborhood" character varying NOT NULL, "value" character varying NOT NULL, "money" character varying NOT NULL, "records" json, "placeId" integer, "emailId" integer, CONSTRAINT "REL_8654463c4931a3cb900268502f" UNIQUE ("placeId"), CONSTRAINT "REL_40c7c88682fceb1db71072dafa" UNIQUE ("emailId"), CONSTRAINT "PK_f89345c70a224c5bbd6ff756de2" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "place" ADD CONSTRAINT "FK_3ae9c9fc4682b3ab95f7344ef0f" FOREIGN KEY ("geoId") REFERENCES "geo"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "dig" ADD CONSTRAINT "FK_8654463c4931a3cb900268502fb" FOREIGN KEY ("placeId") REFERENCES "place"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "dig" ADD CONSTRAINT "FK_40c7c88682fceb1db71072dafa3" FOREIGN KEY ("emailId") REFERENCES "email"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "dig" DROP CONSTRAINT "FK_40c7c88682fceb1db71072dafa3"`
    );
    await queryRunner.query(
      `ALTER TABLE "dig" DROP CONSTRAINT "FK_8654463c4931a3cb900268502fb"`
    );
    await queryRunner.query(
      `ALTER TABLE "place" DROP CONSTRAINT "FK_3ae9c9fc4682b3ab95f7344ef0f"`
    );
    await queryRunner.query(`DROP TABLE "dig"`);
    await queryRunner.query(`DROP TABLE "place"`);
    await queryRunner.query(`DROP TABLE "geo"`);
    await queryRunner.query(`DROP TABLE "email"`);
  }
}
