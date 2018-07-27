import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";
import {User} from "./User";


enum MessageType{
    TEXT,
    HTML,
    MEDIA
}

@Entity()
export class AMessage {
    @ObjectIdColumn()
    uuid: ObjectID;

    @Column()
    owner: User;

    @Column()
    type:MessageType;
}
