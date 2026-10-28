module.exports = {
  ConversionesService: {          // <service name="...">
    ConversionesPort: {           // <port name="...">
      CelsiusAFahrenheit(args) {  // <operation name="...">
        const celsius = Number(args.celsius);
        return { fahrenheit: celsius * 9 / 5 + 32 };
      },
      KilometrosAMillas(args) {
        const km = Number(args.kilometros);
        return { millas: Number((km * 0.621371).toFixed(5)) };
      },
    },
  },
};