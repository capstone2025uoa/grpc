# setup.py
from setuptools import setup, find_packages
import os
import shutil

# Read version from version.txt
with open("version.txt", "r") as f:
    version = f.read().strip()

# Move the entire compsci399_grpc directory from generated/ to the root level
source_dir = 'generated/compsci399_grpc'
target_dir = 'compsci399_grpc'

# Recreate the compsci399_grpc directory at root level
if os.path.exists(target_dir):
    # If it exists, remove it first
    shutil.rmtree(target_dir)

# Create the directory and copy files
if os.path.exists(source_dir):
    shutil.copytree(source_dir, target_dir)
    print(f"Successfully copied {source_dir} to {target_dir}")
else:
    raise FileNotFoundError(f"Source directory {source_dir} not found. Cannot build package.")

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
