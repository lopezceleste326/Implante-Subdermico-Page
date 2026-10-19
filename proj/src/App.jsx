import { content as c, img } from './data/content.js'
import Reveal from './components/Reveal.jsx'

const D = ({ n, c }) => <img className={`deco ${c}`} src={img(n)} alt="" aria-hidden="true" loading="lazy" />
const Wrap = ({ children }) => <div className="deco-wrap" aria-hidden="true">{children}</div>

const nav = [['que-es', '¿Qué es?'], ['como-funciona', 'Cómo funciona'], ['efectos', 'Efectos'], ['colocacion', 'Colocación'], ['mitos', 'Mitos']]

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>
      <header className="top">
        <nav aria-label="Secciones">
          {nav.map(([id, l]) => <a key={id} href={`#${id}`}>{l}</a>)}
        </nav>
      </header>

      <main id="contenido">
        <section className="hero" aria-labelledby="h-titulo">
          <img className="deco d-iud" src={img('iud')} alt="" />
          <img className="deco d-pills" src={img('pills')} alt="" />
          <img className="deco d-splash" src={img('splash')} alt="" />
          <D n="arm" c="d-arm" /><D n="blister" c="d-blister" /><D n="syringe" c="d-syringe" /><D n="implant" c="d-implant" />
          <h1 id="h-titulo" className="display">{c.titulo}</h1>
          <p className="lead">{c.subtitulo}</p>
        </section>

        <Reveal as="section" id="que-es" className="sec narrow" aria-labelledby="h-que">
          <h2 id="h-que" className="display h2">¿Qué es?</h2>
          <p className="big">{c.queEs}</p>
          <figure className="frame round"><img src={img('implante')} alt="Dos dedos palpando la varilla del implante bajo la piel del brazo" loading="lazy" /></figure>
          <Wrap><D n="arm" c="side l b" /><D n="pills" c="side r t" /></Wrap>
        </Reveal>

        <section id="como-funciona" className="sec tint" aria-labelledby="h-fun">
          <h2 id="h-fun" className="display h2">¿Cómo funciona?</h2>
          <div className="grid3">
            {c.funciona.map((f) => (
              <Reveal as="article" key={f.t} className="item">
                <figure className="frame"><img src={img(f.i)} alt={f.alt} loading="lazy" /></figure>
                <p><strong className="u">{f.t}:</strong> {f.d}</p>
              </Reveal>
            ))}
          </div>
          <Wrap><D n="iud-outline" c="side r t" /></Wrap>
        </section>

        <Reveal as="section" id="efectos" className="sec split" aria-labelledby="h-ef">
          <div>
            <h2 id="h-ef" className="display h2">Efectos secundarios</h2>
            <ul className="checks">{c.efectos.map((e) => <li key={e}>{e}</li>)}</ul>
            <p className="note">{c.efectosNota}</p>
          </div>
          <div className="pair">
            <img src={img('acne')} alt="Persona mirándose al espejo con acné en el rostro" loading="lazy" />
            <img src={img('moods')} alt="Una misma persona expresando alegría, tristeza y enojo" loading="lazy" />
          </div>
          <Wrap><D n="calendar" c="side r t" /><D n="headache" c="side l b" /></Wrap>
        </Reveal>

        <section id="colocacion" className="sec tint split" aria-labelledby="h-col">
          <Reveal>
            <h2 id="h-col" className="display h2">¿Cómo se coloca y cuánto dura?</h2>
            {c.colocacion.map((p) => <p key={p} className="big">{p}</p>)}
          </Reveal>
          <Reveal><figure className="frame"><img src={img('colocacion')} alt="Profesional con guantes colocando el implante en el brazo con un aplicador" loading="lazy" /></figure></Reveal>
          <Wrap><D n="test" c="side l t wide" /><D n="pad" c="side r b" /><D n="syringe2" c="side l b" /></Wrap>
        </section>

        <Reveal as="section" className="sec narrow" aria-labelledby="h-dato">
          <img className="dato-img" src={img('dato')} alt="" aria-hidden="true" loading="lazy" />
        </Reveal>

        <section id="mitos" className="sec tint narrow" aria-labelledby="h-mit">
          <h2 id="h-mit" className="display h2">Mitos</h2>
          {c.mitos.map((x) => (
            <details key={x.m} className="mito">
              <summary>“{x.m}”</summary>
              <p><strong>FALSO.</strong> {x.r}</p>
            </details>
          ))}
          <Wrap><D n="tampon" c="side l t" /><D n="blister2" c="side r t" /><D n="octagon" c="side l b" /><D n="tampon2" c="side r b" /></Wrap>
        </section>

        <Reveal as="section" className="sec narrow center" aria-labelledby="h-mas">
          <h2 id="h-mas" className="display h2 sm">{c.masInfo}</h2>
          <a className="btn" href={c.url} target="_blank" rel="noopener noreferrer">{c.url.replace('https://', '')}</a>
          <Wrap><D n="iud" c="side r t" /><D n="pills" c="side l t" /><D n="spermicide" c="side r b" /><D n="arm" c="side l b" /></Wrap>
        </Reveal>
      </main>

      <footer><p>Información sobre el implante subdérmico. Ante cualquier duda, consultá con un profesional de salud.</p></footer>
    </>
  )
}
