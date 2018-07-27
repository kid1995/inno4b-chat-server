import "reflect-metadata";
import {Connection, createConnection, ObjectID} from "typeorm";
import {User} from "./entity/User";
import {UserDao} from "./DAO/UserDao";
import {getConnection} from "typeorm";
import {ObjectId} from "bson";
import {RoomDAO} from "./DAO/RoomDAO";
import {Room} from "./entity/Room";


const connection = createConnection().then(async connection => {

    let userdao = new UserDao(connection);
    let user = new User();

    user.lastName = "test2";
    user.firstName = "firstname2";
    user.avatarURL = "hello2";


    let roomdao = new RoomDAO(connection);
    let room = new Room();

    room.name= "chat room";
    room.roomID = 12;




    roomdao.create(room);

    roomdao.findAll().then(foundRooms =>{
        console.log("rooms: ", foundRooms);
    })


    roomdao.findById("5b5b1654fd3f5304d4d90e7f").then(room =>{
        let updateRoom = new Room();
        updateRoom = room;
        updateRoom.name ="new Name";
        roomdao.create(updateRoom);
    })

//userdao.create(user);

    userdao.findById("5b5b1654fd3f5304d4d90e7f").then(
        foundedUser =>{
            console.log("Founded User", foundedUser);
        }
    )

    userdao.update(new ObjectId("5b5b1654fd3f5304d4d90e7f"),"firstname","the")


/*
userdao.findAll().then((foundUsers) => {
    console.log("all users" , foundUsers);
});
*/

/*
    userdao.findAll().then((foundUsers) => {
        let userToDelete =  new Array <User>();
        for (let i =0; i<foundUsers.length;i++ ){
         if   (foundUsers[i].uuid.toString() === "5b5891c7b335620498c0fd26") {
             userToDelete.push(foundUsers[i]);
                console.log("entity found ", foundUsers[i]);
             break;
         }
        } 
        
         userdao.delete(userToDelete).then(()=> {
             userdao.findAll().then((foundUsers) => {
                 console.log("all users found", foundUsers);
             });
         });;
    }); */


/*
    userdao.create(user).then( (updatedUser) => {

        updatedUser.avatarURL = "new avatar";
        let y =new ObjectId("5b5b12952cee1504bc0f6d63");
        userdao.update(y,"firstname","kiet").then(() => {
            userdao.findAll().then((foundUsers) => {
                console.log("all users" , foundUsers);
            });
        });
    });
*/

    }
);