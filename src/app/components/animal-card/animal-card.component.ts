import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrl: './animal-card.component.css'
})
export class AnimalCardComponent{
  data = {
    "id": 0,
    "id-doador": 0,
    "nome": "Pandora",
    "imageUrl": "../../../assets/images/animal1.jpeg",
    "localizacao": ["RJ", "Magé"],
    "peso": 15,
    "idade":2,
    "especie": "Cachorro",
    "porte": "Grande",
    "descricao": "Doggo foi resgatado na rua, estava magrinho. Demos um bom banho, antipulga e agora está em lar temporário aguardando adoção. \n \n Interessados precisam enviar um vídeo da casa, com o local onde vai dormir e o portão de acesso à rua. Após isso, entrevistamos.",
    "tags": [],
    "email": "exemplo@gmail.com",
    "telefone": "(21) 98765-4321"
  }
}
