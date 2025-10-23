import { NextResponse } from "next/server";

const PRODUCTS = [
  { id: "p1", name: "Starter Wallet", price: 49 },
  { id: "p2", name: "Minimal Belt", price: 39 },
];

export async function GET() {
  return NextResponse.json(PRODUCTS);
}
