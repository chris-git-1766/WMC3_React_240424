import React, { useState } from 'react';
interface ILogin {
    logged: (user:any,pwd:any) => void
}

const LoginForm = () => {
    // Zustand für E-Mail und Passwort
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Zustand für den Login-Status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Funktion zum Einreichen des Formulars
    const handleSubmit = (event: React.MouseEvent) => {
        event.preventDefault();

        // Hier würde normalerweise die Logik für die Überprüfung der Anmeldeinformationen stattfinden
        // Für dieses Beispiel setzen wir isLoggedIn einfach auf true, wenn das Formular eingereicht wird
        setIsLoggedIn(true);





    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <p>Du bist eingeloggt!</p>
                    {/* Hier kannst du die Inhalte anzeigen, die für eingeloggte Benutzer relevant sind */}
                </div>
            ) : (
                <form onSubmit={() => handleSubmit}>
                    <label>
                        E-Mail:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Passwort:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default LoginForm