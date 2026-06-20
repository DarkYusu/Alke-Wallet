# 💳 Alke Wallet

Proyecto Final — Módulo 2: Fundamentos del Desarrollo Front-End  
**Alkemy** | Evaluación Integradora

---

## 📋 Descripción

Alke Wallet es una aplicación de billetera digital desarrollada como proyecto evaluativo del Módulo 2 de Alkemy. Permite a los usuarios gestionar sus activos financieros en **pesos chilenos (CLP)** de manera segura y conveniente, a través de una interfaz web responsive e interactiva.

---

## 🚀 Funcionalidades

- **Inicio de sesión** con validación de credenciales
- **Menú principal** con visualización del saldo disponible en CLP
- **Depósitos** con actualización dinámica del saldo
- **Envío de dinero** a contactos registrados con verificación de saldo suficiente
- **Agenda de contactos** con campos adaptados al sistema bancario chileno (RUT + N° de cuenta)
- **Historial de movimientos** con filtro por tipo de transacción
- Toda la información se persiste en **localStorage** por usuario

---

## 🗂️ Estructura del proyecto

```
Alke Wallet/
├── index.html            # Pantalla de bienvenida
├── login.html            # Inicio de sesión
├── menu.html             # Menú principal y saldo
├── deposit.html          # Realizar depósitos
├── sendmoney.html        # Enviar dinero a contactos
├── transactions.html     # Historial de movimientos
├── newcontact.html       # Agregar nuevo contacto
└── assets/
    ├── css/
    │   └── styles.css    # Estilos globales
    └── js/
        ├── login.js      # Lógica de autenticación
        └── movimientos.js # Lógica del historial
```

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica de las páginas |
| CSS3 | Estilos globales y diseño responsive |
| JavaScript | Lógica dinámica y manejo de datos |
| Bootstrap 5.3 | Componentes UI y grid responsive |
| jQuery 3.7 | Manipulación del DOM y eventos |

---

## 👤 Usuarios de prueba

| Email | Contraseña |
|---|---|
| admin@wallet.cl | 1234 |
| shrek@pantano.cl | cebolla |
| batman@gotham.com | soybatman |
| homero@springfield.com | donas |
| goku@kamehouse.com | kamehameha |

---

## ▶️ Cómo ejecutar el proyecto

1. Clona o descarga este repositorio
2. Abre el archivo `index.html` en tu navegador
3. Inicia sesión con cualquiera de los usuarios de prueba
4. No requiere instalación ni servidor backend

---

## 🌿 Ramas del repositorio

```
main                    → Código estable y entregable final
feature/login           → Funcionalidad de autenticación
feature/transacciones   → Envío y recepción de fondos
feature/depositos       → Depósitos y gestión de saldo
```

---

## ✅ Requerimientos cumplidos

- [x] Registro e inicio de sesión con credenciales
- [x] Visualización del saldo disponible
- [x] Realización de depósitos
- [x] Envío de fondos a contactos
- [x] Historial completo de transacciones con filtros
- [x] Agenda de contactos con datos bancarios chilenos (RUT, banco, N° cuenta)
- [x] Interfaz responsive adaptada a distintos dispositivos
- [x] Montos en peso chileno con formato `toLocaleString('es-CL')`
- [x] Persistencia de datos por usuario vía localStorage
- [x] Control de versiones con Git y ramas por funcionalidad

---

## 🔧 Correcciones aplicadas al código

Durante el desarrollo se identificaron y corrigieron los siguientes problemas:

- **`deposit.html`** — Se eliminó un bloque de código muerto que usaba la variable `monto` antes de ser declarada, lo que causaba un `ReferenceError` para usuarios nuevos.
- **`sendmoney.html`** — Se eliminó un elemento `<ul id="contactList">` duplicado y anidado que generaba HTML inválido.
- **`transactions.html`** — Se corrigió la etiqueta del filtro: decía "Transferencia recibida" pero el tipo almacenado corresponde a transferencias enviadas.
- **`movimientos.js`** — El saldo inicial estaba hardcodeado como string `'+$60.000'`. Se unificó con el formato dinámico `toLocaleString('es-CL')`.
- **`newcontact.html`** — Se reemplazó el campo CBU (identificador bancario argentino) por RUT chileno con validación de dígito verificador, número de cuenta y lista de bancos chilenos.
- **`index.html`** — Se agregaron las etiquetas `charset` y `viewport` que faltaban.

---

## 📚 Proyecto académico

Este proyecto fue desarrollado como evaluación integradora del **Módulo 2 — Fundamentos del Desarrollo Front-End** del programa de formación de [Alkemy](https://www.alkemy.org/).
