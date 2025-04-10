class TreeNode: 
    """
    @class TreeNode
    @brief A class representing a node in a binary search tree.
    
    @details This class is used to store data and references to left and right children.
    """
    
    def __init__(self, data):
        """
        @brief Constructor to initialize a TreeNode with data.
        @param data The data to be stored in the node.
        @details The constructor initializes the node's data and sets its left and right children to None.
        """
        self.data = data
        self.lChild = None
        self.rChild = None

    def get_data(self):
        """
        @brief Retrieves the data stored in the node.
        @return The data of the node.
        @details The get_data method returns the value stored in the node.
        """
        return self.data 
    
    def set_data(self, data):
        """
        @brief Sets the data of the node.
        @param data The new data to be assigned.
        @details The set_data method updates the value stored in the node.
        @return None
        """
        self.data = data   
    
    def set_lChild(self, node):
        """
        @brief Sets the left child of the node.
        @param node The node to set as the left child.
        @details The set_lChild method updates the left child reference of the current node.
        @return None
        """
        self.lChild = node
        
    def set_rChild(self, node):
        """
        @brief Sets the right child of the node.
        @param node The node to set as the right child.
        @details The set_rChild method updates the right child reference of the current node.
        @return None
        """
        self.rChild = node
            
    def get_lChild(self):
        """
        @brief Retrieves the left child of the node.
        @return The left child node.
        @details The get_lChild method returns the reference to the left child of the current node.
        """
        return self.lChild    

    def get_rChild(self):
        """
        @brief Retrieves the right child of the node.
        @return The right child node.
        @details The get_rChild method returns the reference to the right child of the current node.
        """
        return self.rChild