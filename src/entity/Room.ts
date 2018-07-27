import {Entity, ObjectIdColumn, ObjectID, Column, EntitySchema} from "typeorm";
import {RoomMemberMetaData} from "./RoomMemberMetaData";
import {AMessage} from "./AMessage";

@Entity()
export class Room extends EntitySchema{

    @ObjectIdColumn()
    uuid: ObjectID;

    @Column()
    name: string;

    @Column()
    roomID: number;

    @Column()
    roomType: string;

    @Column(Type => RoomMemberMetaData)
    members: RoomMemberMetaData[];

   @Column(Type => AMessage)
    messages:AMessage[];

    constructor() {
        super(null);
    }

}
