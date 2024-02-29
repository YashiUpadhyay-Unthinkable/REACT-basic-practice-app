export default function TabButton(prop) {
  return (
    <li>
      <button
        className={prop.isSelected ? 'active' : ''}
        onClick={prop.onClick}
      >
        {prop.children}
      </button>
    </li>
  );
}
