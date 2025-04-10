from QueueNode import QueueNode

class MedQueue: #Queue Class that store the Kennel Number of Pets that need medication
# @class MedQueue
# @brief Queue class to store the kennel numbers of pets that need medication. 
#
# This queue uses a linked list structure with QueueNode instances. 
    def __init__(self):
        # @brief Initializes an empty queue.
        self.front = self.rear = None
            
    def isEmpty(self):
        # @brief Checks if the queue is empty. 
        # @return True if the queue is empty, False otherwise. 
        return self.front == None
        
    def enqueue(self, data): #Inserts pet info to the back of the queue
        # @brief Inserts pet info (kennel number) to the back of the queue.
        # @param data The kennel number to enqueue. 
        temp = QueueNode(data)
            
        if self.rear == None:
            self.front = self.rear = temp
            return
        
        self.rear.next = temp
        self.rear = temp
            
    def deQueue(self): #Removes pet info from the front of the list
        # @brief Removes pet info from the front of the queue. 
        # @return The kennel number that was dequeued, or none if the queue was empty
        if self.isEmpty():
            return None
            
        temp = self.front
        self.front = temp.next
            
        if(self.front == None):
            self.rear = None
        return temp.data
    
                