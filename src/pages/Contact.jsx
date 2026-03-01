import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [lightbox, setLightbox] = useState(false)
  const qrSrc = import.meta.env.BASE_URL + 'media/img/posters/qrcode.png'

  return (
    <div className="contact">
      <div className="contact-header">
        <div className="contact-title">联系方式</div>
        <div className="contact-subtitle">CONTACT AND TRANSMISSION</div>
      </div>

      <div className="contact-rule"> </div>

      <p className="contact-intro">如有问题或交流，请通过以下方式联系。</p>

      <div className="contact-channels">

        <div className="contact-channel">
          <div className="channel-label">[CH.01] 微信公众号</div>
          <div className="qr-frame" onClick={() => setLightbox(true)}>
            <img
              src={qrSrc}
              alt="微信公众号二维码"
              className="qr-image"
            />
          </div>
          <div className="channel-note">扫码关注公众号，点击放大图片</div>
        </div>

      {lightbox && (
        <div className="qr-lightbox" onClick={() => setLightbox(false)}>
          <img src={qrSrc} alt="微信公众号二维码（放大）" className="qr-lightbox-img" />
          <div className="qr-lightbox-hint">点击任意处关闭</div>
        </div>
      )}

        <div className="contact-channel">
          <div className="channel-label">[CH.02] 微博</div>
          <a
            href="https://weibo.com/u/1763219305"
            target="_blank"
            rel="noopener noreferrer"
            className="weibo-panel"
          >
            {/* <span className="weibo-prompt">{'>'} OPEN CHANNEL</span> */}
            <span className="weibo-url">weibo.com/u/1763219305</span>
          </a>
          <div className="channel-note">微博私信或评论均可</div>
        </div>

      </div>

      <div className="contact-rule"> </div>

      <div className="contact-footer">
        <span>// 鱼肉</span> <br />
        <span>// ：</span><br />
        <span>// 就算什么事也没有，我也喜欢和你聊天</span>
      </div>
    </div>
  )
}

export default Contact
