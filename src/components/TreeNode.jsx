import React, { useState } from 'react';
import '../App.scss';

const TreeNode = ({ node, onOptionClick }) => {
  const [isAttributesVisible, setIsAttributesVisible] = useState(false);

  const handleClick = e => {
    e.stopPropagation();
    const targetElement = document.querySelector(node.selector);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      targetElement.classList.add('dom-el-highlighted');
      setTimeout(() => {
        targetElement.classList.remove('dom-el-highlighted');
      }, 2000);
    }
    onOptionClick();
  };

  const toggleAttributesVisibility = (e) => {
    e.stopPropagation();
    setIsAttributesVisible(!isAttributesVisible);
  };

  return (
    <>
      { node.isShown &&
        <div className="treeNodeWrap">
          <div className="treeNode">

            <div className="textHeadingWrap">
              <span>Tag: <strong>{ node.name.toLowerCase() }</strong></span>
              { (node.class || node.id) &&
                <button onClick={ toggleAttributesVisibility }>{ isAttributesVisible ? 'Hide Attributes' : 'Show Attributes' }</button>
              }
              <button onClick={ handleClick }>View Element</button>
            </div>
            { node.class && node.name !== 'svg' && isAttributesVisible && 
              <div className="domAttributes">Class(es): { node.class.toString() }</div> 
            }
            { node.id && node.name !== 'svg' && isAttributesVisible && 
              <div className="domAttributes">ID: { node.id.toString() }</div> 
            }
          </div>

          {node.children?.map((child, index) => (
            <TreeNode
              key={index}
              node={child}
              onOptionClick={onOptionClick}
            />
          ))}

        </div>
      }
    </>

  );
};

export default TreeNode;
