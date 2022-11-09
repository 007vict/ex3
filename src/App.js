import { useEffect } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionMain from "./components/SectionMain";


function App() {
        useEffect(() => {
            const script = document.createElement('script');
            script.src = './assets/js/nicepage.js'
            script.defer = true;
            document.head.appendChild(script);
            return () => {
                document.head.removeChild(script);
            }
        }, []);
    return (
        <>
            <Header />
            <SectionMain />
            <Footer />
        </>
    );
}

export default App;
