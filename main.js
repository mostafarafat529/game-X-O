
let title = document.querySelector(".title");

let turn = 'X' ;

function operate(n1 , n2  ,n3){
        title.style.background ="#0f1"
        title.innerHTML = `${squars[n1]} winner ` 
    document.getElementById("square"+n1).style.background = "#0f1"
    document.getElementById("square"+n2).style.background = "#0f1"
    document.getElementById("square"+n3).style.background = "#0f1"
    setInterval(function(){
            title.innerHTML += '.'
        },1000)
        setTimeout(function(){
                location.reload()
            },3000)
        }
        
        let squars = [] ;
        function winner(){
            
    for(let  i = 1 ; i< 10 ; i++){
            squars[i]  = document.getElementById("square"+i).innerHTML;
        }
        if(squars[1] === squars[2] && squars[2] === squars[3] && squars[1] != ""){
                operate(1 , 2, 3)
            }
            else if(squars[4] === squars[5] && squars[5] === squars[6] && squars[6] != ""){
        operate(4 , 5 , 6)
    }
    else if(squars[7] === squars[8] && squars[8] === squars[9] && squars[8] != ""){
            operate(7,8,9)
    }
    else if(squars[1] === squars[4] && squars[4] === squars[7] && squars[7] != ""){
        operate(1,4,7)
    }
    else if(squars[2] === squars[5] && squars[5] === squars[8] && squars[8] != ""){
        operate(2,5,8)
    }
    else if(squars[3] === squars[6] && squars[6] === squars[9] && squars[9] != ""){
            operate(3,6,9)
        }
        else if(squars[1] === squars[5] && squars[5] === squars[9] && squars[9] != ""){
                operate(1,5,9)
            }
            else if(squars[3] === squars[5] && squars[5] === squars[7] && squars[7] != ""){
                    operate(3,5,7)
                }
            }
            
            
            function game(id){
                let element = document.getElementById(id);
                    if( turn === 'X' &&  element.innerHTML == ""){
                            element.innerHTML = 'X';
                            turn = 'O' ;
                    title.innerHTML = "O";
                    }
                    else if(turn === 'O' &&  element.innerHTML == ""){
    element.innerHTML = 'O';
    turn = 'X' ;
    title.innerHTML = "X";
    }

winner()
}







