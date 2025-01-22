import React from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import '../components/DownloadBtn.css';


export default function DownloadBtn({ qrRef, url, handleQrReset, setDownloaded }) {
  const downloadQrCode = (e) => {
    e.preventDefault();
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas');
      if (canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'QR-Code.png';
        link.click();
        setDownloaded(true);
        handleQrReset();
      }
    }
  };

  return (
    <button onClick={downloadQrCode}>
      Download New <CloudDownloadIcon />
    </button>
  );
}
