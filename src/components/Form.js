import React from 'react';
import { useState } from 'react';
import { StyledForm } from "./styles/Form.styled";

function Form({videogameSearch}) {


    const [form, setForm] = useState({
        searchTerm: ''
    });

    const handleChange = (e) => {
        console.log(e.target.value)
        setForm ({
            ...form,
            searchTerm: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        videogameSearch(form.searchTerm);
        form.searchTerm= "";
    }

return (
    <div>
        <StyledForm onSubmit={handleSubmit}>
            <input type="text" value={form.searchTerm} onChange={handleChange} />
            <input type="submit" value="search" />
        </StyledForm>
    </div>
)
}

export default Form;