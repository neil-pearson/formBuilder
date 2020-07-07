import React, { useState } from "react";
import { Form, TextField, SelectField, SubmitButton } from './formfields';
import { FormBuilder } from './formBuilder';

import "bootstrap/dist/css/bootstrap.css";

const formJSON = {
    name: {
        type: "text",
        label: "First Name",
        required: true
    },
    surname: {
        type: "text",
        label: "Surname",
        required: true
    },
    email: {
        type: "text",
        label: "Email",
        required: true
    },
    role: {
        type: "select",
        label: "Role",
        required: true,
        options: [
            {
                label: "Admin",
                value: "admin"
            },
            {
                label: "User",
                value: "user"
            }
        ]
    }
}

function App() {


    return (
        <div className="App">

            <FormBuilder formJSON={formJSON}>  </FormBuilder>

        </div>
    );
}

export default App;
