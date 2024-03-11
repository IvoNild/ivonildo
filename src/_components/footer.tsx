export default function Footer() {
  return (
    <section
      id="techStack"
      className="bg-slate-50 dark:bg-transparent container space-y-14 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto border-t-2  flex flex-col gap-4 justify-between max-w-[58rem] py-3 ">
        <span className="text-primary">{"<IVONILDO />"}</span>

        <div className="flex gap-4 text-muted-foreground">
          <span>999 999 999</span>
          <span>ivodasilvapedro@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
