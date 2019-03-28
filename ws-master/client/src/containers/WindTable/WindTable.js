import React from 'react';
import './WindTable.css';
import callBackendAPI from '../../utils/call';
import {Table} from '../../components/Table/Table';

export class WindTable extends React.Component {
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
            "enDusuk" : res[0].EnDusukRuzgarHizi,
            "zaman1" : res[0].RuzgarHiziSaat1,
            "enYuksek" : res[0].EnYuksekRuzgarHizi,
            "zaman2" : res[0].RuzgarHiziSaat2,
          }))
          .catch(err => console.log(err));
        },500)
        this.lookupInterval2 = setInterval(() => {
          callBackendAPI("maxminMonthly/1")
            .then(res => this.setState({
              "enDusukAylik" : res[0].EnDusukRuzgarHizi,
              "zaman1Aylik" : res[0].RuzgarHiziSaat1,
              "enYuksekAylik" : res[0].EnYuksekRuzgarHizi,
              "zaman2Aylik" : res[0].RuzgarHiziSaat2,
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
        <div className="windTableContainer">    
            <Table header="Rüzgar Hızı" data={this.state} />  
        </div>                                
        )
    }
}
