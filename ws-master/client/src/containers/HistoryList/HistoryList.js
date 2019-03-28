import React from 'react';
//import ReactDOM from 'react-dom';
import {History} from '../../components/History/History';
import './HistoryList.css';
import callBackendAPI from '../../utils/call';

export class HistoryList extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.componentDidMount = this.componentDidMount.bind(this);
      }
      
      componentDidMount() {
        this.lookupInterval = setInterval(() => {
        callBackendAPI("maxmin/3")
          .then(res => this.setState(res))
          .catch(err => console.log(err));
        },500)
      }
    
      componentWillUnmount() {
        clearInterval(this.lookupInterval)
      }

    render() {
        return (
            <div className="containerhistorylist">
                <ul className="historylist">
                {
                    Object.keys(this.state).map(data => <History header={data} data={this.state[data]}/>)
                }
                </ul>
            </div>
        )
    }
}
