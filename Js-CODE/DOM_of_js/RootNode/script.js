const rootNode=document.getRootNode();
//Root Node return a document object
console.log(rootNode)

// it return the node list  of child of root node
console.log(rootNode.childNodes)

// Now we can also assess the particular child through indexing because it return node list and we 
//know that node list is a array like object
const childNode=document.childNodes[1]
console.log(childNode)
