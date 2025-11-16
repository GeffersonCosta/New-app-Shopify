import { Card, Button } from "@shopify/polaris";

export default function HelloShopify() {
  return (
    <Card title="Welcome, This is your first app!" sectioned>
      <p>Welcome to your Shopify App!</p>
      <Button onClick={() => alert("Congratulations")}>Get Started</Button>
    </Card>
  );
}
