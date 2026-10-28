module.exports = {
  GeometriaService: {
    GeometriaPort: {
      AreaRectangulo(args) {
        const { base, altura } = args;
        return { area: Number(base) * Number(altura) };
      },
      PerimetroRectangulo(args) {
        const { base, altura } = args;
        return { perimetro: 2 * (Number(base) + Number(altura)) };
      },
    },
  },
};