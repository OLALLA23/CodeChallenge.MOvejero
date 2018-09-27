import * as React from 'react';
import { SpinnerContainer } from './SpinnerContainer/SpinnerContainer';


export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className='container-fluid'>
            <SpinnerContainer />
            {this.props.children}
        </div>;
    }
}
