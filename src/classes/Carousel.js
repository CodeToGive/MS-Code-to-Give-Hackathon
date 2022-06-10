class Carousel {
    constructor(elements, options) {
        this.elements = elements;
        this.options = options;
        this.el_id = 0;
        this.len = elements.length;
    }

    onNext() {
        this.el_id = (this.el_id + 1) % this.len;
    }

    onPrev() {
        this.el_id = (this.el_id - 1 + this.len) % this.len;
    }

    onChange() {
        if (this.el_id === -1) {
            this.el_id = 0;
        }
    }
}

export default Carousel;
