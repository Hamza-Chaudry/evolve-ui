import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "About - Evolve-UI",
  description: "Learn about the Evolve-UI starter template",
};

export default function AboutPage() {
  return (
    <div className="container py-8 max-w-4xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold">About Evolve-UI</h1>
        <p className="text-xl text-muted-foreground">
          From API to UI — where pixels meet products.
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What is Evolve-UI?</CardTitle>
            <CardDescription>
              A comprehensive Next.js learning template
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Evolve-UI is a modern Next.js + TypeScript starter template
              designed specifically for learning web development. It's built
              with best practices in mind and includes everything you need to
              start building production-ready applications.
            </p>
            <p>
              This template is perfect for students who have completed CS50,
              junior developers learning modern web development, QA engineers
              wanting to understand frontend architecture, and designers
              transitioning to development.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What's Included</CardTitle>
            <CardDescription>
              Modern tools and libraries for web development
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Frontend Framework</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Next.js 16</Badge>
                <Badge>React 19</Badge>
                <Badge>TypeScript</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">UI Components</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">shadcn/ui</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">Radix UI</Badge>
                <Badge variant="secondary">Lucide Icons</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Code Quality</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">ESLint</Badge>
                <Badge variant="outline">TypeScript Strict Mode</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Testing</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Jest</Badge>
                <Badge>React Testing Library</Badge>
                <Badge>Playwright</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Features</CardTitle>
            <CardDescription>
              Examples to help you understand key concepts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside">
              <li>App Router with nested layouts (see Blog and Dashboard)</li>
              <li>Server Components vs Client Components</li>
              <li>API Routes with TypeScript</li>
              <li>Dark mode with next-themes</li>
              <li>Reusable UI components with shadcn/ui</li>
              <li>Data fetching patterns (server and client-side)</li>
              <li>Testing examples (unit, component, and E2E)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              To start building with this template, explore the different routes
              to see various Next.js patterns in action:
            </p>
            <ul className="space-y-1 list-disc list-inside ml-4">
              <li>
                <strong>Blog</strong> - Demonstrates nested layouts and dynamic
                routes
              </li>
              <li>
                <strong>Dashboard</strong> - Shows complex nested layouts with
                multiple sections
              </li>
              <li>
                <strong>Home</strong> - Server-side data fetching and shadcn/ui
                components
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
