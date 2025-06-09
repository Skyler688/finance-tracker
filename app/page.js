import { currencyFormatter } from "@/lib/utils";
import ExpenseCategoryItem from "@/components/ExpenseCategoryItem";

const DUMMY_DATE = [
  {
    id: 1,
    title: "Entertainment",
    color: "#000",
    amount: 500,
  },
  {
    id: 2,
    title: "Gass",
    color: "#000",
    amount: 200,
  },
  {
    id: 3,
    title: "Fuel",
    color: "#000",
    amount: 1200,
  },
  {
    id: 4,
    title: "Movies",
    color: "#000",
    amount: 800,
  },
  {
    id: 5,
    title: "Holiday",
    color: "#000",
    amount: 2000,
  },
];

export default function Home() {
  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <section className="py-3">
        <small className="text-gray-400 text-md">My Balance</small>
        <h2 className="text-4x1 font-bold">{currencyFormatter(100000)}</h2>
      </section>

      <section className="flex items-center gap-2 py-3">
        <button className="btn btn-primary">+ Expenses</button>
        <button className="btn btn-primary-outline">+ Income</button>
      </section>

      {/* Expenses */}
      <section className="py-6">
        <h3 className="text-2xl">My Expenses</h3>
        <div className="flex flex-col gap-4 mt-6">
          {DUMMY_DATE.map((expence) => {
            return (
              <ExpenseCategoryItem
                color={expence.color}
                title={expence.title}
                amount={expence.amount}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
