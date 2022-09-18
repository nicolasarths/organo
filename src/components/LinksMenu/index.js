import "./LinksMenu.css";

const LinksMenu = ({items}) => {
  return (
    <div className="links-menu">
      {items.map(item => (
        <a href={item.href} key={item.name}>
            <img src={item.src} alt={`${item.name} icon`}/>
        </a>
      ))}
    </div>
  );
};

export default LinksMenu;
