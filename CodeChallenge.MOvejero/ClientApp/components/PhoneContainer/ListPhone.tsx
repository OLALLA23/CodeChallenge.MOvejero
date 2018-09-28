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
                <div className="jumbotron jumbo">
                    <div className="container container2">
                        <div className="title"> Hello, Phones!</div>
                        <div className="stylep">
                            <p>Lorem ipsum dolor sit amet, interdum turpis, aliquam dui et, sit pede justo, magna ullamcorper pharetra elit, curabitur lectus leo.
                             Mi eget nostra amet risus sociis. Ut tristique, elit wisi interdum accumsan.
                             Sed consectetuer amet rutrum feugiat morbi ante, hac tortor reprehenderit dolor nullam, adipiscing pharetra in, vel mauris eu imperdiet erat.
                             Lorem ipsum dolor sit amet, interdum turpis, aliquam dui et, sit pede justo, magna ullamcorper pharetra elit, curabitur lectus leo.
                             Lorem ipsum dolor sit amet, interdum turpis, aliquam dui et, sit pede justo, magna ullamcorper pharetra elit, curabitur lectus leo.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="caja2" >
                            <div className="">
                                <div>
                                    {this.props.phones.map((phones) => {
                                        return (<div className="caja"><PhoneItem phones={phones} changeHandler={this.phoneSelect} key={phones.IdPhone} /></div>);
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
    renderComponentItem = (): any => {
        if (this.state.activeLink === 'xx') {
            return (

                <div>
                    {this.renderList()}
                    <PhoneDetails phone={this.getPhoneById(this.state.selectPhone)} cancelHandler={this.stateCancel} />

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
