import React, {Component} from "react";

export default class Product extends Component{

    state = {product: this.props.product}

    render() {
        console.log(this.props)
        return (
            <div className="col-lg-6">
                <div className="card m-2">

                    <div className="card-body">
                        <div className="text-muted"># {this.props.product.id}</div>
                        <h5 className="pt-5 border-top">{this.props.product.productName}</h5>
                        <div>$ {this.props.product.price}</div>
                    </div>
                    {/*Card body ends here*/}
                    <div className="card-footer">
                        <div className="float-left">
                            <span className="badge bg-secondary m-2">{this.state.product.quantity}</span>

                            <div className="btn-group">
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {this.props.onIncrement(this.state.product, 10)}}
                                >+</button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {this.props.onDecrement(this.state.product, 0)}}
                                >-</button>
                            </div>
                        </div>
                        {/*Float-left ends here*/}
                        <div className="float-right">{this.props.children}</div>
                        {/*Float-right ends here*/}
                    </div>
                    {/*Card footer ends here*/}
                </div>
            </div>
        )
    }
}