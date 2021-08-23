import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import MultiLine from '../../components/controls/MultiLine';


const HoursItems= [
    { id: 'PartTime', title: 'Part Time' },
    { id: 'FullTime', title: 'Full Time' },
    
]
const ContractItems= [
    { id: 'Permanent', title: 'Permanent' },
    { id: 'Fixed Term', title: 'Fixed Term' },
    { id: 'Casual', title: 'Casual' }
    
]
const SalaryItems= [
    {id : 'Hourly', title : 'Hourly'},
    {id : 'Annual', title : 'Annual'},
    {id: 'Market rate', title: 'Market rate'}
]

const initialFValues = {
    id: 0,
    Company: '',
    position: '',
    Salary: 'Hourly',
    Location : '',
    Hours: 'Part Time',
    Contract: 'Permanent',
    StartDate: new Date(),
    ClosingDate : new Date(),
    
    Details : ''
}

export default function RegistrationForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('Position' in fieldValues)
            temp.position = fieldValues.position ? "" : "This field is required."
        if ('Details' in fieldValues)
            temp.Details = fieldValues.Details ? "" : "This field is required."
        
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    
    } = useForm(initialFValues, true,validate);

    

    return (
        <Form >
            <Grid container>
                <Grid item xs={12}>
                    <Controls.Input
                        name="Company"
                        label="Company"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Position"
                        name="Position"
                        value={values.Position}
                        onChange={handleInputChange}
                        error={errors.Position}
                    />
                    <Controls.RadioGroup
                        name="Hours"
                        label="Hours"
                        value={values.Hours}
                        onChange={handleInputChange}
                        items={HoursItems}
                    />
                    <Controls.RadioGroup
                        name="Contract"
                        label="Contract"
                        value={values.Contract}
                        onChange={handleInputChange}
                        items={ContractItems}
                    />

                </Grid>
                <Grid item xs={12}>
                    <Controls.MultiLine
                        label="Detail"
                        name="Details"
                        value={values.Details}
                        onChange={handleInputChange}
                        error={errors.Position}
                    />
                    </Grid>
                <Grid item xs={12}>
                    <Controls.RadioGroup
                        name="Salary"
                        label="Salary"
                        value={values.Salary}
                        onChange={handleInputChange}
                        items={SalaryItems}
                    />
                    <Controls.Input
                        label="Location"
                        name="Location"
                        value={values.Location}
                        onChange={handleInputChange}
                        error={errors.Position}
                    />
                    <Controls.DatePicker
                        name="StartDate"
                        label="Start Date"
                        value={values.StartDate}
                        onChange={handleInputChange}
                    />
                    <Controls.DatePicker
                        name="ClosingDate"
                        label="Closing Date"
                        value={values.ClosingDate}
                        onChange={handleInputChange}
                    />
                
                    
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                    
                </Grid>

            </Grid>
        </Form>
    )
}
