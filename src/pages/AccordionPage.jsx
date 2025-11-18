import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";

export default function AccordionPage() {
  return (
    <>
      <h1>아코디언</h1>
      <div className="accordionWrap">
        <Accordion type="multi">
          <AccordionItem value="item-1">
            <AccordionTrigger>아코디언 버튼1</AccordionTrigger>
            <AccordionContent>내용입니다.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>아코디언 버튼2</AccordionTrigger>
            <AccordionContent>내용입니다.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>아코디언 버튼3</AccordionTrigger>
            <AccordionContent>내용입니다.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>아코디언 버튼4</AccordionTrigger>
            <AccordionContent>내용입니다.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
