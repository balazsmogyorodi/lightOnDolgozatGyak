import Lampa from "./lampa.js";

class JatekTer {
    #allapotLista;
    #kor;


  constructor() {
    console.log("hello");
    //this.#listaFeltolto();
    this.#init();
   

  }


  #init() {
    this.#allapotLista = [true, false, true];
    console.log(this.#allapotLista);
  
    const articleElem = $("article");
    for (let index = 0; index < this.#allapotLista.length; index++) {
        new Lampa(index, this.#allapotLista[index], articleElem)
    }
  }

  #listaFeltolto() {



  }
}
export default JatekTer;
