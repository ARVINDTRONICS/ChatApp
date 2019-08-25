class Chatroom {

    constructor(username, room) {

        this.username = username,
        this.room = room,
        this.chats = db.collection('Chats');
        this.unsub;
    }

async addChat(message){


const now=new Date();
const chat={
message,
username:this.username,
room:this.room,
created_at:firebase.firestore.Timestamp.fromDate(now)
}

const response=await this.chats.add(chat);
return response;
}

getchats(callback){

this.unsub=this.chats
.where('room','==',this.room)
.orderBy('created_at')
.onSnapshot((snapshot)=>{

snapshot.docChanges().forEach((change)=>{

callback(change.doc.data());

})
});

}

updateName(username){

this.username=username;

console.log(this.username);

localStorage.setItem('username',username);
}
updateRoom(room){

   
    this.room=room;
console.log(this.room);
if(this.unsub){
    this.unsub();
}

}
}





