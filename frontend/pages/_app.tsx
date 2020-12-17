// Apollo
import { useApollo } from '../api';
import { ApolloProvider } from '@apollo/client';

// Styles
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  // Apollo
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
