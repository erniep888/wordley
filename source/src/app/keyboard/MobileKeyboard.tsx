import React, { useState } from 'react';
import './MobileKeyboard.css'; // You can create a corresponding CSS file for styling

interface MobileKeyboardProps {
  onKeyPress?: (key: string) => void;
}

const MobileKeyboard: React.FC<MobileKeyboardProps> = ({ onKeyPress }) => {
  const [input, setInput] = useState<string>('');

  const handleKeyPress = (key: string) => {
    setInput((prevInput) => prevInput + key);
    if (onKeyPress) {
      onKeyPress(key);
    }
  };

  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const renderKeys = () => {
    const keys = [
      '1', '2', '3',
      '4', '5', '6',
      '7', '8', '9',
      '0', ' ', 'DEL',
    ];

    return keys.map((key) => (
      <button
        key={key}
        onClick={() => (key === 'DEL' ? handleDelete() : handleKeyPress(key))}
      >
        {key}
      </button>
    ));
  };

  return (
    <div className="mobile-keyboard">
      <div className="input-display">{input}</div>
      <div className="keyboard">{renderKeys()}</div>
    </div>
  );
};

export default MobileKeyboard;
