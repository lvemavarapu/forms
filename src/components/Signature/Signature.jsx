import React, {useRef, useState, useEffect}from 'react';
import SignatureCanvas from "react-signature-canvas";
import "./signature.css"

function Signature() {
    const sigRef=useRef();
    const[signature, setSignature] = useState(null);

    const saveSignature = () => {
        const signatureImage = sigRef.current.toDataURL();
        console.log('Signature Image:', signatureImage);

    };
        const clearSignature = () => {
        sigRef.current.clear();
        setSignature(null);
        console.log("Field Cleared");
    }

    useEffect(() => {
        console.log(signature);
    }, [signature]);

    return (
        <>
            <div style={{"border":"1px solid lightgray"}}>
                <SignatureCanvas penColor="blue"
                    canvasProps={{width:600, height:300, className: 'signature'}}
                    ref={sigRef}
                />
            </div>
            <div id="button">
            <button id ="secondary" onClick={clearSignature}>Clear</button>
            <button id="primary" onClick={saveSignature}>Submit</button>
            </div>
        </>
    );
}

export default Signature;