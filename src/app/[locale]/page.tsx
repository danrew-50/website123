import Navbar from "@/components/ui/Navbar";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import StickyNavWrapper from "@/components/ui/StickyNavWrapper";
import { getT } from "@/lib/getT";

async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getT(locale, "home")

  return (
    <div className="min-h-screen">
      <StickyNavWrapper>
        <Navbar />
      </StickyNavWrapper>

      <main className="w-full">
        <section className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold text-black max-w-3xl">
              {t("hero.title")}
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg text-black/60 max-w-xl">
              {t("hero.subtitle")}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex items-center gap-4 mt-4">
              <Button text={t("button.test.default")} variant="normal" />
              <Button text={t("button.test.ghost")} variant="ghost" />
            </div>
          </Reveal>
        </section>

        <section className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              {t("features.title")}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg text-black/60 max-w-xl">
              {t("features.subtitle")}
            </p>
          </Reveal>
        </section>

        <section className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              {t("cta.title")}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Button text={t("cta.button")} variant="normal" />
          </Reveal>
        </section>
      </main>
    </div>
  );
}

export default HomePage