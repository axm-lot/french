import React, { useState, useEffect } from "react";
import "../App.css";
import image from '../futurA.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationDrawer from "../NavigationDrawer";

function Futur() {
    const [isMobile, setIsMobile] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMediaQueryChange = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        handleMediaQueryChange();
        const handleResize = () => {
            handleMediaQueryChange();
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };



    return (
        <>
            {isMobile ?
                (<div>
                    <NavigationDrawer open={drawerOpen} onClose={toggleDrawer} />
                    <h1 style={{
                        backgroundColor: '#326fe7', color: 'whitesmoke', marginTop: '0px', padding: '5px', width: '100%', textAlign: 'center', fontFamily: 'times new roman, times'
                    }}><MenuIcon onClick={toggleDrawer} />FUTUR</h1>
                    <div style={{ margin: '5px' }}>
                        <h2>FUTUR ANTERIEUR</h2>
                        <h4>UTILISATION</h4>
                        On utilise le <strong>future anterieur</strong> pour une action anterieur au future <br />
                        Ex : Avant mon depart j’<span style={{ color: '#06bef7' }}>aurai</span> <span style={{ color: '#326fe7' }}>rangé</span> ma chambre
                        <h4>STRUCTURE</h4>
                        <div style={{ backgroundColor: '#282c34', color: 'whitesmoke', padding: '10px', boxShadow: '5px 5px 7px rgba(0, 0, 0, 0.7)', fontFamily: 'monospace' }}>
                            S + auxiliaire future simple + Vpp + Complement
                        </div>
                        <h5>Avec les verbes pronominaux</h5>
                        <div style={{ backgroundColor: '#282c34', color: 'whitesmoke', margin: '5px', padding: '11px', boxShadow: '5px 5px 7px rgba(0, 0, 0, 0.6)', fontFamily: 'monospace' }}>
                            S + pronom + auxiliaire future simple + Vpp + Complement
                        </div>
                        Ex: Avant mes 30 ans, je <span style={{ color: 'red' }}>me</span> <span style={{ color: '#06bef7' }}>serai</span> <span style={{ color: '#326fe7' }}>marié</span>.
                        <h4>LES AMBITIONS</h4>
                        J'ambitionne  <br />
                        J'envisage <br />
                        Je compte
                        <h2>FUTUR IMMINENT</h2>
                        C’est un futur très très très proche.
                        Qui est sur le point de se produire. <br />
                        <strong>Expressions : </strong> <br />
                        Je suis sur le point de <br />
                        Je suis à deux doits de <br />
                        Je suis près de
                        <h4>Quelques questions : </h4>
                        <ul style={{ marginLeft: '-40px' }}>
                            <i>Vous allez mourir demain qu'aurez vous fait un jour avant ?</i> <br />
                            <i>Vous allez vous mariez bientôt qu'aurez vous accompli avant cela ?</i>
                        </ul>
                    </div>
                    <div style={{
                        backgroundColor: '#326fe7', color: 'whitesmoke', marginBottom: '0px', padding: '5px', width: '100%', fontFamily: 'times new roman, times', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'
                    }}>
                        <a href="https://github.com/axmcharlot/" style={{ color: 'whitesmoke' }}><GitHubIcon /></a>
                        <a href="https://facebook.com/axmlot" style={{ color: 'whitesmoke' }}><FacebookRoundedIcon /></a>
                        <a href="mailto:charlotaxm@gmail.com" style={{ color: 'whitesmoke' }}><EmailIcon /></a>
                        <a href="https://mg.linkedin.com/in/andriaharinjato-charlot-89baaa252" style={{ color: 'whitesmoke' }}><LinkedInIcon /></a>
                    </div>
                </div>) : (
                    <div className="App">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>

                            <NavigationDrawer open={drawerOpen} onClose={toggleDrawer} />
                            <h1 style={{
                                backgroundColor: '#326fe7', color: 'whitesmoke', marginTop: '0px', padding: '5px', width: '100%', textAlign: 'center'
                            }}> <MenuIcon onClick={toggleDrawer} style={{ position: 'absolute', marginLeft: '-330px', marginTop: '10px' }} /> FUTUR ANTERIEUR</h1>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }} className="content">
                            <div>
                                <div>
                                    <h4>UTILISATION</h4>
                                    On utilise le <strong>future anterieur</strong> pour une action anterieur au future <br />
                                    Ex : Avant mon depart j’<span style={{ color: '#06bef7' }}>aurai</span> <span style={{ color: '#326fe7' }}>rangé</span> ma chambre
                                </div>
                                <div>
                                    <h4>STRUCTURE</h4>
                                    <pre>
                                        <code style={{
                                            backgroundColor: '#282c34', color: 'whitesmoke', margin: '5px', padding: '10px', boxShadow: '5px 5px 7px rgba(0, 0, 0, 0.6)'
                                        }}>
                                            S + auxiliaire future simple + Vpp + Complement
                                        </code>
                                    </pre>
                                </div>
                                <div>
                                    <h5>Avec les verbes pronominaux</h5>
                                    <pre >
                                        <code style={{ backgroundColor: '#282c34', color: 'whitesmoke', margin: '5px', padding: '10px', boxShadow: '5px 5px 7px rgba(0, 0, 0, 0.6)' }}>
                                            S + pronom + auxiliaire future simple + Vpp + Complement
                                        </code>
                                    </pre>
                                    Ex: Avant mes 30 ans, je <span style={{ color: 'red' }}>me</span> <span style={{ color: '#06bef7' }}>serai</span> <span style={{ color: '#326fe7' }}>marié</span>.
                                </div>
                                <div>
                                    <h4>LES AMBITIONS</h4>
                                    <h5>
                                        <li>J'ambitionne</li>
                                        <li>J'envisage </li>
                                        <li>Je compte  </li>
                                    </h5>
                                </div>
                                <div >
                                    <h2>FUTUR IMMINENT</h2>
                                    C’est un futur très très très proche.
                                    Qui est sur le point de se produire.
                                    <div >
                                        Je suis sur le point de <br />
                                        Je suis à deux doits de <br />
                                        Je suis près de
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={image} alt='futurAnterieur' />
                            </div>
                        </div>
                        <div style={{ marginLeft: '40px' }}>
                            <h4>Quelques questions : </h4>
                            <ul style={{ marginLeft: '-40px' }}>
                                <i>Vous allez mourir demain qu'aurez vous fait un jour avant ?</i> <br />
                                <i>Vous allez vous mariez bientôt qu'aurez vous accompli avant cela ?</i>
                            </ul>
                        </div>
                        <div style={{
                            backgroundColor: '#326fe7', color: 'whitesmoke', marginBottom: '0px', padding: '5px', width: '100%', fontFamily: 'times new roman, times', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'
                        }}>
                            <a href="https://github.com/axmcharlot/" style={{ color: 'whitesmoke' }}><GitHubIcon /></a>
                            <a href="https://facebook.com/axmlot" style={{ color: 'whitesmoke' }}><FacebookRoundedIcon /></a>
                            <a href="mailto:charlotaxm@gmail.com" style={{ color: 'whitesmoke' }}><EmailIcon /></a>
                            <a href="https://mg.linkedin.com/in/andriaharinjato-charlot-89baaa252" style={{ color: 'whitesmoke' }}><LinkedInIcon /></a>
                        </div>
                    </div>)}
        </>
    );
}

export default Futur;