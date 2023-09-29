import { useState } from 'react'
import { DatePicker } from 'antd';
import {Layout} from './pages'
import {Card} from './shared/ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Layout>
            <Card />
        </Layout>
    </>
  )
}

export default App
