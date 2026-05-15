import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { ExternalLink, Github, ScrollText } from "lucide-react"

type ArticleAuthor = {
  name: string
  href?: string
  affiliation?: string
}

type ArticleLink = {
  href: string
  label: string
  kind?: "github" | "paper" | "external"
}

type TocItem = {
  id: string
  title: string
  depth?: 2 | 3
}

type HeroImage = {
  src: string
  alt: string
  width: number
  height: number
}

type DistillArticleProps = {
  title: string
  subtitle?: string
  published: string
  authors?: ArticleAuthor[]
  hero?: HeroImage
  links?: ArticleLink[]
  toc?: TocItem[]
  children: ReactNode
}

const defaultAuthors: ArticleAuthor[] = [
  {
    name: "Ludovico Comito",
    href: "https://ludocomito.dev/",
  },
]

function SiteHeader() {
  return (
    <header className="site-chrome">
      <Link href="/" className="site-mark">
        LC
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/">home</Link>
        <Link href="/blog" className="active">
          blog
        </Link>
        <Link
          href="https://drive.google.com/file/d/19IZZxzTEsonyKzqAG8KJJMjNe269vuor/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          cv
        </Link>
      </nav>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="https://www.linkedin.com/in/ludovico-comito/">linkedin</Link>
      <Link href="https://x.com/ludocomito">X</Link>
    </footer>
  )
}

function ArticleLinks({ links }: { links: ArticleLink[] }) {
  return (
    <span className="distill-link-list">
      {links.map((link) => {
        const Icon = link.kind === "github" ? Github : link.kind === "paper" ? ScrollText : ExternalLink

        return (
          <Link key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
            <Icon aria-hidden="true" />
            {link.label}
          </Link>
        )
      })}
    </span>
  )
}

export function DistillArticle({
  title,
  subtitle,
  published,
  authors = defaultAuthors,
  hero,
  links = [],
  children,
}: DistillArticleProps) {
  return (
    <div className="distill-shell">
      <SiteHeader />
      <main className="distill-page">
        <section className="distill-title distill-grid">
          <div className="l-page">
            <p className="distill-kicker">Project article</p>
            <h1>{title}</h1>
            {hero ? (
              <div className="distill-hero">
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  width={hero.width}
                  height={hero.height}
                  priority
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
            ) : null}
            {subtitle ? <p className="distill-subtitle">{subtitle}</p> : null}
          </div>
        </section>

        <section className="distill-byline distill-grid" aria-label="Article metadata">
          <div className="distill-byline-inner l-text">
            <div>
              <h2>Author</h2>
              {authors.map((author) => (
                <p key={author.name}>
                  {author.href ? (
                    <Link href={author.href} target="_blank" rel="noopener noreferrer">
                      {author.name}
                    </Link>
                  ) : (
                    author.name
                  )}
                  {author.affiliation ? <span> - {author.affiliation}</span> : null}
                </p>
              ))}
            </div>
            <div>
              <h2>Published</h2>
              <p>{published}</p>
            </div>
            {links.length > 0 ? (
              <div>
                <h2>Links</h2>
                <p>
                  <ArticleLinks links={links} />
                </p>
              </div>
            ) : null}
          </div>
        </section>

        <article className="distill-article distill-grid">
          {children}
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

type ArticleFigureProps = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  size?: "text" | "page" | "screen"
}

export function ArticleFigure({ src, alt, width, height, caption, size = "text" }: ArticleFigureProps) {
  return (
    <figure className={`distill-figure l-${size}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        sizes={
          size === "screen"
            ? "100vw"
            : size === "page"
              ? "(max-width: 768px) 100vw, 1100px"
              : "(max-width: 768px) 100vw, 720px"
        }
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

type ArticleVideoProps = {
  src: string
  title: string
  caption?: string
}

export function ArticleVideo({ src, title, caption }: ArticleVideoProps) {
  return (
    <figure className="distill-figure l-page">
      <div className="distill-video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
