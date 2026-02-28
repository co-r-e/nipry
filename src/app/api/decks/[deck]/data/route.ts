import { NextRequest, NextResponse } from "next/server";
import { loadDeck } from "@/lib/deck-loader";
import { isLocalRequest, getSharedDeckName } from "@/lib/tunnel-access";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ deck: string }> },
) {
  const { deck: deckName } = await params;

  if (!isLocalRequest(_request) && getSharedDeckName() !== deckName) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    const deck = await loadDeck(deckName);
    return NextResponse.json(deck);
  } catch {
    return NextResponse.json({ error: "Deck not found" }, { status: 404 });
  }
}
