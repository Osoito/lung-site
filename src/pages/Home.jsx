import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  const [news, setNews] = useState([])
  const [comicCount, setComicCount] = useState(null)
  const [videoCount, setVideoCount] = useState(null)

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'data/news.json')
      .then(r => r.json())
      .then(d => setNews(d.news))
      .catch(err => console.error('Failed to load news:', err))

    Promise.all([
      fetch(import.meta.env.BASE_URL + 'data/comics.json').then(r => r.json()),
      fetch(import.meta.env.BASE_URL + 'data/videos.json').then(r => r.json()),
    ]).then(([comics, videos]) => {
      setComicCount(comics.comics.length)
      setVideoCount(videos.videos.length)
    }).catch(err => console.error('Failed to load counts:', err))
  }, [])

  return (
    <div className="home">
      <div className="home-header">
        <div className="home-title">右肺摘除</div>
        <div className="home-subtitle">一切奋斗都失败以后　永远一无所有的祭坛</div>
      </div>

      <div className="home-rule">─────────────────────────────────────────</div>

      <section className="home-about">
        <p>汉化翻译作品存档站。</p>
        <p>Bane / Evan Dahm / Human Centipede 相关及其他，免费分享仅供交流学习。</p>
        <p>如有问题请通过微博联系。</p>
      </section>

      <div className="home-stats" aria-label="存档数量">
        <span>[漫画: {comicCount ?? '…'}]</span>
        <span>[视频: {videoCount ?? '…'}]</span>
        <span className="home-status-dot">● 在线</span>
      </div>

      <div className="home-rule">─────────────────────────────────────────</div>

      <nav className="home-nav">
        <Link to="/comics" className="home-nav-item">
          <div className="home-nav-label">→ 图像小说</div>
          <div className="home-nav-desc">DC / Marvel / Evan Dahm </div>
        </Link>
        <Link to="/videos" className="home-nav-item">
          <div className="home-nav-label">→ 视频</div>
          <div className="home-nav-desc">《人体蜈蚣》创作者访谈 / 其他主题视频 字幕内嵌翻译</div>
        </Link>
      </nav>

      <div className="home-rule">─────────────────────────────────────────</div>

      <section className="home-news">
        <div className="home-section-title">更新</div>
        <ul className="news-list">
          {news.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home
