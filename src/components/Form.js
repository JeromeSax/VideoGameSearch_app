import React from 'react';
import { useState } from 'react';
import { StyledForm } from "./styles/Form.styled";

function Form({form, handleSubmit, handleChange}) {


  

    return (
        <div>
            <StyledForm onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={form.searchTerm}
                    onChange={handleChange}
                    placeholder="Find a game..."
                />
                <input type="submit" value="Search" />
            </StyledForm>
        </div>
    )
}

export default Form;