/**
 * Realiza um scroll suave para a seção com o ID especificado.
 *
 * @param {string} id - O ID da seção para onde o scroll será feito.
 * @example
 * scrollToSection("about_we");
 */
export function scrollToSection(id) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Função para lidar com o clique no botão "Voltar ao topo".
 * Realiza um scroll suave para o topo da página.
 */
export const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const EASE_OUT = [0.22, 1, 0.36, 1];

export const motionConfig = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: EASE_OUT },
};

/**
 * Variante de motionConfig com atraso escalonado, para listas de cards.
 *
 * @param {number} index - Posição do item na lista.
 * @param {number} [step=0.08] - Atraso entre itens, em segundos.
 */
export const staggerConfig = (index, step = 0.08) => ({
  ...motionConfig,
  transition: { ...motionConfig.transition, delay: index * step },
});

// Função utilitária
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("pt-BR");
}

export const BACKGROUND_EVENT = "portfolio:background";

/**
 * Pausa ou retoma a animação do background 3D (ex.: enquanto um modal cobre a tela).
 *
 * @param {boolean} paused
 */
export function setBackgroundPaused(paused) {
  window.dispatchEvent(new CustomEvent(BACKGROUND_EVENT, { detail: { paused } }));
}
