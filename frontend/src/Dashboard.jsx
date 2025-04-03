import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import './Dashboard.css';

function Dashboard() {
    const [username, setUsername] = useState('');
    const [limba, setLimba] = useState('ro');

    useEffect(() => {
        // Preluăm username din localStorage
        const savedUser = localStorage.getItem('user');
        if (savedUser) {    
            const nume = savedUser.split('.')[0];
            setUsername(nume.charAt(0).toUpperCase() + nume.slice(1));
        }

        // Preluăm limba din localStorage
        const savedLang = localStorage.getItem('limba');
        if (savedLang) {
            setLimba(savedLang);
        }
    }, []);

    // Texte în funcție de limba aleasă
    const texte = {
        ro: {
            salut: `Hei ${username}, hai să începem!`,
            intrebare: 'Ce vrei să faci mai întâi?',
            titlu: 'Bine ai venit pe platformă! 🚀',
            instructiune: 'Selectează o opțiune din meniul din stânga.',
        },
        en: {
            salut: `Hey ${username}, let's get you set up!`,
            intrebare: 'What do you want to do first?',
            titlu: 'Welcome to the platform! 🚀',
            instructiune: 'Choose an option from the left menu.',
        },
    };

    const t = texte[limba];

    return (
        <div className="dashboard">
            <Sidebar />

            <div className="main-content">
                {/* MASCOTĂ CU MESAJ PERSONALIZAT */}
                <div className="mascota-container">
                    <div className="mascota-message">
                        <p>{t.salut}<br />{t.intrebare}</p>
                    </div>
                    <img src="/mascota.png" alt="Mascotă" className="mascota-img" />
                </div>

                {/* CONȚINUT PRINCIPAL */}
                <h2>{t.titlu}</h2>
                <p>{t.instructiune}</p>
            </div>
        </div>
    );
}

export default Dashboard;
