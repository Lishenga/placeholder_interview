import { ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { LoadingBays } from './LoadingBays';
import { Properties } from './Properties';

@Entity('Warehouses', { schema: 'placeholder' })
export class Warehouses {
  @ApiPropertyOptional({ type: Number })
  @Column('int', { primary: true, name: 'property_id' })
  propertyId: number;

  @ApiPropertyOptional({ type: Number })
  @Column('int', { name: 'square_footage' })
  squareFootage: number;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'forklifts', nullable: true, width: 1 })
  forklifts: boolean | null;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'parking_trailer', nullable: true, width: 1 })
  parkingTrailer: boolean | null;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'fenced_yard', nullable: true, width: 1 })
  fencedYard: boolean | null;

  @ApiPropertyOptional({ type: Number })
  @Column('int', { name: 'power_amps', nullable: true })
  powerAmps: number | null;

  @OneToMany(() => LoadingBays, (loadingBays) => loadingBays.property)
  loadingBays: LoadingBays[];

  @OneToOne(() => Properties, (properties) => properties.warehouses, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'property_id', referencedColumnName: 'propertyId' }])
  property: Properties;
}
