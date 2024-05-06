import React, { useState, useEffect } from "react";
import anime from "animejs";
import "./pkm.css"

interface SplashScreenProps {
    finishLoading: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        });

        loader
            .add({
                targets: "#logo",
                delay: 0,
                scale: 2,
                duration: 1500,
                easing: "easeInOutExpo",
                rotate: '2turn',
            })
            .add({
                targets: "#logo",
                delay: 100,
                scale: 2,
                duration: 500,
                easing: "easeInOutExpo",
            });
    };

    useEffect(() => {
        const timeout = setTimeout(() => 10);
        animate();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div style={{ top: "0px", left: "0px", position: "fixed", zIndex: 20, backgroundColor: "rgba(0,0,0,0.9)", width: "100%", height: "100%" }}>
            <div className='fixed top-[50%] left-[50%] ml-[-58px]'>
                <div id='logo' style={{ border: "8px solid black", borderRadius: "50%" }}>
                    <div className='pkm' />
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
