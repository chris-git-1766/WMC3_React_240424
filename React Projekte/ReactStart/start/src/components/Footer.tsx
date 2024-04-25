import React from 'react';
import colors from "../config/colors";
import './Footer.css'

function Footer(props:any) {
    return (
        <div className="d-flex mt-2 p-4 align-content-center bg-warning justify-content-around">
            <div className="impressum"><h3>Impressum</h3>
                <p>Name: Kohlweg</p>
                <p>Adresse: Graz</p>
                <p>Gesellschaft: e.U.</p>
            </div>
            <div className="impressum"><h3>Kontakt</h3>
                <p>Name: Kohlweg Christoph</p>
                <p>Mobile: 0677 1234 567</p>
                <p>Geschäftszeiten: 08:00 - 17:00</p>
            </div>
        </div>
    );
}

export default Footer;