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
}