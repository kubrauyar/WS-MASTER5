import React from 'react';
import './Table.css';

export class Table extends React.Component {
    render() {
        return (
            <div class="tablo">
                <h4>{this.props.header}</h4>
                <table className="table table-condensed table-hover">
                    <thead>
                        <tr>
                            <th className="baslik"></th>
                            <th className="text-max baslik">En Düşük</th>
                            <th className="baslik"></th>
                            <th className="text-min baslik ">En Yüksek</th>
                            <th className="baslik"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Geçmiş Gün</th>
                            <td className="text-min"><span> {this.props.data.enDusuk} °C</span></td>
                            <td className="zaman"><span>{this.props.data.zaman1}</span></td>
                            <td className="text-max"><span>{this.props.data.enYuksek} °C</span></td>
                            <td className="zaman"><span>{this.props.data.zaman2}</span></td>
                        </tr>
                        <tr>
                            <th>Geçmiş Ay</th>
                            <td className="text-min"><span> {this.props.data.enDusukAylik} °C</span></td>
                            <td className="zaman"><span>{this.props.data.zaman1Aylik}</span></td>
                            <td className="text-max"><span>{this.props.data.enYuksekAylik} °C</span></td>
                            <td className="zaman"><span>{this.props.data.zaman2Aylik}</span></td>
                        </tr>
                        {/*
                        <tr> 
                            <th>Yıllık</th>
                            <td className="text-max"><span> 17.4 °C</span></td>
                            <td><span>03/26/2019 12:49 PM</span></td>
                            <td className="text-min"><span>5.9 °C</span></td>
                            <td><span>03/26/2019 12:49 AM</span></td>
                        </tr>
                        */}
                    </tbody>
                </table>

            </div>
        )
    }
}
