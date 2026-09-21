exports.handler = async () => ({
  statusCode: 200,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify({ epochMs: Date.now(), iso: new Date().toISOString(), zone: 'UTC/Zulu' })
});
