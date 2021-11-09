import './Home.css';

import PostCards from '../../components/PostCards/PostCards.js';
import Layout from '../../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <ProductCards />
      </div>
    </Layout>
  )
}

export default Home;