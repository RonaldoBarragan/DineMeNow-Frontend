import React, { useState, useEffect } from 'react';
import { BsClockFill } from 'react-icons/bs'; 

/**

 * @param {number} initialTimeSegundos 
 */
function TokenTimer({ initialTimeSegundos }) {

  const [timeLeft, setTimeLeft] = useState(initialTimeSegundos);

  const [hasExpired, setHasExpired] = useState(false);

  useEffect(() => {

    if (timeLeft <= 0) {
      setHasExpired(true);
      return;
    }


    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);


  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;


  const formattedMinutes = String(minutes).padStart(1, '0'); 
  const formattedSeconds = String(seconds).padStart(2, '0');


  const timerClass = hasExpired || timeLeft <= 10 ? 'text-danger' : 'text-third';

  return (
    <div className={`d-flex align-items-center justify-content-center ${timerClass} small mt-2 mb-3`}>
      <BsClockFill className="me-2" />
      {/* Muestra el texto de expiración o el contador */}
      {hasExpired ? (
        <span>El token ha expirado</span>
      ) : (
        <span>El token expira en: {formattedMinutes}:{formattedSeconds}</span>
      )}
    </div>
  );
}

export default TokenTimer;