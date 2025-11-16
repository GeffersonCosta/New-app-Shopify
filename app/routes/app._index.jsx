import { AppProvider, Page, Text } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import HelloMessage from "./../HelloMessage";
import HelloMessage2 from "./../HelloMessage2";
import HelloMessageC from "./../components/HelloMessegeC";
import HelloShopify from "./../components/HelloShopify";
import ClickCounter from "./../components/ClickCounter";
import ProductList from "./../components/ProductList";

export default function App() {
  return (
    <AppProvider i18n={{}}>
      <Page title="Hello Shopify App">
        <HelloMessage />
        <HelloMessage2 />
        <HelloMessageC />
        <HelloShopify />
        <ClickCounter />
        <ProductList />
      </Page>
    </AppProvider>
  );
}
