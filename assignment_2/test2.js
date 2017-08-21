
//magic eightball

var numberofreplys = 8;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else';

        if(choice == 1){
            reply = "Your number is " + 1;
        } else if( choice == 2){
            reply = "Your number is " + 2;
        } else if(choice == 3){
            reply = "Your number is " + 3;
        } else if(choice == 4){
            reply = "Your number is " + 4;
        } else if(choice == 5){
            reply = "Your number is " + 5;
        } else if(choice == 6){
            reply = "Your number is " + 6;
        } else if(choice == 7){
            reply = "Your number is " + 7;
        } else if(choice == 8){
            reply = "Your number is " + 8;
        } else {
            reply = "Sorry, there was an error";
        }
   

    console.log(reply);
}

ask();

for(var i = 1; i <= 100; i++){
    if(i % 5 == 0 && i % 3 == 0){
        console.log("fizzbuzz");
    } else if(i % 3 == 0){
        console.log("buzz");
    } else if(i % 5 == 0){
        console.log("fizz");
    }
}

var string = "";
for(var i = 1;i <= 8; i++){
    if(i % 2 == 1){
        string = string + "\n# # # # ";
    } else if(i % 2 == 0){
        string = string + "\n # # # #";
    } else {
        console.log("Sorry, something went wrong");
    }
}
console.log(string);