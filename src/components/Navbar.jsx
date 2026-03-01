import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const NAV_LINKS = [
  { to: '/', label: '首页', exact: true },
  { to: '/comics', label: '图像小说' },
  { to: '/videos', label: '视频' },
]

const SUB_LINKS = [
  { to: '/about', label: '关于摘肺' },
  { to: '/contact', label: '联系我们' },
]

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">右肺摘除</div>
      <div className="navbar-rule">────────────</div>
      <ul className="navbar-links">
        {NAV_LINKS.map(link => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.exact}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="navbar-rule">────────────</div>
      <ul className="navbar-links">
        {SUB_LINKS.map(link => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="navbar-footer">
        <div>你可感到明天已经来临</div>
        <div>码头上停着我们的船</div>
      </div>
    </nav>
  )
}

export default Navbar
