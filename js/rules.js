export function initRules() {

    const valores = [
        { id: 1, name: "Integridad", data: "Actuamos con ética y transparencia.", color: "#F2F2F2   " },
        { id: 2, name: "Objetivida", data: "Nos enfocamos en resultados reales.", color: "#fefefe" },
        { id: 3, name: "Competencia Profecional", data: "Cumplimos en tiempo y forma.", color: "#F2F2F2" },
        { id: 4, name: "Comportamiento Profecional", data: "Relaciones sólidas y duraderas.", color: "#fefefe" },
        { id: 5, name: "Confidencialidad", data: "Excelencia en cada proceso.", color: "#F2F2F2  " },
        { id: 6, name: "Honestidad", data: "Soluciones modernas y eficientes.", color: "#fefefe" },
        { id: 7, name: "Responsabilidad", data: "Colaboración constante.", color: "#F2F2F2    " }
    ];

    const container = document.querySelector("#accordionFlushExample");

    let html = "";

    valores.forEach(valor => {
        html += `
    <div class="accordion-item rounded">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed d-flex justify-content-between p-4 rounded"
                style="background-color: ${valor.color};" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-${valor.id}" aria-expanded="false" aria-controls="flush-${valor.id}">
                <div class="fw-medium fs-5">${valor.id}</div>
                <div class="col-sm-3 fw-medium fs-5 text-truncate">${valor.name}</div>
                <div style="width: 30px;">
                    <!-- icon circle plus -->
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M9 12H15" stroke="#323232" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path d="M12 9L12 15" stroke="#323232" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                            <path
                                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                stroke="#323232" stroke-width="2"></path>
                        </g>
                    </svg>
                </div>
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
