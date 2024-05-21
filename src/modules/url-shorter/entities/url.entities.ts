import { Column, Entity } from 'typeorm';
import { BaseEntities } from 'src/base/entities';

@Entity()
export class UrlEntities extends BaseEntities {
  @Column({
    name: 'url',
    nullable: false,
    type: 'varchar',
  })
  url!: string;

  @Column({
    name: 'slug',
    nullable: true,
    type: 'varchar',
  })
  slug?: string;
}
