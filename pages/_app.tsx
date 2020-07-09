import App, { Container } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";

class ReactApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default ReactApp;
