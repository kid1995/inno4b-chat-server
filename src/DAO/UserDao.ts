import {Connection, Entity, EntitySchema, getConnection, getMongoManager, MongoRepository, ObjectID} from "typeorm";
import {getMongoRepository} from "typeorm";
import {User} from "../entity/User";
import {BSON, ObjectId} from "bson";
import {MongoBaseDao} from "./MongoBaseDao";


export class UserDao extends MongoBaseDao<User>{

    getEntityType(): any {

        return User.name;
    }

}
