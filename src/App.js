import './App.css';
import { Navbar } from './Components/Navbar';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

export function App() {
    return (
        <div style={{ padding: '1rem' }}>
            <Navbar />
            <div style={{ display: 'flex', width: '100%' }}>
                <div className='skills' style={{ width: '30%', height: '100%' }}>
                    <Skills />
                </div>
                <div className='pe-2 ps-2' style={{ width: '100%', }}>
                    <Profile />
                    <div className='mobSkills '>
                        <Skills />
                    </div>
                    <Projects />
                </div>
            </div>

        </div>);
}

