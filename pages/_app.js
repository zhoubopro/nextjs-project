import App, { Container } from 'next/app';
import Layout from '../components/layout'
import 'antd/dist/antd.css';

export default class MyApp extends App {
  state = {
    context: 'test'
  }

  static async getInitialProps({ Component, ctx }) {
    let pagesProps
    if (Component.getInitialProps) {
      pagesProps = await Component.getInitialProps(ctx);
    }
    return {
      pagesProps
    }
  }


  changContext = () => {
    this.setState({
      context: this.state.context + '1'
    })
  }

  render() {
    const { Component, pagesProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pagesProps}/>
        </Layout>
      </Container>
    )
  }
}
