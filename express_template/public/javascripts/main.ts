import {IAuto} from "../../model/interface";

console.log('startup2 and more...');

let divShow = document.getElementById("show") as HTMLDivElement;
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
                    data.map((value:IAuto) =>  {
                        return inhalt += `
                                        <tr>
                                            <td>${value.model}</td>
                                            <td>${value.brand}</td>
                                            <td>${value.ps}</td>
                                        </tr>
                                        `;
                    })
                    inhalt += `</tbody>
                                </table>`;
                    divShow.innerHTML = inhalt;


                })
        })
}