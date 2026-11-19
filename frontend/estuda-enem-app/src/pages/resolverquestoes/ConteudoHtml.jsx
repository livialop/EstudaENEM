import React, { useMemo } from "react";
import { sanitizarHtml } from "../../utils/sanitizarHtml";

export default function ConteudoHtml({ html, className, como: Tag = "div" }) {
  const limpo = useMemo(() => sanitizarHtml(html), [html]);

  if (!limpo) return null;

  return <Tag className={className} dangerouslySetInnerHTML={{ __html: limpo }} />;
}