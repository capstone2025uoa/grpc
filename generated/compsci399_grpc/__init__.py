# Automatically import all protobuf generated modules
import os
import glob
import importlib
import sys

# Get the directory containing this __init__.py file
current_dir = os.path.dirname(os.path.abspath(__file__))

# Find all *_pb2.py and *_pb2_grpc.py files in the current directory
proto_files = glob.glob(os.path.join(current_dir, "*_pb2*.py"))
proto_modules = [os.path.basename(f)[:-3] for f in proto_files]  # Remove .py extension

# Import each module and add all its contents to this package's namespace
for module_name in sorted(proto_modules):
    if module_name != "__init__":
        # Import the module
        module = importlib.import_module(f".{module_name}", package=__name__.rpartition('.')[0])
        
        # Add all its contents to this package's namespace
        for attr_name in dir(module):
            if not attr_name.startswith('_'):  # Skip private attributes
                globals()[attr_name] = getattr(module, attr_name)

# Print a debug message about what was imported (for troubleshooting)
print(f"Imported GRPC modules: {', '.join(proto_modules)}", file=sys.stderr)
