class Lampa {
  #id;
  #allapot;
  #divElem;

  constructor(id, allapot, articleElem) {
    this.#id = id;
    this.#allapot = allapot;
    this.#divElem  = $(`<div id="${this.#id}"> </div>`);
    this.#szinBeallit();
    articleElem.append(this.#divElem);
  }

  #szinBeallit() {
    this.#divElem.addClass(this.#allapot === true ? "be" : "ki");
  }
}
export default Lampa;
