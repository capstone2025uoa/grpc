# setup.py
from setuptools import setup, find_packages
import os
import shutil

# Read version from version.txt
with open("version.txt", "r") as f:
    version = f.read().strip()

# Create a local compsci399_grpc package by copying files from generated directory
if not os.path.exists('compsci399_grpc'):
    os.makedirs('compsci399_grpc', exist_ok=True)
    # Copy all Python files from generated/compsci399_grpc to compsci399_grpc
    for file in os.listdir('generated/compsci399_grpc'):
        if file.endswith('.py'):
            shutil.copy(
                os.path.join('generated/compsci399_grpc', file),
                os.path.join('compsci399_grpc', file)
            )

setup(
    name="compsci399-grpc",
    version=version,
    packages=["compsci399_grpc"],
    install_requires=[
        "grpcio>=1.44.0",
        "protobuf>=3.19.0"
    ],
    package_data={"compsci399_grpc": ["*.py"]},
    description='Generated gRPC Python stubs for my service',
)
