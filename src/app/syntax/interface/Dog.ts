import { Animal } from "./Animal";

class Dog implements Animal{

  animalName: string = 'Dog';

  animalSounds(): void {
    console.log('Barking');
  }

}
