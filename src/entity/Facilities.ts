import {ManyToOne, Column, PrimaryGeneratedColumn, Entity, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany, OneToOne, JoinColumn} from 'typeorm';
import { Districts } from './Districts';

@Entity({name: 'Facility'})
export class Facilities{

    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column()
    facility_name: string;

    @Column()
    common_name: string;

    @Column()
    facility_code: string;

    @ManyToOne(type => Districts, districts => districts.facility, {cascade: true})
    @JoinColumn({name: "district_id"})
    district: Districts;

}
