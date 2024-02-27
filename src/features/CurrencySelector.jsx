/* eslint-disable react/prop-types */
import {  MenuItem, TextField } from "@mui/material"

// {
//     currencyList: Array<string>
//     label: string
//     register: unknown (From react-hook-form)
// }

export const CurrencySelector = ( {currencyList, label, register} ) => {
    return (
            <TextField
                {...register}
                select
                label={label}
                defaultValue=""
                sx={{width: '100%'}}
                required
                >
                    {currencyList.map((object) => {
                        return (
                            <MenuItem key={object.value} value={object.value}>
                                {object.label}
                            </MenuItem>
                        )
                    })}
            </TextField>
    )
}