class Rectangle  {

    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getArea(w, h){
        let result = (w * h);        
        console.log('Площа прямокутника: ', result);
        // console.log(`Площа прямокутника: ${this.width * this.height}`);
    }

    getPerimeter(w, h){
        let result = (w + h) * 2;        
        console.log('Периметр прямокутника: ', result);
        // console.log(`Периметр прямокутника: ${(this.width + this.height) * 2}`);
    }
}

let resultOne = new Rectangle();

resultOne.getArea(24, 24);
resultOne.getPerimeter(24, 24);
