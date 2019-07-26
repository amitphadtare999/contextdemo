import React from 'react';

import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
    renderSubmit(name) {
        return name === 'english' ? 'Submit' : 'Voorlegen'
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {value => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <div className={`ui field`}>
                <ColorContext.Consumer>
                    {color => this.renderButton(color)}

                </ColorContext.Consumer>
            </div>
        );
    }
}

export default Button;