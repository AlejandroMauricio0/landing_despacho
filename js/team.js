export function teamProfex() {
    const team = [
        {
            id: 1,
            area: "",
            name: "Lic 2",
            img: "images/conta_1.jpeg",
            descripcion: "contador con experiencia en diferentes areas",
            icon1: "",
            info1: "",
            icon2: "",
            info2: "",
            icon3: "",
            info3: "",
            icon4: "",
            info4: ""
        },
        {
            id: 2,
            area: "",
            name: "Lic 2",
            img: "images/conta_2jpeg.jpeg",
            descripcion: "contador con experiencia en diferentes areas",
            icon1: "",
            info1: "",
            icon2: "",
            info2: "",
            icon3: "",
            info3: "",
            icon4: "",
            info4: ""
        },
        {
            id: 3,
            area: "directora de auditoría privada y publica",
            name: "Lic 3",
            img: "images/conta_3.jpeg",
            descripcion: "contador con experiencia en diferentes areas",
            icon1: "",
            info1: "",
            icon2: "",
            info2: "",
            icon3: "",
            info3: "",
            icon4: "",
            info4: ""
        },
        {
            id: 4,
            area: "Auditor en materia fiscal y seguridad social. <br/> Especialista en Impuestos. ",
            name: "José Carlos Cruz Gómez",
            img: "images/CONTA__4.png",
            descripcion: "contador con experiencia en diferentes areas",
            icon1: "",
            info1: "",
            icon2: "",
            info2: "",
            icon3: "",
            info3: "",
            icon4: "",
            info4: ""
        },
    ];

    const container = document.querySelector("#team_profex");

    let html = '';
    //   <div class="btn btn-outline-light w-50 rounded-5">
    //                                     <button class="text-light btn border border-0 border-black border-1 " data-bs-toggle="modal"
    //                                         data-bs-target="#modal-${valor.id}">Conoce más</button>
    //                                 </div>
    team.forEach(valor => {
        html += `
        
        <div class="card-profile bg-glass">
                    <div class="p-2 d-flex justify-content-center">
                        <div class="rounded-circle bg-danger overflow-hidden"
                            style="width: 200px; height: 200px; position-area: unset;">

                            <img src=${valor.img} width="200px" alt="">
                        </div>
                    </div>
                    <div class="p-4">
                        <h4 class="color-oro text-center">${valor.name}</h4>
                        <h6 class="text-center">${valor.area}</h6>
                        </div>
                        <h6 class=" text-center">Redes Sociales </h6>
                        <div class="d-flex justify-content-center">
                        <div class="d-flex col-sm-4">
                            <div class="col">
                                <i class="fa-brands fa-facebook"></i>
                            </div>
                            <div class="col">
                                <i class="fa-brands fa-instagram"></i>
                            </div>
                            <div class="col">
                                <i class="fa-brands fa-twitter"></i>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center p-2">
                  <button type="button" class="btn text-light border border-light btn-outline-light w-50 rounded-5" data-bs-toggle="modal"
                                              data-bs-target="#modal-${valor.id}">Conoce más</button>
                    </div>
            </div>

        
<div class="modal fade" id="modal-${valor.id}" tabindex="-1">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content rounded-4 shadow-lg border-0 overflow-hidden">

            <!-- HEADER -->
            <div class="modal-header text-dark border-0">
                <h5 class="modal-title fw-bold">
                    <i class="fa-solid fa-user-tie me-2"></i>
                    Perfil Profesional
                </h5>
                <button type="button" class="btn-close btn-close-dark" data-bs-dismiss="modal"></button>
            </div>

            <!-- BODY -->
            <div class="modal-body p-4">

                <div class="row align-items-center">

                    <!-- Imagen -->
                    <div class="col-md-5 text-center mb-4 mb-md-0">
                        <div class="p-3 rounded-4 shadow-sm">
                            <img src=${valor.img} class="img-fluid rounded-4 shadow style="height:100px;" alt="${valor.id}">
                        </div>
                    </div>

                    <!-- Información -->
                    <div class="col-md-7">

                        <h3 class="fw-bold mb-1">Contador ${valor.name}</h3>
                        <p class="fw-semibold mb-3 text-dark">
                          ${valor.area}
                        </p>

                        <hr class="my-3">

                        <p class="text-mute">
                            ${valor.descripcion}
                        </p>

                        <!-- Especialidades -->
                        <div class="row mt-4 g-3">

                            <div class="col-6">
                                <div class="border rounded-3 p-3 text-center">
                                    <i class="${valor.icon1} fs-4 text-dark mb-2"></i>
                                    <p class="mb-0 small fw-semibold">${valor.info1}</p>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="border rounded-3 p-3 text-center">
                                    <i class="${valor.icon2} fs-4 text-dark mb-2"></i>
                                    <p class="mb-0 small fw-semibold">${valor.info2}</p>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="border rounded-3 p-3 text-center">
                                    <i class="${valor.icon3} fs-4 text-dark mb-2"></i>
                                    <p class="mb-0 small fw-semibold">${valor.info3}</p>
                                </div>
                            </div>

                            <div class="col-6">
                                <div class="border rounded-3 p-3 text-center">
                                    <i class="${valor.icon4} fs-4 text-dark mb-2"></i>
                                    <p class="mb-0 small fw-semibold">${valor.info3}</p>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>

            <!-- FOOTER -->
            <div class="modal-footer bg-light border-0 justify-content-center">
                <small class="text-muted">
                    © 2026 Profex Servicios Integrales del Sureste
                </small>
            </div>

        </div>
    </div>
</div>





            
        `;
    });

    container.innerHTML = html;
}