import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


   home = new FormGroup({
    nome: new FormControl('lucas'),
    data: new FormControl(''),
    email: new FormControl(''),
    assunto: new FormControl(''),
    ativarEndereco: new FormControl(true),
    cep: new FormControl(''),
    cidade: new FormControl(''),
    bairro: new FormControl(''),
    endereco: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
