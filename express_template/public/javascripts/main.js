"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('startup2 and more...');
let divShow = document.getElementById("show");
let inhalt = `
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>PS</th>
                        </tr>
                    </thead>
                    <tbody>
                `;
const showData = () => {
    fetch("/autos")
        .then(res => {
        res.json()
            .then(data => {
            // Daten zusammenbauen##
            data.map((value) => {
                return inhalt += `
                                        <tr>
                                            <td>${value.model}</td>
                                            <td>${value.brand}</td>
                                            <td>${value.ps}</td>
                                        </tr>
                                        `;
            });
            inhalt += `</tbody>
                                </table>`;
            divShow.innerHTML = inhalt;
        });
    });
};
