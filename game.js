class Game{
constructor(){

}



start(){
    player = new Player()
    form = new Form();
    form.display();

       

    bird=createSprite(100, 100, 50, 50);
    bird.addAnimation('ani',ab_animation)
    bird.scale = 0.2

    gameOver = createSprite(width/2,height/2,100,100)
    gameOver.addImage('aaa',gameOverImg)
    gameOver.visible = false;

    edges = createEdgeSprites(); 

    bgSound.play();

    witchGrp = new Group();
    CloudsGrp = new Group();
    redBallGrp = new Group();
    virusGrp = new Group();
    
    }
  
  
    handleElements() { 
    form.hide();
   // form.titleImg.position(40, 50);
  // form.titleImg.class("gameTitleAfterEffect");
  }

play(){
    this.handleElements()
    

    drawSprites();
  
bird.collide(edges[2])
bird.collide(edges[3])

    if(keyDown("SPACE")){
        bird.velocityY -=4
        jumpsound.play()
        }
        //score increament
    score= score+Math.round(frameCount/500);
        textSize(20)
    text("SCORE = "+score,width-150,20);   

        //adding gravity to the bird
        bird.velocityY +=0.9
  

   // witch = createSprite()
    if(witchGrp.isTouching(bird)){
        witchGrp.setVelocityXEach(0)
        CloudsGrp.setVelocityXEach(0)
        redBallGrp.setVelocityXEach(0)
        virusGrp.setVelocityXEach(0)


    }

    
    this.showClouds();
    this.showWitch();
     this.showVirus(); 
    this.ShowBall();

}

showClouds(){
    if(frameCount % 100 === 0  ){
        cloud = createSprite(1800,100,40,10)
        cloud.velocityX= -6
        cloud.addImage("cloud",cloud_img)
        cloud.scale= 0.5
        cloud.y =Math.round(random(10, 120 ))
      
        CloudsGrp.add(cloud)
    
        // cloud.lifetime = 200;
       
    }
}
showWitch(){
if(frameCount % 300=== 0  ){
    witch = createSprite(1800,500,40,10)
    witch.velocityX= -5
    witch.addImage("a",witch_img)
    witch.scale= 0.4
    witch.y =Math.round(random(100, 700))
  
        witchGrp.add(witch)
}
    
}

showVirus(){ 
if(frameCount %600=== 0  ){
virus = createSprite(1800,500,40,10)
virus.velocityX= -3
virus.addImage("b",virus_img)
virus.scale= 0.4
virus.y =Math.round(random(130, 700))
virusGrp.add(virus)
}   

}    


ShowBall(){ 
    if(frameCount %200=== 0  ){
    red_ball = createSprite(1800,300,40,10)
    red_ball.velocityX= -5
    red_ball.addImage("c",red_ball_img)
    red_ball.scale= 0.1
    red_ball.y =Math.round(random(130, 700))
    redBallGrp.add(red_ball)
    }   

    }    
    
restart(){
witch.destroyEach();
red_ball.destroyEach();
virus.destroyEach();
    }        
}