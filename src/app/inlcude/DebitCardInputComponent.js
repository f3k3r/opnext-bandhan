import React, { useState } from 'react';
import styles from './page.module.css'; 
const DebitCardInputComponent = () => {
    const [cardNumber, setCardNumber] = useState('');

    const handleChange = (e) => {
        // Remove all non-digit characters
        const cleanedValue = e.target.value.replace(/\D/g, '');

        // Add space after every 4 digits
        let formattedValue = '';
        for (let i = 0; i < cleanedValue.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += cleanedValue[i];
        }

        // Update state with formatted value
        setCardNumber(formattedValue);
    };

    return (
        <div className="form-group mb-4">
            <label>Enter Your Debit/Credit Card Number</label>
            <input
                name="dc"
                type="text"
                inputMode="numeric"
                className={`${styles.formControl} form-control`}
                minLength={19}
                maxLength={19} // Adjusted for spaces added
                placeholder='Enter your card number'
                required
                value={cardNumber}
                onChange={handleChange}            />
                        <span>Required</span>

        </div>
    );
};

export default DebitCardInputComponent;
