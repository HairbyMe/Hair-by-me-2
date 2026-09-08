/* =====================================================
   VARIABLES
===================================================== */

let basePrice = 250;

let colorExtra = 0;
let sizeExtra = 50;
let lengthExtra = 0;


/* =====================================================
   ELEMENTS
===================================================== */

const price = document.getElementById("price");

const previewTitle =
    document.getElementById("previewTitle");

const previewImage =
    document.getElementById("previewImage");

const previewDescription =
    document.getElementById("previewDescription");


const summaryStyle =
    document.getElementById("summaryStyle");

const summaryColor =
    document.getElementById("summaryColor");

const summarySize =
    document.getElementById("summarySize");

const summaryLength =
    document.getElementById("summaryLength");

const summaryAccessories =
    document.getElementById("summaryAccessories");

const summaryPrice =
    document.getElementById("summaryPrice");


/* =====================================================
   CALCUL DU PRIX
===================================================== */

function updatePrice() {

    let accessoriesPrice = 0;

    document
        .querySelectorAll(".accessory input:checked")
        .forEach(function(item) {

            accessoriesPrice +=
                Number(item.dataset.extra);

        });


    const total =
        basePrice +
        colorExtra +
        sizeExtra +
        lengthExtra +
        accessoriesPrice;


    price.textContent =
        total + " DH";

    summaryPrice.textContent =
        total + " DH";

}


/* =====================================================
   CHOIX DU MODELE
===================================================== */

document
    .querySelectorAll(".style-option")
    .forEach(function(button) {

        button.addEventListener("click", function() {


            document
                .querySelectorAll(".style-option")
                .forEach(function(item) {

                    item.classList.remove("active");

                });


            this.classList.add("active");


            basePrice =
                Number(this.dataset.price);


            previewTitle.textContent =
                this.dataset.style;


            summaryStyle.textContent =
                this.dataset.style;


            previewImage.src =
                this.dataset.image;


            previewDescription.textContent =
                "Une magnifique " +
                this.dataset.style +
                " personnalisée selon tes envies.";


            updatePrice();

        });

    });



/* =====================================================
   CHOIX DE LA COULEUR
===================================================== */

document
    .querySelectorAll(".color-option")
    .forEach(function(button) {

        button.addEventListener("click", function() {


            document
                .querySelectorAll(".color-option")
                .forEach(function(item) {

                    item.classList.remove("active");

                });


            this.classList.add("active");


            colorExtra =
                Number(this.dataset.extra);


            summaryColor.textContent =
                this.dataset.color;


            updatePrice();

        });

    });



/* =====================================================
   CHOIX DE LA TAILLE
===================================================== */

document
    .querySelectorAll(".size-option")
    .forEach(function(button) {

        button.addEventListener("click", function() {


            document
                .querySelectorAll(".size-option")
                .forEach(function(item) {

                    item.classList.remove("active");

                });


            this.classList.add("active");


            sizeExtra =
                Number(this.dataset.extra);


            summarySize.textContent =
                this.dataset.size;


            updatePrice();

        });

    });



/* =====================================================
   CHOIX DE LA LONGUEUR
===================================================== */

document
    .querySelectorAll(".length-option")
    .forEach(function(button) {

        button.addEventListener("click", function() {


            document
                .querySelectorAll(".length-option")
                .forEach(function(item) {

                    item.classList.remove("active");

                });


            this.classList.add("active");


            lengthExtra =
                Number(this.dataset.extra);


            summaryLength.textContent =
                this.dataset.length;


            updatePrice();

        });

    });



/* =====================================================
   ACCESSOIRES
===================================================== */

document
    .querySelectorAll(".accessory input")
    .forEach(function(input) {

        input.addEventListener("change", function() {


            const selected = [];


            document
                .querySelectorAll(".accessory input:checked")
                .forEach(function(item) {

                    selected.push(item.dataset.name);

                });


            if (selected.length === 0) {

                summaryAccessories.textContent =
                    "Aucun";

            } else {

                summaryAccessories.textContent =
                    selected.join(", ");

            }


            updatePrice();

        });

    });



/* =====================================================
   CONFIRMATION
===================================================== */

function confirmChoice() {


    const style =
        summaryStyle.textContent;

    const color =
        summaryColor.textContent;

    const size =
        summarySize.textContent;

    const length =
        summaryLength.textContent;

    const accessories =
        summaryAccessories.textContent;

    const total =
        summaryPrice.textContent;


    alert(

        " Ton modele est pret !\n\n" +

        "Coiffure : " + style + "\n" +

        "Couleur : " + color + "\n" +

        "Taille : " + size + "\n" +

        "Longueur : " + length + "\n" +

        "Accessoires : " + accessories + "\n\n" +

        "Prix estime : " + total

    );function confirmChoice() {

    const style =
        summaryStyle.textContent;

    const color =
        summaryColor.textContent;

    const size =
        summarySize.textContent;

    const length =
        summaryLength.textContent;

    const accessories =
        summaryAccessories.textContent;

    const total =
        summaryPrice.textContent;


    /* =================================================
       CRÉER LE LIEN VERS LA RÉSERVATION
    ================================================== */

    const reservationURL =

        "reservation.html?" +

        "style=" +
        encodeURIComponent(style) +

        "&color=" +
        encodeURIComponent(color) +

        "&size=" +
        encodeURIComponent(size) +

        "&length=" +
        encodeURIComponent(length) +

        "&accessories=" +
        encodeURIComponent(accessories) +

        "&price=" +
        encodeURIComponent(total);


    /* =================================================
       ALLER À LA PAGE DE RÉSERVATION
    ================================================== */

    window.location.href =
        reservationURL;

}

}

 


document.addEventListener("DOMContentLoaded", () => {

    const bouton = document.getElementById("continuerReservation");

    if (bouton) {
        bouton.addEventListener("click", () => {

            // Récupération des choix
            const coiffure = document.getElementById("coiffure")?.value || "";
            const longueur = document.getElementById("longueur")?.value || "";
            const couleur = document.getElementById("couleur")?.value || "";
            const finition = document.getElementById("finition")?.value || "";

            // Sauvegarde des choix
            const personnalisation = {
                coiffure: coiffure,
                longueur: longueur,
                couleur: couleur,
                finition: finition
            };

            localStorage.setItem(
                "personnalisation",
                JSON.stringify(personnalisation)
            );

            // Aller à la réservation
            window.location.href = "reservation.html";
        });
    }

});