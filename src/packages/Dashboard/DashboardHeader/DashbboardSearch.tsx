import { TextField } from '@pandagardenio/bamsa/TextField/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

export function DashboardSearch(): JSX.Element {
    const [options, setOptions] = useState<[]>([]);
    return (
        <Autocomplete
            options={options}
            renderInput={(params) => <TextField {...params} label="Movie"/>}
        />
    );
}