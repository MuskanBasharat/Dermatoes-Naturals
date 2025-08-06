import { useEffect } from "react";
import './Notification.css'
function Notification({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onClose, message]);

  // Handle both string and object messages
  const displayMessage = typeof message === 'string' ? message : message?.message;
  const notificationType = typeof message === 'string' ? 'success' : message?.type || 'success';

  return (
    <div className={`notification notification-${notificationType}`}>
      <span className="notification-message">{displayMessage}</span>
      <button className="notification-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}


export default Notification;