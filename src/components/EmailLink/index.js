
import React, {useState} from 'react';

const EmailLink = () => {
    const [email, setEmail] = useState('');
    const [isRevealed, setIsRevealed] = useState(false);

    const revealEmail = () => {
      if (isRevealed) return;

      // ROT13-encoded email address
      const encodedEmail = 'serivfpbfg@wpv.pv';
      const decodedEmail = decodeROT13(encodedEmail);

      setEmail(decodedEmail);
      setIsRevealed(true);
    };

    const decodeROT13 = (str) => {
      return str.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode(
          c.charCodeAt(0) + (c.toLowerCase() <= 'm' ? 13 : -13)
        );
      });
    };

    return (
      <a
        className={`mailto ${isRevealed ? 'link-processed' : ''}`}
        href={`mailto:${email}`}
        onClick={revealEmail}
        data-mail-click-link="1"
      >
        {isRevealed ? email : 'Clic para mostrar correo'}
      </a>
    );
};

export default EmailLink;
