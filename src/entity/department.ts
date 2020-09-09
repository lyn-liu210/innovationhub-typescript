import {Entity, Column,PrimaryGeneratedColumn, OneToOne,JoinColumn} from "typeorm";
import { User } from "./user";
 
@Entity()
export class Department {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    departname: string;
    
    @Column()
    description : string;

    @OneToOne(type => User, user => user.department)
    user : User
}