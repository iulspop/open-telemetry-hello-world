const opentelemetry = require('@opentelemetry/sdk-node')
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node')

const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http')

const traceExporter = new OTLPTraceExporter({
  url: 'http://localhost:8080/r/MP6Whwcb',
})

const sdk = new opentelemetry.NodeSDK({
  traceExporter,
  // traceExporter: new opentelemetry.tracing.ConsoleSpanExporter(),
  instrumentations: [getNodeAutoInstrumentations()],
})

sdk
  .start()
  .then(() => console.log('Tracing initialized'))
  .catch(error => console.log('Error initializing tracing', error))

/*

Why isn't requestbin receiving requests from instrumentation?

- Because it's not a OpenTel collector so instrumentation agent refuses to connect?
- No schema so it won't send the network request?
- Some silent error I'm no seeing?

Possible path to a solution:
- Find in-depth guide on Exporter that elucidates what goes wrong?
    - from a vendor?
- Find some user group/community to ask questions.

Ask Chris to connect us with someone experienced with OpenTel to ask questions?

*/
