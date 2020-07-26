

function Bird() {
  this.y = height / 2;
  this.x = 64;

  this.gravity = 0.7;
  this.lift = -12;
  this.velocity = 0;
  this.velocityX;

  this.show = function() {
    fill(255);
    image(bird_img, this.x, this.y, 50,50);
    //ellipse(this.x, this.y, 32, 32);
    
  };

  this.up = function() {
    this.velocity += this.lift;
  };
  
  if(frameCount%100 === 0) {
    this.velocityX+=10;
  }
 

  this.update = function() {
    this.velocity += this.gravity;
     this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };

  
}
