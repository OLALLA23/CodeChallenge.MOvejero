import * as React from 'react';
import PhoneModel from '../../models/PhoneModel';
import { PhoneItem } from './PhoneItem';
import { PhoneDetails } from './PhoneDetails';
import * as shallowequal from 'shallowequal';


interface IProps {
    phones: PhoneModel[];
    getPhones: () => Promise<PhoneModel[]>;

}

interface IPhoneState {
    selectPhone: string;
    activeLink: string;
}


export class ListPhone extends React.Component<IProps, IPhoneState>{
    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        this.props.getPhones();
        this.setState({
            selectPhone: '',
            activeLink: 'listPhone',
        })
    }

    stateCancel = () => {
        this.setState({
            activeLink: 'listPhone',
        });
    }

    shouldComponentUpdate(nextProps: IProps, nextState: IPhoneState) {

        return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState);
    }

    phoneSelect = (IdPhone: string) => {
        this.setState({
            activeLink: 'xx',
            selectPhone: IdPhone,
        })
    }

    getPhoneById = (IdPhone: string): PhoneModel => {
        return this.props.phones.filter(x => x.IdPhone === IdPhone)[0];
    }

    renderList = (): any => {
        return (
            <div>
                <div className="paddingLateral headerBar">

                    <div className="container">
                        <div className="ms-Grid">
                            <div className="ms-Grid-row">
                                <label>PHONES</label>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="divider-50"></div>
                <div className="container">
                    <div className="ms-Grid">
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
                                {this.props.phones.map((phones) => {
                                    return (<PhoneItem phones={phones} changeHandler={this.phoneSelect} key={phones.IdPhone} />);
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    renderComponentItem = (): any => {
        if (this.state.activeLink === 'xx') {
            return (
                <div>
                    <div className="col">
                    {this.renderList()}
                <PhoneDetails phone={this.getPhoneById(this.state.selectPhone)} cancelHandler={this.stateCancel} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    {this.renderList()}
                    </div>
            );
        }
    }

    public render() {

        if (this.props.phones.length > 0) {
            return (this.renderComponentItem())

        } else {
            return (<p></p>)
        }
    }
}
