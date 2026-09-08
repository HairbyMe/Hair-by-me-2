/* =====================================================
   RÉCUPÉRER LES CHOIX DE LA CLIENTE
===================================================== */

const params = new URLSearchParams(window.location.search);


/* =====================================================
   AFFICHER LE RÉCAPITULATIF
===================================================== */

const style =
    params.get("style") || "Box Braids";

const color =
    params.get("color") || "Noir naturel";

const size =
    params.get("size") || "Medium";

const length =
    params.get("length") || "Mi-dos";

const accessories =
    params.get("accessories") || "Aucun";

const total =
    params.get("price") || "300 DH";


document.getElementById(
    "reservationStyle"
).textContent = style;


document.getElementById(
    "reservationColor"
).textContent = color;


document.getElementById(
    "reservationSize"
).textContent = size;


document.getElementById(
    "reservationLength"
).textContent = length;


document.getElementById(
    "reservationAccessories"
).textContent = accessories;


document.getElementById(
    "reservationPrice"
).textContent = total;



/* =====================================================
   FORMULAIRE
===================================================== */

document
    .getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        /* INFORMATIONS CLIENTE */

        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const email =
            document.getElementById("email").value;

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        const message =
            document.getElementById("message").value;



        /* =================================================
           MESSAGE WHATSAPP
        ================================================== */

        let whatsappMessage =

            "✨ *NOUVELLE DEMANDE DE RENDEZ-VOUS* ✨\n\n" +

            "👩 Nom : " + name + "\n" +

            "📱 Téléphone : " + phone + "\n" +

            "📧 Email : " + email + "\n\n" +

            "💇🏽‍♀️ *COIFFURE*\n" +

            "Modèle : " + style + "\n" +

            "Couleur : " + color + "\n" +

            "Taille : " + size + "\n" +

            "Longueur : " + length + "\n" +

            "Accessoires : " + accessories + "\n\n" +

            "💰 Prix estimé : " + total + "\n\n" +

            "📅 Date souhaitée : " + date + "\n" +

            "🕐 Heure souhaitée : " + time + "\n\n" +

            "💌 Message : " +

            (message || "Aucun message supplémentaire.");



        /* =================================================
           NUMÉRO WHATSAPP DU SALON
        ================================================== */

        const salonNumber =
            "24102268533";


        /*
           IMPORTANT :

           Remplace 24102268533
           par le vrai numéro WhatsApp
           du salon.

           Exemple Gabon :

           24102268533

           Il faut mettre le numéro
           au format international,
           sans +, sans espace et
           sans le premier 0.
        */


        const whatsappURL =
            "https://wa.me/" +
            salonNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);



        /* =================================================
           OUVRIR WHATSAPP
        ================================================== */

        window.open(
            whatsappURL,
            "_blank"
        );

    });



    document.addEventListener("DOMContentLoaded", () => {

    // Récupérer la personnalisation
    const donnees = localStorage.getItem("personnalisation");

    if (donnees) {

        const personnalisation = JSON.parse(donnees);

        document.getElementById("recapCoiffure").textContent =
            personnalisation.coiffure || "-";

        document.getElementById("recapLongueur").textContent =
            personnalisation.longueur || "-";

        document.getElementById("recapCouleur").textContent =
            personnalisation.couleur || "-";

        document.getElementById("recapFinition").textContent =
            personnalisation.finition || "-";
    }

});
const formulaire = document.getElementById("reservationForm");

if (formulaire) {

    formulaire.addEventListener("submit", (event) => {

        event.preventDefault();

        // Récupérer la personnalisation
        const personnalisation =
            JSON.parse(
                localStorage.getItem("personnalisation")
            ) || {};

        // Récupérer les informations
        const reservation = {

            nom: document.getElementById("nom").value,

            telephone:
                document.getElementById("telephone").value,

            date:
                document.getElementById("date").value,

            heure:
                document.getElementById("heure").value,

            personnalisation:
                personnalisation

        };

        // Sauvegarder la réservation
        localStorage.setItem(
            "reservation",
            JSON.stringify(reservation)
        );

        // Aller vers la confirmation
        window.location.href = "confirmation.html";

    });

}

document.addEventListener("DOMContentLoaded", function () {

    const recap = document.getElementById("personnalisationRecap");

    if (!recap) return;

    const personnalisation = localStorage.getItem("personnalisation");

    if (!personnalisation) {
        recap.innerHTML = `
            <p>Aucune personnalisation sélectionnée.</p>
        `;
        return;
    }

    try {

        const choix = JSON.parse(personnalisation);

        recap.innerHTML = "";

        Object.keys(choix).forEach(function (cle) {

            const valeur = choix[cle];

            if (valeur !== "" && valeur !== null && valeur !== undefined) {

                const ligne = document.createElement("p");

                ligne.innerHTML = `
                    <strong>${cle} :</strong> ${valeur}
                `;

                recap.appendChild(ligne);
            }

        });

    } catch (erreur) {

        console.error(
            "Erreur lors de la récupération de la personnalisation :",
            erreur
        );

        recap.innerHTML = `
            <p>Impossible de récupérer votre personnalisation.</p>
        `;
    }

});