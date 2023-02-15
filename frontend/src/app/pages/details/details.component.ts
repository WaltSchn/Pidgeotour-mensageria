import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty, Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cartModel';
import { Destino } from 'src/app/models/destinoModel';
import { Disponibilidade } from 'src/app/models/disponibilidadeModel';
import { DestinoService } from 'src/app/services/destinoServices/destino.service';
import { DisponibilidadeService } from 'src/app/services/disponibilidadeService/disponibilidade.service';

interface Qtde {
  value: number
  viewValue: string
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  subscriptionRouteInit!: Subscription
  subscriptionRouteQtde!: Subscription
  destino!: Destino
  disponibilidade!: Disponibilidade[]
  carrinho!: Cart[]
  currentCart: Cart = new Cart
  currentCartArray = new Array();
  idInt!: number
  name!: string
  qtdePessoas!: number
  botaoCarrinho = false
  mensagem = false
  dataArray:any = []
  selectedData = new FormControl();
  qtdeEscolhida!: number

  qdte: Qtde[] = [
    {value: 1, viewValue: '1'},
    {value: 2, viewValue: '2'},
    {value: 3, viewValue: '3'},
    {value: 4, viewValue: '4'},
    {value: 5, viewValue: '5'},
    {value: 6, viewValue: '6'},
  ];
  selectedQtde = null

  datas!: any



  constructor(private destinoService: DestinoService,
    private disponibilidadeService: DisponibilidadeService,
    private route: ActivatedRoute,
    private router: Router
    ) {
   }

  ngOnInit() {
    this.subscriptionRouteInit =  this.route.params.subscribe( params => this.idInt = Object.keys(params).map(key => params[key])[0]);
    this.destinoService.getDestinoById(this.idInt).subscribe((response:any) => {
      this.destino = response
    })
  }

  onQtdeChange(qtde: any) {
    this.qtdeEscolhida = qtde.value
    this.dataArray = []
    this.botaoCarrinho = false
    this.disponibilidadeService.getDisponibilidade(this.destino.id, this.qtdeEscolhida).subscribe((response:any) => {
      this.disponibilidade = response
      this.datas = this.disponibilidade.map(e => e.data)
      if (this.datas.length === 0) {
        this.mensagem = true;
      } else {
          this.datas.map((d: string) =>
          {const [day, month, year] = d.split('/')
          const date = new Date(+year, +month -1, +day);
          this.dataArray.push(date)
      })
      this.dataArray = this.dataArray.sort(
        (objA: { getTime: () => number; }, objB: { getTime: () => number; }) => objA.getTime() - objB.getTime(),
      )

    }
    })



  }

  onDataChange(event:any) {
    //devolver pro carrinho o objeto completo com id destino, valor, data e qtde
    var chosen = this.disponibilidade.find(x => x.data === event.value.toLocaleDateString())
    this.currentCart = {
      valor: this.destino.valor,
      nome: chosen?.nome,
      destinoId: chosen?.destinoId,
      data: event.value.toLocaleDateString(),
      qtde: this.qtdeEscolhida
    }
    this.botaoCarrinho = true

  }


  finalizar() {
    if (localStorage.getItem("cart") === null) {
      this.currentCartArray.push(this.currentCart)
      localStorage.setItem("cart",JSON.stringify(this.currentCartArray))
    } else {
      var jsonArray = [];
      var jsonObj =JSON.parse(localStorage.getItem("cart") || '[]')
      jsonArray = jsonObj
      jsonArray.push(this.currentCart)
      localStorage.setItem("cart", JSON.stringify(jsonArray))
    }
    this.router.navigate(["/cart"]);
  }

}
