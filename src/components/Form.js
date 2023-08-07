import React from 'react';
import { useState } from 'react';

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
            
        </StyledForm>
    </div>
)
}

export default Form;