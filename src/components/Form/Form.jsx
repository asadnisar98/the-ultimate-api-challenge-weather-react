import React, { useState } from 'react';
import PropTypes from 'prop-types'
import styles from './Form.module.css';

const Form = (props) => {
    const [Location, setLocation] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if(!Location || Location === '') return;
        props.onSubmitSearch(Location);
    }
    
    return (
        
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={Location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" onClick={onSubmit} className={styles.button}>
                SEARCH
            </button>
        </form>
    );
};


Form.prototype = {
    onSubmitSearch: PropTypes.func.isRequired,
}
export default Form;
