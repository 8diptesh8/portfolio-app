const Title = ({ subTitle, title }) => {
  return (
    <div className="sectionHead text-center">
      <p>{subTitle}</p>
      <h1>{title}</h1>
    </div>
  )
}

export default Title;