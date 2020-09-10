
gsap.registerPlugin(ScrollTrigger);

//inicio 
const tl=gsap.timeline();

tl.to("#timon",{
    
    rotation: 360,
    duration:10,
    ease: "none"
})
.to("footer",{
    duration:1,
    opacity:0
},"-=10")
.to("#timon",{
    duration:2,
    opacity: 0
},"-=2");

ScrollTrigger.create({
    animation:tl,
    trigger:"#timon",
  //  markers:true,
    scrub:0.5,
    pin:true,
    pinSpacing: false,
    start: "center 40%",
    end: "+=250%"

});

//uno 
const tlUno= gsap.timeline();


tlUno.from("#uno",{
    duration:10,
    opacity:0
})
.to("#img01",{
    duration:10,
    opacity:1
})
.to("#img01",{
    duration:0,
    opacity:0
})
.from("#img02",{
    duration:0,
    opacity:0
})
.from("#p-uno1",{
    duration:5,
    opacity:0,
    x:100

})
.from("#p-uno2",{
    delay:5,
    duration:5,
    opacity:0,
    x:100
})
.to("#uno",{
    ease: "none",
    delay:50,
    duration:50,
    x:-1800,
   // opacity:0
})
;

ScrollTrigger.create({
    animation:tlUno,
    trigger:"#uno",
    //markers:true,
    start:"top top",
    end:"+=500%",
    pin:true,
    scrub:1
    //toggleActions:"play resume reverse resume"
    
});

//dos 

const tlDos=gsap.timeline();

tlDos.from("#dos00",{
   // ease: "none",
    duration:50,
    //x:1800,
    xPercent:100
})
.from("#dos01",{
    duration:52,
   // x:2000,
   objectPosition:"-1000%",
    opacity:0
},"<")
.from("#p-dos1",{
    duration:2,
    x:-200,
    opacity:0
})
.from("#p-dos2",{
    delay:10,
    duration:2,
    x:-200,
    opacity:0
})
.from("#p-dos3",{
    delay:2,
    duration:2,
    x:-200,
    opacity:0
})
.from("#dos02",{
    delay:1,
    duration:10,
    y:1000
})
.to("#dos02",{
    delay:10,
    duration:20,
    y:1000
})
;

ScrollTrigger.create({
    animation:tlDos,
    trigger:"#dos",
   // markers:true,
    start:"top top",
    end:"+=600%",
    pin:true,
    scrub:2
    //toggleActions:"play resume reverse resume"
    
});

//tres

const tlTres= gsap.timeline();

tlTres.to("#tres00",{
    duration:6,
    objectPosition: 0
})
.from("#p-tres1",{
    duration:2,
    opacity:0,
    x:200
},"<")
.from("#p-tres2",{
    duration:2,
    opacity:0,
    x:200
},">");

ScrollTrigger.create({
    animation:tlTres,
    trigger:"#tres",
   // markers:true,
    start:"top top",
    end:"+=700%",
    pin:true,
    scrub:2,

});

//cua 

const tlCua= gsap.timeline();

tlCua.from("#cua00",{
    duration:10,
    xPercent:100,
    ease:"none"
})
.from("#cua01",{
    duration:10.5,
    xPercent:100,
    ease:"none"
},"<")
.from("#cua02",{
    duration:11,
    xPercent:100,
    ease:"none"
},"<")
.to("#cua00",{
    duration:10,
    xPercent:-100,
    ease:"none"
})
.to("#cua01",{
    duration:10.5,
    xPercent:-100,
    y:-500,
    ease:"none"
},"<")
.to("#cua02",{
    duration:11,
    xPercent:-100,
    y:-500,
    ease:"none"
},"<")


.addLabel("capa",7)
.from("#p-cua1",{
    duration:2,
    opacity:0
},"capa")
.to("#p-cua1",{
    duration:2,
    opacity:0
},"capa+=2")
.addLabel("capaB",11)
.from("#p-cua2",{
    duration:2,
    opacity:0
},"capaB")
.to("#p-cua2",{
    duration:2,
    opacity:0
},"capaB+=2")
.addLabel("capaC",15)
.from("#p-cua3",{
    duration:2,
    opacity:0
},"capaC")
.to("#p-cua3",{
    duration:2,
    opacity:0
},"capaC+=2")
;

ScrollTrigger.create({
    animation:tlCua,
    trigger:"#cua",
   // markers:true,
    start:"top top",
    end:"+=500%",
    pin:true,
    scrub:0.5,

});

//cin

const tlCin= gsap.timeline();

tlCin.from("#cin00",{
    duration:9,
    xPercent:100,
    ease:"none"
})
.from("#cin01",{
    duration:9.5,
    xPercent:100,
    ease:"none"
},"<")
.to("#cin00",{
    duration:10,
    xPercent:-100,
    ease:"none"
})
.to("#cin01",{
    duration:10.5,
    xPercent:-100,
    ease:"none"
},"<")

.addLabel("capaCin",6)
.from("#p-cin1",{
    duration:2,
    opacity:0
},"capaCin")
.to("#p-cin1",{
    duration:2,
    opacity:0
},"capaCin+=4")

.addLabel("capaCinB",11)
.from("#p-cin2",{
    duration:2,
    opacity:0
},"capaCinB")
.to("#p-cin2",{
    duration:2,
    opacity:0
},"capaCinB+=2")

.addLabel("capaCinC",14)
.from("#p-cin3",{
    duration:2,
    opacity:0
},"capaCinC")
.to("#p-cin3",{
    duration:6,
    opacity:0
},"capaCinC+=2")
;

ScrollTrigger.create({
    animation:tlCin,
    trigger:"#cin",
   // markers:true,
    start:"top top",
    end:"+=500%",
    pin:true,
    scrub:0.5,

});

//Tsolo

const tlT=gsap.timeline();

tlT.from("#Tsolo",{
    duration:5,
    opacity:0
})
/*.to("#Tsolo",{
    delay:10,
    duration:5,
    opacity:0
})*/
;

ScrollTrigger.create({
    animation:tlT,
    trigger:"#Tsolo",
   // markers:true,
    start:"top bottom",
    end:"bottom bottom",
    //pin:true,
    scrub:0.5,

});

//seis

const tlSeis= gsap.timeline();

tlSeis.from("#seis",{
    duration:5,
    opacity:0
})
.addLabel("capa",0)
.from("#p-seis1",{
    duration:3,
    opacity:0,
    xPercent:-100
},"capa")
.from("#p-seis2",{
    duration:3,
    opacity:0,
    xPercent:-100
},"capa+=4")
.to("#seis",{
    delay:3,
    duration:5,
    opacity:0
});

ScrollTrigger.create({
    animation:tlSeis,
    trigger:"#seis",
   // markers:true,
    start:"top top",
    end:"+=500%",
    pin:true,
    scrub:0.5,

});

//siete
const tlsiete=gsap.timeline();

tlsiete.from("#siete",{
    duration:10,
    xPercent:-100,
    opacity:0
})
.addLabel("capa",0)
.to("#siete00",{
    duration:30,
    objectPosition:0
},"capa")
.addLabel("capaB",10)
.from("#p-siete1",{
    duration:2,
    opacity:0,
    xPercent:-100
},"capaB")
.from("#p-siete2",{
    duration:2,
    opacity:0,
    xPercent:-100
},"capaB+=3")
.to("#siete",{
    duration:0,
    opacity:0
},"capaB+=15")
;

ScrollTrigger.create({
    animation:tlsiete,
    trigger:"#siete",
    //markers:true,
    start:"top top",
    end:"+=600%",
    pin:true,
    scrub:1,

});

//ocho 

const tlOcho= gsap.timeline();

tlOcho.to("#ocho",{
    //duration:0,
    opacity:0,
    yPercent:-100
})
.to("#ocho",{
  // delay:60,
    duration:0,
      opacity:1,
  })
.to("#ocho",{
     duration:10,
     opacity:1,
     yPercent:0
 })
 .addLabel("capa",0)
 .to("#ocho00",{
    duration:150,
    objectPosition:0
 },"capa")
 .addLabel("capaB",10)
 .to("#ocho02",{
     duration:20,
    height: "110%",
    width: "110%"
 },"capaB")
 .to("#ocho03",{
    duration:20,
    height: "110%",
    width: "110%"
 },"capaB")
 .to("#ocho01",{
    duration:30,
    height: "110%",
    width: "110%"
 },"capaB")
 .from("#text-ocho",{
     duration:10,
     opacity:0,
     xPercent:-100
 },"capaB")
 .to("#ocho",{
    duration:50,
    opacity:0
},"capaB+=50")
 ;

ScrollTrigger.create({
    animation:tlOcho,
    trigger:"#ocho",
    //markers:true,
    start:"top top",
    end:"+=500% " ,
    pin:true,
    scrub:1,

});

//nue 

const tlNue= gsap.timeline();

tlNue. from("#nue",{
    duration:5,
    opacity:0
})
.from("#p-nue1",{
    duration:2,
    opacity:0
})
.from("#p-nue2",{
    duration:2,
    opacity:0
})
.to("#nue",{
    delay:5,
    duration:5,
    opacity:0
});

ScrollTrigger.create({
    animation:tlNue,
    trigger:"#nue",
 //   markers:true,
    start:"top top",
    end:"+=500% " ,
    pin:true,
    scrub:1,

});

//diez

const tlDiez=gsap.timeline();

tlDiez.from("#diez",{
    duration:5,
    opacity:0
})
.from("#text-diez",{
    duration:2,
    opacity:0
})
.to("#diez",{
    duration:5
})
;


ScrollTrigger.create({
    animation:tlDiez,
    trigger:"#diez",
   // markers:true,
    start:"top top",
    end:"+=650% " ,
    pin:true,
    scrub:1,

});

//once

const tlOnce= gsap.timeline();

tlOnce.addLabel("capa",0)
.from("#once00",{
   duration:2,
    xPercent:100,
    objectPosition:"-100%"
},"capa")
.from("#once01",{
   duration:3,
    xPercent:100
},"capa")
.from("#once02",{
    duration:4,
    xPercent:100,
    objectPosition:"-100%"
},"capa")
.addLabel("capaB")
.from("#p-once1",{
    duration:2,
    opacity:0
},"capaB")
.from("#p-once2",{
    duration:2,
    opacity:0
},"capaB+=3")
.addLabel("capaC",4)
.to("#once02",{
    duration:2,
    width:"120%",
    height:"120%",
    x:"-10%"
},"capaC")
.to("#once01",{
    duration:3,
    width:"120%",
    height:"120%",
    x:"-10%"
   //objectPosition:-150
},"capaC")
.to("#once00",{
    duration:4,
    width:"120%",
    height:"120%",
    x:"-10%"
    //objectPosition:-150
},"capaC")
.to("#once",{
    duration:5,
    
},"capaC+=5")
;

ScrollTrigger.create({
    animation:tlOnce,
    trigger:"#once",
   // markers:true,
    start:"top top",
    end:"+=600% " ,
    pin:true,
    scrub:1

});

//doce

const tlDoce=gsap.timeline();

tlDoce.to("#doce00",{
    duration:10,
    objectPosition:-300
})
.addLabel("capa",0)
.from("#p-doce1",{
    duration:2,
    xPercent:-100,
    opacity:0
},"capa")
.from("#p-doce2",{
    duration:2,
    xPercent:-100,
    opacity:0
},"capa+=2")
.from("#p-doce3",{
    duration:2,
    xPercent:-100,
    opacity:0
},"capa+=4")
;

ScrollTrigger.create({
    animation:tlDoce,
    trigger:"#doce",
   // markers:true,
    start:"top top",
    end:"+=800% " ,
    pin:true,
    scrub:1

});

//trece

const tlTrece= gsap.timeline();

tlTrece.from("#trece",{
    duration:5,
    opacity:0
})
.to("#trece00",{
    duration:10,
   transform: "scale(1)"
})
.addLabel("capa",15)
.from("#p-trece1",{
    duration:5,
    opacity:0
},"capa")
.from("#p-trece2",{
    duration:5,
    opacity:0
},"capa+=7")
.to("#trece",{
    duration:5,
    opacity:0
},"capa+=15");

ScrollTrigger.create({
    animation:tlTrece,
    trigger:"#trece",
   // markers:true,
    start:"top top",
    end:"+=500% " ,
    pin:true,
    scrub:1

});
/*
window.onresize = function(event)
{
document.location.reload(true);
}

var elem = document.documentElement;
*/
//function openFullscreen() {
   // if (elem.requestFullscreen) {
      //elem.requestFullscreen();
   // } else if (elem.mozRequestFullScreen) { /* Firefox */
   //  elem.mozRequestFullScreen();
   // } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
   //   elem.webkitRequestFullscreen();
   // } else if (elem.msRequestFullscreen) { /* IE/Edge */
   //   elem.msRequestFullscreen();
   // }
//  }
/*
  window.onscroll = function () {  
  
    } */