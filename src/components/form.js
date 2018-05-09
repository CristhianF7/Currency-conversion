import React, { Component } from 'react';
import ConvertorService from './../services/convertorService';

class Form extends Component {
    state = { origin: 'USD', originValue: '', destination: 'EUR', destValue: '' };

    componentDidMount() {
        var optionsFormat = [];
        var allowedOperations = ['USD', 'EUR'];
        this.getFormatValues().then(res => {
            res.data.rates.EUR = '';
            var formats = Object.keys(res.data.rates);
            optionsFormat = formats.map((format) => {
                return <option key={format} value={format} disabled={allowedOperations.indexOf(format) === -1 ? 'true' : null}>{format}</option>
            });
            this.setState({ formats: optionsFormat });
        });

    }

    getFormatValues = () => {
        return ConvertorService.getFormats();
    }

    convert = (event) => {
        event.preventDefault();

        if (this.state.origin !== this.state.destination) {
            ConvertorService.getValue(this.state.origin, this.state.destination)
                .then(res => {
                    let rate = res.data.rates[this.state.destination];
                    let value = rate * this.state.originValue;
                    let formatValue = Intl.NumberFormat("es-CO", { style: "currency", currency: this.state.destination }).format(value)
                    this.setState({ destValue: formatValue, showResult: true, showErrorMessage: false });
                }).catch(error => {
                    console.log(error.message);
                });
        }
        else {
            this.setState({ showErrorMessage: true, errorMessage: 'You can not convert the same format currency' });
        }
    }

    cleanForm = () => {
        this.setState({ origin: 'USD', originValue: '', destination: 'EUR', destValue: '', showResult: false });
    }

    onChangeInputValue = (event) => {
        this.setState({
            originValue: event.target.value,
            formatOriginValue: Intl.NumberFormat("es-CO", { style: "currency", currency: this.state.origin }).format(event.target.value),
            showResult: false
        });
    }

    onChangeOriginValue = (event) => {
        this.setState({ origin: event.target.value, showResult: false });
    }

    onChangeDestinatioValue = (event) => {
        this.setState({ destination: event.target.value, showResult: false });
    }

    render() {
        return (
            <div className="container formContainer">
                <form onSubmit={this.convert}>
                    <div className="row">
                        <div className="col form-inline text-center mx-auto">
                            <select className="form-control form-control-sm mb-2 mr-sm-2 offset-sm-1 col-xs-12 col-sm-2"
                                value={this.state.origin} onChange={this.onChangeOriginValue}>
                                {this.state.formats}
                            </select>
                            <input type="number" className="form-control form-control-sm mb-2 mr-sm-2 col-xs-12 col-sm-3"
                                value={this.state.originValue} onChange={this.onChangeInputValue} placeholder="Value to convert" />

                            <span className="mb-2 mr-sm-2">To: </span>
                            <select className="form-control form-control-sm mb-2 mr-sm-2 col-xs-12 col-sm-2"
                                value={this.state.destination} onChange={this.onChangeDestinatioValue}>
                                {this.state.formats}
                            </select>
                            <input type="text" disabled className="form-control form-control-sm mb-2 mr-sm-2 col-xs-12 col-sm-2"
                                value={this.state.destValue} />
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary btn-sm mb-2 mr-sm-2" type="submit">CALCULATE</button>
                    </div>
                    {this.state.showErrorMessage ? (
                        <div class="text-center">
                            <span class="messageError">{this.state.errorMessage}</span>
                        </div>
                    ) : null}
                    {this.state.showResult ?
                        (
                            <div className="row">
                                <div className="card d-block mx-auto">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Result</h5>
                                        <p className="card-text">
                                            <strong>{this.state.origin}</strong> {this.state.formatOriginValue} To <strong>{this.state.destination}</strong> = {this.state.destValue}
                                        </p>
                                        <div className="text-center">
                                            <button className="btn btn-danger btn-sm" onClick={this.cleanForm}>Clean</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        : null
                    }
                </form>
            </div>
        )
    }
}

export default Form;