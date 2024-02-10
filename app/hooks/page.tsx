import ExUseContext from "@/components/ExUseContext";
import ExUseEffect from "@/components/ExUseEffect";
import ExUseId from "@/components/ExUseId";
import ExUseMemo from "@/components/ExUseMemo";
import ExUseReducer from "@/components/ExUseReducer";
import ExUseRef from "@/components/ExUseRef";
import ExUseState from "@/components/ExUseState";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="flex flex-col align-middle min-h-screen">
      <span className="grid xl:grid-cols-3 m-2 grid-flow-row lg:grid-cols-2 sm:grid-cols-1">
        <Card className="p-4 mx-2 my-2">
          <ExUseState />
        </Card>
        <Card className="p-4 mx-2 my-2">
          <ExUseRef />
        </Card>
        <Card className="p-4 mx-2 my-2">
          <ExUseEffect />
        </Card>
        <Card className="p-4 mx-2 my-2">
          <ExUseMemo />
        </Card>
        <Card className="p-4 mx-2 my-2">
          <ExUseContext />
        </Card>
        <Card className="p-4 mx-2 my-2">
          <ExUseReducer />
        </Card>
      </span>
    </main>
  );
}
