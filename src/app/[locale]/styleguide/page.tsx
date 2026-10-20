import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const swatches = [
  { name: "primary", className: "bg-primary" },
  { name: "secondary", className: "bg-secondary" },
  { name: "accent", className: "bg-accent" },
  { name: "cosmic", className: "bg-cosmic" },
  { name: "background", className: "bg-background border border-line" },
  { name: "ink", className: "bg-ink" },
  { name: "muted", className: "bg-muted" },
  { name: "line", className: "bg-line" },
];

export default function StyleguidePage() {
  return (
    <main className="py-16">
      <Container className="space-y-16">
        <section>
          <h1 className="font-heading text-5xl text-secondary">Design System</h1>
          <p className="mt-3 text-lg text-muted">
            Every page of the website is built from these pieces.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-3xl text-secondary">Colors</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {swatches.map((s) => (
              <div key={s.name}>
                <div className={`h-20 rounded-card ${s.className}`} />
                <p className="mt-2 text-sm text-muted">{s.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-3xl text-secondary">Typography</h2>
          <p className="font-heading text-4xl">Your stars, your path</p>
          <p className="font-heading text-4xl">जन्मकुण्डली र दैनिक राशिफल</p>
          <p className="text-lg">
            Body text in English looks clean and easy to read on phones.
          </p>
          <p className="text-lg">
            नेपाली पाठ पनि सफा र पढ्न सजिलो देखिन्छ।
          </p>
        </section>

        <section>
          <h2 className="font-heading text-3xl text-secondary">Buttons</h2>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button>Book a Puja</Button>
            <Button variant="secondary">Get Kundali</Button>
            <Button variant="outline">Learn More</Button>
            <Button variant="ghost">Cancel</Button>
            <Button size="lg">Large</Button>
            <Button size="sm">Small</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-3xl text-secondary">Cards</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-heading text-2xl text-secondary">Satyanarayan Puja</h3>
              <p className="mt-2 text-muted">Live via video call with an experienced pandit.</p>
              <Button className="mt-6">Book Now</Button>
            </Card>
            <Card className="border-cosmic-light bg-cosmic text-white">
              <h3 className="font-heading text-2xl text-accent">Your Kundali</h3>
              <p className="mt-2 text-white/70">Discover what the planets say about you.</p>
              <Button
                variant="outline"
                className="mt-6 border-accent text-accent hover:bg-cosmic-light"
              >
                Generate
              </Button>
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}