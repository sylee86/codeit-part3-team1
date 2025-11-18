import { createContext, useContext, useState } from "react";
import styles from "./Accordion.module.css";

const AccordionContext = createContext();
const AccordionItemContext = createContext();

export function Accordion({ children, type }) {
  const [item, setItem] = useState(type === "single" ? null : new Set());

  return (
    <AccordionContext.Provider value={{ item, setItem, type }}>
      <div className={styles.accordion}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ children, value }) {
  const { item, type } = useContext(AccordionContext);
  const isOpen = type === "single" ? item === value : item.has(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={styles.accordionItem}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({ children }) {
  const { item, setItem, type } = useContext(AccordionContext);
  const { value, isOpen } = useContext(AccordionItemContext);

  const handleTrigger = () => {
    if (type === "single") {
      setItem((prev) => (prev === value ? null : value));
    } else {
      const newItem = new Set(item);
      if (!newItem.has(value)) {
        newItem.add(value);
      } else {
        newItem.delete(value);
      }
      setItem(newItem);
    }
  };
  return (
    <button
      onClick={handleTrigger}
      className={`${styles.accordionTrigger} ${isOpen ? "on" : ""}`}
    >
      {children}
    </button>
  );
}

export function AccordionContent({ children }) {
  const { isOpen } = useContext(AccordionItemContext);
  return isOpen && <div className="accordionContent">{children}</div>;
}
