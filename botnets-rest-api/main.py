from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from make import make_botnets

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4200",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Botnet(BaseModel):
    uuid: str
    displayName: str
    ipv4: str
    arch: str
    osName: str
    kernel: str
    memory: int
    exe: str
    uptime: int
    created_at: str
    status: bool


BOTNETS = [Botnet(**raw_botnet) for raw_botnet in make_botnets()]


@app.get("/")
def read_root():
    return BOTNETS


@app.get("/botnets/{botnet_id}")
def read_botnet(botnet_id: int, q: Optional[str] = None):
    return {"botnet_id": botnet_id, "q": q}


@app.put("/botnets/{botnet_id}")
def update_botnet(botnet_id: int, botnet: Botnet):
    return {"botnet_uuid": botnet.uuid, "botnet_id": botnet_id}
