import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';

export const DEFAULT_MIGRATION_FIELDS_CONFIG: TableColumnOptions[] = [
  {
    name: 'id',
    type: 'int',
    isPrimary: true,
    isGenerated: true,
    generationStrategy: 'increment',
  },
  {
    name: 'createdAt',
    type: 'timestamp',
    isPrimary: false,
    default: 'now()',
  },
  {
    name: 'updatedAt',
    type: 'timestamp',
    isNullable: false,
    default: 'now()',
  },
  {
    name: 'deletedAt',
    type: 'timestamp',
    isNullable: true,
    default: null,
  },
];
