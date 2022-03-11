const tl = gsap.timeline()


tl.from(".second_half",3,{
    width:"100%",
    ease:Expo.easeIn
})

.from(".first_half",3,{
    width:"0%",
    ease:Expo.easeIn
},"-=2.5")

.from(".second_h2 h2",1,{
    x:"540px"
})

.from(".endth",1,{
    x:"540px"
})

.from(".end_one",1,{
    x:"450px"
})
.from(".minus",1,{
    x:"450px"
},"-=0.5")
.from(".end_two",1,{
    x:"450px"
},"-=1")
.from(".end_three",1,{
    x:"450px"
},"-=0.5")

.from(".menu h1",0.7,{
    y:"-70px"
},"-=1")
.from(".first_icon",0.7,{
    y:"-70px"
},"-=.5")

.from(".first",0.7,{
    y:"-70px"
},"-=.5")
.from(".second",0.7,{
    y:"-70px"
},"-=.5")
.from(".thirt",0.7,{
    y:"-70px"
},"-=.5")
.from(".img_mini",0.7,{
    y:"-70px"
},"-=.5")

.from(".img_big",1,{
    width:"0%",
    ease:Expo.easeIn
},"-=0.7")
.to(".img_big",1,{
    width:"580px",
    height:"426px"
})
.to(".img_big img",1,{
    width:"580px",
    height:"426px"
},"-=1")
.from(".first_h2",1,{
    x:"-320px"
})
.from(".bottom",1,{
    y:"50px"
},"-=1")

