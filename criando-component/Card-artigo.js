class CardArtigo extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());


    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = this.getAttribute("autor");

        const title = document.createElement("h1");
        title.textContent = "by" + ( this.getAttribute("title") || "Anonymouns");

        const description = document.createElement("p");
        description.textContent = this.getAttribute("description");

        const publicacao = document.createElement("span");
        publicacao.textContent = this.getAttribute("publicacao");
        publicacao.setAttribute("class", "publicacao")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(title);
        cardLeft.appendChild(description);
        cardLeft.appendChild(publicacao)

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImg = document.createElement("img");
        newsImg.src = this.getAttribute("foto") || "assets/default.jpg";
        

        cardRight.appendChild(newsImg);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }

    styles() {
        const style = document.createElement("style")
        style.textContent = `

            .card{
                border-color: black;
                box-shadow: -7px 2px 28px -8px rgba(0,0,0,0.88);
                -webkit-box-shadow: -7px 2px 28px -8px rgba(0,0,0,0.88);
                -moz-box-shadow: -7px 2px 28px -8px rgba(0,0,0,0.88); ;
                width: 80%;
                display: flex;
                margin: 0 auto;
                margin-top: 50px;
                justify-content: space-between;
            }
            
            .card_left {
                display: flex;
                flex-direction: column ;
                justify-content: center;
                padding: 10px;
                text-align: justify;
            }
            
            .card_left > h1 {
                margin-top: 15px;
                margin-bottom: 5px;
                font-size: 25px;
            }
            
            .card_left > p {
                color: gray;
                margin-bottom: 5px;
            }

            .publicacao {
                font-size: 10px;
            }
            
            .card_right {
                display: flex;
                justify-content: center;
            }
            .card_right > img {
                width: 300px;
            }
            
            @media (max-width: 650px) {
                .card {
                    flex-direction: column-reverse;
                    height: 500px;
                    justify-content:space-around;
                }
            
                .card_right > img {
                    width: 100%;
                }
            
            }
            `;
        return style
    }
}

customElements.define("card-artigo", CardArtigo)