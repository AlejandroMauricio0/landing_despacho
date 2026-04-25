export function initRules() {

    const valores = [
        { id: 1, icon:"fa-regular fa-heart",name: "Integridad", data: "Actuamos con ética y transparencia.", color: "#F2F2F2   " },
        { id: 2, icon:"fa-solid fa-bullseye",name: "Objetividad", data: "Nos enfocamos en resultados reales.", color: "#fefefe" },
        { id: 3, icon:"fa-solid fa-briefcase",name: "Competencia Profecional", data: "Cumplimos en tiempo y forma.", color: "#F2F2F2" },
        { id: 4, icon:"fa-solid fa-user-tie",name: "Comportamiento Profecional", data: "Relaciones sólidas y duraderas.", color: "#fefefe" },
        { id: 5, icon:"fa-solid fa-file-shield",name: "Confidencialidad", data: "Excelencia en cada proceso.", color: "#F2F2F2  " },
        { id: 6, icon:"fa-solid fa-handshake",name: "Honestidad", data: "Soluciones modernas y eficientes.", color: "#fefefe" },
        { id: 7, icon:"fa-solid fa-user-gear",name: "Responsabilidad", data: "Colaboración constante.", color: "#F2F2F2    " }
    ];
{/* <i class="fa-solid fa-user-gear"></i> */}
{/* <i class="fa-solid fa-handshake"></i> */}
    const container = document.querySelector("#accordionFlushExample");

    let html = "";

    valores.forEach(valor => {
        html += `
    <div class="accordion-item rounded">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed d-flex justify-content-between p-4 rounded"
                style="background-color: ${valor.color};" type="button" data-bs-toggle="collaps-e"
                data-bs-target="#flush-${valor.id}" aria-expanded="false" aria-controls="flush-${valor.id}">
                <div class="fw-medium fs-5">${valor.id}</div>
                <div class="col-sm-3 fw-medium fs-5 text-truncate">${valor.name}</div>
                <i class="${valor.icon} fs-4"></i>
            </button>
        </h2>
        <div id="flush-${valor.id}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate
                the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine
                this being filled with some actual content.</div>
        </div>
    </div>
      `;
    });

    container.innerHTML = html;

}
