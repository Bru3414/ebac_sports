import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { store } from './store'

import { GlobalStyle } from './styles'
import { Produto } from './components/Produto/styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
  isFavorito: boolean
}

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
