let tog = 1




let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            
            // sum = p1sum
        }

        if (p1sum==98){
            p1sum=92
        }
        if (p1sum==66){
            p1sum=54
        }
        if (p1sum==50){
            p1sum=44
        }
        if (p1sum==16){
            p1sum=6
        }
        if (p1sum==99){
            p1sum=95
        }
        if (p1sum == 8) {
            document.getElementById("q2").style.display="block";
        }
        if (p1sum == 23) {  
            document.getElementById("q4").style.display="block";
        }
        if (p1sum == 56) {
            document.getElementById("q3").style.display="block";
        }
        if (p1sum == 78) {
            document.getElementById("q5").style.display="block";
        }
        if (p1sum == 85) {
            document.getElementById("q6").style.display="block";
        }
      

        sum = p1sum



    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
           
            // sum = p1sum
        }
        
        if (p2sum==98){
            p2sum=92
        }
        //
        
        if (p2sum==66){
            p2sum=54
        }
        //
        
        if (p2sum==50){
            p2sum=44
        }
        //
        
        if (p2sum==16){
            p2sum=6
        }
        //
        
        if (p2sum==99){
            p2sum=95
        }
        
        if (p2sum == 8) {
            document.getElementById("q7").style.display="block";
        }
        if (p2sum == 23) {
            document.getElementById("q9").style.display="block";
        }
        if (p2sum == 56) {
            document.getElementById("q8").style.display="block";
        }
        if (p2sum == 78) {
            document.getElementById("q10").style.display="block";
        }
        if (p2sum == 85) {
            document.getElementById("q11").style.display="block";
        }
        //
        if (p2sum==20){
            p2sum=22
        }
        if (p2sum==73){
            p2sum=75
        }
        if (p2sum==61){
            p2sum=64
        }
        if (p2sum==34){
            p2sum=46
        }
        if (p2sum==36){
            p2sum=39
        }
        if (p2sum == 22) {
            document.getElementById("reto1").style.display="block";
            setTimeout(function(){
            document.getElementById("reto1").style.display="none";
            },5000);
        }
        if (p2sum == 75) {
            document.getElementById("reto2").style.display="block";
            setTimeout(function(){
                document.getElementById("reto2").style.display="none";
                },5000);
        }
        if (p2sum == 64) {
            document.getElementById("reto3").style.display="block";
            setTimeout(function(){
                document.getElementById("reto3").style.display="none";
                },5000);
        }
        if (p2sum == 46) {
            document.getElementById("reto4").style.display="block";
            setTimeout(function(){
                document.getElementById("reto4").style.display="none";
                },5000);
        }
        if (p2sum == 39) {
            document.getElementById("reto5").style.display="block";
            setTimeout(function(){
                document.getElementById("reto5").style.display="none";
                },4000);
        }
        
    
        sum = p2sum
    }


    


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        if (player == 'p1') {
            alert("Amarillo gana!!")
        }
        else if (player == 'p2') {
            alert("Rojo gana!!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }

}
//dado
document.getElementById("diceBtn").addEventListener("click", function () {
    
    var num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
   var fuente="dados/dado"+num+".png"
    document.querySelector('.img1').setAttribute("src", fuente);
    document.getElementById("dice").innerText = num
    
     

     //turno
    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Turno del naranja: "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Turno del rojo: "

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1




})


//pregunta1
document.getElementById("ver4").addEventListener("click", function () {
               
    if (document.getElementById('p7').checked==true){
        p1sum = 41
        document.getElementById("q4").style.display="none";

                 }
   else {
      document.getElementById("q4").style.display="none";
         p1sum= 11
}}) 
document.getElementById("ver9").addEventListener("click", function () {
               
      if (document.getElementById('p17').checked==true){
          p2sum = 41
         document.getElementById("q9").style.display="none";
                
               }
     else {
             document.getElementById("q9").style.display="none";
               p2sum=  11          
}}) 

//pregunta2
document.getElementById("ver2").addEventListener("click", function () {
               
    if (document.getElementById('p3').checked==true){
         p1sum = 32
        document.getElementById("q2").style.display="none";

                 }
   else {
      document.getElementById("q2").style.display="none";
         p1sum= 3
}}) 
document.getElementById("ver7").addEventListener("click", function () {
               
    if (document.getElementById('p13').checked==true){
         p2sum = 32
        document.getElementById("q7").style.display="none";

                 }
   else {
      document.getElementById("q7").style.display="none";
         p2sum= 3
}}) 

//pregunta3
document.getElementById("ver3").addEventListener("click", function () {
               
    if (document.getElementById('p6').checked==true){
         p1sum = 70
        document.getElementById("q3").style.display="none";

                 }
   else {
      document.getElementById("q3").style.display="none";
         p1sum= 37
}}) 
document.getElementById("ver8").addEventListener("click", function () {
               
    if (document.getElementById('p16').checked==true){
         p2sum = 70
        document.getElementById("q8").style.display="none";

                 }
   else {
      document.getElementById("q8").style.display="none";
         p2sum= 37
}}) 
//pregunta4
document.getElementById("ver5").addEventListener("click", function () {
               
    if (document.getElementById('p10').checked==true){
         p1sum = 82
        document.getElementById("q5").style.display="none";

                 }
   else {
      document.getElementById("q5").style.display="none";
         p1sum= 48
}}) 
document.getElementById("ver10").addEventListener("click", function () {
               
    if (document.getElementById('p20').checked==true){
         p2sum = 82
        document.getElementById("q10").style.display="none";

                 }
   else {
      document.getElementById("q10").style.display="none";
         p2sum= 48
}}) 
//pregunta5
document.getElementById("ver6").addEventListener("click", function () {
               
    if (document.getElementById('p12').checked==true){
         p1sum = 96
        document.getElementById("q6").style.display="none";

                 }
   else {
      document.getElementById("q6").style.display="none";
         p1sum= 25
}}) 
document.getElementById("ver11").addEventListener("click", function () {
               
    if (document.getElementById('p22').checked==true){
         p2sum = 96
        document.getElementById("q11").style.display="none";

                 }
   else {
      document.getElementById("q11").style.display="none";
         p2sum= 25
}}) 







