const list=document.querySelector('.chat-list')
const newChatForm=document.querySelector('.new-chat');
const updateForm=document.querySelector('.new-name');
const updatemsg=document.querySelector('.update-mssg');
const rooms=document.querySelector('.chat-rooms');



rooms.addEventListener('click',(e)=>{

if(e.target.tagName === 'BUTTON')
{

chatui.clear();

console.log(e.target.getAttribute('id'));
newc.updateRoom(e.target.getAttribute('id'));

newc.getchats((chat)=>chatui.render(chat));
}

});


newChatForm.addEventListener('submit',(e)=>{

    e.preventDefault();

    const message=newChatForm.message.value.trim();

    newc.addChat(message).then(()=>{newChatForm.reset()})
                          .catch((err)=>{console.log(err)});
});

updateForm.addEventListener('submit',(e)=>{

    e.preventDefault();

const newname=updateForm.name.value.trim();

newc.updateName(newname);

updateForm.reset();

updatemsg.innerText=`Your name was updated to ${newname}`;

setTimeout(()=>{
    updatemsg.innerText='';
},3000)
});


const username=localStorage.username?localStorage.username:"anon";


const newc=new Chatroom(username,'gaming');
const chatui=new ChatUI(list);


newc.getchats((data)=>{

chatui.render(data);
});
