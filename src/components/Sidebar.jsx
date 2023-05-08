import { Icon, Stack } from '@mui/material'
import { categories } from '../utils/constants'
import PropTypes from 'prop-types'

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
    return (
        <Stack
            direction='row'
            sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' }}}
        >
            {categories.map((category) => (
                <button 
                    onClick={() => setSelectedCategory(category.name)}
                    key={category.name} 
                    className='category-btn'
                    style={{ background: category.name === selectedCategory && '#FC1503', color: '#fff'}}
                >
                    <Icon style={{ color: category.name === selectedCategory ? '#fff' : 'red' }}>{category.icon}</Icon>
                    <span>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}

Sidebar.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    setSelectedCategory: PropTypes.func.isRequired
}
