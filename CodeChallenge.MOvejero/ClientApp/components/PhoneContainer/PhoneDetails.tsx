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
                <div className="divider-30"></div>
                <div className="row">
                    <div className="caja2" >
                        <div className="cajadetails">
                            <h1 ><strong>{this.props.phone.NamePhone}</strong></h1>
                            <div>
                                <img className="img" src={this.props.phone.Image} alt="" />
                            </div>
                            <b>{this.props.phone.Description}</b>
                            <div className="divider-30"></div>
                            <div>
                                <button className="btn btn-grey w40 "
                                    onClick={this.clickHandler}  > VOLVER</button>
                                <div className="divider-30"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}