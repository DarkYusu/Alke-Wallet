$(document).ready(function () {

    const usuarios = [
        {
            email: "admin@wallet.cl",
            password: "1234"
        },
        {
            email: "shrek@pantano.cl",
            password: "cebolla"
        },
        {
            email: "batman@gotham.com",
            password: "soybatman"
        },
        {
            email: "homero@springfield.com",
            password: "donas"
        },
        {
            email: "goku@kamehouse.com",
            password: "kamehameha"
        }
    ];

    $("#loginForm").submit(function (e) {

        e.preventDefault();

        const email = $("#email").val().trim();
        const password = $("#password").val().trim();

        let accesoPermitido = usuarios.some(usuario =>
            usuario.email === email &&
            usuario.password === password
        );

        if (accesoPermitido) {

            localStorage.setItem("usuarioActual", email);

            $("#alertContainer").html(`
                <div class="alert alert-success">
                    Inicio de sesión exitoso. Redirigiendo...
                </div>
            `);

            setTimeout(function () {
                window.location.href = "menu.html";
            }, 1500);

        } else {

            $("#alertContainer").html(`
                <div class="alert alert-danger">
                    Correo o contraseña incorrectos.
                </div>
            `);

        }

    });

});
