# Compsci399Grpc

This package contains auto-generated gRPC client stubs for use with the COMPSCI399 services.

## Installation

```bash
dotnet add package Compsci399Grpc
```

## Usage

```csharp
using Compsci399Grpc;
using Grpc.Net.Client;

// Create a gRPC channel
using var channel = GrpcChannel.ForAddress("https://your-grpc-service-url");

// Create a client for the specific service you want to use
// Example for a Greeter service:
var client = new Greeter.GreeterClient(channel);

## Available Services


## Version History

- 1.0.10: Current release

## License

MIT
