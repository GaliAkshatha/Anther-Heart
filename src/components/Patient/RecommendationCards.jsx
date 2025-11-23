import React from "react"

export default function RecommendationCards() {
  const tips = [
    {
      title: "Healthy Diet",
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      desc: "Try adding more fruits and fiber—your heart will thank you!"
    },
    {
      title: "Stay Active",
      img: "https://cdn-icons-png.flaticon.com/512/2964/2964514.png",
      desc: "A 20-minute walk each day gently strengthens your heart."
    },
    {
      title: "Reduce Stress",
      img: "https://cdn-icons-png.flaticon.com/512/4151/4151020.png",
      desc: "Deep breathing and calm routines keep your heart relaxed."
    },
    {
      title: "Good Sleep",
      img: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
      desc: "Good sleep helps your heart recover and stay balanced."
    },
    {
      title: "Hydration",
      img: "https://cdn-icons-png.flaticon.com/512/2964/2964518.png",
      desc: "Drinking water supports stable pressure and heart rhythm."
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {tips.map((t, idx) => (
        <div 
          key={idx}
          className="bg-white p-4 rounded-xl shadow hover:shadow-xl cursor-pointer 
                     transition relative group border"
        >
          <img src={t.img} alt="" className="w-14 mx-auto opacity-80" />
          <h4 className="text-center font-semibold mt-3">{t.title}</h4>

          <div className="
            absolute inset-0 bg-black/80 text-white p-4 rounded-xl opacity-0 
            group-hover:opacity-100 transition flex items-center justify-center text-sm
          ">
            {t.desc}
          </div>
        </div>
      ))}
    </div>
  )
}
