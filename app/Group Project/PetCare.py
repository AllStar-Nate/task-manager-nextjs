"""
@brief Pet Care System
@details This program manages the care of pets in a kennel. It loads pet data from a file,
         performs morning, midday, and evening care routines, and generates reports.
@file PetCare.py
@brief This file contains the main function for the Pet Care System.
@details The PetCare.py file is responsible for loading pet data, managing care routines,
         and generating reports. It uses the Pet, KennelTree, and MedQueue classes to
         implement the functionality of the system.
@author Evan Marshall
@author Achebe Forde
@author Shaunico Cyrus-Christian
@author Turae Went-Barnett
@author Kristopher Horne
"""


from Pet import Pet
from MedQueue import MedQueue
from KennelTree import KennelTree
from datetime import datetime


def GetPets(): #loads pet data into the program
    """
    @brief Loads pet data into the program

    @details This function opens and reads the data within the PetData text file line by line.
    
    @return The data for each pet.
    @throws FileNotFoundError If the file name 'PetData.txt' not found
    """
    try:
        with open('PetData.txt', 'r') as file1: #Opens the text file to be read from
            pets = file1.readlines()
            pets = [line.strip().split('\t') for line in pets] 
            return pets
    except FileNotFoundError:
        print("Error: 'PetData.txt' file not found.")
        return None
            
def morning_care(): #First round of feeding for all pets
    """ @brief Notes first round of feeding for pets

    @details This function determines the pets that need to be fed in the morning, increments the timesFed and adds this to the report.
    
    """
    sorted_pets = Kennel_Record.inorder_traversal() #Traverse the sorted pets Binary Search Tree inorder
    report = []
    for pet in sorted_pets:
        pet.timesFed += 1
        report.append(pet.__str__())
        
    # Write the report to text file    
    date = datetime.now().strftime("%Y-%m-%d")
    with open("MorningCareReport.txt", "w") as file: #Opens the text file to be written to
        file.write(f"Date: {date}\n")
        file.write("Morning Care Report:\n")
        file.write("-" * 20 + "\n")
        for pet in report:
            file.write(str(pet) + '\n\n')
        file.close()  

def midday_care(): #Medicate all the pets who need medication
    """ @brief Highlights pets that need medication

    @details This function determines the pets that need to be medicated at midday, edits isMedicated and adds this to the report.
    
    """
    MedicList = []
    sorted_pets = Kennel_Record.inorder_traversal()
    # Process pets in the medication queue
    while not Pets_On_Meds.isEmpty():
        kennel_num = Pets_On_Meds.deQueue()  # Dequeue a kennel number
        for pet in sorted_pets:  # Check all pets in sorted order
            if pet.kennelNum == kennel_num and pet.isOnMeds == 'Y' and pet.isMedicated == 'N':
                pet.isMedicated = 'Y'  # Mark as medicated
                MedicList.append(pet)  # Add pet to medicated list
                #print(f"Medicating pet {pet.name} (KenelNum: {pet.kennelNum})")

    date = datetime.now().strftime("%Y-%m-%d")
    with open("MiddayCareReport.txt", "w") as file:
        file.write(f"Date: {date}\n")
        file.write("Midday Care Report:\n")
        file.write("-" * 20 + "\n")
        for medicated_pet in MedicList:
            file.write(str(medicated_pet) + '\n\n')

def evening_care(): #Second round of feeding for pets who require it
    """
    @brief Provides evenning care for pets by feeding pets that require more than one feeding
    @details It iterates through the pets in the MedQueue, 
         checks each pets' `numFeeds` requirements and updates their feed count if needed. 
         It then generates a report of the pets that were fed in the evening that is stored to a "EveningCareReport.txt".
    """
    sorted_pets = Kennel_Record.inorder_traversal()
    report = []
    for pet in sorted_pets:
        if pet.numFeeds > 1:
            pet.timesFed += 1
        report.append(pet.__str__())
    date = datetime.now().strftime("%Y-%m-%d")
    with open("EveningCareReport.txt", "w") as file:
        file.write(f"Date: {date}\n")
        file.write("Evening Care Report:\n")
        file.write("-" * 20 + "\n")
        for pet in report:
            file.write(str(pet) + '\n\n')
        file.close()  


##
# @brief Initializes the system by loading pet data and inserting into the kennel tree.
#
# @details Reads data from PetData.txt, constructs Pet objects, and inserts them into
# the KennelTree. Pets requiring medication are added to the MedQueue.
  
petdata = GetPets()
pets = []

## @var Kennel_Record
#  @brief Binary Search Tree to store pet objects.
#  @details The Kennel_Record variable is an instance of the KennelTree class,
#           which is a binary search tree that stores Pet objects based on their
#           kennel number. The tree allows for efficient insertion, search, and
#           traversal of the pet data.

Kennel_Record = KennelTree() #Creates a Binary Search Tree Object that can store Pet Objects
for line in petdata:

    if len(line) == 5:  # Ensure all fields are present.
        pet_id = line[0]
        name = line[1]
        kennel_num = int(line[2])
        num_feeds = int(line[3])
        is_on_meds = (line[4]) 
        # Create a Pet object and add it to the list.
        pet = Pet(PetID=pet_id, name=name, kennelNum=kennel_num, numFeeds=num_feeds, timesFed= 0, isOnMeds=is_on_meds, isMedicated = 'N')
        Kennel_Record.insert(pet)

sorted_pets = Kennel_Record.inorder_traversal() #Sorts the Binary Tree inorder left to right
print("\n")

## @var Pets_On_Meds
#  @brief Queue to store kennel numbers of pets that require medication.

Pets_On_Meds = MedQueue() #Creates an Object that stores Kennel Number of Pets who need medication in a Queue

for pet in sorted_pets:
    if pet.isOnMeds == 'Y':
       Pets_On_Meds.enqueue(int(pet.kennelNum))
       #print("Queue Front : " + str(Pets_On_Meds.front.data))
       #print("Queue Rear : " + str(Pets_On_Meds.rear.data))


#Run care routines
morning_care()
midday_care()
evening_care()

