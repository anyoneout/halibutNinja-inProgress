function adventureGame () {
    let characterName;
    let characterClass;
    let inventory;
    let city;
    let street;
    let var6;

    characterName = prompt("What is your character's name?");
    characterClass = prompt(`Hi ${characterName}, what class adventurer are you? (Fighter / Mage / Halibut Ninja)`);
        if (characterClass = "Halibut Ninja") {
            inventory.sword = "Halibut Sword";
            inventory.shield = "Halibut Shield";
            inventory.armor = "Halibut Armor";
            }
        else if (characterClass = "Fighter") {
            inventoryHeader.innerHTML = "You have died";
        }
        else inventoryHeader.innerHTML = "Upon opening your first book of magic you give yourself a magic papercut and get a magic infection and magically die.";
   
}
adventureGame();

