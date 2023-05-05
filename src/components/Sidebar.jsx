import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

export default function Sidebar() {
    return (
        <Stack
            direction='row'
            sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' }}}
        >
            {categories.map((category) => (
                <button key={category.name}>
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}
