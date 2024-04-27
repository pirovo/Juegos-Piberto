var menu = document.getElementById('Menu');
var level1 = document.getElementById('Level1');
var level2 = document.getElementById('Level2');
var level3 = document.getElementById('Level3');
var level4 = document.getElementById('Level4');
var level5 = document.getElementById('Level5');
var final = document.getElementById("Final");
var num_incorrecto = 0;
var num_correcto = 0;
var temporizador_level1;
var temporizador_level2;
var temporizador_level3;
var temporizador_level4;
var temporizador_level5;

//Pasar de Menu a Level1
function pasarANivel1() {
    menu.style.display = "none";
    level1.style.display = "grid";
    timer_level1();
}

//Pasar de Level1 a Level2
function boton_incorrecto1 () {
    mostrar_resultados1();
    num_incorrecto=num_incorrecto+1;
    clearInterval(temporizador_level1); //Esto es para que pare el setInterval asociado a la variable temprizador_level1 si le doy al boton incorrecto.
    setTimeout(pasarANivel2, 2000); //Este
}

function boton_correcto1 () {
    mostrar_resultados1();
    num_correcto=num_correcto+1;
    clearInterval(temporizador_level1); //Esto es para que pare el setInterval asociado a la variable temprizador_level1 si le doy al boton correcto.
    setTimeout(pasarANivel2, 2000); //Este
}

function mostrar_resultados1() {
    document.getElementById('Level1_Respuesta1').style.color = "white";
    document.getElementById('Level1_Respuesta1').style.backgroundColor = "red";
    document.getElementById('Level1_Respuesta2').style.color = "white";
    document.getElementById('Level1_Respuesta2').style.backgroundColor = "red";
    document.getElementById('Level1_Respuesta3').style.color = "white";
    document.getElementById('Level1_Respuesta3').style.backgroundColor = "red";
    document.getElementById('Level1_Respuesta4').style.color="white";
    document.getElementById('Level1_Respuesta4').style.backgroundColor = "green";
}

function pasarANivel2() {
    level1.style.display = "none";
    level2.style.display = "grid";
    timer_level2();
}

//Timer Level1
var contador_level1 = 10;
var div1_timer1 = document.getElementById('Seg1_level1');
var div2_timer1 = document.getElementById('Seg2_level1');
var div3_timer1 = document.getElementById('Seg3_level1');
var div4_timer1 = document.getElementById('Seg4_level1');
var div5_timer1 = document.getElementById('Seg5_level1');
var div6_timer1 = document.getElementById('Seg6_level1');
var div7_timer1 = document.getElementById('Seg7_level1');
var div8_timer1 = document.getElementById('Seg8_level1');
var div9_timer1 = document.getElementById('Seg9_level1');
var div10_timer1 = document.getElementById('Seg10_level1');
var div11_timer1 = document.getElementById('Seg11_level1');

function timer_level1 () {
    temporizador_level1 = setInterval (contadorSegundos, 1000);
}

function contadorSegundos() {
    if (contador_level1 >= 0) {
        div6_timer1.innerHTML='<p>'+contador_level1+'</p>';
        contador_level1--;
        if (contador_level1==9){
            div1_timer1.style.backgroundColor="rgb(0,255,0)";
        }
        if (contador_level1==8){
            div2_timer1.style.backgroundColor="rgb(51,204,51)";
        }
        if (contador_level1==7){
            div3_timer1.style.backgroundColor="rgb(102,153,102)";
        }
        if (contador_level1==6){
            div4_timer1.style.backgroundColor="rgb(80, 119, 80)";
        }
        if (contador_level1==5){
            div5_timer1.style.backgroundColor="rgb(51, 75, 51)";
        }
        if (contador_level1==4){
            div6_timer1.style.backgroundColor="rgb(172, 208, 40)";
            div6_timer1.style.color="black";
        }
        if (contador_level1==3){
            div7_timer1.style.backgroundColor="rgb(255, 204, 0)";
        }
        if (contador_level1==2){
            div8_timer1.style.backgroundColor="rgb(255, 153, 0)";
        }
        if (contador_level1==1){
            div9_timer1.style.backgroundColor="rgb(255, 102, 0)";
        }
        if (contador_level1==0){
            div10_timer1.style.backgroundColor="rgb(255, 51, 0)";
        }
        if (contador_level1==-1){
            div11_timer1.style.backgroundColor="rgb(255, 0, 0)";
            div6_timer1.innerHTML='';
        }
    } else {
        level1.style.display = "none";
        level2.style.display = "grid";
        num_incorrecto=num_incorrecto+1;
        timer_level2();
        clearInterval(temporizador_level1);
    }
}



//Pasar de Level2 a Level3
function boton_incorrecto2 () {
    mostrar_resultados2();
    num_incorrecto=num_incorrecto+1;
    clearInterval(temporizador_level2);
    setTimeout(pasarANivel3, 2000); //Este
}

function boton_correcto2 () {
    mostrar_resultados2();
    num_correcto=num_correcto+1;
    clearInterval(temporizador_level2);
    setTimeout(pasarANivel3, 2000); //Este
}

function mostrar_resultados2() {
    document.getElementById('Level2_Respuesta1').style.color = "white";
    document.getElementById('Level2_Respuesta1').style.backgroundColor = "red";
    document.getElementById('Level2_Respuesta3').style.color = "white";
    document.getElementById('Level2_Respuesta3').style.backgroundColor = "red";
    document.getElementById('Level2_Respuesta4').style.color = "white";
    document.getElementById('Level2_Respuesta4').style.backgroundColor = "red";
    document.getElementById('Level2_Respuesta2').style.color="white";
    document.getElementById('Level2_Respuesta2').style.backgroundColor = "green";
}

function pasarANivel3() {
    level2.style.display = "none";
    level3.style.display = "grid";
    timer_level3();
}

//Timer Level2
var contador_level2 = 10;
var div1_timer2 = document.getElementById('Seg1_level2');
var div2_timer2 = document.getElementById('Seg2_level2');
var div3_timer2 = document.getElementById('Seg3_level2');
var div4_timer2 = document.getElementById('Seg4_level2');
var div5_timer2 = document.getElementById('Seg5_level2');
var div6_timer2 = document.getElementById('Seg6_level2');
var div7_timer2 = document.getElementById('Seg7_level2');
var div8_timer2 = document.getElementById('Seg8_level2');
var div9_timer2 = document.getElementById('Seg9_level2');
var div10_timer2 = document.getElementById('Seg10_level2');
var div11_timer2 = document.getElementById('Seg11_level2');

function timer_level2 () {
    temporizador_level2 = setInterval (contadorSegundos_level2,  1000);
}

function contadorSegundos_level2() {
    if (contador_level2 >= 0) {
        div6_timer2.innerHTML='<p>'+contador_level2+'</p>';
        contador_level2--;
        if (contador_level2==9){
            div1_timer2.style.backgroundColor="rgb(0,255,0)";
        }
        if (contador_level2==8){
            div2_timer2.style.backgroundColor="rgb(51,204,51)";
        }
        if (contador_level2==7){
            div3_timer2.style.backgroundColor="rgb(102,153,102)";
        }
        if (contador_level2==6){
            div4_timer2.style.backgroundColor="rgb(80, 119, 80)";
        }
        if (contador_level2==5){
            div5_timer2.style.backgroundColor="rgb(51, 75, 51)";
        }
        if (contador_level2==4){
            div6_timer2.style.backgroundColor="rgb(172, 208, 40)";
            div6_timer2.style.color="black";
        }
        if (contador_level2==3){
            div7_timer2.style.backgroundColor="rgb(255, 204, 0)";
        }
        if (contador_level2==2){
            div8_timer2.style.backgroundColor="rgb(255, 153, 0)";
        }
        if (contador_level2==1){
            div9_timer2.style.backgroundColor="rgb(255, 102, 0)";
        }
        if (contador_level2==0){
            div10_timer2.style.backgroundColor="rgb(255, 51, 0)";
        }
        if (contador_level2==-1){
            div11_timer2.style.backgroundColor="rgb(255, 0, 0)";
            div6_timer2.innerHTML='';
        }
    } else {
        level2.style.display = "none";
        level3.style.display = "grid";
        num_incorrecto=num_incorrecto+1;
        timer_level3();
        clearInterval(temporizador_level2);
    }
}


//Pasar de Level3 a Level4
function boton_incorrecto3 () {
    mostrar_resultados3();
    num_incorrecto=num_incorrecto+1;
    clearInterval(temporizador_level3);
    setTimeout(pasarANivel4, 2000); //Este
}

function boton_correcto3 () {
    mostrar_resultados3();
    num_correcto=num_correcto+1;
    clearInterval(temporizador_level3);
    setTimeout(pasarANivel4, 2000); //Este
}

function mostrar_resultados3() {
    document.getElementById('Level3_Respuesta1').style.color = "white";
    document.getElementById('Level3_Respuesta1').style.backgroundColor = "red";
    document.getElementById('Level3_Respuesta2').style.color = "white";
    document.getElementById('Level3_Respuesta2').style.backgroundColor = "red";
    document.getElementById('Level3_Respuesta4').style.color = "white";
    document.getElementById('Level3_Respuesta4').style.backgroundColor = "red";
    document.getElementById('Level3_Respuesta3').style.color="white";
    document.getElementById('Level3_Respuesta3').style.backgroundColor = "green";
}

function pasarANivel4() {
    level3.style.display = "none";
    level4.style.display = "grid";
    timer_level4();
}

//Timer Level3
var contador_level3 = 10;
var div1_timer3 = document.getElementById('Seg1_level3');
var div2_timer3 = document.getElementById('Seg2_level3');
var div3_timer3 = document.getElementById('Seg3_level3');
var div4_timer3 = document.getElementById('Seg4_level3');
var div5_timer3 = document.getElementById('Seg5_level3');
var div6_timer3 = document.getElementById('Seg6_level3');
var div7_timer3 = document.getElementById('Seg7_level3');
var div8_timer3 = document.getElementById('Seg8_level3');
var div9_timer3 = document.getElementById('Seg9_level3');
var div10_timer3 = document.getElementById('Seg10_level3');
var div11_timer3 = document.getElementById('Seg11_level3');

function timer_level3 () {
    temporizador_level3 = setInterval (contadorSegundos_level3,  1000);
}

function contadorSegundos_level3() {
    if (contador_level3 >= 0) {
        div6_timer3.innerHTML='<p>'+contador_level3+'</p>';
        contador_level3--;
        if (contador_level3==9){
            div1_timer3.style.backgroundColor="rgb(0,255,0)";
        }
        if (contador_level3==8){
            div2_timer3.style.backgroundColor="rgb(51,204,51)";
        }
        if (contador_level3==7){
            div3_timer3.style.backgroundColor="rgb(102,153,102)";
        }
        if (contador_level3==6){
            div4_timer3.style.backgroundColor="rgb(80, 119, 80)";
        }
        if (contador_level3==5){
            div5_timer3.style.backgroundColor="rgb(51, 75, 51)";
        }
        if (contador_level3==4){
            div6_timer3.style.backgroundColor="rgb(172, 208, 40)";
            div6_timer3.style.color="black";
        }
        if (contador_level3==3){
            div7_timer3.style.backgroundColor="rgb(255, 204, 0)";
        }
        if (contador_level3==2){
            div8_timer3.style.backgroundColor="rgb(255, 153, 0)";
        }
        if (contador_level3==1){
            div9_timer3.style.backgroundColor="rgb(255, 102, 0)";
        }
        if (contador_level3==0){
            div10_timer3.style.backgroundColor="rgb(255, 51, 0)";
        }
        if (contador_level3==-1){
            div11_timer3.style.backgroundColor="rgb(255, 0, 0)";
            div6_timer3.innerHTML='';
        }
    } else {
        level3.style.display = "none";
        level4.style.display = "grid";
        num_incorrecto=num_incorrecto+1;
        timer_level4();
        clearInterval(temporizador_level3);
    }
}


//Pasar de Level4 a Level5
function boton_incorrecto4 () {
    mostrar_resultados4();
    num_incorrecto=num_incorrecto+1;
    clearInterval(temporizador_level4);
    setTimeout(pasarANivel5, 2000); //Este
}

function boton_correcto4 () {
    mostrar_resultados4();
    num_correcto=num_correcto+1;
    clearInterval(temporizador_level4);
    setTimeout(pasarANivel5, 2000); //Este
}

function mostrar_resultados4() {
    document.getElementById('Level4_Respuesta1').style.color = "white";
    document.getElementById('Level4_Respuesta1').style.backgroundColor = "red";
    document.getElementById('Level4_Respuesta2').style.color = "white";
    document.getElementById('Level4_Respuesta2').style.backgroundColor = "red";
    document.getElementById('Level4_Respuesta3').style.color = "white";
    document.getElementById('Level4_Respuesta3').style.backgroundColor = "red";
    document.getElementById('Level4_Respuesta4').style.color="white";
    document.getElementById('Level4_Respuesta4').style.backgroundColor = "green";
}

function pasarANivel5() {
    level4.style.display = "none";
    level5.style.display = "grid";
    timer_level5();
}

//Timer Level4
var contador_level4 = 10;
var div1_timer4 = document.getElementById('Seg1_level4');
var div2_timer4 = document.getElementById('Seg2_level4');
var div3_timer4 = document.getElementById('Seg3_level4');
var div4_timer4 = document.getElementById('Seg4_level4');
var div5_timer4 = document.getElementById('Seg5_level4');
var div6_timer4 = document.getElementById('Seg6_level4');
var div7_timer4 = document.getElementById('Seg7_level4');
var div8_timer4 = document.getElementById('Seg8_level4');
var div9_timer4 = document.getElementById('Seg9_level4');
var div10_timer4 = document.getElementById('Seg10_level4');
var div11_timer4 = document.getElementById('Seg11_level4');

function timer_level4 () {
    temporizador_level4 = setInterval (contadorSegundos_level4,  1000);
}

function contadorSegundos_level4() {
    if (contador_level4 >= 0) {
        div6_timer4.innerHTML='<p>'+contador_level4+'</p>';
        contador_level4--;
        if (contador_level4==9){
            div1_timer4.style.backgroundColor="rgb(0,255,0)";
        }
        if (contador_level4==8){
            div2_timer4.style.backgroundColor="rgb(51,204,51)";
        }
        if (contador_level4==7){
            div3_timer4.style.backgroundColor="rgb(102,153,102)";
        }
        if (contador_level4==6){
            div4_timer4.style.backgroundColor="rgb(80, 119, 80)";
        }
        if (contador_level4==5){
            div5_timer4.style.backgroundColor="rgb(51, 75, 51)";
        }
        if (contador_level4==4){
            div6_timer4.style.backgroundColor="rgb(172, 208, 40)";
            div6_timer4.style.color="black";
        }
        if (contador_level4==3){
            div7_timer4.style.backgroundColor="rgb(255, 204, 0)";
        }
        if (contador_level4==2){
            div8_timer4.style.backgroundColor="rgb(255, 153, 0)";
        }
        if (contador_level4==1){
            div9_timer4.style.backgroundColor="rgb(255, 102, 0)";
        }
        if (contador_level4==0){
            div10_timer4.style.backgroundColor="rgb(255, 51, 0)";
        }
        if (contador_level4==-1){
            div11_timer4.style.backgroundColor="rgb(255, 0, 0)";
            div6_timer4.innerHTML='';
        }
    } else {
        level4.style.display = "none";
        level5.style.display = "grid";
        num_incorrecto=num_incorrecto+1;
        timer_level5();
        clearInterval(temporizador_level4);
    }
}

//Pasar de Level5 a Finish
function boton_incorrecto5 () {
    mostrar_resultados5();
    num_incorrecto=num_incorrecto+1;
    clearInterval(temporizador_level5);
    setTimeout(finish, 2000); //Este
    resultados();
}

function boton_correcto5 () {
    mostrar_resultados5();
    num_correcto=num_correcto+1;
    clearInterval(temporizador_level5);
    setTimeout(finish, 2000); //Este
    resultados();
}

function mostrar_resultados5() {
    document.getElementById('Level5_Respuesta1').style.color = "white";
    document.getElementById('Level5_Respuesta1').style.backgroundColor = "red";
    document.getElementById('Level5_Respuesta2').style.color = "white";
    document.getElementById('Level5_Respuesta2').style.backgroundColor = "red";
    document.getElementById('Level5_Respuesta3').style.color = "white";
    document.getElementById('Level5_Respuesta3').style.backgroundColor = "red";
    document.getElementById('Level5_Respuesta4').style.color="white";
    document.getElementById('Level5_Respuesta4').style.backgroundColor = "green";
}

function finish() {
    level5.style.display = "none";
    final.style.display = "grid";
}

//Timer Level5
var contador_level5 = 22;
var div1_timer5 = document.getElementById('Seg1_level5');
var div2_timer5 = document.getElementById('Seg2_level5');
var div3_timer5 = document.getElementById('Seg3_level5');
var div4_timer5 = document.getElementById('Seg4_level5');
var div5_timer5 = document.getElementById('Seg5_level5');
var div6_timer5 = document.getElementById('Seg6_level5');
var div7_timer5 = document.getElementById('Seg7_level5');
var div8_timer5 = document.getElementById('Seg8_level5');
var div9_timer5 = document.getElementById('Seg9_level5');
var div10_timer5 = document.getElementById('Seg10_level5');
var div11_timer5 = document.getElementById('Seg11_level5');

function timer_level5 () {
    temporizador_level5 = setInterval (contadorSegundos_level5,  1000);
}

function contadorSegundos_level5() {
    if (contador_level5 >= 0) {
        div6_timer5.innerHTML='<p>'+contador_level5+'</p>';
        contador_level5--;
        if (contador_level5==18){
            div1_timer5.style.backgroundColor="rgb(0,255,0)";
        }
        if (contador_level5==16){
            div2_timer5.style.backgroundColor="rgb(51,204,51)";
        }
        if (contador_level5==14){
            div3_timer5.style.backgroundColor="rgb(102,153,102)";
        }
        if (contador_level5==12){
            div4_timer5.style.backgroundColor="rgb(80, 119, 80)";
        }
        if (contador_level5==10){
            div5_timer5.style.backgroundColor="rgb(51, 75, 51)";
        }
        if (contador_level5==8){
            div6_timer5.style.backgroundColor="rgb(172, 208, 40)";
            div6_timer5.style.color="black";
        }
        if (contador_level5==6){
            div7_timer5.style.backgroundColor="rgb(255, 204, 0)";
        }
        if (contador_level5==4){
            div8_timer5.style.backgroundColor="rgb(255, 153, 0)";
        }
        if (contador_level5==2){
            div9_timer5.style.backgroundColor="rgb(255, 102, 0)";
        }
        if (contador_level5==0){
            div10_timer5.style.backgroundColor="rgb(255, 51, 0)";
        }
        if (contador_level5==-1){
            div11_timer5.style.backgroundColor="rgb(255, 0, 0)";
            div6_timer5.innerHTML='';
        }
    } else {
        level5.style.display = "none";
        final.style.display = "grid";
        num_incorrecto=num_incorrecto+1;
        resultados();
        clearInterval(temporizador_level5);
    }
}

//Poner numero de preguntas correctas e incorrectas
function  resultados() {
    var preg_correcta = document.getElementById('num_preg_correcta');
    var preg_incorrecta = document.getElementById('num_preg_incorrecta');
    preg_correcta.innerHTML = '<h4><b>Correcto</b>: '+ num_correcto +'</h4>';
    preg_incorrecta.innerHTML = '<h4><b>Incorrecto</b>: '+ num_incorrecto +'</h4>';
}

function resetear() {
    num_correcto=num_correcto-num_correcto;
    num_incorrecto=num_incorrecto-num_incorrecto;
}