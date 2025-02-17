import './CourseCard.css'

function CourseCard({
  img,
  tags,
  title,
  startPrice,
  types
}) {
  return ( 
  
  <div className="CourseCard">
  <div className="cover">
      <img  
        alt="" src={img}  />
  </div>
  <div className="info">
      <ul className="tags">
        {tags.map((item) => (
          <li className="tag">(item)</li> ))}
      </ul>
      <h4 className="name">{title}</h4>
      <p className="prices">{startPrice.toLocaleString()}원부터</p>
      <ul className="types">
        {types.map((item)=> (
                 <li className ="type">
                  {item}
            </li>
          ))}
        </ul>     
      </div>
    </div>

);

export default CourseCard;