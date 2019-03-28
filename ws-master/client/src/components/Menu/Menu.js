import React from 'react';
//import ImageSU from './Selcuklogo4.png';
import logo2 from './Selcuklogo4.png'
import './Menu.css';

export class Menu extends React.Component {
    getZaman(){
        var tarih = new Date();
        var gun = tarih.getDay();
        var ay = tarih.getMonth();
        var yil = tarih.getFullYear();
        var saat = tarih.getHours();
        var dakika = tarih.getMinutes();
        var gunler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
        var aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül',
                    'Ekim', 'Kasım', 'Aralık'];
        if (saat < 10 && dakika < 10) {
            return '0' + saat + ':' + '0' + dakika + ' | ' + tarih.getDate() + ' ' + aylar[ay] + ' ' + yil + ' ' + gunler[gun];
        } else if (saat < 10) {
            return '0' + saat + ':' + dakika + ' | ' + tarih.getDate() + ' ' + aylar[ay] + ' ' + yil + ' ' + gunler[gun];
        } else if (dakika < 10) {
            return saat + ':' + '0' + dakika + ' | ' + tarih.getDate() + ' ' + aylar[ay] + ' ' + yil + ' ' + gunler[gun];
        } else {
            return saat + ':' + dakika + ' | ' + tarih.getDate() + ' ' + aylar[ay] + ' ' + yil + ' ' + gunler[gun];
        }
    }
    render(){
        return(
            <div id="navbar">
                <div className="logos">
                    <div className="unilogo">
                        <img src={logo2} alt="Selçuk Üniversitesi"/>
                    </div>
                </div>
                <div className="menu">
                    <div className="isim">Selçuk Üniversitesi Hava Durumu</div>
                    <a className="menuitem" href="#weather">Hava Durumu</a>
                    <a className="menuitem" href="#archive">Arşiv</a>
                    <a className="menuitem" href="#webcam">WebCam</a>
                    <a className="menuitem" href="#term">Terminoloji</a>
                    <div className="tarih"> 
                    <h5>{this.getZaman()}</h5>
                </div>
                </div>
                
            </div>
        )
    }
}