
pontosvalor = document.getElementById("pontosValor")
var erros = 0

var pontos = 100

var energia = 1




function errado(){

      erros++;
      pontos -= 10

      pontosvalor.textContent = pontos;

      var body = document.querySelector('.all')
      var erro = document.querySelector('.errada')
      var sair = document.querySelector('.sair')

      body.classList.add("all_errado")
      erro.classList.add("errado_on")
      sair.classList.add("errado_on")

      if(erros == 2){
   
      var dica = document.querySelector('.dica')
      var pergunta = document.querySelector('.pergunta')
      var icon = document.querySelector('icon2')

      dica.classList.add("visivel")
      pergunta.classList.add("pergunta_pos_dica")
      icon.classList.add("invisivel")
}
}


function voltar(){
      
      var corpo = document.querySelector('.all')
      var erro = document.querySelector('.errada')
      var saia = document.querySelector('.sair')
 
      corpo.classList.remove("all_errado")
      erro.classList.remove("errado_on")
      saia.classList.remove("errado_on")
 
 }
 
 function voltar2(){
      
      var corpo = document.querySelector('.all')
      var certo = document.querySelector('.certo')
      var saia2 = document.querySelector('.sair2')
 
      corpo.classList.remove("all_errado")
      certo.classList.remove("certo_on")
      saia2.classList.remove("certo_on")
 
 }
function certo_hardware(){

   if(energia == 1){

   }
   else{
   pontos += 50


   var body = document.querySelector('.all')
   var certo = document.querySelector('.certo')
   var sair2 = document.querySelector('.sair2')

   body.classList.add("all_errado")
   certo.classList.add("certo_on")
   sair2.classList.add("certo_on")



   pontosvalor.textContent = pontos;

   var next = document.querySelector('.proximo')

   next.classList.add("on")
   }
}

function certo_software() {
   if(energia == 0){

   }
   else{
   pontos += 50

   var body = document.querySelector('.all')
   var certa = document.querySelector('.certo')
   var sair2 = document.querySelector('.sair2')

   body.classList.add("all_errado")
   certa.classList.add("certo_on")
   sair2.classList.add("certo_on")


   pontosvalor.textContent = pontos;

   var next = document.querySelector('.proximo')

   next.classList.add("on")
   }
}



function sumir1(){

   var hard = document.querySelector('.Hardware')
   var soft = document.querySelector('.software')
   var titulo1 = document.querySelector('.Titulo')
   var titulo2 = document.querySelector('.Titulo2')

   hard.classList.add("off")
   soft.classList.add("on")
   titulo1.classList.add("false")
   titulo2.classList.add("true")
}
 function aparecer1(){

    var hard = document.querySelector('.Hardware')
    var soft = document.querySelector('.software')
    var titulo1 = document.querySelector('.Titulo')
    var titulo2 = document.querySelector('.Titulo2')


    hard.classList.remove("off")
    soft.classList.remove("on")
    titulo1.classList.remove("false")    
    titulo2.classList.remove("true")
 }




 function desligar_ligar(){
    
    if (energia == 1){

        energia -=1

        var power1 = document.querySelector('.power')
        
        power1.classList.add("power_off")
        
        return energia
    }
    else if(energia == 0){

        energia +=1

        var power1 = document.querySelector('.power')
        
        power1.classList.remove("power_off")
        
        return energia
    }
 }

 function energia_ligada(){
    
    if(energia == 1){

        var aviso = document.querySelector('.energia_aviso')
        var exit = document.querySelector('.exit01')

        aviso.classList.add("avisos_on")
        exit.classList.add("avisos_on")
    }
 }
 function energia_desligada(){
    
   if(energia == 0){

       var aviso2 = document.querySelector('.energia_aviso2')
       var exit2 = document.querySelector('.exit02')

       aviso2.classList.add("avisos_on")
       exit2.classList.add("avisos_on")
   }
}
 function exit(){

      var aviso = document.querySelector('.energia_aviso')
      var exit = document.querySelector('.exit01')

      aviso.classList.remove("avisos_on")
      exit.classList.remove("avisos_on")
    }
 
    function exit2(){

      var aviso2 = document.querySelector('.energia_aviso2')
      var exit2 = document.querySelector('.exit02')

      aviso2.classList.remove("avisos_on")
      exit2.classList.remove("avisos_on")
    }
 




document.addEventListener("DOMContentLoaded",function(){

   var input1 = document.getElementById("but1")
   var placa = document.querySelector('.img1')
      
      
   input1.addEventListener("mouseover", function() {
      
   placa.classList.add("show")
      
   });
      
      
   input1.addEventListener("mouseout", function() {
          placa.classList.remove("show");
   });
   });

document.addEventListener("DOMContentLoaded",function(){

      var input2 = document.getElementById("but2")
      var intel = document.querySelector('.img2')
         
         
      input2.addEventListener("mouseover", function() {
         
      intel.classList.add("show")
         
      });
         
         
      input2.addEventListener("mouseout", function() {
            intel.classList.remove("show");
      });
      });

document.addEventListener("DOMContentLoaded",function(){

      var butao3 = document.getElementById("but3")
      var imagem3 = document.querySelector('.img3')
            
            
      butao3.addEventListener("mouseover", function() {
            
      imagem3.classList.add("show")
            
      });
            
            
      butao3.addEventListener("mouseout", function() {
            imagem3.classList.remove("show");
      });
      });

      
document.addEventListener("DOMContentLoaded",function(){

      var butao4 = document.getElementById("but4")
      var imagem4 = document.querySelector('.img4')
               
               
      butao4.addEventListener("mouseover", function() {
               
      imagem4.classList.add("show")
               
      });
               
               
      butao4.addEventListener("mouseout", function() {
            imagem4.classList.remove("show");
      });
      });

document.addEventListener("DOMContentLoaded",function(){

      var butao5 = document.getElementById("but5")
      var imagem5 = document.querySelector('.img5')
                  
                  
      butao5.addEventListener("mouseover", function() {
                  
      imagem5.classList.add("show")
                  
      });
                  
                  
      butao5.addEventListener("mouseout", function() {
            imagem5.classList.remove("show");
      });
      });

document.addEventListener("DOMContentLoaded",function(){

      var butao6 = document.getElementById("but6")
      var imagem6 = document.querySelector('.img6')
                     
                     
      butao6.addEventListener("mouseover", function() {
                     
      imagem6.classList.add("show")
                     
      });
                     
                     
      butao6.addEventListener("mouseout", function() {
            imagem6.classList.remove("show");
      });
      });
                             