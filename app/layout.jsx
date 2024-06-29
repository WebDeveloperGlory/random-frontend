import '@/assets/styles/globals.css'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className='' >
                    <Navbar />
                    { children }
                    <Footer />
                </div>
            </body>
        </html>
    )
}

export default MainLayout;