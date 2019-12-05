import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Facilities } from "./Facilities";

@Entity({name:'District'})
export class Districts {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    district_name: string;

    @Column()
    district_code: string;

    @OneToMany(type => Facilities, facilities => facilities.district)
    facility: Facilities[];

    @Column()
    created_at: number;

    @Column()
    updated_at: number;

    @Column()
    zoneId: number;
    
}
