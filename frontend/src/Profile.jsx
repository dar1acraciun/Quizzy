import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import Sidebar from './Sidebar';

function Profile() {
    const [userData, setUserData] = useState(null);
    const [limba, setLimba] = useState(() => localStorage.getItem('limba') || 'ro');
    const navigate = useNavigate();

    const texte = {
        ro: {
            titlu: 'Profil utilizator',
            salut: 'Bună,',
            deconectare: 'Deconectare',
            detalii: 'Detalii cont',
            username: 'Username:',
            rol: 'Rol:',
            student: 'Student',
            profesor: 'Profesor',
            dataInregistrare: 'Data înregistrării:',
            setari: 'Setări cont',
            schimbaParola: 'Schimbă parola',
            limba: 'Limba interfață:',
            inapoi: 'Înapoi la dashboard'
        },
        en: {
            titlu: 'User profile',
            salut: 'Hello,',
            deconectare: 'Logout',
            detalii: 'Account details',
            username: 'Username:',
            rol: 'Role:',
            student: 'Student',
            profesor: 'Professor',
            dataInregistrare: 'Registration date:',
            setari: 'Account settings',
            schimbaParola: 'Change password',
            limba: 'Interface language:',
            inapoi: 'Back to dashboard'
        },
    };

    const t = texte[limba];

    const schimbaLimba = (nouaLimba) => {
        setLimba(nouaLimba);
        localStorage.setItem('limba', nouaLimba);
    };

    useEffect(() => {
        const username = localStorage.getItem('user');
        if (!username) {
            setTimeout(() => navigate('/login'), 2000);
            return;
        }

        const parts = username.split('.');
        const prenume = parts[1] ? parts[1].charAt(0).toUpperCase() + parts[1].slice(1) : 'User';
        const nume = parts[0] ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1) : '';

        const userInfo = {
            username: username,
            nume: nume,
            prenume: prenume,
            rol: username.includes('prof') ? 'profesor' : 'student',
            dataInregistrare: '02.04.2025',
        };

        setUserData(userInfo);
    }, [limba, navigate]);

    const handleLogout = () => {
        // 🧼 Șterge utilizatorul
        localStorage.removeItem('user');
        // 🔁 Redirecționează la login
        navigate('/login');
    };

    if (!userData) {
        return (
            <div className="profile-page">
                <p className="mesaj-eroare">{t.eroare}</p>
            </div>
        );
    }

    return (
        <div className="profile-page">

            <div className="language-switch">
                <span onClick={() => schimbaLimba('en')} className={limba === 'en' ? 'active' : ''}>🇬🇧 English</span> |{' '}
                <span onClick={() => schimbaLimba('ro')} className={limba === 'ro' ? 'active' : ''}>🇷🇴 Română</span>
            </div>

            <img src="/logo_fac.png" alt="FII Logo" className="logo" />

            <div className="profile-container">
                <h2>{t.titlu}</h2>

                <div className="profile-header">
                    <img src="/Emi.jpg" alt="Poza profil" className="profile-picture" />
                    <div className="profile-greeting">
                        <h3>{t.salut} {userData.prenume} {userData.nume}</h3>
                        <button onClick={handleLogout} className="logout-button">
                            {t.deconectare}
                        </button>
                    </div>
                </div>

                <div className="profile-sections">
                    <section className="profile-details">
                        <h4>{t.detalii}</h4>
                        <p><strong>{t.username}</strong> {userData.username}</p>
                        <p><strong>{t.rol}</strong> {userData.rol === 'profesor' ? t.profesor : t.student}</p>
                        <p><strong>{t.dataInregistrare}</strong> {userData.dataInregistrare}</p>
                    </section>

                    <section className="profile-settings">
                        <h4>{t.setari}</h4>
                        <button className="settings-button">{t.schimbaParola}</button>
                        <div className="language-setting">
                            <label><strong>{t.limba}</strong></label>
                            <select value={limba} onChange={(e) => schimbaLimba(e.target.value)}>
                                <option value="ro">Română</option>
                                <option value="en">English</option>
                            </select>
                        </div>
                    </section>
                </div>

                <button onClick={() => navigate('/dashboard')} className="back-button">
                    {t.inapoi}
                </button>
            </div>
        </div>
    );
}

export default Profile;
