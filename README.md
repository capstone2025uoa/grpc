# COMPSCI399 gRPC Client Stubs

This repository contains auto-generated client stubs for the COMPSCI399 gRPC services.

## Available Packages

All packages share the same version number, currently: **1.0.2**

### Node.js / TypeScript Package

[![npm version](https://badge.fury.io/js/@capstone2025uoa%2Fgrpc-client.svg)](https://badge.fury.io/js/@capstone2025uoa%2Fgrpc-client)

```bash
npm install @capstone2025uoa/grpc-client
# or
yarn add @capstone2025uoa/grpc-client
```

#### TypeScript Usage

```typescript
import { grpc } from '@grpc/grpc-js';
import { user, product, greeter } from '@capstone2025uoa/grpc-client';

// Create a request
const request = new user.GetUserRequest();
request.setId(123);

// Create a client
// Note: You'll need to use the service client from your service-specific gRPC client file
// This is just an example
const client = new UserServiceClient('localhost:50051', 
  grpc.credentials.createInsecure());

// Make a call
client.getUser(request, (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`User name: ${response.getName()}`);
  console.log(`User email: ${response.getEmail()}`);
});
```

### C# / .NET Package

[![NuGet version](https://badge.fury.io/nu/Compsci399Grpc.svg)](https://badge.fury.io/nu/Compsci399Grpc)

```bash
dotnet add package Compsci399Grpc
```

#### C# Usage

```csharp
using Compsci399Grpc;
using Grpc.Net.Client;

// Create a gRPC channel
using var channel = GrpcChannel.ForAddress("https://your-grpc-service-url");

// Create a client for the specific service you want to use
var client = new User.UserClient(channel);

// Make requests to the service
var reply = await client.GetUserAsync(new GetUserRequest { Id = 123 });
Console.WriteLine($"User name: {reply.Name}");
Console.WriteLine($"User email: {reply.Email}");
```

### Python Package

```bash
pip install compsci399-grpc
```

#### Python Usage

```python
import grpc
from compsci399_grpc import user_pb2, user_pb2_grpc

# Create a gRPC channel
with grpc.insecure_channel('localhost:50051') as channel:
    # Create a client
    stub = user_pb2_grpc.UserStub(channel)
    
    # Create a request
    request = user_pb2.GetUserRequest(id=123)
    
    # Make a call
    response = stub.GetUser(request)
    print(f"User name: {response.name}")
    print(f"User email: {response.email}")
```

## Development

If you need to regenerate the client stubs, you can trigger the GitHub Actions workflow manually from the Actions tab. The workflow will automatically:

1. Generate client stubs for Python, Node.js/TypeScript, and C#
2. Package and publish the stubs to respective package repositories
3. Commit the generated files back to the repository

## Adding New Service Definitions

Add your `.proto` files to the `proto/` directory and they will automatically be included in the next generation run.

## Versioning

All packages (npm, NuGet, and PyPI) share the same version number, defined in `version.txt`. To update the version:

1. Edit the `version.txt` file
2. Commit the change
3. The CI/CD pipeline will automatically use this version for all package publications

## License

MIT