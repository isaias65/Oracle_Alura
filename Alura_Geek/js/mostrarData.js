import { conexion } from "./conexion.js";

const lista = document.querySelector("[data-list]");

export default function construyeCard(id, titulo, url, precio) {
    const card = document.createElement("article");
    card.className = "products";

    card.innerHTML =
    `
    <figure class="products-img">
        <img src="${url}" alt="imagen del producto">
    </figure>
    <div class="products-info">
        <p class="products-name">${titulo}</p>
        <div class="products-details">
            <p class="products-price"><span>$</span>${precio},00</p>
            <img class="products-icon-eliminar" src="./assets/icon_trash.svg" alt="icono de eliminar" data-id="${id}">
        </div>
    </div>
    `;

    const eliminarIcon = card.querySelector(".products-icon-eliminar");

    eliminarIcon.addEventListener("click", (event) => {
        event.preventDefault();

        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esto eliminará el producto de forma permanente.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                conexion
                    .eliminarData(id)
                    .then(() => {
                        card.remove();
                    })
                    .catch((error) => {
                        console.error("Error al eliminar el producto:", error);
                        Swal.fire("Error", "No se pudo eliminar el producto. Inténtalo de nuevo.", "error");
                    });
            }
        });
    });


    return card;
}

async function listarData() {
    try {
        const listAPI = await conexion.listarData();
        listAPI.forEach(element => lista 
            .appendChild(construyeCard(element.id, element.titulo, element.url, element.precio))
        );
    } catch (error) {
        lista.innerHTML = `<h2 class="mensaje">No fue posible cargar la lista de productos</h2>`
    }
}
listarData();
