import random

from utils import generate_uuid
from utils import generate_kernel
from utils import generate_os_name
from utils import generate_arch
from utils import generate_display_name
from utils import get_random_ip_in_subnet
from utils import generate_memory
from utils import generate_uptime
from utils import generate_created_at


def make_botnets():
    return [
        {
            'uuid': generate_uuid(),
            'displayName': generate_display_name(),
            'ipv4': get_random_ip_in_subnet('172.16.0.0 12', 12),
            'arch': generate_arch(),
            'osName': generate_os_name(),
            'kernel': generate_kernel(),
            'memory': generate_memory(),
            'exe': '',
            'uptime': generate_uptime(),
            'created_at': generate_created_at(),
            'status': True if random.randint(0, 1) == 0 else False
        } for index in range(10)
    ]
