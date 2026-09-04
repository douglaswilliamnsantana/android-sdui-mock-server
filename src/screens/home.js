/**
 * Home Screen
 *
 * EN: Node tree for the Home screen — a "screen" with three fixed regions
 *     (header, body, bottom), each identified by its own "type", not by position.
 * PT: Árvore de Nodes para a tela Home — um "screen" com três regiões fixas
 *     (header, body, bottom), cada uma identificada pelo próprio "type", não pela posição.
 */
const home = {
  "type": "screen",
  "components": [
    {
      "type": "header",
      "components": [
        {
          "type": "text",
          "props": {
            "text": "Home",
            "style": {
              "padding": {
                "start": 24,
                "end": 24,
                "top": 48,
                "bottom": 16
              },
              "color": "#1A202C",
              "fontSize": 24,
              "fontWeight": "semi-bold"
            }
          }
        }
      ]
    },
    {
      "type": "body",
      "components": [
        {
          "type": "text",
          "props": {
            "text": "Hello SDUI",
            "style": {
              "padding": {
                "start": 24,
                "end": 24,
                "top": 16,
                "bottom": 0
              },
              "color": "#1A202C",
              "fontSize": 22,
              "fontWeight": "semi-bold"
            }
          }
        }
      ]
    },
    {
      "type": "bottom",
      "components": [
        {
          "type": "text",
          "props": {
            "text": "v1.0.0",
            "style": {
              "padding": {
                "start": 24,
                "end": 24,
                "top": 16,
                "bottom": 24
              },
              "color": "#6B7280",
              "fontSize": 12,
              "fontWeight": "normal"
            }
          }
        }
      ]
    }
  ]
};

module.exports = home;
