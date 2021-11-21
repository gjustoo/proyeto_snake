function Snake() {
    this.x = width / 2;
    this.y = width / 2;
    this.xspeed = 0;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.update = function() {

        if (this.total == this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];

            }
        }

        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xspeed * blocks;
        this.y = this.y + this.yspeed * blocks;


        // Limits the snake to go off the canvas
        this.x = constrain(this.x, 0, width - blocks);
        this.y = constrain(this.y, 0, height - blocks);

    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 20) {
            console.log("ñam");
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function() {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);

            if (d < 1) {
                return true;


            }

        }


    }

    this.show = function() {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, blocks, blocks);
        }
        fill(255);
        rect(this.x, this.y, blocks, blocks);
    }

    this.dir = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }
}