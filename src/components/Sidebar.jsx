// icon import
import HomeIcon from '@mui/icons-material/Home'
import CodeIcon from '@mui/icons-material/Code'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import SchoolIcon from '@mui/icons-material/School'
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'
import MusicNoteIcon from "@mui/icons-material/MusicNote";

// package import
import { Icon, Stack } from '@mui/material'
import { categories } from '../utils/constants'

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
    const getCategoryIcon = (iconName) => {
        switch (iconName) {
            case 'HomeIcon':
                return <HomeIcon />
            case 'CodeIcon':
                return <CodeIcon />
            case 'OndemandVideoIcon':
                return <OndemandVideoIcon />
            case 'SportsEsportsIcon':
                return <SportsEsportsIcon />
            case 'LiveTvIcon':
                return <LiveTvIcon />
            case 'SchoolIcon':
                return <SchoolIcon />
            case 'FaceRetouchingNaturalIcon':
                return <FaceRetouchingNaturalIcon />
            case 'CheckroomIcon':
                return <CheckroomIcon />
            case 'GraphicEqIcon':
                return <GraphicEqIcon />
            case 'TheaterComedyIcon':
                return <TheaterComedyIcon />
            case 'FitnessCenterIcon':
                return <FitnessCenterIcon />
            case 'DeveloperModeIcon':
                return <DeveloperModeIcon />
            case 'MusicNoteIcon':
                return <MusicNoteIcon />
            default:
                return null;
        }
    }

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
                    <Icon style={{ color: category.name === selectedCategory ? '#fff' : 'red' }}>{getCategoryIcon(category.icon)}</Icon>
                    <span>{category.name}</span>
                </button>
            ))}
        </Stack>
    )
}
