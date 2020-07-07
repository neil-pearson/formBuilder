import React from "react";
import { TextField, SelectField, SubmitButton, DynamicForm } from './formfields';

export class FormBuilder extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };

        this.formJSON = props;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    onSubmit = (values) => {
        console.log(values);
        alert('A button was clicked: ');
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    getFormField = (fieldName, fieldJSON) => {
        const props = {
            name: fieldName,
            label: fieldJSON.label,
            options: fieldJSON.options
        };

        if (fieldJSON.type === "text") {
            return <TextField {...props} />
        }

        if (fieldJSON.type === "select") {
            return <SelectField  {...props} />
        }

    }


    render(){
        return (
            <div>
                <h1>Form Builder</h1>
                {/*    <DynamicForm formJSON={this.formJSON}> </DynamicForm>
                <br /><br /> */}
                <form className="needs-validation" noValidate="">
                    {Object.keys(this.props.formJSON).map((key, ind) => (
                        <div key={key}>
                            {this.getFormField(key, this.props.formJSON[key])}
                        </div>
                    ))}
                    <SubmitButton
                        title="Submit"
                    />
                </form>
            </div>
        );
    }
}