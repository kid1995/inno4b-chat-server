import {
    Connection,
    DeepPartial, DeleteWriteOpResultObject,
    EntitySchema,
    getMongoManager,
    MongoRepository,
    UpdateResult,
    UpdateWriteOpResult
} from "typeorm";
import {getMongoRepository} from "typeorm";

import {User} from "../entity/User";
import {ObjectLiteral} from "typeorm/common/ObjectLiteral";
import {ObjectId, ObjectID} from "bson";


export abstract class MongoBaseDao <T extends EntitySchema> {


    private connection: Connection;
    private mongoRepo: MongoRepository<T>;

    constructor(connection: Connection) {
        this.connection = connection;
        this.mongoRepo = connection.manager.getMongoRepository(this.getEntityType());
    }


    public create(t: DeepPartial<T>) : Promise<DeepPartial<T>> {
        return this.mongoRepo.save(t);
    }

    public update( uuid : ObjectId,attrToUpdate:string,newValue:any) : Promise<UpdateWriteOpResult> {

        return this.mongoRepo.updateOne({"_id": {$eq:uuid}},{ $set:{attrToUpdate:newValue}});
    }

    public delete(entities : T[]) : Promise<T[]> {
        return this.mongoRepo.remove(entities);
    }

    public findById(uuid: string) : Promise<T> {
        return this.mongoRepo.findOne(uuid);
    }

    public findAll() : Promise<T[]>{
        return this.mongoRepo.find();
    }

    public abstract getEntityType(): any

}



