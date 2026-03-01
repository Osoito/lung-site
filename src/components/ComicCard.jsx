import '../styles/ComicCard.css'

const STATUS_LABELS = {
  completed: '已完成',
  in_progress: '进行中',
}

function ComicCard({ comic }) {
  const {
    title_zh, title_en, author, chapters,
    description, quote, cover,
    download_url, read_url, status,
  } = comic

  return (
    <article className="comic-card" data-status={status}>
      <div className="comic-card-cover">
        {cover ? (
          <img src={cover} alt={title_zh} />
        ) : (
          <div className="cover-placeholder">NO IMAGE</div>
        )}
      </div>
      <div className="comic-card-body">
        <div className="comic-card-info">
          <h2 className="comic-title-zh">{title_zh}</h2>
          <h3 className="comic-title-en">{title_en}</h3>
          <div className="comic-tags">
            <span className="tag">{author}</span>
            {chapters && <span className="tag">{chapters}</span>}
            <span className={`tag tag-status ${status}`}>
              {STATUS_LABELS[status] || status}
            </span>
          </div>
          {description && <p className="comic-desc">{description}</p>}
        </div>
        <div className="comic-card-footer">
          {quote && <blockquote className="comic-quote">"{quote}"</blockquote>}
          <div className="comic-card-actions">
            {download_url ? (
              <a
                href={download_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action"
              >
                下载
              </a>
            ) : (
              <span className="btn-action disabled">暂无下载</span>
            )}
            {read_url && (
              <a
                href={read_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action"
              >
                站外阅读
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ComicCard
