import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import PhoneModel from '../../models/PhoneModel';


interface IProps {
    phone: PhoneModel;
    cancelHandler: () => void;
}


export class PhoneDetails extends React.Component<IProps, {}>{
    constructor(props: any) {
        super(props);
    }

    clickHandler = () => {
        this.props.cancelHandler();
    }

    public render() {

        return (
            <div className="container">
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
                            <h2 className="phone-name"><strong>{this.props.phone.NamePhone}</strong></h2>
                            <img className="foto" src={this.props.phone.Image} alt="" />
                            <b>{this.props.phone.Description}</b>
                        </div>                       
                            <div>                                
                                <div>
                                    <div className="centered">
                                        <button className="btn btn-grey w40"
                                            onClick={this.clickHandler} >VOLVER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}