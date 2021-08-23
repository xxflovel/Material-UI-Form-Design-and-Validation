import React from 'react'
import { TextField } from '@material-ui/core';

export default function MultiLine(props) {

    const { name, label, value,error=null, onChange } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            multiline
            row = {4}
            value={value}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}