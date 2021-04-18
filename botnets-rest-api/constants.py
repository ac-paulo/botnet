OS_NAME = ['linux', 'windows']
ARCH = ['x64', 'x86']
PREFIX_DISPLAY_NAME = [
    'Nuvatexa', 'Rayfyofu', 'Onbureun', 'Siaquimi', 'Zetoafau', 'Geobaoku', 'Hyeiraln', 'Unmixupi', 'Byugyego',
    'Cevoiszi', 'Hanuonna', 'Tifulowu', 'Sicetuke', 'Woaswuor', 'Duigeyxi', 'Leiwefil', 'Cuakyoru', 'Pougipuy',
    'Sioarwen', 'Poyridoi', 'Goulieka', 'Bafugube', 'Mearaymo', 'Limugeys', 'Fiocouhu', 'Cuozezuo', 'Seypaono',
    'Papatuvi', 'Deuquiru', 'Xuhusizu'
]
SUFFIX_DISPLAY_NAME = [
    'Paur', 'Unfa', 'Bapu', 'Hues', 'Wite', 'Buin', 'Bimo', 'Alwi', 'Zeto', 'Xemo', 'Pede', 'Orbe', 'Duan', 'Daor',
    'Ales', 'Magi', 'Coes', 'Waun', 'Seur', 'Famu', 'Voyr', 'Sayl', 'Fois', 'Xiun', 'Foxa', 'Nece', 'Reil', 'Gail',
    'Fios', 'Zedi'
]
MEMORY = list()
memory = 1024
for index in range(12):
    memory += 1024
    MEMORY.append(memory)
KERNEL_VERSIONS = [
    'mainline 5.12-rc7',
    'stable 5.11.15',
    'longterm 5.10.31',
    'longterm 5.4.113',
    'longterm 4.19.188',
    'longterm 4.14.231',
    'longterm 4.9.267',
    'longterm 4.4.26',
]
