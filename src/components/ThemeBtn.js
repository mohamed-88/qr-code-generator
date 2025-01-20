import { useState, useEffect } from 'react';
import Brightness6Outlined from '@mui/icons-material/Brightness6Outlined';
import WbSunnyOutlined from '@mui/icons-material/WbSunnyOutlined';
import '../components/ThemeBtn.css';

export default function ThemeToggle() {
    const getPreferredTheme = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const [theme, setTheme] = useState(getPreferredTheme);

    useEffect(() => {
        if (theme) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setTheme(e.matches);

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setTheme(!theme);
    };

    return (
        <div>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
                {theme ? (
                    <span role="img" aria-label="moon" className="icon">
                        <WbSunnyOutlined />
                    </span>
                ) : (
                    <span role="img" aria-label="sun" className="icon">
                        <Brightness6Outlined />
                    </span>
                )}
            </button>
        </div>
    );
}