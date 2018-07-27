import {MongoBaseDao} from "./MongoBaseDao";
import {Room} from "../entity/Room";


export class RoomDAO extends MongoBaseDao<Room>{

    getEntityType(): any {

        return Room.name;
    }

}
