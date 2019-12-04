import {ManyToOne, Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany, OneToOne, JoinColumn} from 'typeorm';
import { Districts } from './Districts';

@Entity()
export class Facilities{

    @PrimaryGeneratedColumn()
    facility_id: number;

    @Column()
    facility_name: string;

    @Column()
    common_name: string;

    @Column()
    facility_code: string;

    @Column()
    facility_date_opened: Date;

    @Column({ type: 'json', nullable: true })
    facility_code_mapping: object;

    @Column()
    facilityTypeId: number;

    @Column()
    facilityOwnerId: number;

    @Column()
    facilityOperationalStatusId: number;

    @Column()
    facilityRegulatoryStatusId:number;

    @ManyToOne(type => Districts, districts => districts.facility, {cascade: true})
    district: Districts;

}
