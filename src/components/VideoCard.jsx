import '../styles/VideoCard.css'

function VideoCard({ video }) {
  const {
    title_zh, title_en, category, description,
    original_url, thumbnail, watch_url, status,
  } = video

  return (
    <article className="video-card" data-status={status}>
      <div className="video-card-thumb">
        {thumbnail ? (
          <img src={thumbnail} alt={title_zh} />
        ) : (
          <div className="thumb-placeholder">NO THUMB</div>
        )}
      </div>
      <div className="video-card-body">
        <div className="video-card-info">
          <h2 className="video-title-zh">{title_zh}</h2>
          <h3 className="video-title-en">{title_en}</h3>
          <div className="video-tags">
            {category && <span className="tag">{category}</span>}
          </div>
          {description && <p className="video-desc">{description}</p>}
        </div>
        <div className="video-card-footer">
          <div className="video-card-actions">
            {original_url && (
              <a
                href={original_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action"
              >
                原视频
              </a>
            )}
            {watch_url && (
              <a
                href={watch_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action"
              >
                站外观看
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default VideoCard
