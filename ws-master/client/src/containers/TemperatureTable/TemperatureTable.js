import React from 'react';
import './TemperatureTable.css';
import callBackendAPI from '../../utils/call';
import {Table} from '../../components/Table/Table';

export class TemperatureTable extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          "enDusuk": null,
          "zaman1": null,
          "enYuksek": null,
          "zaman2": null
        };
        this.componentDidMount = this.componentDidMount.bind(this);
      }
      
      componentDidMount() {
        this.lookupInterval = setInterval(() => {
        callBackendAPI("maxmin/1")
          .then(res => this.setState({
            "enDusuk" : res[0].EnDusukSicaklik,
            "zaman1" : res[0].SicaklikSaat1,
            "enYuksek" : res[0].EnYuksekSicaklik,
            "zaman2" : res[0].SicaklikSaat2,
          }))
          .catch(err => console.log(err));
        },500)
        this.lookupInterval2 = setInterval(() => {
          callBackendAPI("maxminMonthly/1")
            .then(res => this.setState({
              "enDusukAylik" : res[0].EnDusukSicaklik,
              "zaman1Aylik" : res[0].SicaklikSaat1,
              "enYuksekAylik" : res[0].EnYuksekSicaklik,
              "zaman2Aylik" : res[0].SicaklikSaat2,
            }))
            .catch(err => console.log(err));
          },500)           
      }
    
      componentWillUnmount() {
        clearInterval(this.lookupInterval)
        clearInterval(this.lookupInterval2)
      }
      
    render() {
      return (
        <div className="tempTableContainer">    
            <Table header="Sıcaklık" data={this.state} />  
        </div>                                
        )
    }
}
