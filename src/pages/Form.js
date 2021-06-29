import React, { useState} from "react";


const Form = ({ initialEntry, handleSubmit, buttonLabel, history}) => {
    // form data state
    const [formData, setFormData] = useState(initialEntry);

    // functions 

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };


    const handleSubmission = (event) => {
        // prevent refresh
        event.preventDefault();
        // pass form data to handleSubmit prop function
        handleSubmit(formData);
        history.push("/");
    };

    return (
        <form onSubmit={handleSubmission}>
            <input 
            type="text"
            onChange={handleChange}
            value={formData.title}
            name="title"
            />
            <input 
            type="text"
            onChange={handleChange}
            value={formData.body}
            name="body"
            />
            <input type="submit" value={buttonLabel}/>
        </form>
    );
};

export default Form;