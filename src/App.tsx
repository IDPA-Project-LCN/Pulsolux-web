import { useState, type ReactNode } from 'react'

// Angaben zur App-Version (aus pubspec.yaml der App: version 1.0.0+1)
const APP_VERSION = '1.0.0'
const APP_BUILD = '1'
const RELEASE_DATE = '12.11.2026'
const APK_URL = '/pulsolux.apk'
const APK_SIZE = 'ca. 18 MB'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Screenshots />
        <InstallAndroid />
        <IPhone />
        <MeasureTips />
        <Notes />
      </main>
      <Footer />
    </div>
  )
}

/* ---------- Bausteine ---------- */

function Logo({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#1a0b0d" />
      <path
        d="M8 34h12l5-12 8 24 6-16 4 4h13"
        fill="none"
        stroke="#ef4444"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-pulse">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}

function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-line bg-panel p-6 ${className}`}>{children}</div>
  )
}

function DownloadButton({ large = false }: { large?: boolean }) {
  return (
    <a
      href={APK_URL}
      download="pulsolux.apk"
      className={`group inline-flex items-center justify-center gap-3 rounded-2xl bg-pulse font-semibold text-white shadow-[0_10px_40px_-10px_rgba(239,68,68,0.7)] transition hover:bg-red-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-400/50 active:scale-[0.98] ${
        large ? 'w-full px-7 py-4 text-lg sm:w-auto' : 'px-4 py-2 text-sm'
      }`}
    >
      <svg viewBox="0 0 24 24" className={large ? 'h-6 w-6' : 'h-4 w-4'} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14" />
      </svg>
      {large ? 'App für Android herunterladen' : 'Download'}
    </a>
  )
}

/* ---------- Kopfzeile ---------- */

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-bold text-white">
          <Logo />
          Pulsolux
        </a>
        <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
          <a href="#funktion" className="hover:text-white">So funktioniert es</a>
          <a href="#installation" className="hover:text-white">Installation</a>
          <a href="#messen" className="hover:text-white">Richtig messen</a>
          <a href="#hinweise" className="hover:text-white">Hinweise</a>
        </nav>
        <DownloadButton />
      </div>
    </header>
  )
}

/* ---------- 1. Startbereich ---------- */

function Hero() {
  return (
    <section id="top" className="relative px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
      {/* roter Schein im Hintergrund */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(239,68,68,0.25),transparent_65%)]" />
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-pulse" />
            IDPA-Projekt · Gerätetest
          </span>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            Pulso<span className="text-pulse">lux</span>
          </h1>
          <p className="mt-4 text-xl text-zinc-300 sm:text-2xl">
            Puls messen mit der Smartphone-Kamera
          </p>
          <p className="mt-4 max-w-md text-zinc-400">
            Finger auf die Kamera legen, ruhig halten, fertig. Danke, dass du beim Test mitmachst!
          </p>
          <div className="mt-8">
            <DownloadButton large />
            <p className="mt-3 text-sm text-zinc-500">
              Version {APP_VERSION} (Build {APP_BUILD}) · {RELEASE_DATE} · APK, {APK_SIZE} · Android
              (64-Bit)
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              iPhone? <a href="#iphone" className="text-zinc-300 underline underline-offset-4 hover:text-white">Hier lesen</a>
            </p>
          </div>
        </div>
        <PulseVisual />
      </div>
    </section>
  )
}

function PulseVisual() {
  return (
    <div className="relative mx-auto flex aspect-square w-64 items-center justify-center sm:w-80" aria-hidden="true">
      <div className="absolute inset-0 rounded-full border border-line" />
      <div className="absolute inset-6 rounded-full border border-line/70" />
      <div className="animate-ring absolute h-28 w-28 rounded-full bg-pulse/40" />
      <div className="animate-beat h-28 w-28 rounded-full bg-[radial-gradient(circle_at_35%_30%,#fca5a5,#ef4444_45%,#7f1d1d)] shadow-[0_0_80px_10px_rgba(239,68,68,0.45)]" />
      <div className="absolute bottom-3 text-center">
        <div className="text-3xl font-bold text-white tabular-nums">62</div>
        <div className="text-xs uppercase tracking-widest text-zinc-500">bpm</div>
      </div>
    </div>
  )
}

/* ---------- 2. So funktioniert es ---------- */

function HowItWorks() {
  const steps = [
    { title: 'Licht', text: 'Der Blitz oder eine Taschenlampe beleuchtet deine Fingerkuppe.' },
    { title: 'Blut', text: 'Bei jedem Herzschlag fliesst kurz mehr Blut in den Finger. Das Bild wird minimal dunkler.' },
    { title: 'Puls', text: 'Die App misst diese kleine Schwankung im Rotkanal und berechnet daraus deinen Puls.' },
  ]
  return (
    <Section id="funktion" eyebrow="Photoplethysmographie" title="So funktioniert es">
      <p className="max-w-2xl text-lg text-zinc-300">
        Pulsolux misst über Kamera und Licht, wie sich die Blutmenge in deinem Finger mit jedem
        Herzschlag ändert. Dieses Verfahren heisst Photoplethysmographie (PPG). Aus dem
        regelmässigen Hell-Dunkel-Muster berechnet die App die Herzfrequenz. Ein Zusatzgerät
        brauchst du nicht.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {steps.map((s, i) => (
          <Card key={s.title}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pulse/15 font-bold text-pulse">
              {i + 1}
            </div>
            <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
            <p className="mt-1 text-zinc-400">{s.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}

/* ---------- Screenshots (mit Platzhalter) ---------- */

const SCREENSHOTS = [
  { src: '/screenshots/1.png', label: 'Startbildschirm', mock: 'home' },
  { src: '/screenshots/2.png', label: 'Messung', mock: 'measure' },
  { src: '/screenshots/3.png', label: 'Ergebnis', mock: 'result' },
] as const

function Screenshots() {
  return (
    <section aria-label="Screenshots" className="px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-5xl snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:justify-center">
        {SCREENSHOTS.map((s) => (
          <Phone key={s.src} {...s} />
        ))}
      </div>
    </section>
  )
}

function Phone({ src, label, mock }: (typeof SCREENSHOTS)[number]) {
  // Wenn das Bild fehlt, wird eine gezeichnete Vorschau angezeigt
  const [missing, setMissing] = useState(false)
  return (
    <figure className="w-48 shrink-0 snap-center sm:w-56">
      <div className="aspect-[9/19.5] overflow-hidden rounded-[2rem] border-[6px] border-zinc-800 bg-black shadow-2xl">
        {missing ? (
          <MockScreen kind={mock} />
        ) : (
          <img src={src} alt={`Screenshot: ${label}`} loading="lazy" onError={() => setMissing(true)} className="h-full w-full object-cover" />
        )}
      </div>
      <figcaption className="mt-3 text-center text-sm text-zinc-400">{label}</figcaption>
    </figure>
  )
}

function MockScreen({ kind }: { kind: 'home' | 'measure' | 'result' }) {
  return (
    <div className="flex h-full flex-col items-center bg-gradient-to-b from-zinc-950 to-black px-4 pt-6 text-center" aria-hidden="true">
      <div className="flex w-full items-center justify-between text-[10px] text-zinc-400">
        <span className="font-semibold text-white">Pulsolux</span>
        <span className="h-4 w-4 rounded-full border border-zinc-600" />
      </div>
      {kind === 'home' && (
        <>
          <div className="mt-14 flex h-24 w-24 items-center justify-center rounded-full bg-pulse text-sm font-semibold text-white shadow-[0_0_40px_rgba(239,68,68,0.5)]">
            Measure
          </div>
          <p className="mt-4 text-[10px] text-zinc-500">Last: 62 bpm</p>
          <div className="mt-6 flex w-full gap-1 rounded-full bg-zinc-900 p-1 text-[9px]">
            <span className="flex-1 rounded-full bg-zinc-700 py-1 text-white">Flash</span>
            <span className="flex-1 py-1 text-zinc-500">External</span>
          </div>
        </>
      )}
      {kind === 'measure' && (
        <>
          <div className="relative mt-12 flex h-28 w-28 items-center justify-center rounded-full border-4 border-pulse/30">
            <div className="absolute inset-[-4px] rounded-full border-4 border-transparent border-r-pulse border-t-pulse" />
            <div className="animate-beat h-10 w-10 rounded-full bg-pulse" />
          </div>
          <p className="mt-5 text-sm font-semibold text-white">Measuring</p>
          <p className="mt-1 text-[10px] text-zinc-500">Hold still</p>
        </>
      )}
      {kind === 'result' && (
        <>
          <p className="mt-16 text-5xl font-bold text-white tabular-nums">62</p>
          <p className="text-xs text-zinc-400">bpm</p>
          <p className="mt-3 text-[9px] text-zinc-500">Signal quality: good</p>
          <div className="mt-8 w-full space-y-2 text-[10px]">
            <div className="rounded-full bg-pulse py-1.5 text-white">Save</div>
            <div className="rounded-full border border-zinc-700 py-1.5 text-zinc-300">Measure again</div>
          </div>
        </>
      )}
    </div>
  )
}

/* ---------- 3. Installation Android ---------- */

function InstallAndroid() {
  const steps = [
    { title: 'APK herunterladen', text: 'Tippe oben auf «App für Android herunterladen». Die Datei ist ca. 18 MB gross.' },
    { title: 'Unbekannte Quellen erlauben', text: 'Öffne die Datei. Android fragt nach der Erlaubnis zur «Installation aus unbekannten Quellen» – für den Browser erlauben.' },
    { title: 'Installieren', text: 'Tippe auf «Installieren». Falls Google Play Protect warnt: «Trotzdem installieren» wählen. Die App ist nicht im Play Store, weil sie ein Schulprojekt ist.' },
    { title: 'App öffnen', text: 'Öffne Pulsolux und erlaube den Zugriff auf die Kamera. Ohne Kamera kann die App nicht messen.' },
  ]
  return (
    <Section id="installation" eyebrow="Android" title="Installation Schritt für Schritt">
      <ol className="grid gap-4 md:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.title}>
            <Card className="flex h-full gap-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pulse font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-zinc-400">{s.text}</p>
              </div>
            </Card>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <DownloadButton large />
        <span className="text-sm text-zinc-500">Version {APP_VERSION} vom {RELEASE_DATE}</span>
      </div>
    </Section>
  )
}

/* ---------- 4. iPhone ---------- */

function IPhone() {
  return (
    <Section id="iphone" eyebrow="iOS" title="Du hast ein iPhone?">
      <Card className="max-w-3xl">
        <p className="text-zinc-300">
          Apple erlaubt keine Installation über eine Webseite ohne kostenpflichtiges
          Entwicklerkonto. Die App wird deshalb direkt über einen Mac auf dein iPhone installiert.
        </p>
        <p className="mt-4 text-zinc-300">
          Wer ein iPhone hat und mitmachen möchte, meldet sich bei{' '}
          <strong className="text-white">Cat Tuong Nguyen</strong>.
        </p>
      </Card>
    </Section>
  )
}

/* ---------- 5. So misst du richtig ---------- */

function MeasureTips() {
  const tips = ['Ruhig sitzen', 'Finger nicht drücken', 'Nicht bewegen', 'Nicht reden']
  return (
    <Section id="messen" eyebrow="Anleitung" title="So misst du richtig">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <ModeBadge>Modus «Flash»</ModeBadge>
          <p className="mt-4 text-zinc-300">
            Lege deine Fingerkuppe locker auf Kamera und Blitz. Kamera und Blitz müssen ganz
            abgedeckt sein.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Der Blitz kann warm werden. Wird es zu warm, Finger kurz abheben.
          </p>
        </Card>
        <Card>
          <ModeBadge>Modus «External flashlight»</ModeBadge>
          <ul className="mt-4 space-y-2 text-zinc-300">
            <li>Taschenlampe eines zweiten Handys auf <strong className="text-white">tiefster Stufe</strong> einschalten.</li>
            <li>Dieses Handy mit dem Bildschirm nach unten hinlegen.</li>
            <li>Fingerkuppe auf die Lampe, Fingernagel auf die Kamera des messenden Handys.</li>
          </ul>
        </Card>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {tips.map((t) => (
          <div key={t} className="rounded-xl border border-line bg-panel/60 px-4 py-3 text-center text-sm font-medium text-zinc-200">
            {t}
          </div>
        ))}
      </div>
    </Section>
  )
}

function ModeBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-pulse/15 px-3 py-1 text-sm font-semibold text-red-300">
      {children}
    </span>
  )
}

/* ---------- 6. Hinweise ---------- */

function Notes() {
  return (
    <Section id="hinweise" eyebrow="Wichtig" title="Hinweise">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="font-semibold text-white">Kein Medizinprodukt</h3>
          <p className="mt-2 text-zinc-400">
            Pulsolux ist ein Schulprojekt. Die App zeigt nur die gemessene Zahl und bewertet
            deinen Puls nicht. Bei Beschwerden geh bitte zum Arzt.
          </p>
        </Card>
        <Card>
          <h3 className="font-semibold text-white">Deine Daten bleiben bei dir</h3>
          <p className="mt-2 text-zinc-400">
            Alle Daten bleiben auf deinem Handy. Die App hat keinen Internetzugang und kann
            nichts verschicken.
          </p>
        </Card>
      </div>
    </Section>
  )
}

/* ---------- 7. Fusszeile ---------- */

function Footer() {
  return (
    <footer className="border-t border-line px-4 py-10 text-sm text-zinc-500 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:justify-between">
        <div>
          <div className="flex items-center gap-2 font-semibold text-zinc-300">
            <Logo className="h-5 w-5" /> Pulsolux
          </div>
          <p className="mt-2">Nilton Barroso Carvalho, Cat Tuong Nguyen, Luis Rosado</p>
          <p>IDPA Gruppe 6 · IM24a · bwd Bern · Schuljahr 2026/27</p>
        </div>
        <p className="sm:max-w-xs sm:text-right">Webseite mit Unterstützung von Claude Code erstellt.</p>
      </div>
    </footer>
  )
}
