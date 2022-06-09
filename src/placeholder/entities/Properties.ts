import { ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, OneToOne } from 'typeorm';
import { Offices } from './Offices';
import { Warehouses } from './Warehouses';

@Entity('Properties', { schema: 'placeholder' })
export class Properties {
  @ApiPropertyOptional({ type: Number })
  @Column('int', { primary: true, name: 'property_id' })
  propertyId: number;

  @ApiPropertyOptional({ type: String })
  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @ApiPropertyOptional({ type: String })
  @Column('varchar', { name: 'address', length: 255 })
  address: string;

  @ApiPropertyOptional({ type: String })
  @Column('varchar', { name: 'city', length: 255 })
  city: string;

  @ApiPropertyOptional({ type: String })
  @Column('varchar', { name: 'province', length: 255 })
  province: string;

  @ApiPropertyOptional({ type: String })
  @Column('varchar', { name: 'postal', length: 255 })
  postal: string;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'access_247', nullable: true, width: 1 })
  access_247: boolean | null;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'utilities_included', nullable: true, width: 1 })
  utilitiesIncluded: boolean | null;

  @ApiPropertyOptional({ type: String })
  @Column('date', { name: 'availability', nullable: true })
  availability: string | null;

  @ApiPropertyOptional({ type: Number })
  @Column('int', { name: 'cost', nullable: true })
  cost: number | null;

  @OneToOne(() => Offices, (offices) => offices.property)
  offices: Offices;

  @OneToOne(() => Warehouses, (warehouses) => warehouses.property)
  warehouses: Warehouses;
}
