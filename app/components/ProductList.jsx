import { Card, ResourceList } from "@shopify/polaris";

const products = [
  { id: "1", name: "Camisa" },
  { id: "2", name: "Caneca" },
  { id: "3", name: "Boné" },
];

export default function ProductList() {
  return (
    <Card title="Products" sectioned>
      <ResourceList
        items={products}
        renderItem={(item) => {
          return (
            <ResourceList.Item id={item.id}>
              <p variation="strong">{item.name}</p>
            </ResourceList.Item>
          );
        }}
      />
    </Card>
  );
}
