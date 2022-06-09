import { ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { MeetingRooms } from './MeetingRooms';
import { Properties } from './Properties';

@Entity('Offices', { schema: 'placeholder' })
export class Offices {
  @ApiPropertyOptional({ type: Number })
  @Column('int', { primary: true, name: 'property_id' })
  propertyId: number;

  @ApiPropertyOptional({ type: Number })
  @Column('int', { name: 'capacity' })
  capacity: number;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'kitchen', nullable: true, width: 1 })
  kitchen: boolean | null;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'gym', nullable: true, width: 1 })
  gym: boolean | null;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'parking', nullable: true, width: 1 })
  parking: boolean | null;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'mailservice', nullable: true, width: 1 })
  mailservice: boolean | null;

  @OneToMany(() => MeetingRooms, (meetingRooms) => meetingRooms.property)
  meetingRooms: MeetingRooms[];

  @OneToOne(() => Properties, (properties) => properties.offices, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'property_id', referencedColumnName: 'propertyId' }])
  property: Properties;
}
