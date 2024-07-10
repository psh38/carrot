// 라우터
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// css
import './css/common.css';

// component
import Header from './components/Header';
import Gnb from './components/Gnb';
import PrdList from './components/PrdList';
import Floating from './components/Floating';
import TabBar from './components/TabBar';
import ProductDetail from './components/ProductDetail';
import WriteWork from './components/WriteWork';
import WriteRealState from './components/WriteRealState';
import WriteCar from './components/WriteCar';
import WriteSell from './components/WriteSell';

function App() {
  return (
    <>
      <Header/>
      
      <main>
        <div className="container">
          <Gnb/>

          <Routes>
            <Route path="/" element={<PrdList/>} />
            <Route path="/product/:id" element={<ProductDetail/>} />
            <Route path="/write-work" element={<WriteWork/>} />
            <Route path="/write-real-estate" element={<WriteRealState/>} />
            <Route path="/write-car" element={<WriteCar/>} />
            <Route path="/write-sell" element={<WriteSell/>} />
          </Routes>

        </div>
      </main>

      <Floating/>

      <TabBar/>
    </>
  );
}

export default App;
