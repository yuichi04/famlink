import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

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
  className?: string;
};

export default function FinanceOverview({
  amount,
  category,
  description,
  subDescription,
  list,
  className,
}: FinanceOverviewProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-0">
        <CardTitle>{category}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="text-right">
        <p className="text-xl font-semibold">{formatCurrency(amount)}</p>
        <CardDescription>{subDescription}</CardDescription>
      </CardContent>
      {list && (
        <CardContent className="space-y-4">
          {list.map((item, index) => (
            <Card key={item.name + index}>
              <CardHeader className="p-4 pb-0">
                <CardDescription>{item.description}</CardDescription>
                <CardTitle className="text-md">{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-right text-lg font-semibold">
                {formatCurrency(item.amount)}
              </CardContent>
            </Card>
          ))}
        </CardContent>
      )}
    </Card>
  );
}
