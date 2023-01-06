let qrForm = document.getElementById("qr-form");
        let qrCode = document.getElementById("qr-code");
        let message = document.getElementById("message");

        qrForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Get the URL from the form
            let url = qrForm.querySelector("input[name=url]").value;

            // Generate the QR-code
            let qrURL = `https://api.qrserver.com/v1/create-qr-code/?data=${url}`;

            // Insert the image in the DOM
            qrCode.innerHTML = `<img src="${qrURL}" alt="QR-code">`;

            // Show a message
            message.innerHTML = "QR-code successfully generated!";
        });