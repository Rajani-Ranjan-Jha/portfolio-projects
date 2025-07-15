import React, { useState, useRef, useEffect } from 'react';
// import './App.css'

import { Download, Scan } from 'lucide-react';
import { QRCodeCanvas as QRCode } from 'qrcode.react';

function QRCodeGenerator() {
    const [text, setText] = useState('https://google.com');
    const [qrColor, setQrColor] = useState('#4F46E5');
    const [bgColor, setBgColor] = useState('#ffffff');
    const qrRef = useRef();

    // Function to download QR code as PNG
    const downloadQRCode = () => {
        if (!qrRef.current) return;

        const canvas = qrRef.current.querySelector('canvas');
        if (!canvas) return;

        const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        const downloadLink = document.createElement('a');
        downloadLink.href = pngUrl;
        downloadLink.download = 'qrcode.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div className='w-screen h-screen flex justify-center items-center bg-violet-200'>

            <div className="w-full md:w-1/2 mx-auto p-10 h-9/10 flex flex-col justify-between bg-violet-300 shadow-2xl rounded-2xl">

                {/* Controls */}
                <div>
                    <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
                        URL or Text
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Scan className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            name="text"
                            id="text"
                            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Enter URL or text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                        Enter the text or URL you want to encode in the QR code
                    </p>
                </div>


                {/* QR Code Preview and Color Options */}
                <div className='flex flex-col md:flex-row w-full jusify-between items-center gap-4 py-10'>

                    <div className='w-1/2 flex flex-col justify-center'>


                        <div className='flex flex-col justify-left items-left ml-5'>

                            <label htmlFor="bgColor" className="block text-sm text-left font-medium text-gray-700 mb-1">
                                Background Color
                            </label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="color"
                                    name="bgColor"
                                    id="bgColor"
                                    className="h-10 w-10 border-0 rounded-md cursor-pointer"
                                    value={bgColor}
                                    onChange={(e) => setBgColor(e.target.value)}
                                />
                                <span className="text-sm text-gray-500">{bgColor}</span>
                            </div>
                        </div>
                        <div className='flex flex-col justify-left items-left ml-5'>

                            <label htmlFor="qrColor" className="block text-sm text-left font-medium text-gray-700 mb-1">
                                QR Code Color
                            </label>
                            <div className="flex items-center gap-1">
                                <input
                                    type="color"
                                    name="qrColor"
                                    id="qrColor"
                                    className="h-10 w-10 border-0 rounded-md cursor-pointer"
                                    value={qrColor}
                                    onChange={(e) => setQrColor(e.target.value)}
                                />
                                <span className="text-sm text-gray-500">{qrColor}</span>
                            </div>
                        </div>
                    </div>

                    {/* QR Code Preview */}
                    <div className="flex flex-col items-center w-1/2">
                        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-100" ref={qrRef}>
                            <QRCode
                                value={text || 'https://lovable.dev'}
                                size={250}
                                fgColor={qrColor}
                                bgColor={bgColor}
                                level="H"
                                includeMargin={true}
                                renderAs="canvas"
                            />
                        </div>

                        <button
                            onClick={downloadQRCode}
                            style={{ backgroundColor: qrColor, color: bgColor }}
                            className="mt-4 inline-flex items-center px-4 py-2 rounded-md hover:opacity-90 transition-colors cursor-pointer"
                        >
                            <Download className="w-4 h-4" />
                            Download QR Code
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default QRCodeGenerator;