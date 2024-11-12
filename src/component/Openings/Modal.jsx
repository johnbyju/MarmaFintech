import React from 'react';

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999,
        }}>
            <div style={{
                background: '#fff',
                padding: '20px',
                borderRadius: '8px',
                position: 'relative',
                maxWidth: '500px',
                width: '100%',
            }}>
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '16px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                }}>X</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
