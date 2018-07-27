import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";
import DateTimeFormat = Intl.DateTimeFormat;


export class RoomMemberMetaData {

    @Column()
    joinDate: DateTimeFormat;

    @Column()
    leaveDate: DateTimeFormat;

    @Column()
    isAdmin: boolean;

}