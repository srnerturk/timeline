import React from 'react'
import Timeline from './components/timeline';
function App() {
    const cdnUrl = "https://raw.githubusercontent.com/srnerturk/timeline/master/src/assets/";
    const data = [
        { date: "14 Ağustos 2019", text: "o ilk an", image: cdnUrl + "1.jpg", title: "Herşeye Merhaba!" },
        { date: "15 Ağustos 2019", text: "ilk like'ı atma çabalaları..", image: cdnUrl + "2.jpg", title: "İlk Like!" },
        { date: "15 Ağustos 2019", text: "Parantez Severiz!", image: cdnUrl + "3.jpg", title: "İlk Parantez!" },
        { date: "16 Ağustos 2019", text: "Utangaç çocuk numarayı istiyor, kızın paketi bitmiş yazık, püüü!", image: cdnUrl + "4.jpg", title: "Burası kasıyor Whatsapp var mı?" },
        { date: "16 Ağustos 2019", text: "nihayet whatsapptan yazdı, oh be", image: cdnUrl + "5.jpg", title: "Merhaba wassapçığım" },
        { date: "16 Ağustos 2019", text: "ilişkimizdeki sanatsal çalışmalara başladık", image: cdnUrl + "6.jpg", title: "Sanatı seviyor ve takdir ediyoruz" }
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