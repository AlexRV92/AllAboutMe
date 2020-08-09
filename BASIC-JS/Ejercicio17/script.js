let newMessage = " mañana a las 11"

let facebookProfile = { 

  name: "Alex",
  friends: 200,
  messages: ["illo k ase", "me debe 6  mil pesetas de whisky torrente", "Migue y sus radlers"],

  postMessage: function addmessage(message){ 
    this.messages.push(message);

  },

  deleteMessage: function deleteM(index){ 

    this.messages.splice(index, 1);
  },

  addFriend: function(){ 
    this.friends += 1;
  },

  removeFriend: function(){ 
    this.friends -= 1;
  },

}


// Pruebas
facebookProfile.postMessage(newMessage);
console.log(facebookProfile.messages);

facebookProfile.deleteMessage(3);
console.log(facebookProfile.messages);

console.log(facebookProfile.friends);
facebookProfile.addFriend();
console.log(facebookProfile.friends);

console.log(facebookProfile.friends);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);