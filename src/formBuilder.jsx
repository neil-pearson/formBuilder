import React from "react";
import { TextField, SelectField, SubmitButton, DynamicForm } from './formfields';

export class FormBuilder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            fields: {},
            jsonFields: {},
            errors: {}
        }

        this.setStateFieldsErrorsJSON();

        this.formJSON = props;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    setStateFieldsErrorsJSON() {

        let fields = this.state.fields;
        let jsonFields = this.state.jsonFields;
        let errors = this.state.errors;

        Object.keys(this.props.formJSON).map((key, ind) => (
            fields[key] = '', jsonFields[key] = '', errors[key] = ''
        ));

        this.setState({ fields: fields });


    }

    getReturnJSON() {
        let json = '';
        let jsonFields = this.state.jsonFields;

        Object.keys(this.props.formJSON).map((key, ind) => (
            json = json + jsonFields[key]
        ));

        return json;

    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.handleValidation()) {
            alert("A form was submitted: " + this.getReturnJSON());
        } else {
            alert("Form has errors.")
        }
    }

    handleChange(event, fieldName) {
        let fields = this.state.fields;
        let fieldValue = event.target.value;
        fields[fieldName] = event.target.value;
        this.setState({ fields: fields });
        let jsonFields = this.state.jsonFields;
        jsonFields[fieldName] = fieldName + ' ' + fieldValue + '; ';
        this.setState({ jsonFields: jsonFields });

    }


    handleValidation() {
        let fields = this.state.fields;
        let errors = this.state.errors;
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "First Name cannot be empty";
        }

        //Surname
        if (!fields["surname"]) {
            formIsValid = false;
            errors["surname"] = "Surname cannot be empty";
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Email cannot be empty";
        }


        this.setState({ errors: errors });
        return formIsValid;
    }

    getFormField = (fieldName, fieldJSON, fieldValue, handleChange) => {
        const props = {
            name: fieldName,
            label: fieldJSON.label,
            options: fieldJSON.options,
            fieldValue: fieldValue,
            handleChange: handleChange
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
            <div>
                <h1>Form Builder</h1>
                {/*<DynamicForm ref="dynamicForm" onSubmit={this.handleSubmit} formJSON={this.formJSON}> </DynamicForm>
                <br /><br /> */}
                <form className="needs-validation" refs="dynamicForm" onSubmit={this.handleSubmit}>
                    <fieldset>
                        {Object.keys(this.props.formJSON).map((key, ind) => (
                            <div key={key}>
                                {this.getFormField(key, this.props.formJSON[key], this.state.fields[key], this.handleChange)}
                                <span style={{ color: "red" }}>{this.state.errors[key]}</span>
                            </div>
                        ))}
                    </fieldset>
                    <SubmitButton
                        title="Submit"
                    />
                </form>
            </div>
        );
    }
}