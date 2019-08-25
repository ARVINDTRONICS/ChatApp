class ChatUI{

constructor(list){

    this.list=list

}

clear(){

this.list.innerHTML='';


}

render(data){

    const when=dateFns.distanceInWordsToNow(
        data.created_at.toDate()
    );
const html=`<li class="list-group-item">
<span class="username">${data.username}</span>
<span class="message">${data.message}</span>
<div class="created_at">${when} ago</div>
</li>`

this.list.innerHTML+=html;

}

}