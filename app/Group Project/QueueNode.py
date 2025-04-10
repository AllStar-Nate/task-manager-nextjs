class QueueNode: #Node Class to be used for MedQueue
# @class QueueNode
# @brief A node class to be used in a queue structure (e.g., MedQueue).
# 
# This class represents a single node containing data and a reference to the next node.
    def __init__(self, data):
        # @brief Constructor to initialize the node with data.
        # @param data The data to be stored in the node.
        self.data = data
        self.next = None
        
    def set_data(self, data):
        # @brief Sets the data of the node.
        # @param data The new data to be assigned.
        self.data = data
  
    def get_data(self):
        # @brief Retrieves the data of stored in the node.
        # @return The data of the node.
        return self.data
    
    def set_next(self, newnode):
        # @brief Sets the reference to next node.
        # @param newnode The node to set as the next node.
        self.next = newnode

    def get_next(self):
        # @brief Gets the next node reference. 
        # @return The next node
        return self.next
    
    def __str__(self):
        # @brief Returns a string representation of the node.
        # @return A string containing the node's new data.
        return f"{self.data})"