
fetch('data/program.json')
  .then(r=>r.json())
  .then(d=>{
    const c=document.getElementById('program-container');
    c.innerHTML="";
    d.forEach(i=>{
      c.innerHTML+=`
      <div class="program-card">
        <img src="${i.gambar}">
        <h3>${i.judul}</h3>
        <p>${i.deskripsi}</p>
        <a href="${i.link}" class="btn">Baca Detail</a>
      </div>`;
    });
  });
