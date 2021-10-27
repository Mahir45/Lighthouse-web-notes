const cookie1 = ["🍫", "🍫", "🍇", "🍫"];
const cookie2 = ["🍫", "🍇", "🍫", "🍫", "🍇"];
const cookies3 = ["🍫", "🍫", "🍫"];

const raisinAlarm = function(cookie) {
  // Put your solution here
  for (let i = 0; i < cookie.length; i++) {
    if (cookie === "🍇"){
      console.log("Raisin alert!");
    } else {
      console.log("All good!");
    }
  }
};

raisinAlarm(cookie1);  // string1
raisinAlarm(cookie2); // string2
raisinAlarm(cookies3); // string3