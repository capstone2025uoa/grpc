# Generate gRPC code
The following command generates the gRPC code from the proto files for python.
```bash
python -m grpc_tools.protoc \
    -I=./proto \
    --python_out=./generated/python \
    --grpc_python_out=./generated/python \
    ./proto/*.proto
```
