import NavigationButton from './NavigationButton'

const Header = () => {
    return (
        <div style={{width: '100%', textAlign: 'center', color:'white', fontSize:'24pt', backgroundColor: '#000', padding: '15px'}}>
            <h1>Minecraft Prison List</h1>
            <div style={ButtonList}>
                <NavigationButton path='/builders' label='Builders' />
                <NavigationButton path='/prisons' label='Prisons' />
                <NavigationButton path='/escapists' label='Escapists' />
            </div>
        </div>
    )
}

const ButtonList = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '20px',
    marginBottom: '20px'
}

export default Header;