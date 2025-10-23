import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HealthCheck } from "@/components/HealthCheck";
import { formatMoney } from "@/lib/formatMoney";

interface Product {
  id: string;
  name: string;
  price: number;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/products`,
    { cache: "no-store" }
  );
  return res.json() as Promise<Product[]>;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="container py-8 space-y-8">
      {/* Welcome Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Welcome to Evolve-UI!</CardTitle>
          <CardDescription className="text-lg">
            A modern Next.js starter template with shadcn/ui, dark mode, and
            best practices built in.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge>TypeScript</Badge>
            <Badge>shadcn/ui</Badge>
            <Badge>Tailwind CSS</Badge>
            <Badge>Jest</Badge>
            <Badge>Playwright</Badge>
            <Badge variant="secondary">Dark Mode</Badge>
          </div>
          <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
            <p className="text-sm">
              <strong>For Learners:</strong> This template demonstrates Next.js
              App Router patterns, nested layouts, server/client components, and
              modern UI design with shadcn/ui.
            </p>
          </div>
          <div className="flex gap-2">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Section */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Products</CardTitle>
          <CardDescription>
            Example of server-side data fetching with the App Router
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Card key={p.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{p.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">
                    {formatMoney(p.price)}
                  </p>
                  <Button className="w-full mt-4" variant="outline">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API Health Check Demo */}
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">API Health Check</h2>
          <p className="text-muted-foreground">
            Client-side data fetching with loading and error states
          </p>
        </div>
        <HealthCheck />
      </div>
    </div>
  );
}
