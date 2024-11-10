type BlockI = {
  tag: string
  content?: string
  style?: string
  attributes?: { [key: string]: string }[]
}

const BlockRenderer = ({ blocks }: { blocks: BlockI[] }) => {
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{
        __html: blocks
          .map((item) => {
            const { tag, content, style } = item

            if (tag === 'hr') {
              return `<hr class="${style}" />`
            }

            return `<${tag} class="${style}">${content}</${tag}>`
          })
          .join(''),
      }}
    />
  )
}

export default BlockRenderer
