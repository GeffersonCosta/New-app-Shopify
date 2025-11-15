import { AppProvider, Page, Text } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import HelloMessage from "./../HelloMessage";
import HelloMessage2 from "./../HelloMessage2";

export default function App() {
  return (
    <AppProvider i18n={{}}>
      <Page title="Hello Shopify App">
        <HelloMessage />
        <HelloMessage2 />
      </Page>
    </AppProvider>
  );
}
