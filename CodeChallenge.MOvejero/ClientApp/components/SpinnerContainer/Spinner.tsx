import * as React from "react";

interface IProps {
    httpLoading: boolean;
}

export class Spinner extends React.Component<IProps, {}>
{
    constructor(props:any) {
        super(props);
    }

    public render() {
        if (this.props.httpLoading) {
            return (
                <div className="spinner">
                    <img src="https://loading.io/spinners/whirl/index.rotate-whirl-ajax-vortex-spinner.svg" />
                </div>)
        }
        else {
            return null
        }
    }
}