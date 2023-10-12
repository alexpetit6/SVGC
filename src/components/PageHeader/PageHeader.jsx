import './PageHeader.css';

export default function PageHeader({ img, text }) {
  return (
    <div className="header-img">
      <img src={img}/>
      <h1 className='header-text'>{text}</h1>
    </div>
  )
}