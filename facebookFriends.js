let facebookProfile = {
  name: "aiman",
  friends: 500,
  messages: ["good morning", "my status", "mood"],
  postMessage: function (message) {
    return facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    return facebookProfile.messages.splice(index,1);
  },
  addFriend: function () {
    return facebookProfile.friends += 1;
  },
  removeFriend: function () {
    return facebookProfile.friends -= 1;
  },
}

console.log(facebookProfile.friends);