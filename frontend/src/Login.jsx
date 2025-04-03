import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [parola, setParola] = useState('');
    const [mesaj, setMesaj] = useState('');
    const [limba, setLimba] = useState(() => localStorage.getItem('limba') || 'ro');
    const navigate = useNavigate();

    const texte = {
        ro: {
            titlu: 'Autentificare',
            username: 'Username',
            parola: 'Parolă',
            placeholderUsername: 'ex: emanuel.luculescu',
            placeholderParola: 'Parolă',
            buton: 'Login',
            succes: 'Autentificare reușită! 🎓',
            eroare: 'Username sau parolă greșită.',
            campuri: 'Te rugăm să completezi toate câmpurile.',
        },
        en: {
            titlu: 'Login',
            username: 'Username',
            parola: 'Password',
            placeholderUsername: 'e.g. emanuel.luculescu',
            placeholderParola: 'Password',
            buton: 'Login',
            succes: 'Login successful! 🎓',
            eroare: 'Incorrect username or password.',
            campuri: 'Please fill in all fields.',
        },
    };

    const t = texte[limba];

    const schimbaLimba = (nouaLimba) => {
        setLimba(nouaLimba);
        localStorage.setItem('limba', nouaLimba);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !parola) {
            setMesaj(t.campuri);
            return;
        }

        const validUsername = /^[a-z]+\.[a-z]+$/i.test(username);

        if (validUsername && parola.trim() !== '') {
            localStorage.setItem('user', username); // salvăm username-ul
            setMesaj(t.succes);
            setTimeout(() => navigate('/dashboard'), 800);
        } else {
            setMesaj(t.eroare);
        }
    };

    return (
        <div className="login-page">
            {/* Selector limbă */}
            <div className="language-switch">
                <span onClick={() => schimbaLimba('en')}>🇬🇧 English</span> |{' '}
                <span onClick={() => schimbaLimba('ro')}>🇷🇴 Română</span>
            </div>

            {/* Logo în afara containerului */}
            <a href="https://www.info.uaic.ro" target="_blank" rel="noopener noreferrer">
                <img src="/logo_fac.png" alt="FII Logo" className="logo-login" />
            </a>

            {/* Containerul de login */}
            <div className="login-container">
                <h2>{t.titlu}</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">{t.username}</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={mesaj === t.succes ? 'input-valid' : mesaj ? 'input-invalid' : ''}
                    />

                    <label htmlFor="parola">{t.parola}</label>
                    <input
                        id="parola"
                        type="password"
                        value={parola}
                        onChange={(e) => setParola(e.target.value)}
                        className={mesaj === t.succes ? 'input-valid' : mesaj ? 'input-invalid' : ''}
                    />

                    <button type="submit">{t.buton}</button>
                </form>

                {mesaj && (
                    <p className={`mesaj ${mesaj === t.succes ? 'mesaj-succes' : 'mesaj-eroare'}`}>
                        {mesaj}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Login;
