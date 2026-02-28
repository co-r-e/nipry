import { NextRequest, NextResponse } from "next/server";
import { tunnelManager } from "@/lib/tunnel-manager";
import { isLocalHost } from "@/lib/tunnel-access";

const IS_PRODUCTION = process.env.NODE_ENV === "production";

// Response factories — Response bodies are single-use ReadableStreams,
// so each request must receive a fresh instance.
const productionError = () =>
  NextResponse.json({ error: "Not available in production" }, { status: 403 });

const forbidden = () =>
  NextResponse.json({ error: "Forbidden" }, { status: 403 });

/** Detect the local port from the Host header (fallback to 3000). */
function detectPort(request: NextRequest): number {
  const host = request.headers.get("host") ?? "";
  const match = host.match(/:(\d+)$/);
  return match ? parseInt(match[1], 10) : 3000;
}

/** Reject requests that originate from outside localhost. */
function rejectRemote(request: NextRequest): Response | null {
  const host = request.headers.get("host") ?? "";
  if (!isLocalHost(host)) return forbidden();
  return null;
}

/** GET /api/tunnel -- current tunnel status */
export function GET(request: NextRequest): Response {
  if (IS_PRODUCTION) return productionError();
  const rejected = rejectRemote(request);
  if (rejected) return rejected;
  return NextResponse.json(tunnelManager.getStatus());
}

/** POST /api/tunnel -- start tunnel */
export async function POST(request: NextRequest): Promise<Response> {
  if (IS_PRODUCTION) return productionError();
  const rejected = rejectRemote(request);
  if (rejected) return rejected;
  const port = detectPort(request);
  const body = await request.json().catch(() => ({}));
  const deckName = typeof body.deckName === "string" ? body.deckName : null;
  return NextResponse.json(tunnelManager.start(port, deckName));
}

/** DELETE /api/tunnel -- stop tunnel */
export function DELETE(request: NextRequest): Response {
  if (IS_PRODUCTION) return productionError();
  const rejected = rejectRemote(request);
  if (rejected) return rejected;
  tunnelManager.stop();
  return NextResponse.json(tunnelManager.getStatus());
}
