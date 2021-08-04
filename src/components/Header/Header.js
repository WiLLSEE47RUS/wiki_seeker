import "./Header.css"
function Header(props){
    const rusHeader = (
        <header>
            <h1>Поиск по Wiki</h1>
            <form className="search-box" onSubmit={props.handleSearch}>
                <input
                    type="search"
                    placeholder="Что вы хотите найти?"
                    value = {props.search}
                    onChange={e => props.setSearch(e.target.value)}
                />
            </form>

            {(props.searchInfo.totalhits)? <p>Результатов поиска: {props.searchInfo.totalhits}</p> : ''}
        </header>
    )
    const engHeader = (
        <header>
            <h1>Wiki Seeker</h1>
            <form className="search-box" onSubmit={props.handleSearch}>
                <input
                    type="search"
                    placeholder="What are you looking for?"
                    value = {props.search}
                    onChange={e => props.setSearch(e.target.value)}
                />
            </form>
            {(props.searchInfo.totalhits)? <p>Results found: {props.searchInfo.totalhits}</p> : ''}
        </header>
    )
    return (props.lang === 'ru')? rusHeader:engHeader
}

export default Header