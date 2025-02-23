from setuptools import setup, find_packages

setup(
    name='my_grpc_python',     # Your package name
    version='0.1.0',           # Package version
    packages=find_packages(where='generated/python'),  # Search for packages inside that folder
    package_dir={'': 'generated/python'},              # Tell setuptools where our package code lives
    install_requires=[
        'grpcio>=1.40.0',
    ],
    description='Generated gRPC Python stubs for my service',
)