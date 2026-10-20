import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <main className="py-16">
      <Container>
        <div className="flex justify-end">
          <LanguageSwitcher />
        </div>
        <div className="mt-24 text-center">
          <h1 className="font-heading text-5xl text-secondary sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            {t("subtitle")}
          </p>
          <Button size="lg" className="mt-10">
            {t("cta")}
          </Button>
        </div>
      </Container>
    </main>
  );
}