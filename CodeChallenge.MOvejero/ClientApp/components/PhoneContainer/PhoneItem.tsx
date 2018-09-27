import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PhoneModel from '../../models/PhoneModel';


interface IProps {
    phones: PhoneModel;
    changeHandler: (phones: string) => void;
}


export class PhoneItem extends React.Component<IProps, {}>{
    constructor(props: any) {
        super(props);
    }

    public render() {

        return (
            <div className="row">
                <div className="col-sm-3">
                    <div>
                    </div>
                    <div className="caja">
                        <b className="phone-name">{this.props.phones.NamePhone}</b>
                        <img className="foto" src={this.props.phones.Image} alt="" />
                        <div><b className="phone-price">{this.props.phones.Price}€</b></div>
                        <button type="button" className="btn"
                            onClick={() => this.props.changeHandler(this.props.phones.IdPhone)}> Ver más  </button>
                    </div>
                </div>

            </div>

        );
    }
}