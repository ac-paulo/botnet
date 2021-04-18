import random
import uuid
import socket
import struct
import random
import math
import datetime

from constants import OS_NAME, ARCH, KERNEL_VERSIONS, MEMORY
from constants import PREFIX_DISPLAY_NAME, SUFFIX_DISPLAY_NAME


def generate_created_at() -> str:
    return (
        (
            datetime.datetime.now() - datetime.timedelta(hours=random.randint(24, 200))
        ) - datetime.timedelta(minutes=random.randint(1, 50))
    ).strftime('%Y-%d-%m %H:%M')


def generate_uptime() -> int:
    return random.randint(10, 3000)


def generate_memory() -> int:
    return MEMORY[random.randint(0, len(MEMORY)-1)]


def generate_kernel() -> str:
    return KERNEL_VERSIONS[random.randint(0, len(KERNEL_VERSIONS)-1)]


def generate_os_name() -> str:
    return OS_NAME[random.randint(0, 1)]


def generate_arch() -> str:
    return ARCH[random.randint(0, 1)]


def generate_uuid() -> str:
    return str(uuid.uuid4())


def generate_display_name() -> str:
    return '%s-%s' % (
        SUFFIX_DISPLAY_NAME[random.randint(0, len(SUFFIX_DISPLAY_NAME) - 1)].lower(),
        PREFIX_DISPLAY_NAME[random.randint(0, len(PREFIX_DISPLAY_NAME) - 1)].lower()
    )


def get_max_ips(netmask_length, random_ips):
    netmask_ips = int(math.pow(2, 32 - netmask_length))
    if netmask_ips < random_ips:
        winner = int(math.pow(2, 32 - netmask_length))
    else:
        winner = random_ips
    return winner


def get_random_ip_in_subnet(ipv4, netmask_length):
    n = socket.inet_aton(ipv4)
    ip_bytes = struct.unpack('!i', n)[0]
    max_to_add = int(math.pow(2, 32 - netmask_length))
    to_add = random.randrange(0, max_to_add)
    ip_bytes += to_add
    and_back = struct.pack('!i', ip_bytes)
    new_ip = socket.inet_ntoa(and_back)
    return new_ip
