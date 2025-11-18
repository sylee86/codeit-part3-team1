export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "2px 4px" }}>
      {/* children - ReactNode 타입 */}
      {children}
    </button>
  );
}
