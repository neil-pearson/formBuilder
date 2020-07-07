// JavaScript source code
import React from 'react';



export class DynamicForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = { value: '' };

        this.formJSON = this.props.formJSON.formJSON;

    }


    getFormField = (fieldName, fieldJSON, fieldValue) => {
        const props = {
            name: fieldName,
            label: fieldJSON.label,
            options: fieldJSON.options,
            fieldValue: fieldValue
        };

        if (fieldJSON.type === "text") {
            return <TextField {...props} />
        }

        if (fieldJSON.type === "select") {
            return <SelectField  {...props} />
        }

    }

    render() {
        return (
            <form className="needs-validation" onSubmit={this.props.omSubmit}>
                {Object.keys(this.props.formJSON.formJSON).map((key, ind) => (
                    <div key={key}>
                        {this.getFormField(key, this.props.formJSON.formJSON[key])}
                    </div>
                ))}
                <SubmitButton
                    title="Submit"
                />
            </form>
        );
    }
}

export class TextField extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = { fieldValue: '' };

        this.setState({ fieldValue: props.fieldValue });
    }


    handleChange(e) {
        this.props.handleChange(e, this.props.name);
        this.setState({ fieldValue: e.target.value });
    }

    render() {
        const {
            fieldValue
        } = this.state;

        return (
            <>
                <div className="form-group col-sm-6">
                    {this.props.label && <label htmlFor={this.props.name}>{this.props.label}</label>}
                    <input
                        className="form-control"
                        type="text"
                        name={this.props.name}
                        id={this.props.name}
                        value={this.state.fieldValue}
                        placeholder={this.props.placeholder || ""}
                        onChange={this.handleChange}
                        refs={this.props.name}
                    />
                </div>
            </>
        )
    }
}

export class SelectField extends React.Component {
    render() {
        return (
            <>
                <div className="form-group col-sm-6">
                    {this.props.label && <label htmlFor={this.props.name}>{this.props.label}</label>}
                    <select
                        as="select"
                        className="form-control"
                        id={this.props.name}
                        name={this.props.name}
                    >
                        <option value="" >Choose...</option>
                        {this.props.options.map((optn, index) => <option value={optn.value} label={optn.label || optn.value} />)}
                    </select>
                </div>
            </>
        );
    }
}

export class SubmitButton extends React.Component {
    render() {
        return (
            <button className="btn btn-primary md-2 offset-md-1"
                type="submit">{this.props.title}</button>
        );
    }

}