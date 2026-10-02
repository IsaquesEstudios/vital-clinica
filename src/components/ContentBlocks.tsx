type Block = { type: string; text?: string; level?: number | null; items?: string[]; ordered?: boolean; src?: string; alt?: string; rows?: string[][] };
export function ContentBlocks({ blocks }: { blocks: Block[] }) {
 return <div className="rich-content">{blocks.map((block,index)=>{
  if(block.type==='image'&&block.src) return <figure key={`${block.src}-${index}`}><img src={block.src} alt={block.alt || "Imagem do conteúdo"}/></figure>;
  if(block.type==='heading') return block.level===2?<h2 key={index}>{block.text}</h2>:<h3 key={index}>{block.text}</h3>;
  if(block.type==='list'&&block.items){const items=block.items.map((x,i)=><li key={i}>{x}</li>); return block.ordered?<ol key={index}>{items}</ol>:<ul key={index}>{items}</ul>}
  if(block.type==='quote') return <blockquote key={index}>{block.text}</blockquote>;
  if(block.type==='table'&&block.rows){const [head,...body]=block.rows; return <table key={index}><thead><tr>{head.map((c,i)=><th key={i}>{c}</th>)}</tr></thead><tbody>{body.map((r,ri)=><tr key={ri}>{r.map((c,i)=><td key={i}>{c}</td>)}</tr>)}</tbody></table>}
  return <p key={index}>{block.text}</p>;
 })}</div>
}
