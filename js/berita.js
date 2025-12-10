
fetch('data/berita.json')
  .then(r=>r.json())
  .then(d=>{
    const c=document.getElementById('berita-container');
    c.innerHTML="";
    d.forEach(i=>{
      c.innerHTML+=`
      <div class="berita-card">
        <img src="${i.gambar}">
        <h3>${i.judul}</h3>
        <small>${i.tanggal}</small>
        <p>${i.isi}</p>
      </div>`;
    });
  });
