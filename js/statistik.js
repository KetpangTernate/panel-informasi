
fetch('data/statistik.json')
  .then(r=>r.json())
  .then(d=>{
    const prod = document.getElementById('statistik-produksi');
    const kons = document.getElementById('statistik-konsumsi');
    prod.innerHTML = JSON.stringify(d.produksi);
    kons.innerHTML = JSON.stringify(d.konsumsi);
  });
