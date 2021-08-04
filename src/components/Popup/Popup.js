import './popup.css'

function Popup(props){
    const popupText = props.lang ==='ru'? 'По вашему запросу ничего не найдено.' +
        ' Попробуйте поменять язык.': 'No results found.' +
        ' Try to change language.'
    return(props.trigger?(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn"
                        onClick={() => props.setTrigger(false)}>
                    {props.lang ==='ru'? 'Закрыть': 'Close'}
                </button>
                { popupText }
            </div>
        </div>
    ): "")
}
export default Popup