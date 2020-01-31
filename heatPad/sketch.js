class HeatNode { 
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

}

var collection = [];

function setup() {
    createCanvas(windowWidth * 0.98, windowHeight * 0.98);
    noStroke();
}

function draw() {
    background(255, 255, 255);

    if (mouseIsPressed) {
        collection.push(new HeatNode(mouseX, mouseY, 50));
    }

    collection.forEach(function(item) {
        fill(0, 0, 255);
        ellipse(item.x, item.y, item.size, item.size);
        fill(0, 255, 0);
        ellipse(item.x, item.y, item.size * 0.75, item.size * 0.75);
        fill(255, 255, 0);
        ellipse(item.x, item.y, item.size * 0.5, item.size * 0.5);
        fill(255, 0, 0);
        ellipse(item.x, item.y, item.size * 0.25, item.size * 0.25);

        if (item.size > 0) { 
            item.size -= 0.25;
        } else {
            collection.splice(collection.indexOf(item), collection.indexOf(item));
        }
    });

    fill(0, 0, 0)
    text("FPS: " + Math.floor(frameRate()), 5, 5, 50, 100);
}
