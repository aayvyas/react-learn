import Card from "@/components/ui/Card";
import Link from "next/link";

const Page = () => {
  return (
    <main className="flex w-full h-screen justify-center items-top">
      <Card className="w-96 h-48 mt-5 dark:hover:bg-zinc-950 hover:bg-zinc-200">
        <Link
          href={"/hooks"}
          className="flex justify-center items-center h-full text-2xl"
        >
          Hooks
        </Link>
      </Card>
    </main>
  );
};
export default Page;
