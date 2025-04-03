// src/Sidebar.jsx
import './Sidebar.css';
import { FaHome, FaUser, FaBook, FaClipboard } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const [limba, setLimba] = useState('ro');

    useEffect(() => {
        const savedLang = localStorage.getItem('limba');
        if (savedLang) setLimba(savedLang);
    }, []);

    const texte = {
        ro: {
            home: 'Acasă',
            flashcards: 'Cartonașe',
            library: 'Bibliotecă',
            profile: 'Profil',
        },
        en: {
            home: 'Home',
            flashcards: 'Flashcards',
            library: 'Library',
            profile: 'Profile',
        },
    };

    const t = texte[limba];
    const navigate = useNavigate();


    return (


        <div className="sidebar">
            <button className="sidebar-btn">
                <FaHome /> <span>{t.home}</span>
            </button>
            <button className="sidebar-btn">
                <FaClipboard /> <span>{t.flashcards}</span>
            </button>
            <button className="sidebar-btn">
                <FaBook /> <span>{t.library}</span>
            </button>
            <button className="sidebar-btn" onClick={() => navigate('/profile')}>
                <FaUser /> <span>{t.profile}</span>
            </button>
        </div>
    );
}

export default Sidebar;
