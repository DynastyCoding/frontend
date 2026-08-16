import { Animal } from "./Animal";

class Cat implements Animal{

  animalName: string = 'Cat';

  animalSounds(){
    console.log('Meow');
  }

}
