import React from 'react'
import Timeline from './components/timeline';
function App() {
    const data = [
        { date: "14 Ağustos 2019", text: "bla bla bla", image: "", title: "Merhaba Dünya" }
    ]
    return (
        <div id="timeline-content">
            <ul className="timeline">
                {
                    data.map((i, t) =>
                        <Timeline item={i} />
                    )
                }

            </ul>

        </div>

    )
}
export default App;