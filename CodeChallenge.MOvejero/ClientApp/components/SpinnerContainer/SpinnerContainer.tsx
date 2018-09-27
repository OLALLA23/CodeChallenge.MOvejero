import { StateReducer } from '../../reducers';
import { connect } from 'react-redux';
import { Spinner } from './Spinner';


const mapStateToProps = (state: StateReducer) => ({
    httpLoading: state.httpLoading
});

export const SpinnerContainer: any = connect(
    mapStateToProps,
)(Spinner);
