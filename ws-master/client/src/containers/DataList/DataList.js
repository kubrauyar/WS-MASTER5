import React from 'react';
import {Data} from '../../components/Data/Data';
import './DataList.css';
import callBackendAPI from '../../utils/call';

export class DataList extends React.Component {
  constructor(props){
      super(props);
      this.state = {
  
      };
      this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    componentDidMount() {
      this.lookupInterval = setInterval(() => {
      callBackendAPI("now")
        .then(res => this.setState({
            'Tarih': res.Tarih,
            'Sıcaklık (C°)': res.Sicaklik,
            'Nem (%)': res.Nem,
            'Basınç (hPa)': res.Basinc,
            'Rüzgar Hızı (m/s)': res.RuzgarHizi, 
            'Yağış Miktarı (mm/h)': res.YagisMiktari,
            'Solar Radyasyon (W/m²)': res.GunesRadyasyonu
  
        }))
        .catch(err => console.log(err));
      },500)
    }
  
    componentWillUnmount() {
      clearInterval(this.lookupInterval)
    }
    
    render() {
        return (
            <div className="ContainerList">
                <ul className="list">
                {
                    Object.keys(this.state).slice(1).map(data => <Data header={data} data={this.state[data]}/>)
                }
                </ul>
                <small className="olcumSaati">*Ölçüm saati: {this.state.Tarih}</small>
            </div>
        )
    }
}
