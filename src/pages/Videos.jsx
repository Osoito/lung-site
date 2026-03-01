
import { useState, useEffect } from 'react'
import FilterBar from '../components/FilterBar.jsx'
import VideoCard from '../components/VideoCard.jsx'
import '../styles/Videos.css'

function Videos() {
  const [videos, setVideos] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeStatus, setActiveStatus] = useState('all')

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'data/videos.json')
      .then(r => r.json())
      .then(d => setVideos(d.videos))
      .catch(err => console.error('Failed to load videos:', err))
  }, [])

  const categoryList = ['all', ...new Set(videos.map(v => v.category).filter(Boolean))]
  const categories = categoryList.map(c => ({
    value: c,
    label: c === 'all' ? '全部' : c,
  }))

  const filtered = videos.filter(v => {
    const q = searchQuery.toLowerCase()
    const matchSearch =
      !q ||
      v.title_zh.includes(searchQuery) ||
      v.title_en.toLowerCase().includes(q) ||
      (v.category && v.category.toLowerCase().includes(q))
    const matchCategory = activeCategory === 'all' || v.category === activeCategory
    const matchStatus = activeStatus === 'all' || v.status === activeStatus
    return matchSearch && matchCategory && matchStatus
  })

  return (
    <div className="videos-page">
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        activeStatus={activeStatus}
        onStatusChange={setActiveStatus}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <div className="videos-grid">
        {videos.length === 0 && (
          <div className="no-results">暂无视频</div>
        )}
        {videos.length > 0 && filtered.length === 0 && (
          <div className="no-results">无匹配结果</div>
        )}
        {filtered.map(video => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

export default Videos
