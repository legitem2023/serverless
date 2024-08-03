import React, { useState, useEffect } from 'react';
import useModel from '../../../store/useModel';
const ModelViewer = () => {
    const {text} = useModel();
    const [useHeight, setHeight] = useState('100vw');
    const [useWidth, setWidth] = useState('100vw');
    const handleWidth = () => {
        if (window.innerWidth < 600) {
            setWidth('85vw');
            setHeight('85vw');
        } else {
            setWidth('100%');
            setHeight('500px');
        }
    };
    useEffect(() => {
        handleWidth(); // Initial call to set the dimensions correctly
        window.addEventListener('resize', handleWidth);
        const interval = setInterval(handleWidth, 1000);
        return () => {
            window.removeEventListener('resize', handleWidth);
            clearInterval(interval);
        };
    });
    return (
        <div className="canvas">
            <model-viewer
                src={text}
                alt="A 3D model"
                ar
                ar-scale="fixed"
                camera-controls touch-action="pan-y"
                shadow-intensity="2"
                skybox-image="https://hokei-storage.s3.ap-northeast-1.amazonaws.com/images/Legit/hdr/symmetrical_garden_02_1k.hdr"
                skybox-height="2m"
                max-camera-orbit="auto 90deg auto"
                style={{ width: useWidth, height: useHeight }}>
            </model-viewer>
        </div>
    );
};
export default ModelViewer;