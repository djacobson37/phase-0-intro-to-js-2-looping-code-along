const writeCards = (arr,event) => {
  const messages = []
  for(let i = 0; i < arr.length;i++) {
      
         const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
         messages.push(greetingMessage)
         
  }
 return messages

}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

var countdown = 11;
while (countdown > 0){
    countdown--;
    console.log(countdown);
}
