import SettingTable from "./setting-table";

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
  return <SettingTable data={tags} />;
}
