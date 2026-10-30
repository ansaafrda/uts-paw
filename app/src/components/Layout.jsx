import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

const MENU = [
  { ke: '/', label: 'Home' },
  { ke: '/koleksi', label: 'Kumpulan Resep' },
  { ke: '/tambah', label: 'Tambah Resep' },
  { ke: '/statistik', label: 'Statistik' },
  { ke: '/tentang', label: 'Tentang' },
]

export default function Layout() {
  return (
    <div className="kerangka">
      <header className="kepala">
        <strong>Receipe.</strong>
        <nav className="menu">
          {MENU.map(({ ke, label }) => (
            <NavLink key={ke} to={ke} end={ke === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="isi">
        <Outlet />
      </main>
      <footer className="kaki">Ujian Tengah Semester Pengembangan Aplikasi Web</footer>
    </div>
  )
}