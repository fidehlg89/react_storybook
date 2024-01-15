import styled from 'styled-components';

const AccordionSection = styled.section`
  width: 80%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const AccordionDetails = styled.details`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const AccordionSummary = styled.summary`
  background-color: #f0f0f0;
  padding: 10px;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  padding: 10px;
`;

const Accordion = () => {
  return (
    <AccordionSection>
      <AccordionDetails name="info">
        <AccordionSummary>Hola Mundo</AccordionSummary>
        <AccordionContent>
          <p>Este es el texto de Hola Mundo content</p>
        </AccordionContent>
      </AccordionDetails>
      <AccordionDetails name="info">
        <AccordionSummary>Accordion Title</AccordionSummary>
        <AccordionContent>
          <p>Este es el título del artículo</p>
        </AccordionContent>
      </AccordionDetails>
      <AccordionDetails name="info">
        <AccordionSummary>Otra Sección</AccordionSummary>
        <AccordionContent>
          <p>Este es otro item de carousel</p>
        </AccordionContent>
      </AccordionDetails>
    </AccordionSection>
  );
};

export default Accordion;
