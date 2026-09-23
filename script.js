document.addEventListener("DOMContentLoaded", function () {

    const artworks = document.querySelectorAll(".artwork");

    const popup = document.getElementById("artworkPopup");
    const popupImage = document.getElementById("popupImage");
    const popupTitle = document.getElementById("popupTitle");
    const popupArtist = document.getElementById("popupArtist");
    const popupDescription = document.getElementById("popupDescription");
    const popupDescriptionImage = document.getElementById("popupDescriptionImage");
    const closeButton = document.getElementById("closeButton");


    /* =========================
       OPEN POPUP
       ========================= */

    artworks.forEach(function (artwork) {

        artwork.addEventListener("click", function () {

            const image = artwork.querySelector("img");

            // Main image
            popupImage.src = image.src;
            popupImage.alt = image.alt;

            // Information
            popupTitle.textContent = artwork.dataset.title || "";
            popupArtist.textContent = artwork.dataset.artist || "";
            popupDescription.textContent = artwork.dataset.description || "";


            /* =========================
               OPTIONAL SECOND IMAGE
               ========================= */

            if (popupDescriptionImage) {

                if (artwork.dataset.descriptionImage) {

                    popupDescriptionImage.src =
                        artwork.dataset.descriptionImage;

                    popupDescriptionImage.style.display = "block";

                } else {

                    popupDescriptionImage.src = "";

                    popupDescriptionImage.style.display = "none";

                }

            }


            /* =========================
               SHOW POPUP
               ========================= */

            popup.style.display = "flex";

        });

    });


    /* =========================
       CLOSE BUTTON
       ========================= */

    if (closeButton) {

        closeButton.addEventListener("click", function () {

            popup.style.display = "none";

        });

    }


    /* =========================
       CLICK OUTSIDE POPUP
       ========================= */

    if (popup) {

        popup.addEventListener("click", function (event) {

            if (event.target === popup) {

                popup.style.display = "none";

            }

        });

    }


    /* =========================
       ESCAPE KEY
       ========================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            popup.style.display = "none";

        }

    });

});