export const filterElements = (data, query) => {
  function traverse(node) {
    node.isShown = false;
    if (
      node.class.toString().toLowerCase().includes(query.toLowerCase()) ||
      node.id?.toLowerCase().includes(query.toLowerCase())
    ) {
      node.isShown = true;
    }
    if (node.children) {
      for (const child of node.children) {
        if (traverse(child)) {
          node.isShown = true;
        }
      }
    }

    return node.isShown;
  };

  data.forEach(item => {
    traverse(item);
  })

  return data;
};
