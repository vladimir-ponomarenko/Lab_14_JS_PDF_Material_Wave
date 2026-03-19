import '../css/style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="page-wrap">
    <header class="page-header no-print">
      <div class="header-left">
        <h1 class="page-title">Резюме</h1>
        <p class="page-subtitle">Редактируйте текст прямо в карточках. Изменения сохраняются автоматически.</p>
      </div>
      <button class="btn ripple" id="downloadPdf" type="button">Скачать PDF</button>
    </header>

    <main class="page" id="resume">
      <section class="bento">
        <div class="card photo-card ripple">
          <div class="profile-photo" aria-label="Фото"></div>
        </div>

        <div class="card name-card ripple">
          <div class="muted editable" contenteditable="true" data-key="greeting">Привет, я</div>
          <div class="name-block">
            <div class="name editable" contenteditable="true" data-key="fullName">Пономаренко Владимир</div>
            <div class="role editable" contenteditable="true" data-key="role">Разработчик ПО / Сетевые технологии</div>
          </div>
        </div>

        <div class="card languages-card ripple">
          <div class="card-title editable" contenteditable="true" data-key="langTitle">Иностранные языки</div>
          <div class="languages">
            <div class="lang-row">
              <div class="lang-name editable" contenteditable="true" data-key="lang1">Английский</div>
              <div class="lang-bar">
                <span style="width: 88%"></span>
              </div>
            </div>
            <div class="lang-row">
              <div class="lang-name editable" contenteditable="true" data-key="lang2">Русский</div>
              <div class="lang-bar">
                <span style="width: 100%"></span>
              </div>
            </div>
            <div class="lang-row">
              <div class="lang-name editable" contenteditable="true" data-key="lang3">Немецкий</div>
              <div class="lang-bar">
                <span style="width: 40%"></span>
              </div>
            </div>
          </div>
        </div>

        <div class="card experience-card ripple">
          <div class="card-title editable" contenteditable="true" data-key="expTitle">Опыт работы</div>
          <div class="job-list">
            <article class="job featured ripple">
              <div class="job-top">
                <span class="job-date editable" contenteditable="true" data-key="job1Date">2022 — 2026</span>
                <span class="job-tag">настоящее</span>
              </div>
              <div class="job-content">
                <div class="job-info">
                  <div class="job-role editable" contenteditable="true" data-key="job1Role">СибГУТИ</div>
                  <div class="job-meta editable" contenteditable="true" data-key="job1Meta">Учебно-проектная практика</div>
                </div>
                <ul class="job-points editable" contenteditable="true" data-key="job1Points">
                  <li>Программирование на C/C++, основы ООП, структуры данных и алгоритмы.</li>
                  <li>Цифровая обработка сигналов, моделирование в Python/Matlab.</li>
                  <li>Git, GitLab, GitHub для командной разработки.</li>
                  <li>Практика с R и анализом данных.</li>
                </ul>
              </div>
            </article>

            <article class="job ripple">
              <div class="job-top">
                <span class="job-date editable" contenteditable="true" data-key="job2Date">2024 — 2026</span>
              </div>
              <div class="job-content">
                <div class="job-info">
                  <div class="job-role editable" contenteditable="true" data-key="job2Role">YADRO</div>
                  <div class="job-meta editable" contenteditable="true" data-key="job2Meta">Научно-образовательный центр</div>
                </div>
                <ul class="job-points editable" contenteditable="true" data-key="job2Points">
                  <li>Разработка модулей для абонентского терминала/БС сети 4G на базе open-source.</li>
                  <li>Настройка сетевого оборудования и лабораторных стендов.</li>
                </ul>
              </div>
            </article>

            <article class="job ripple">
              <div class="job-top">
                <span class="job-date editable" contenteditable="true" data-key="job3Date">2024</span>
              </div>
              <div class="job-content">
                <div class="job-info">
                  <div class="job-role editable" contenteditable="true" data-key="job3Role">Eltex</div>
                  <div class="job-meta editable" contenteditable="true" data-key="job3Meta">Факультатив СибГУТИ</div>
                </div>
                <ul class="job-points editable" contenteditable="true" data-key="job3Points">
                  <li>Основы сетевых технологий и эксплуатация инфраструктуры.</li>
                  <li>Получен сертификат по итогам курса.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>

        <aside class="card tools-card ripple">
          <div class="card-title editable" contenteditable="true" data-key="toolsTitle">Навыки</div>
          <div class="tools-grid">
            <span class="tool-chip editable" contenteditable="true" data-key="tool1">C</span>
            <span class="tool-chip editable" contenteditable="true" data-key="tool2">C++</span>
            <span class="tool-chip editable" contenteditable="true" data-key="tool3">Rust</span>
            <span class="tool-chip editable" contenteditable="true" data-key="tool4">Go</span>
            <span class="tool-chip editable" contenteditable="true" data-key="tool5">Kotlin Android</span>
            <span class="tool-chip editable" contenteditable="true" data-key="tool6">Linux</span>
            <span class="tool-chip editable" contenteditable="true" data-key="tool7">Git</span>
            <span class="tool-chip editable" contenteditable="true" data-key="tool8">LTE / 5G NR</span>
          </div>
        </aside>

        <section class="card education-card ripple">
          <div class="card-title editable" contenteditable="true" data-key="eduTitle">Образование</div>
          <div class="edu-columns">
            <article class="edu-card featured ripple">
              <div class="edu-top">
                <span class="edu-year editable" contenteditable="true" data-key="edu1Year">2022 — 2026</span>
                <span class="edu-like">★</span>
              </div>
              <div class="edu-content">
                <div class="edu-name editable" contenteditable="true" data-key="edu1Name">СибГУТИ</div>
                <div class="edu-tags editable" contenteditable="true" data-key="edu1Tags">Факультет ИВТ · Бакалавриат · ПО мобильных систем</div>
                <div class="edu-school editable" contenteditable="true" data-key="edu1School">Сибирский государственный университет телекоммуникаций и информатики</div>
              </div>
            </article>

            <article class="edu-card ripple">
              <div class="edu-top">
                <span class="edu-year editable" contenteditable="true" data-key="edu2Year">2024 — 2026</span>
                <span class="edu-like">★</span>
              </div>
              <div class="edu-content">
                <div class="edu-name editable" contenteditable="true" data-key="edu2Name">YADRO</div>
                <div class="edu-tags editable" contenteditable="true" data-key="edu2Tags">Зимние школы · «Алгоритмы»</div>
                <div class="edu-school editable" contenteditable="true" data-key="edu2School">Научно-образовательный центр</div>
              </div>
            </article>
          </div>
        </section>

        <section class="extra">
          <div class="card interests-card ripple">
            <div class="card-title editable" contenteditable="true" data-key="interestTitle">Сфера интересов</div>
            <div class="chips">
              <span class="chip editable" contenteditable="true" data-key="interest1">C и C++</span>
              <span class="chip editable" contenteditable="true" data-key="interest1">Golang</span>
              <span class="chip editable" contenteditable="true" data-key="interest2">Linux</span>
              <span class="chip editable" contenteditable="true" data-key="interest3">Сети ЭВМ</span>
              <span class="chip editable" contenteditable="true" data-key="interest4">LTE / 5G NR</span>
              <span class="chip editable" contenteditable="true" data-key="interest5">IMS / CSFB</span>
              <span class="chip editable" contenteditable="true" data-key="interest5">NMS</span>
              <span class="chip editable" contenteditable="true" data-key="interest6">ЦОС</span>
              <span class="chip editable" contenteditable="true" data-key="interest7">Встроенные системы</span>
              <span class="chip editable" contenteditable="true" data-key="interest8">Оптимизация</span>
            </div>
          </div>

          <div class="card contact-card ripple">
            <div class="contact-title editable" contenteditable="true" data-key="contactTitle">Готов к сотрудничеству и проектам</div>
            <div class="contact-line editable" contenteditable="true" data-key="contactPhone">+7 (909) 532 67 57</div>
            <div class="contact-line editable" contenteditable="true" data-key="contactEmail">vova102204@gmail.com</div>
            <div class="contact-line editable" contenteditable="true" data-key="contactGithub">github.com/vladimir-ponomarenko</div>
          </div>
        </section>
      </section>
    </main>
  </div>
`

const editableNodes = Array.from(document.querySelectorAll('[data-key]'))
const storageKey = 'resume-content-v1'
const saved = JSON.parse(localStorage.getItem(storageKey) || '{}')

editableNodes.forEach((node) => {
  const key = node.dataset.key
  if (saved[key]) {
    node.innerHTML = saved[key]
  }

  node.addEventListener('input', () => {
    node.classList.remove('edited')
    // trigger reflow for animation restart
    void node.offsetWidth
    node.classList.add('edited')
    saved[key] = node.innerHTML
    localStorage.setItem(storageKey, JSON.stringify(saved))
  })
})

const downloadBtn = document.querySelector('#downloadPdf')
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    window.print()
  })
}

const rippleTargets = document.querySelectorAll('.ripple')

rippleTargets.forEach((el) => {
  el.addEventListener('pointerdown', (event) => {
    const rect = el.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const wave = document.createElement('span')
    wave.className = 'ripple-wave'
    wave.style.width = `${size}px`
    wave.style.height = `${size}px`
    wave.style.left = `${event.clientX - rect.left - size / 2}px`
    wave.style.top = `${event.clientY - rect.top - size / 2}px`
    el.appendChild(wave)
    wave.addEventListener('animationend', () => wave.remove())
  })
})
