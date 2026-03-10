import { socials } from "./data"

const Social = () => {
  return (
    socials.map((social) => {
      const { id,url, img, text } = social;
     return (
    <>
      <a key={id} href={url} target="_blank" rel="noopener noreferrer" className={text}>
        <img src={img} alt={text} />
      </a>
    </>
    )
  })
  
   ) 
}

export default Social;