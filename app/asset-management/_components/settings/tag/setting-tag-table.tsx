import { SettingDialog } from "../setting-dialog";
import SettingTagForm from "./setting-tag-form";

const tags = [
  {
    name: "フレッシュマーケット",
  },
  {
    name: "フィットケア",
  },
  {
    name: "コストコ",
  },
  {
    name: "セブンイレブン",
  },
];

export default function SettingTagTable() {
  return <SettingTableItem data={tags} />;
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
              <SettingTagForm />
            </SettingDialog>
          </li>
        ))}
      </ul>
    </div>
  );
}
