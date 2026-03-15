/**
 * Home Screen
 *
 * EN: Node tree for the Home screen.
 * PT: Árvore de Nodes para a tela Home.
 */
const home = {
  type: "column",
  props: {
    paddingAll: 16,
  },
  children: [
    {
      type: "text",
      props: {
        text: "Welcome to Android SDUI",
      },
    },
    {
      type: "text",
      props: {
        text: "This screen is rendered from a remote JSON.",
      },
    },
  ],
};

module.exports = home;
