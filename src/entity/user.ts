import {Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn,ManyToOne} from "typeorm";
import { Department } from "./department";
import { Project } from "./project";
 
@Entity()
export class User {
 
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    name: string;
    
    @Column()
    gender: string;

    @Column()
    age: number;

    @OneToOne(type => Department, department => department.user)
    @JoinColumn()
    department: Department

    @ManyToOne(type => Project, project => project.users)
    project: Project
}