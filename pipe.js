
function Pipe() {
 
   
  this.spacing = random(60, 130);
  this.top = random(height / 6, (3 / 4) * height);
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.w = 80;
  this.speed = 6;

  //if(frameCount%100 === 0) {
    //this.speed+=3;
  //}

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        score = score-1;
        return true;
      }
    }
    this.highlight = false;
    return false;
  };

 

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    
    
    image(enemy1, this.x, 0, this.w, this.top);
    
    image(enemy, this.x, height - this.bottom, this.w, this.bottom);
  };

  this.update = function() {
    this.x -= this.speed;
  };

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  };
}
