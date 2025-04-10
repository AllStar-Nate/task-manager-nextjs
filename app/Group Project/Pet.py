## @class Pet
# @brief A class to represent a pet in a kennel management system.
#
# The pet class stores data such as the pet's ID, name, kennel number, feeding schedule,
# and medication status. It provides methods to set and get these attributes.
class Pet: 
    ## @brief Constructor to initialize a pet object.
    # @param PetID The unique identifier for the pet.
    # @param name The name of the pet.
    # @param kennelNum The kennel number where the pet is housed.
    # @param numFeeds The number of times the pet should be fed.
    # @param timesFed The times at which the pet has been fed.
    # @param isOnMeds Boolean indicating if the pet is on medication.
    # @param isMedicated Boolean indicating if the pet is currently medicated.
    def __init__(self, PetID, name, kennelNum, numFeeds, timesFed, isOnMeds, isMedicated):
        self.PetID= PetID
        self.name = name
        self.kennelNum = kennelNum
        self.numFeeds = numFeeds
        self.timesFed = timesFed
        self.isOnMeds = isOnMeds
        self.isMedicated = isMedicated


    ## @brief Set the pet's ID.
    # @param PetID The unique identifier for the pet.
    def set_PetID(self, PetID):
        self.PetID

    ## @brief Get the pet's ID.
    # @return The unique identifier for the pet.
    def get_PetID(self):
        return self.PetID
    
    ## @brief Set the pet's name.
    # @param name The new name of the pet.
    def set_name(self, name):
        self.name = name

    ## @brief Get the pet's name.
    # @return The name of the pet.
    def get_name(self):
        return self.name
    
    ## @brief Set the pet's kennel number.
    # @param kennelNum The new kennel number where the pet is housed.
    def set_kennelNum(self, kennelNum):
        self.kennelNum = kennelNum
    
    ## @brief Get the pet's kennel number.
    # @return The kennel number where the pet is housed.
    def get_kennelNum(self):
        return self.kennelNum
    
    ## @brief Set the number of feeds for the pet.
    # @param numFeeds The new number of times the pet should be fed.
    def set_numFeeds(self, numFeeds):
        self.numFeeds = numFeeds
    
    ## @brief Get the number of feeds for the pet.
    # @return The number of times the pet should be fed.
    def get_numFeeds(self):
        return self.numFeeds

    ## @brief Set the number of times the pet has been fed.
    # @param timesFed The number times at which the pet has been fed.
    def set_timesFed(self, timesFed):
        self.timesFed = timesFed
    
    ## @brief Get the number of times the pet has been fed.
    # @return The number of times the pet has been fed.
    def get_timesFed(self):
        return self.timesFed
    
    ## @brief Set whether the pet is on medication.
    # @param isOnMeds Boolean indicating if the pet is on medication.
    def set_isOnMeds(self, isOnMeds):
        self.isOnMeds = isOnMeds
    
    ## @brief Get whether the pet is on medication.
    # @return Boolean indicating if the pet is on medication.
    def get_isOnMeds(self):
        return self.isOnMeds

    ## @brief Set whether the pet is currently medicated.
    # @param isMedicated Boolean indicating if the pet is currently medicated.
    def set_isMedicated(self, isMedicated):
        self.isMedicated = isMedicated
    
    ## @brief Get whether the pet is currently medicated.
    # @return Boolean indicating if the pet is currently medicated.
    def get_isMedicated(self):
        return self.isMedicated

    ## @brief Return a string representation of the Pet object.
    # @return Formatted string containing the pet's details.
    def __str__(self): #Allows an instance of the object to be displayed as a string
        return f"{self.name} (ID: {self.PetID}, Kennel: {self.kennelNum}, Times Fed: {self.timesFed} IsOnMeds: {self.isOnMeds}, Is Medicated: {self.isMedicated})"
