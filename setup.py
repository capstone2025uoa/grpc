# setup.py
from setuptools import setup, find_namespace_packages

# Read version from version.txt
with open("version.txt", "r") as f:
    version = f.read().strip()

setup(
    name="compsci399-grpc",
    version=version,
    packages=find_namespace_packages(include=["generated.*"]),
    install_requires=[
        "grpcio>=1.44.0",
        "protobuf>=3.19.0"
    ],
    package_data={"": ["*.py"]},
    description='Generated gRPC Python stubs for my service',
)
