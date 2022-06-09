import { ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Warehouses } from './Warehouses';

@Index('LoadingBays_Warehouses', ['propertyId'], {})
@Entity('LoadingBays', { schema: 'placeholder' })
export class LoadingBays {
  @ApiPropertyOptional({ type: Number })
  @Column('int', { primary: true, name: 'bay_id' })
  bayId: number;

  @ApiPropertyOptional({ type: Number })
  @Column('int', { name: 'property_id' })
  propertyId: number;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'truck_level', width: 1 })
  truckLevel: boolean;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'trailer_53', width: 1 })
  trailer_53: boolean;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'dock_lock', width: 1 })
  dockLock: boolean;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'leveler', width: 1 })
  leveler: boolean;

  @ManyToOne(() => Warehouses, (warehouses) => warehouses.loadingBays, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'property_id', referencedColumnName: 'propertyId' }])
  property: Warehouses;
}
