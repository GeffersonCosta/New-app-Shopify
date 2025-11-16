import { Button, Card } from "@shopify/polaris";
import { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <Card title="Click Counter" sectioned>
      <p>You have clicked the button {count} times.</p>
      <Button onClick={() => setCount(count + 1)}>Click Me</Button>
    </Card>
  );
}
