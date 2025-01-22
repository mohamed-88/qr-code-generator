import React from 'react';
import './InputFileImg.css';

export default function InputFileImg({ noImg, setNoImg, setCustomImg }) {
    const handleImage = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setCustomImg(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return (
        <div className="file-input-container">
            <label htmlFor="file" className="file-label">
                Upload Custom Image
            </label>
            <input
                id="file"
                name="file"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleImage}
                disabled={noImg}
                className="file-input"
            />

            <div className="checkbox-container">
                <input
                    id="noImg"
                    name="noImg"
                    type="checkbox"
                    value={noImg}
                    checked={noImg}
                    onClick={() => setNoImg(!noImg)}
                    className="checkbox-input"
                />
                <label htmlFor="noImg" className="checkbox-label">
                    Without Image
                </label>
            </div>
        </div>
    );
}
