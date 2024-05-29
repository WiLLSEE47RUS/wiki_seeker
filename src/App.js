import {useState} from 'react'
import Header from "./components/Header/Header";
import Results from "./components/Results/results";
import SwitchLang from "./components/switchLang/switchLang";
import Popup from "./components/Popup/Popup";

function App() {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [searchInfo, setSearchInfo] = useState({})
    const [lang, setLang] = useState('ru')
    const [swLangVis, setSwLangVis] = useState(true)
    const [trigger, setTrigger] = useState(false)

    const handleSearch = async e => {
        e.preventDefault();
        if (search === '') return;

        const endpoint = `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&
        prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`

        const response = await fetch(endpoint)
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        setResults(json.query.search);
        setSearchInfo(json.query.searchinfo)

        if(json.query.search.length=== 0){
            setTrigger(true)
            setSwLangVis(true)
        }else{
            setSearch('')
            setSwLangVis(false)
        }
    }


    return (
        <div className="App">
             А тут игра будет
        </div>
    );
}

export default App;
