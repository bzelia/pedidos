import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  public categorias = [
    { codigo: 1, nome: 'Fritos'         },
    { codigo: 2, nome: 'Assados'        },
    { codigo: 3, nome: 'Bebidas'        },
    { codigo: 4, nome: 'Acompanhamentos'},
    { codigo: 5, nome: 'Sobremesas'     }
  ]

  public produtos = [
    { codigo: 1, categoria: 1, nome: 'Coxinha de frango', valor: 7.00, descricao:'', imagens: ['coxinha1-1.jpg', 'coxinha1-2.jpg'], visibled: false },
    { codigo: 2, categoria: 1, nome: 'Coxinha de Calabresa', valor: 7.00, descricao:'', imagens: ['coxinha2-1.jpg', 'coxinha2-2.jpg'], visibled: false },
    { codigo: 3, categoria: 1, nome: 'Bolinhas de queijo', valor: 5.00, descricao:'', imagens: ['bolinha1-1.jpg', 'coxinha1-2.jpg'], visibled: false },
    { codigo: 4, categoria: 1, nome: 'Kibe', valor: 4.00, descricao:'', imagens: ['kibe1-1.jpg', 'kibe1-2.jpg'], visibled: false },
    { codigo: 5, categoria: 2, nome: 'Esfiha de carne', valor: 6.00, descricao:'', imagens: ['esfiha1-1.jpg', 'esfiha1-2.jpg'], visibled: false },
    { codigo: 6, categoria: 2, nome: 'Esfiha de queijo', valor: 6.00, descricao:'', imagens: ['esfiha2-1.jpg', 'esfiha2-2.jpg'], visibled: false },
    { codigo: 7, categoria: 2, nome: 'Esfiha de calabresa', valor: 6.00, descricao:'', imagens: ['esfiha3-1.jpg', 'esfiha3-2.jpg'], visibled: false },
    { codigo: 8, categoria: 2, nome: 'Joelho', valor: 5.00, descricao:'', imagens: ['joelho1-1.jpg', 'joelho1-2.jpg'], visibled: false },
    { codigo: 9, categoria: 2, nome: 'Empada', valor: 5.00, descricao:'', imagens: ['empada1-1.jpg', 'empada1-2.jpg'], visibled: false },
    { codigo: 10, categoria: 3, nome: 'Coquinha', valor: 9.00, descricao:'', imagens: ['coquinha1-1.jpg', 'coquinha1-2.jpg'], visibled: false },
    { codigo: 11, categoria: 3, nome: 'Guarana', valor: 6.00, descricao:'', imagens: ['guarana1-1.jpg', 'guarana1-2.jpg'], visibled: false },
    { codigo: 12, categoria: 3, nome: 'Suco de Laranja', valor: 5.00, descricao:'', imagens: ['suco1-1.jpg', 'suco1-2.jpg'], visibled: false },
    { codigo: 13, categoria: 3, nome: 'Suco de uva', valor: 5.00, descricao:'', imagens: ['suco2-1.jpg', 'suco2-2.jpg'], visibled: false }
  ]

  public pathImgs = '../../assets/img/';

  /*public formataValor(valor) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }*/



  constructor() {}
}
