
function countDown(number) {
  let countdown = number; 
  while (countdown >= 0) {
    console.log(countdown--);
  }
}

const nameList = [""]
const messageList = []

function writeCards(name, event) {
  for (let i = 0; i <= nameList.length; i++) {
  console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return messageList;
}
