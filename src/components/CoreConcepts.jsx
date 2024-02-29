import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';
import Section from './Section.jsx';

export default function CoreConcepts() {
  return (
    <Section title='Core concepts' id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item) => {
          return <CoreConcept key={item.title} {...item}></CoreConcept>;
        })}
        {/* <CoreConcept
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
              image={componentImg}
            /> */}
        {/* <CoreConcept {...CORE_CONCEPTS[1]} /> */}
      </ul>
    </Section>
  );
}
