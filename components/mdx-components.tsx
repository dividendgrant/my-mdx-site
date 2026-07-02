import type { ComponentProps } from "react";

/** Editorial styling for compiled MDX article bodies (DigitalNomads brand). */
export const mdxComponents = {
  p: (props: ComponentProps<"p">) => (
    <p className="text-lg leading-relaxed text-neutral-700 mb-6" {...props} />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="text-2xl font-bold tracking-tight text-neutral-900 mt-12 mb-4" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="text-xl font-bold tracking-tight text-neutral-900 mt-8 mb-3" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc pl-5 space-y-2 mb-6 text-lg leading-relaxed text-neutral-700" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal pl-5 space-y-2 mb-6 text-lg leading-relaxed text-neutral-700" {...props} />
  ),
  li: (props: ComponentProps<"li">) => <li className="pl-1 marker:text-neutral-400" {...props} />,
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-semibold text-neutral-900" {...props} />
  ),
  a: (props: ComponentProps<"a">) => (
    <a className="text-brand-blue underline underline-offset-2 hover:text-brand-blue-dark" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote className="border-l-4 border-brand-blue pl-5 my-7 italic text-neutral-600" {...props} />
  ),
  hr: (props: ComponentProps<"hr">) => <hr className="my-10 border-neutral-200" {...props} />,
  table: (props: ComponentProps<"table">) => (
    <div className="my-7 overflow-x-auto">
      <table className="w-full text-base border-collapse" {...props} />
    </div>
  ),
  th: (props: ComponentProps<"th">) => (
    <th className="text-left font-semibold text-neutral-900 border-b border-neutral-300 py-2.5 pr-4 align-top" {...props} />
  ),
  td: (props: ComponentProps<"td">) => (
    <td className="border-b border-neutral-100 py-2.5 pr-4 align-top text-neutral-700" {...props} />
  ),
  code: (props: ComponentProps<"code">) => (
    <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm font-mono text-neutral-800" {...props} />
  ),
};
