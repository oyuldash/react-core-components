import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButtons from "./components/TabButtons";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  console.log("App is rendered");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((itemConcept) => {
              return <CoreConcepts key={itemConcept.title} {...itemConcept} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              {" "}
              Props
            </TabButtons>
            <TabButtons
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButtons>
          </menu>

          {!selectedTopic ? (
            <p>Pelease select the topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
