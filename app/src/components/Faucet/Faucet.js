import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';

export default class Faucet extends React.Component {

    constructor(props) {
        console.log("constructor: ", props.faucet);
        super(props);
        this.state = {
            address: '',
        };
    }

    handleSendWei = () => {
        this.props.onSendWeiFormSubmit(this.props.faucet.selected.address, this.state.address);
    }

    onInputChange(event) {
        this.setState({
            address: event.target.value
        });
    }

    render() {
        const { selected } = this.props.faucet;
        return (
            <Card>
                {selected &&
                    <CardTitle
                        title={selected.name + " Faucet"} style={{ "textTransform": "capitalize" }}
                        subtitle={"Balance: " + selected.balance + " Ether"}
                    />
                }
                <CardText>
                    <TextField
                        style={{ width: '100%' }}
                        id="text-field-controlled"
                        floatingLabelText="Address"
                        value={this.state.address}
                        errorText={this.state.error}
                        onChange={e => this.onInputChange(e)}
                    />
                    <br />
                    
                </CardText>
                <CardActions style={{textAlign: 'right'}}>
                    <RaisedButton 
                    secondary={true}
                    style={{marginRight: '0px'}} 
                    onClick={this.handleSendWei} 
                    label="Request 1 Ether" />
                </CardActions>
            </Card>
        );
    }
}
