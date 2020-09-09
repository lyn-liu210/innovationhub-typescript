import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany } from "typeorm";
import { User } from "./user";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;

    @OneToMany(type => User, user => user.project) // note: we will create author property in the Photo class below
    users: User[];
}