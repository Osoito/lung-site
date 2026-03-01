import '../styles/FilterBar.css'

const STATUS_OPTIONS = [
  { value: 'all', label: '全部' },
  { value: 'completed', label: '已完成' },
  { value: 'in_progress', label: '进行中' },
]

function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  activeStatus,
  onStatusChange,
  searchQuery,
  onSearchChange,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-row">
        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`filter-tab ${activeCategory === cat.value ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="filter-right">
          <div className="filter-status">
            {STATUS_OPTIONS.map(opt => (
              <button
                key={opt.value}
                className={`status-btn ${activeStatus === opt.value ? 'active' : ''}`}
                onClick={() => onStatusChange(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <input
            type="text"
            className="filter-search"
            placeholder="搜索...."
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default FilterBar
