/*jshint esversion: 6 */

import React from 'react';
import './Instructions.css';

export default class Instructions extends React.Component {
    render() {
        const {steps, title} = this.props;
        return (
            <section className='instructions'>
            <h2>{title}</h2>
            {
                steps.map((step, index) => <p key = {index}>{step}</p>)
            }
            </section>
        );
    }
}
