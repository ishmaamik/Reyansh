import "../App.css"

import Tools from '../components/Tools'
const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <h1 className="reyansh">REYANSH</h1>
                <div className="tools">
                {Tools.map((p, key) => {return (<div key={key}>
                    <p>{p.name}</p>
                </div>)})}
                </div>
            </div>
        </>
    )
}

export default Sidebar