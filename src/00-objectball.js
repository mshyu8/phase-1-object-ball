function gameObject() {
    let game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
    return game;
}

// console.log(gameObject());

function numPointsScored(name) {
    let obj = gameObject();

    for(let teamKey in obj) {
        let team = obj[teamKey];

        for(let playerKey in team.players) {
            let player = team.players[playerKey];
            if(playerKey === name) {
                return player.points;
            }
        }
    }

    return "Player not found";
}

console.log(numPointsScored("Brendan Haywood"));


function shoeSize(name) {
    let obj = gameObject();

    for(let teamKey in obj) {
        let team = obj[teamKey];

        for(let playerKey in team.players) {
            let player = team.players[playerKey];
            if(playerKey === name) {
                return player.shoe;
            }
        }
    }

    return "Player not found";
}

console.log(shoeSize("Brendan Haywood"));

function teamColors(name) {
    let game = gameObject();

    for(let teamKey in game) {
        
        let team = game[teamKey];

        if(name === team.teamName) {
            return team.colors;
        }
    }

    return "Team not Found";
}

console.log(teamColors("Charlotte Hornets"));

function teamNames() {
    let game = gameObject();
    let teamArray = [];

    for(let teamKey in game) {
        let team = game[teamKey];

        teamArray.push(team.teamName);
    }

    return teamArray;
}

console.log(teamNames());

function playerNumbers(name) {
    let game = gameObject();
    let numbersArray = [];

    for(let teamKey in game) {
        let team = game[teamKey];

        if(name === team.teamName) {
            
            for(let playerKey in team.players) {
                let player = team.players[playerKey];

                numbersArray.push(player.number);
            }
        }
    }

    return numbersArray;
}

console.log(playerNumbers("Charlotte Hornets"));

function playerStats(name) {
    let game = gameObject();
    let playerObject;

    for(let teamKey in game) {
        let team = game[teamKey];

        for(let playerKey in team.players) {
            let player = team.players[playerKey];

            if(playerKey === name) {
                playerObject = {...player};
            }
        }
    }
    return playerObject;
}

console.log(playerStats("Alan Anderson"));

function bigShoeRebounds() {
    let game = gameObject();
    let biggestSize = ["name", 0, 0];

    for(let teamKey in game) {
        let team = game[teamKey];

        for(let playerKey in team.players) {
            player = team.players[playerKey];

            if(player.shoe >= biggestSize[1]) {
                biggestSize[0] = playerKey;
                biggestSize[1] = player.shoe;
                biggestSize[2] = player.rebounds;
            }
        }
    }
    return biggestSize[2];
}

console.log(bigShoeRebounds());
