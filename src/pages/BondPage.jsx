import CardBond from "../components/CardBond";

export default function BondPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <CardBond />
      </div>
    </div>
  );
}
