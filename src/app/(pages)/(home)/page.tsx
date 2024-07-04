import dynamic from 'next/dynamic';

const Header = dynamic(() => import("../../components/landing/header/index"));
const Hero = dynamic(() => import("./hero/index"));
const Infrastructure = dynamic(() => import("./infrastructure/index"));
const Protocol = dynamic(() => import("./protocol/index"));
const Footer = dynamic(() => import("../../components/landing/footer"));
const PreFarming = dynamic(() => import("./pre-farming/index"));

const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Protocol />
            <Infrastructure />
            <PreFarming />
            <Footer />
        </div>
    );
}

export default HomePage;
