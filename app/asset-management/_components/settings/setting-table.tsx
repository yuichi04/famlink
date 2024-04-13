import { Button } from "@/components/ui/button";

type SettingTableProps = {
  title?: string;
  data: {
    name: string;
  }[];
};

export default function SettingTable({ title, data }: SettingTableProps) {
  return (
    <div>
      {title && <h3 className="font-semibold text-sm mb-2">{title}</h3>}
      <ul className="space-y-2">
        {data.map((data, index) => (
          <li key={index}>
            <Button variant="outline" className="w-full">
              {data.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
