import {Entity, ObjectIdColumn, ObjectID, Column, EntitySchema} from "typeorm";


enum Gender{
    MANN,
    FRAU,
    UNBEKANNT
}

@Entity()
export class User extends EntitySchema{

    @ObjectIdColumn()
    uuid: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    gender: Gender;

    @Column()
    avatarURL: string;

    @Column()
    avatarBase64: string;

    constructor() {
        super(null);
    }

}
