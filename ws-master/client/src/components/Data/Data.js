import React from 'react';
import './Data.css';

export class Data extends React.Component {
    render(){
        return(
            <li className="node">
                <h5>{this.props.header}</h5>
                <div className="leaf">
                    <span>
                        <p>{this.props.data}</p>
                    </span>
                </div>
            </li>
        )
    }
}