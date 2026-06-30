let travelData={};
fetch('travel_recommendation_api.json').then(r=>r.json()).then(d=>travelData=d);
document.getElementById('searchBtn').onclick=()=>{
 const k=document.getElementById('searchInput').value.toLowerCase().trim();
 let arr=[];
 if(k==='beach'||k==='beaches') arr=travelData.beaches||[];
 else if(k==='temple'||k==='temples') arr=travelData.temples||[];
 else if(k==='country'||k==='countries'){
   (travelData.countries||[]).forEach(c=>(c.cities||[]).forEach(x=>arr.push(x)));
 }
 const r=document.getElementById('results');
 r.innerHTML='';
 arr.forEach(p=>r.innerHTML+=`<div class="card"><img src="${p.imageUrl}" onerror="this.src='https://placehold.co/600x400?text=Image'"><h3>${p.name}</h3><p>${p.description}</p></div>`);
};
document.getElementById('resetBtn').onclick=()=>{searchInput.value='';results.innerHTML='';};
