const usuarioActual = localStorage.getItem('usuarioActual');

if (!usuarioActual) {
    window.location.href = 'login.html';
}

const claveMovimientos = `movimientos_${usuarioActual}`;

let listaTransacciones =
    JSON.parse(localStorage.getItem(claveMovimientos));

if (!listaTransacciones) {


    const saldoInicial = 60000;

    listaTransacciones = [
        {
            tipo: 'deposito',
            descripcion: 'Saldo inicial',
            tiempo: new Date().toLocaleDateString('es-CL'),
            monto: '+$' + saldoInicial.toLocaleString('es-CL')
        }
    ];

    localStorage.setItem(
        claveMovimientos,
        JSON.stringify(listaTransacciones)
    );

}

function mostrarUltimosMovimientos(filtro) {

    $('#listaMovimientos').empty();

    const movimientosFiltrados = listaTransacciones.filter(function (movimiento) {
        return filtro === 'todos' || movimiento.tipo === filtro;
    });

    if (movimientosFiltrados.length === 0) {
        $('#listaMovimientos').append(`
            <li class="list-group-item text-muted text-center">
                No hay movimientos de este tipo.
            </li>
        `);
        return;
    }

    movimientosFiltrados.forEach(function (movimiento) {

        const esIngreso = movimiento.monto.startsWith('+');
        const colorMonto = esIngreso ? 'text-success' : 'text-danger';

        $('#listaMovimientos').append(`
            <li class="list-group-item">
                <div class="d-flex justify-content-between">
                    <div>
                        <strong>${movimiento.descripcion}</strong>
                        <br>
                        <small class="text-muted">${movimiento.tiempo}</small>
                    </div>
                    <span class="fw-bold ${colorMonto}">${movimiento.monto}</span>
                </div>
            </li>
        `);

    });

}

$(document).ready(function () {

    mostrarUltimosMovimientos('todos');

    $('#filtroTipo').change(function () {
        mostrarUltimosMovimientos($(this).val());
    });

});
