import { useEffect, useState } from "react";

/**
 * Observa as seções do menu e retorna o id da que está mais visível na tela.
 *
 * @param {{ href: string }[]} items - Itens do menu (href = id da seção).
 */
export function useActiveSection(items) {
  const [active, setActive] = useState(items[0]?.href);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      // Considera "ativa" a seção que cruza a faixa central da viewport
      { rootMargin: "-45% 0px -45% 0px" }
    );

    // As seções são lazy-loaded, então espera o DOM estabilizar antes de observar
    const observeAll = () => {
      let found = 0;
      items.forEach(({ href }) => {
        const el = document.getElementById(href);
        if (el) {
          observer.observe(el);
          found++;
        }
      });
      return found === items.length;
    };
    const mutation = new MutationObserver(() => {
      if (observeAll()) mutation.disconnect();
    });
    if (!observeAll()) {
      mutation.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, [items]);

  return active;
}
