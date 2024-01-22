import React, { useState } from "react";
import DomTree from "./components/DomTree.jsx";
import TreeToggler from "./components/TreeToggler.jsx";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div className="embed-dom-modal">
      {isModalVisible ? (
        <DomTree onOptionClick={closeModal} />
      ) : (
        <TreeToggler onClick={openModal} />
      )}
    </div>
  );
};

export default App;
