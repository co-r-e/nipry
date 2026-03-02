import { listDecks } from "@/lib/deck-loader";
import { DeckGrid } from "@/components/deck-list/DeckGrid";
import { getTunnelAccess } from "@/lib/tunnel-access";
import { redirect, notFound } from "next/navigation";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { isLocal, sharedDeck } = await getTunnelAccess();
  if (!isLocal) {
    if (sharedDeck) redirect(`/${sharedDeck}`);
    notFound();
  }

  const decks = await listDecks();

  return (
    <div className="min-h-screen p-8">
      <header className="mb-12 flex items-center gap-4">
        <Image
          src="/dexcode-logo.svg"
          alt="DexCode"
          width={199}
          height={50}
          priority
          className="dark:[filter:invert(1)_hue-rotate(180deg)]"
        />
        <div className="flex-1" />
        <ThemeToggle />
      </header>
      <main>
        {decks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
              No decks found
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Add MDX files to the{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">decks/</code>{" "}
              directory
            </p>
          </div>
        ) : (
          <DeckGrid decks={decks} />
        )}
      </main>
    </div>
  );
}
