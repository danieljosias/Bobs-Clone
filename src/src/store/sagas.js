import {all, put, select, takeLatest} from 'redux-saga/effects'  // importe de redux-saga/effects
import { addSuccess, cartAmountUpdateSuccess } from '../store/actions'; // importar de store/actions

/* ### métodos para redux saga que funcionam por trás dos panos na aplicação aos quais você queira ###
** ### que funcione junto aos componentes como Home, Cart e ShowCart ###
**/

// representa o BACK-END. Caso queira para a produção, desconsidere esse objeto produtojson caso queira um banco de dados real
const produtojson = [
    {id: 1, title: 'Tentador Carne', price: 15.99, img: 'https://cdn7.bobsfa.com.br/assets/cardapio/produtos/tentador-carne.o.tentador-carne.png'},
    {id: 2, title: 'Cheddar Australiano', price: 15.99, img: 'https://cdn7.bobsfa.com.br/assets/cardapio/produtos/cheddar-australiano.o.cheddar-australiano.png'},
    {id: 3, title: 'Big Bob', price: 16.99, img: 'https://cdn7.bobsfa.com.br/assets/cardapio/produtos/big-bob.o.p.png'}
];

// function saga responsável por executar em segundo plano
function* addToCart({id}) {
    // obtém um book através do ID
    const produto = produtojson.map(produto => (produto.id === id) ? produto : null); 

    // faz dispatch através de put de redux-saga/effects, responsável pelos efeitos colaterais em redux no react.js
    yield put(addSuccess([produto[id - 1]]));
    yield put(cartAmountUpdateSuccess(id));
}

/* ### exporta como padrão com all (que junta todos os sagas de redux) com takeLatest para cada ação de add (adicionar) 
** ### quando houver cliques no botão em Home, ou seja, takeLatest ouve os eventos de adiçao de livros e nos cliques no botão
   ### em scripts Home. Você poderá adiconar mais eventos se quiser além desse que está embaixo.
**/
export default all([
    takeLatest('add', addToCart),
]);