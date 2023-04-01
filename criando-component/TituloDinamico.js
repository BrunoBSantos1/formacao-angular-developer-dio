class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        // BASE DO COMPONENTE
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = 'Bruno Santos'

        // ESTILIZAR COMPONENTE
        const style = document.createElement("style");
        style.textContent = `
        h1 {
            color: red
        }
        `
        // ENVIAR COMPONENTE PARA A SHADOW
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico)