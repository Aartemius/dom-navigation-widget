import React, { useState } from "react";
import TreeNode from "./TreeNode.jsx";
import { getAllDomElements } from "../utils/getAllDomElements.js";
import { filterElements } from "../utils/filterElements.js";
import '../App.scss';

const DomTree = ({ onOptionClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const domTree = getAllDomElements();
  const elements = filterElements(domTree.children, searchQuery);

  if (!domTree) {
    return <div>Error: Body tag not found in the document.</div>;
  }

  return (
    <>
      <div className="treeWrap">
        <div
          className="closeBtn"
          onClick={ onOptionClick }
        >&times;</div>
        <h3>Search for elements</h3>
        <input 
          className="domSearchInput"
          type="text" 
          value={ searchQuery } 
          onChange={ e => setSearchQuery(e.target.value) } 
          placeholder="Enter class or ID of element"
        />
        <div className="domElementsContainer">
          {elements.length && elements.map((node, index) => (
            <TreeNode
              key={index + Date.now()}
              node={node}
              onOptionClick={ onOptionClick }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DomTree;
