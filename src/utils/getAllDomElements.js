export function getAllDomElements(rootNode = document) {
  const excludedTags = ['SCRIPT', 'STYLE', 'HEAD', 'path'];
  const findBody = node => {
    if (node.nodeName === 'BODY') {
      return node;
    }

    for (let i = 0; i < node.childNodes.length; i++) {
      const foundBody = findBody(node.childNodes[i]);
      if (foundBody) {
        return foundBody;
      }
    }

    return null;
  }

  const bodyNode = findBody(rootNode);

  if (!bodyNode) {
    console.error("Body tag not found in the document.");
    return null;
  }

  const getSelector = node => {
    const parts = [];
    while (node.parentNode) {
      if (node.id) {
        parts.unshift(`#${node.id}`);
        break;
      } else {
        let sibling = node;
        let nth = 1;

        while (sibling.previousSibling) {
          sibling = sibling.previousSibling;
          if (sibling.nodeType === Node.ELEMENT_NODE) {
            nth++;
          }
        }

        parts.unshift(`${node.nodeName.toLowerCase()}:nth-child(${nth})`);
        node = node.parentNode;
      }
    }

    return parts.join(' > ');
  }

  const traverse = node => {
    const selector = getSelector(node);

    const result = {
      type: node.nodeType,
      name: node.nodeName,
      class: node.className,
      text: node.textContent || undefined,
      id: node.id || null,
      selector: selector,
      children: []
    };
    
    for (let i = 0; i < node.childNodes.length; i++) {
      const childNode = node.childNodes[i];

      if (
        childNode.nodeType === Node.ELEMENT_NODE && 
        !excludedTags.includes(childNode.nodeName) &&
        node.id !== 'dom-navigation-container' && 
        childNode.id !== 'dom-navigation-container'
      ) {
        result.children.push(traverse(childNode));
      }
    }

    return result;
  }

  return traverse(bodyNode);
}


