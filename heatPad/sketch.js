class HeatNode { 
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

}

var collection = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw() {
    background(255, 255, 255);

    if (mouseIsPressed) {
        collection.push(new HeatNode(mouseX, mouseY, 50));
    }

    collection.forEach(function(element) {
        fill(0, 0, 255);
        ellipse(element.x, element.y, element.size, element.size);
        fill(0, 255, 0);
        ellipse(element.x, element.y, element.size * 0.75, element.size * 0.75);
        fill(255, 255, 0);
        ellipse(element.x, element.y, element.size * 0.5, element.size * 0.5);
        fill(255, 0, 0);
        ellipse(element.x, element.y, element.size * 0.25, element.size * 0.25);

        if (element.size > 0) { 
            element.size -= 0.25;
        } else {
            collection.splice(collection.indexOf(element), collection.indexOf(element));
        }
    });
}
