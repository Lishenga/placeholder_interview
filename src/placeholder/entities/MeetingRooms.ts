import { ApiPropertyOptional } from '@nestjs/swagger';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Offices } from './Offices';

@Index('MeetingRooms_Offices', ['propertyId'], {})
@Entity('MeetingRooms', { schema: 'placeholder' })
export class MeetingRooms {
  @ApiPropertyOptional({ type: Number })
  @Column('int', { primary: true, name: 'room_id' })
  roomId: number;

  @ApiPropertyOptional({ type: Number })
  @Column('int', { name: 'property_id' })
  propertyId: number;

  @ApiPropertyOptional({ type: Number })
  @Column('int', { name: 'capacity' })
  capacity: number;

  @ApiPropertyOptional({ type: Number })
  @Column('int', { name: 'square_footage' })
  squareFootage: number;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'av_equipment', width: 1 })
  avEquipment: boolean;

  @ApiPropertyOptional({ type: Boolean })
  @Column('tinyint', { name: 'exclusive', width: 1 })
  exclusive: boolean;

  @ManyToOne(() => Offices, (offices) => offices.meetingRooms, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
  })
  @JoinColumn([{ name: 'property_id', referencedColumnName: 'propertyId' }])
  property: Offices;
}
