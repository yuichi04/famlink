import SettingTable from "./setting-table";

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
  return <SettingTable data={categories} />;
}
