const listaTransacciones = [

    {
        tipo: 'compra',
        descripcion: 'Compra en línea',
        tiempo: 'Hace 2 horas',
        monto: '-$50'
    },

    {
        tipo: 'deposito',
        descripcion: 'Depósito',
        tiempo: 'Hace 1 día',
        monto: '+$100'
    },

    {
        tipo: 'transferencia',
        descripcion: 'Transferencia recibida',
        tiempo: 'Hace 3 días',
        monto: '+$7.500'
    },

    {
        tipo: 'compra',
        descripcion: 'Compra en línea',
        tiempo: 'Hace 5 días',
        monto: '-$5.550'
    },

    {
        tipo: 'deposito',
        descripcion: 'Depósito misma cuenta',
        tiempo: 'Hace 1 semana',
        monto: '+$10.500'
    },

    {
        tipo: 'transferencia',
        descripcion: 'Transferencia recibida',
        tiempo: 'Hace 2 semanas',
        monto: '+$7.575'
    }

];

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