import '../styles/About.css'

const MEMBERS = [
  {
    id: '01',
    name: '花仙子',
    subname: '地狱',
    role: '翻译 / 校对',
    bio: '- 喜欢黑暗中的故事 - 喜欢白玫瑰',
  },
  {
    id: '02',
    name: '鱼肉',
    subname: null,
    role: '翻译 / 运营',
    bio: '- 总在输 - 所以人为刀俎',
  },
  {
    id: '03',
    name: '向日葵',
    subname: null,
    role: '字幕 / 剪辑',
    bio: '- 原核生物 - 一百天冲刺上岸寒武纪，奥利给',
  },
]

function About() {
  return (
    <div className="about">
      <div className="about-header">
        <div className="about-title">关于摘肺</div>
        <div className="about-subtitle">LUNG PERSONNEL</div>
      </div>

      <div className="about-rule"> </div>

      <div className="about-members">
        {MEMBERS.map(member => {
          const bioItems = member.bio.split(/\s*-\s+/).filter(Boolean)
          return (
            <div className="member-col" key={member.id}>
              <div className="member-index">[{member.id}]</div>
              <div className="member-name">{member.name}</div>
              {member.subname && (
                <div className="member-subname">（{member.subname}）</div>
              )}
              <div className="member-role">{member.role}</div>
              <ul className="member-bio-list">
                {bioItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="about-rule"> </div>

      {/* <div className="about-footer">
        <span>//</span>
      </div> */}
    </div>
  )
}

export default About
