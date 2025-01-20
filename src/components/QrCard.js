import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import DownloadBtn from './DownloadBtn';

export default function QrCard({ qrRef, url, bgColor, qrColor, customImg, noImg }) {
  const handleQrReset = () => {
    console.log('QR Code reset handled!');
  };

  let imgCustom = undefined;

  noImg
    ? (imgCustom = null)
    : customImg
    ? (imgCustom = customImg)
    : (imgCustom = './logo-apple-icon192.png');

  return (
    <article className="card">
      <div className="qr-box" ref={qrRef} style={{ backgroundColor: bgColor }}>
        <QRCodeCanvas
          size={250}
          value={url ? url : ''}
          bgColor={bgColor}
          fgColor={qrColor}
          level="H"
          includeMargin
          imageSettings={{
            src: imgCustom,
            height: 45,
            width: 45,
            excavate: true,
          }}
        />
      </div>
      <h2 className="word-wrap">{url ? url : ''}</h2>
      <p>Enter the URL of your site and create your custom Qr Code in a few seconds with a few clicks.</p>
      <DownloadBtn
        qrRef={qrRef}
        url={url}
        handleQrReset={handleQrReset}
        setDownloaded={() => console.log('Downloaded!')}
      />
    </article>
  );
}
