import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { DEFAULT_MIGRATION_FIELDS_CONFIG } from '../../constants';

export class createUrlTable1716209390437 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'url',
        columns: [
          {
            name: 'url',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'slug',
            type: 'varchar',
            isNullable: true,
          },
          ...DEFAULT_MIGRATION_FIELDS_CONFIG,
        ],
      }),
      false,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('url');
  }
}
