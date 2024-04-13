import { SettingDialog } from "../setting-dialog";
import SettingCategoryForm from "./setting-category-form";

const categories = [
  {
    name: "日用品",
  },
  {
    name: "雑費",
  },
  {
    name: "食費",
  },
  {
    name: "通信費",
  },
  {
    name: "家賃",
  },
  {
    name: "水道・光熱費",
  },
];

export default function SettingCategoryTable() {
  return <SettingTableItem data={categories} />;
}

type SettingTableProps = {
  title?: string;
  data: {
    name: string;
  }[];
};

function SettingTableItem({ title, data }: SettingTableProps) {
  return (
    <div>
      {title && <h3 className="font-semibold text-sm mb-2">{title}</h3>}
      <ul className="space-y-2">
        {data.map((data, index) => (
          <li key={index}>
            <SettingDialog triggerText={data.name} title={data.name}>
              <SettingCategoryForm />
            </SettingDialog>
          </li>
        ))}
      </ul>
    </div>
  );
}
