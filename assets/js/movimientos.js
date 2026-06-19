const usuarioActual = localStorage.getItem('usuarioActual');

if (!usuarioActual) {
    window.location.href = 'login.html';
}

const claveMovimientos = `movimientos_${usuarioActual}`;

let listaTransacciones =
    JSON.parse(
        localStorage.getItem(claveMovimientos)
    );

if (!listaTransacciones) {

    listaTransacciones = [

        {
            tipo: 'deposito',
            descripcion: 'Saldo inicial',
            tiempo: 'Hoy',
            monto: '+$60.000'
        }

    ];

    localStorage.setItem(
        claveMovimientos,
        JSON.stringify(listaTransacciones)
    );

}

function mostrarUltimosMovimientos(filtro) {

    $('#listaMovimientos').empty();

    listaTransacciones.forEach(function (movimiento) {

        if (
            filtro === 'todos' ||
            movimiento.tipo === filtro
        ) {

            $('#listaMovimientos').append(`
                <li class="list-group-item">
                    <div class="d-flex justify-content-between">
                        <div>
                            <strong>${movimiento.descripcion}</strong>
                            <br>
                            <small class="text-muted">
                                ${movimiento.tiempo}
                            </small>
                        </div>
                        <span>${movimiento.monto}</span>
                    </div>
                </li>
            `);

        }

    });

}

$(document).ready(function () {

    mostrarUltimosMovimientos('todos');

    $('#filtroTipo').change(function () {

        mostrarUltimosMovimientos(
            $(this).val()
        );

    });

});