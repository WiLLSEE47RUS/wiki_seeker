import "./results.css"
function Results(props){
    return(
        <div className="results">
            {props.results.map((result,i) =>{
                const url =`https://${props.lang}.wikipedia.org/?curid=${result.pageid}`
                return(
                    <div className="result" key = {i}>
                        <h3>{result.title}</h3>
                        <p dangerouslySetInnerHTML={{__html: result.snippet}}/>
                        <a href= {url} target="_blank" rel="noreferrer">{props.lang ==='ru'?"Подробнее": "Read more"}</a>
                    </div>
                )
            })}
        </div>
    )
}
export default Results