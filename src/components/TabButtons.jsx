export default function TabButtons({ children, onSelect, isSelected }) {
    console.log("TabButton is rendered");
  
    return (
      <li>
        <button className={isSelected ? "active" : undefined} onClick={onSelect}>
          {children}
        </button>
      </li>
    );
  }
  