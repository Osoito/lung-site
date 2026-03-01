import { useState, useEffect } from 'react'
import FilterBar from '../components/FilterBar.jsx'
import ComicCard from '../components/ComicCard.jsx'
import '../styles/Comics.css'

function Comics() {
  const [comics, setComics] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeStatus, setActiveStatus] = useState('all')

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'data/comics.json')
      .then(r => r.json())
      .then(d => setComics(d.comics))
      .catch(err => console.error('Failed to load comics:', err))
  }, [])

  const authorList = ['all', ...new Set(comics.map(c => c.author))]
  const categories = authorList.map(a => ({
    value: a,
    label: a === 'all' ? '全部' : a,
  }))

  const filtered = comics.filter(c => {
    const q = searchQuery.toLowerCase()
    const matchSearch =
      !q ||
      c.title_zh.includes(searchQuery) ||
      c.title_en.toLowerCase().includes(q) ||
      c.author.toLowerCase().includes(q)
    const matchCategory = activeCategory === 'all' || c.author === activeCategory
    const matchStatus = activeStatus === 'all' || c.status === activeStatus
    return matchSearch && matchCategory && matchStatus
  })

  return (
    <div className="comics-page">
      <FilterBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        activeStatus={activeStatus}
        onStatusChange={setActiveStatus}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <div className="comics-grid">
        {filtered.length === 0 && comics.length > 0 && (
          <div className="no-results">无匹配结果</div>
        )}
        {filtered.map(comic => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  )
}

export default Comics
