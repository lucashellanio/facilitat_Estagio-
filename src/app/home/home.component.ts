import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // colocar -18 anos
  // teste1 = new Date(teste1.setFullYear(teste1.getFullYear()+10))
  minDate = new Date();

  home = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('([a-zA-Z\ ]*)')]),
    date: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    topic: new FormControl('', Validators.required),
    informAddress: new FormControl(false),
    cep: new FormControl(''),
    city: new FormControl(''),
    district: new FormControl(''),
    address: new FormControl('')
  });

  addressFields = ['city', 'district', 'address'];

  constructor() { }

  ngOnInit(): void {
  }

  // função do checkbox para ativar/desativar os campos de endereço.
  activateAddress = (value) => {
    if (value === true) {

      console.log('sim');
    } else {
      console.log('não');
      return;
    }

  }
  // função do button (Confirmar) para prosseguir para a próxima tela.
  confirmForm = () => {

  }

}
