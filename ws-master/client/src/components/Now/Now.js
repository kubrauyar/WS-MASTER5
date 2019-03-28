import React from 'react';
import './Now.css';
import './weather-icons.css'
import callBackendAPI from '../../utils/call';

export class Now extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'Sıcaklık': null,
            'Icon': null
        };
        this.componentDidMount = this.componentDidMount.bind(this);
      }
      
      componentDidMount() {
        this.lookupInterval = setInterval(() => {
        callBackendAPI("now")
          .then(res => this.setState({
              'Sıcaklık': res.Sicaklik,
              'Icon': res.YagisDurumu,                
          }))
          .catch(err => console.log(err));
        },500)
      }
    
      componentWillUnmount() {
        clearInterval(this.lookupInterval)
      }

    render(){
        return(
            <div className="weather">
                <h3>Güneşli</h3>
                <i className={this.state.Icon}></i>
                <div className="degreecont">
                    <span> {this.state.Sıcaklık}°</span>
                </div>
                <div className="felt">
                    <span>Hissedilen </span>
                    <span> 14°</span>
                </div>
            </div>
        )
    }
}