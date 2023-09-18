console.log("welcome to Tic Tec Toe")
let music = new Audio("turn.mp3")
let audioturn = new Audio("beep-02.mp3")
let gameover = new Audio("over.mp3")
let turn = "X"
let isgameover = false;

const  changeTurn = ()=>
{
    return turn === "X"?"0": "X"
}

const checkWin = ()=>
    {
        let boxtext = document.getElementsByClassName('boxtext')
        let wins = [
            [0,1,2,0,5,0],
            [3,4,5,0,15,0],
            [6,7,8,0,25,0],
            [0,3,6,-10,15,90],
            [1,4,7,0,15,90],
            [2,5,8,10,15,90],
            [0,4,8,-0,15,45],
            [2,4,6,-0,15,135],
        ]
        wins.forEach(e =>
            {
              if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText !== "")){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
                isgameover = true
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "100%"
                music.play();
                document.querySelector(".line").style.width = "100%"
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
              }
            })
    }

    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element=>
        {
           let boxtext = element.querySelector('.boxtext'); 
           element.addEventListener('click',()=>{
            if(boxtext.innerText === '')
            {
                boxtext.innerText = turn;
                turn = changeTurn();
                audioturn.play();
                checkWin();
                if(!isgameover)
                {
                    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
                }
      
            }
           })
        })

        reset.addEventListener('click',()=>{
            let boxtexts = document.querySelectorAll('.boxtext');
            Array.from(boxtexts).forEach(element => 
            {
                element.innerText = ""
            }
            );
            turn = "X";
            isgameover = false
            document.querySelector(".line").style.width = "0vw"
            document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
            music !== music.pause();
        })