import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const CustomMeta: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    return (
        <>
            <div class={classNames(displayClass, "custom-meta")}>
                {fileData.frontmatter?.bib && <div>{fileData.frontmatter.bib}</div>}
                {fileData.frontmatter?.link && (
                    <div class="meta">
                        <a href={fileData.frontmatter.link.toString()} target="_blank" rel="noopener">
                            {fileData.frontmatter.link}
                        </a>
                    </div>
                )}
            </div>
        </>
    )
}

CustomMeta.css = `
.custom-meta {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: var(--gray);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--lightgray);
}
`

export default (() => CustomMeta) satisfies QuartzComponentConstructor