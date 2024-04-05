import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

type FinanceOverviewProps = {
  amount: number;
  category: string;
  description?: string;
  subDescription?: string;
  list?: {
    description?: string;
    name: string;
    amount: number;
  }[];
};

export default function FinanceOverview({
  amount,
  category,
  description,
  subDescription,
  list,
}: FinanceOverviewProps) {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle className="text-lg">{category}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="text-right">
        <p className="text-xl font-semibold">{amount.toLocaleString()} 円</p>
        <CardDescription>{subDescription}</CardDescription>
      </CardContent>
      {list && (
        <CardContent className="space-y-4">
          {list.map((item, index) => (
            <Card key={item.name + index}>
              <CardHeader className="pb-0">
                <CardDescription>{item.description}</CardDescription>
                <CardTitle className="text-md">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-right text-lg font-semibold">
                {item.amount.toLocaleString()} 円
              </CardContent>
            </Card>
          ))}
        </CardContent>
      )}
    </Card>
  );
}
