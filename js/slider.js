class Slider {
    constructor(sliderId) {
        this.sliderElement = document.getElementById(sliderId);
        this.imagenElement = this.sliderElement.querySelector('img[name="img"]');
        this.imagenes = [
            'img/img1.jpg',
            'img/img2.jpg',
            'img/img3.jpg',
            'img/img4.jpg',
        ];
        this.count = 0;
        this.init();
        this.automatic();
    }
    
    init() {
        this.imagenElement.src = this.imagenes[0];
        const next = this.sliderElement.querySelector('.slider__move__next');
        const prev = this.sliderElement.querySelector('.slider__move__prev');
        

        prev.addEventListener('click', () => this.movePrevius());
        next.addEventListener('click', () => this.moveNext());
    }

    movePrevius() {
        this.count--;
        if (this.count < 0) {
            this.count = this.imagenes.length -1;
        }
        this.imagenElement.src = this.imagenes[this.count];
    }

    moveNext() {
        this.count++;
        if (this.count > this.imagenes.length -1) {
            this.count = 0;
        }
        this.imagenElement.src = this.imagenes[this.count];
    }

    automatic() {
        setInterval(() => {
            this.moveNext();
        }, 4000);
    }
}

const slider = new Slider('slider');