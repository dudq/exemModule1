let canvas = document.getElementById("myCanvas");
let conText = canvas.getContext("2d");
let Rectangle = function (xPosition,yPosition,width,height,color) {
    this.width = width;
    this.height = height;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.color = color;
    this.render = function () {
        conText.beginPath();
        conText.rect(this.xPosition,this.yPosition,this.width,this.height);
        conText.fillStyle = this.color;
        conText.fill();
        conText.closePath();
    }
};
let rectangle = new Rectangle(10,10,200,100,"#000000");
rectangle.render();
