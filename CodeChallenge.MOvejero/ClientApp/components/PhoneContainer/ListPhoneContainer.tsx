import { StateReducer } from '../../reducers';
import { connect } from 'react-redux';
import PhoneModel from '../../models/PhoneModel';
import { loadListPhoneAction } from './actions/loadListPhone';
import { ListPhone } from './ListPhone';


interface othersProps {    
    phones: PhoneModel[];
}

const mapStateToProps = (state: StateReducer, ownProps: othersProps) => ({
    phones: state.phones,   
});

const mapDispatchToProps = (dispatch: any) => ({
    getPhones: () => dispatch(loadListPhoneAction())
});

export const ListPhoneContainer: any = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPhone);
