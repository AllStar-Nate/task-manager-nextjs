from TreeNode import TreeNode
from Pet import Pet

class KennelTree: #Binary Search Tree that stores the Pet objects
   
    """
    @class KennelTree
    @brief A binary search tree to store Pet objects based on their kennel number.

    @details The KennelTree class maintains a binary search tree structure
             where each node contains a Pet object. The tree is sorted based
             on each Pet's kennel number to allow efficient insertion, search,
             and traversal.
    """
   
    def __init__(self):
        """
        @brief Initializes an empty KennelTree with root set to None
        """
        self.root = None

    def insert(self, data):
        """
        @brief Inserts a Pet object into the binary search tree.
        @param data The Pet object to be inserted.
        @details The insert method places the Pet object in the correct
                 position in the binary search tree based on its kennel number.
        """
        def _insert(node, data):
            if node is None:
                return TreeNode(data)  # Create a new TreeNode if the current node is None
            if data.kennelNum < node.data.kennelNum: #sorts the tree based on Pet kennel Number
                node.lChild = _insert(node.lChild, data)  # Recur to the left child
            else:
                node.rChild = _insert(node.rChild, data)  # Recur to the right child
            return node

        self.root = _insert(self.root, data)

    def search(self, root, key): 
        """
        @brief Searches for a Pet object in the binary search tree by kennel number.
        @param root The current node in the binary search tree.
        @param key The kennel number to search for.
        @return The TreeNode containing the Pet object if found, otherwise None.
        @details The search method traverses the binary search tree to find
                 a Pet object with the specified kennel number.
        """
        if root is None or root.data == key:
            return root
        if root.data < key:
            return self.search(root.rChild,key)

        return self.search(root.lChild,key)

    def inorder_traversal(self): 
        """
        @brief Performs an in-order traversal of the binary search tree.
        @return A list of Pet objects in sorted order by kennel number.
        @details The inorder_traversal method visits each node in the binary
                 search tree in ascending order of kennel number and collects
                 the Pet objects into a list.
        """
        result = []

        def _inorder_traversal(node):
            if node:
                _inorder_traversal(node.get_lChild())
                result.append(node.get_data())
                _inorder_traversal(node.get_rChild())

        _inorder_traversal(self.root)
        return result