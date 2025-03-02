# setup.py
from setuptools import setup, find_packages
import os

# Read version from version.txt
with open("version.txt", "r") as f:
    version = f.read().strip()

setup(
    name="compsci399-grpc",
    version=version,
    packages=["compsci399_grpc"],
    package_dir={"compsci399_grpc": "generated/compsci399_grpc"},
    install_requires=[
        "grpcio>=1.44.0",
        "protobuf>=3.19.0"
    ],
    package_data={"compsci399_grpc": ["*.py"]},
    description='Generated gRPC Python stubs for my service',
)
