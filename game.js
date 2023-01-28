let userScore = 0;
let computerScore = 0;

var choices = [];
start();
function start() {
    for (let i = 0; i < 3; i++) {
        choices[i] = document.getElementById(`choice${(i + 1)}`);
        // var rec = choices[i].id;
        // console.log();
        choices[i].onclick = () => play(choices[i].id);
        choices[i].ontouchstart = () => play(choices[i].id);
        // console.log(choices[i]);
    }
}


function play(selected) {
    const image_array = ["choice1", "choice2", "choice3"];
    // console.log('function play called');
    // console.log(`\n selected =${selected}` + "\n");

    // !!!!!!! setting images for user and computer ~~~~~~~~~~

    document.getElementById("user_image").src = `images/${selected}.png`;
    var random_number;
    document.getElementById(
        `computer_image`
    ).src = "images/animation.gif";
    document.querySelector("button").textContent = " ";
    setTimeout(() => {
        random_number = Math.floor(Math.random() * 3);
        document.getElementById(
            `computer_image`
        ).src = `images/${image_array[random_number]}.png`;
        console.log("\n" + image_array[random_number]);
        // ~~~~~~~~~~~~ function to set scores ~~~~~~~~~~~
        set_score(selected, image_array[random_number]);

    }, 1000);
}

function set_score(user, computer) {

    var status = null;

    if (user === "choice1") {
        switch (computer) {
            case "choice1":
                status = "IT'S A DRAW😐";
                break;
            case "choice2":
                status = "YOU LOST😓";
                computerScore++;
                fill_star("computer");
                break;
            case "choice3":
                status = '🎉YOU WON🎊';
                userScore++;
                fill_star("user");
                break;
            default: console.log("ISSUE WITH COMPUTER VARIABLE IN SET_SCORE");
        }
    }
    if (user === "choice2") {
        switch (computer) {
            case "choice1":
                status = "🎊YOU WON🎉";
                userScore++;
                fill_star("user");
                break;
            case "choice2":
                status = "IT'S A DRAW😐";
                break;
            case "choice3":
                status = 'YOU LOST😓';
                computerScore++;
                fill_star("computer");
                break;
            default: console.log("ISSUE WITH COMPUTER VARIABLE IN SET_SCORE");
        }
    }
    if (user === "choice3") {
        switch (computer) {
            case "choice1":
                status = "YOU LOST😓";
                computerScore++;
                fill_star("computer");
                break;
            case "choice2":
                status = "🎉YOU WON🎊";
                userScore++;
                fill_star("user");
                break;
            case "choice3":
                status = `IT'S A DRAW😐`;
                break;
            default: console.log("ISSUE WITH COMPUTER VARIABLE IN SET_SCORE");
        }
    }
    // ~~~~~~~FUNCTION TO SET WINNING MSG
    show_msg(status);
    // ~~~~~~~FUNCTION TO CHECK IF WIN OCCURED
    checkwin();
}

function fill_star(whose) {
    if (whose === "user") {
        document.getElementById(`star${userScore}`).classList.add("scored");
    }

    if (whose === "computer") {
        document.getElementById(`star${(computerScore + 5)}`).classList.add("scored");
    }
}

function show_msg(msg) {
    var msg_box = document.querySelector("button");
    // console.log(msg_box);
    msg_box.textContent = msg;
}

function checkwin() {
    // console.log(`\nuserscore=${userScore}\ncomputerscore=${computerScore}`);
    if (userScore === '5' || computerScore === '5') {
        // here i'll show popup to win 
        window.open();
        window.close();
    }
}