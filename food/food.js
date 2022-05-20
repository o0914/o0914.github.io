function setup() {
    initializeFields();
    createCanvas(300, 300);
    textSize(40);
}

var choice;

function draw() {
    background(color(0xDF, 0xEA, 0x45));
    fill(color(0x45, 0x6F, 0xEA));
    if (choice == 0)
        rect(50, 50, 150, 2);
    if (choice == 1)
        rect(50, 100, 150, 2);
    if (choice == 2)
        rect(50, 150, 150, 2);
    if (choice == 3)
        rect(50, 200, 75, 2);
    if (choice == 4)
        rect(50, 250, 75, 2);
    text("泡麵", 50, 50);
    text("Ubereats", 50, 100);
    text("Foodpanda", 50, 150);
    text("牛排",50,200);
    text("拉麵",50,250);
}

function mousePressed() {
    choice = int(random(3));
}

function initializeFields() {
    choice = -1;
}
