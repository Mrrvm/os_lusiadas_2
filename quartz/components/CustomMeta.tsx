import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const CustomMeta: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    return (
        <div class={classNames(displayClass, "custom-meta")}>
            {fileData.frontmatter?.bib && <div class="meta">Bib: {fileData.frontmatter.bib}</div>}
            {fileData.frontmatter?.link && (
                <div class="meta">
                    Link:{" "}
                    <a href={fileData.frontmatter.link.toString()} target="_blank" rel="noopener">
                        {fileData.frontmatter.link}
                    </a>
                </div>
            )}
        </div>
    )
}

CustomMeta.css = `
.custom-meta {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: var(--gray);
}
`

export default (() => CustomMeta) satisfies QuartzComponentConstructor