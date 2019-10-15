import App, { Container } from 'next/app';
import 'antd/dist/antd.css';
import MyContext from '../lib/my-contentx';

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
    console.log(Component);
    return (
      <Container>
        <MyContext.Provider value={this.state.context}>
          <Component {...pagesProps}/>
          <button onClick={this.changContext}>update context</button>
        </MyContext.Provider>
      </Container>
    )
  }
}
