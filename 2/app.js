const tl = gsap.timeline()

tl.to(".box_one",0.3,{
    height:"0",
    // delay:"3"
})
.to(".box_two",0.4,{
    height:"0",
    
})
.to(".box_three",0.5,{
    height:"0" 
})
.to(".box_four",1,{
    height:"0" 
})
.to("h1",5,{
    opacity:"1"
},"-=0.4")
.from(".bg_square",1,{
    y:"200%",
    height:"200%",
    opacity:"1"
},"-=5")
.from(".and",1,{
    y:"200%",
    opacity:"1"
},"-=4.95")
.from("p",4.95,{
    
    opacity:"0"
},"-=4.95")

.from(".bg_sirqle",3,{
    
    y:"200%"
},"-=5.95")

