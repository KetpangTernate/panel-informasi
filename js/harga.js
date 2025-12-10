
fetch('data/harga.json')
  .then(r=>r.json())
  .then(d=>{
    const t=document.getElementById('tabel-harga');
    t.innerHTML = `
      <tr><th>Komoditas</th><th>Satuan</th><th>Harga</th><th>Stok</th></tr>
    `;
    d.forEach(i=>{
      t.innerHTML += `
        <tr>
          <td>${i.komoditas}</td>
          <td>${i.satuan}</td>
          <td>${i.harga}</td>
          <td>${i.stok}</td>
        </tr>`;
    });
  });
