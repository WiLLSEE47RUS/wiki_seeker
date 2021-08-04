import "./switchLang.css"
function SwitchLang(props){
    const lang = props.lang
    const btn_text = lang === 'ru'? "Поменять язык" : "Change language"
    return(props.swLangVis === true?(
        <div>
            <button className='swlang_btn' onClick={() => (lang === 'ru')?props.setLang('en'): props.setLang('ru')}>{btn_text}</button>
        </div>
        ): ""
    )
}
export default SwitchLang