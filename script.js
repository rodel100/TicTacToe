const main = (() => {
    let gameBoard = (() => {
        let makeGameBoard = () => {
            let container = document.querySelector('#container')
            for (let i = 0; i < (9); i++) {
                let grid = document.createElement('div')
                grid.classList.add("grid")
                grid.id = i
                grid.innerHTML = "";
                container.appendChild(grid);
            }
            container.style.gridTemplateColumns = "repeat(" + 3 + ", 1fr)";
        }
        return { makeGameBoard }
    })();
    let player = (name, marker) => {
        return { name, marker };
    };
    let displayController = (() => {
        let gameBoardArray = Array(9); 
        let gameEnd;
        let currentMarker = (curMarker, player1, player2) => {
            let grids = document.querySelectorAll('.grid');
            grids.forEach(div => {
                div.onclick = ("onclick", (e) => {
                    if(gameEnd){curMarker = ""}
                    else if (div.innerHTML == "") {
                        div.innerHTML = curMarker
                        gameBoardArray[div.id] = curMarker
                        if (curMarker == player1.marker){
                            winChecker(player1)
                            curMarker = player2.marker
                        }
                        else if (curMarker == player2.marker){
                            winChecker(player2)
                            curMarker = player1.marker
                        }
                    }
                    else { alert("Input Another Tile") }
                })
            })
        };
        let winChecker = (player) => {
            //RowChecker
            if(player.marker == gameBoardArray[0] && player.marker == gameBoardArray[1] && player.marker == gameBoardArray[2] ||
                player.marker == gameBoardArray[3] && player.marker == gameBoardArray[4] && player.marker == gameBoardArray[5] ||
                player.marker == gameBoardArray[6] && player.marker == gameBoardArray[7] && player.marker == gameBoardArray[8] ||
            //ColumnChecker
                player.marker == gameBoardArray[0] && player.marker == gameBoardArray[3] && player.marker == gameBoardArray[6] ||
                player.marker == gameBoardArray[1] && player.marker == gameBoardArray[4] && player.marker == gameBoardArray[7] ||
                player.marker == gameBoardArray[2] && player.marker == gameBoardArray[5] && player.marker == gameBoardArray[8] ||
            //DiagonalChecker
                player.marker == gameBoardArray[0] && player.marker == gameBoardArray[4] && player.marker == gameBoardArray[8] ||
                player.marker == gameBoardArray[2] && player.marker == gameBoardArray[4] && player.marker == gameBoardArray[6]){gameend = true, alert (`Congrats, ${player.name}`)}
    }
        return { currentMarker }
    })();
    const intialize = (() => {
        let player1 = player("Jeff", "x");
        let player2 = player("Bill", "o");
        gameBoard.makeGameBoard();
        displayController.currentMarker(player2.marker, player1, player2)
    })
    return { intialize }
})();;
main.intialize();