# setup.py
from setuptools import setup, find_packages

setup(
    name='compsci399_grpc',
    version='0.2.0',
    packages=['compsci399_grpc'],
    package_dir={'compsci399_grpc': 'generated/compsci399_grpc'},
    install_requires=[
        'grpcio>=1.40.0',
    ],
    description='Generated gRPC Python stubs for my service',
)
