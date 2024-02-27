/* eslint-disable react/prop-types */
import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form"
import { CurrencySelector } from "./CurrencySelector";

// currencyList: [Array<string>]
// onSubmit: (data) => void\
// buttonLabel: string

export const ConvertForm = ({ currencyList, onSubmit, buttonLabel, inputLabel }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box 
            display="flex" 
            flexDirection="column" 
            gap={1}
            alignItems="space-between"
            sx={{ width: "400px" }}
            >
                <Box 
                    display="flex"
                    gap={2}
                >
                    <TextField
                        {...register('countCurrency', {required: true})}
                        label={inputLabel}
                        type="number"
                        autoComplete="off"
                        sx={{width: '100%'}}
                        error={errors['countCurrency'] ? true : false}
                        helperText={errors['countCurrency'] ? 'Required field' : ''}
                    />
                    {/* <TextField
                        {...register('countCurrency', {required: true})}
                        label="Amount"
                        type="number"
                        sx={{width: '100%'}}
                        error={errors['countCurrency'] ? true : false}
                        helperText={errors['countCurrency'] ? 'Required field' : ''}
                    /> */}
                </Box>
                <Box 
                    display="flex"
                    gap={2}
                >
                    <CurrencySelector 
                        register={{...register('from')}} 
                        label="From"
                        currencyList={currencyList}
                    />
                    <CurrencySelector 
                        register={{...register('to')}} 
                        label="To"
                        currencyList={currencyList}
                    />
                </Box>
                <Button 
                    type="submit"
                    variant='outlined'
                >
                    {buttonLabel}
                </Button>
            </Box>
        </form>
    )
}