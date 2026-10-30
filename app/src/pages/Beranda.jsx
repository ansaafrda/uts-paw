import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import mahasiswa from '../../mahasiswa.json'
import './Beranda.css'

export default function Beranda() {
  const { items, loading } = useKoleksi()
  const jumlahKategori = new Set(items.map((item) => item.kategori)).size

  return (
    <section id="beranda">
      <h1>Resep Masakan Nusantara</h1>
      <p>Tema: {mahasiswa.tema}</p>
      {loading ? (
        <p>Memuat ringkasan...</p>
      ) : (
        <p>
          Ada {items.length} resep dalam {jumlahKategori} jenis hidangan.
        </p>
      )}
      <Link to="/koleksi" id="tombol-koleksi">Lihat semua resep</Link>
    </section>
  )
}