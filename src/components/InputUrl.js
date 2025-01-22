import React from 'react';
import './InputUrl.css';

export default function InputUrl({ url, setUrl, httpRgx }) {
    const handleUrl = (e) => setUrl(e.target.value);
    const handleClearUrl = () => setUrl('');

    const handleValidateUrl = () => {
        if (url && !httpRgx.test(url)) {
            setUrl('http://' + url);
        }
    };

    return (
        <div className="input-url-container">
            <label htmlFor="url" className="url-label">Enter your URL</label>
            <div className="input-wrapper">
                <input
                    id="url"
                    name="url"
                    type="text"
                    value={url}
                    onChange={handleUrl}
                    onFocus={(e) => e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' })}
                    onBlur={handleValidateUrl}
                    placeholder="Add URL for QR Code generation"
                    required
                    className="url-input"
                />
                {url && (
                    <button className="clear-btn" onClick={handleClearUrl}>
                        x
                    </button>
                )}
            </div>
        </div>
    );
}
