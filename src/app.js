import React from 'react'
import Timeline from './components/timeline';
function App() {
  const cdnUrl = "https://raw.githubusercontent.com/srnerturk/timeline/master/src/assets/";
  const data = [
    { date: "14 Ağustos 2019", text: "o ilk an", image: cdnUrl + "1.jpg", title: "Herşeye Merhaba!" },
    { date: "Ağustos 2019", text: "ilk like'ı atma çabalaları..", image: cdnUrl + "2.jpg", title: "İlk Like!" },
    { date: "Ağustos 2019", text: "Parantez Severiz!", image: cdnUrl + "3.jpg", title: "İlk Parantez!" },
    { date: "Ağustos 2019", text: "Utangaç çocuk numarayı istiyor, kızın paketi bitmiş yazık, püüü!", image: cdnUrl + "4.jpg", title: "Burası kasıyor Whatsapp var mı?" },
    { date: "Ağustos 2019", text: "nihayet whatsapptan yazdı, oh be", image: cdnUrl + "5.jpg", title: "Merhaba wassapçığım" },
    { date: "Ağustos 2019", text: "ilişkimizdeki sanatsal çalışmalara başladık", image: cdnUrl + "6.jpg", title: "Sanatı seviyor ve takdir ediyoruz" },
    { date: "Ağustos 2019", text: "Emojicilik", image: cdnUrl + "7.jpg", title: "Koala ve civciv aşkı başlıyor..." },
    { date: "Ağustos 2019", text: "Sanat Buse içindir", image: cdnUrl + "8.jpg", title: "bir gün yine sanat ve ilham perimle dans ediyorum." },
    { date: "Ağustos 2019", text: "Geliyor gelmekte olan", image: cdnUrl + "9.jpg", title: "Alemin kralı geliyor! Geliyor!" },
    { date: "Ağustos 2019", text: "Minik süprüzler", image: cdnUrl + "11.jpg", title: "Bu kız gerçekten çok tatlı biri 💛" },
    { date: "Ağustos 2019", text: "Perdeler", image: cdnUrl + "12.jpg", title: "Perdeler kuru temizlemeciye verilmez. Tamam biliyom, öğrendim tamammmm! 💛" },
    { date: "Ağustos 2019", text: "İlk buluşma", image: cdnUrl + "10.jpg", title: "İlk kavuştay, ilk dokunma, ilk koklama, ilk öpücük, ilk mcdonalds 🍔🍔🍔" }
  ]
  return (
    <div id="timeline-content">
      <h1>🐣 - 🐨 Neler yaptık, neler yapıyoruz...</h1>
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