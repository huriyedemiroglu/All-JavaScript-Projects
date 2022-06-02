function MenuItem({ image, definition }) {
  return (
    <div className="menu-item">
      <img className="menu-item-image" src={image} />
      <p className="menu-item-text">{definition}</p>
    </div>
  )
}

export default MenuItem